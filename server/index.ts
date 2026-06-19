import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import express, { type NextFunction, type Request, type Response } from 'express'
import compression from 'compression'
import type { ViteDevServer } from 'vite'

interface RenderResult {
  html: string
  head: string
  status: number
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT) || 5173
const host = process.env.HOST || '0.0.0.0'

async function loadProdRenderer(): Promise<(url: string) => RenderResult> {
  const serverEntry = path.join(__dirname, '../dist/server/entry-server.js')
  const module = (await import(pathToFileURL(serverEntry).href)) as {
    render: (url: string) => RenderResult
  }
  return module.render
}

function injectDocument(template: string, head: string, html: string): string {
  const withHead = template.includes('<!--ssr-head-->')
    ? template.replace('<!--ssr-head-->', head)
    : template.replace('</head>', `  ${head}\n</head>`)

  return withHead.includes('<!--ssr-outlet-->')
    ? withHead.replace('<!--ssr-outlet-->', html)
    : withHead.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

async function createServer() {
  const app = express()
  app.use(compression())

  let vite: ViteDevServer | undefined

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite')
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    const clientDist = path.resolve(__dirname, '../dist/client')
    app.use(express.static(clientDist, { index: false }))
  }

  app.use(async (req: Request, res: Response, next: NextFunction) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      next()
      return
    }

    try {
      const url = req.originalUrl

      let template: string
      let render: (url: string) => RenderResult

      if (!isProduction && vite) {
        template = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        const serverModule = await vite.ssrLoadModule('/src/entry-server.tsx')
        render = serverModule.render
      } else {
        template = fs.readFileSync(
          path.resolve(__dirname, '../dist/client/index.html'),
          'utf-8',
        )
        render = await loadProdRenderer()
      }

      const { html, head, status } = render(url)
      const document = injectDocument(template, head, html)

      res.status(status).type('html').send(document)
    } catch (error) {
      if (vite) {
        vite.ssrFixStacktrace(error as Error)
      }
      next(error)
    }
  })

  app.listen(port, host, () => {
    console.log(`SSR server running at http://localhost:${port}`)
  })
}

createServer().catch((error) => {
  console.error(error)
  process.exit(1)
})
