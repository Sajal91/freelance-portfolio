import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'
import { getPageMeta, renderHeadMeta } from './lib/seo'

export interface RenderResult {
  html: string
  head: string
  status: number
}

/** Server-side render for a given URL */
export function render(url: string): RenderResult {
  const meta = getPageMeta(url)

  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )

  return {
    html,
    head: renderHeadMeta(meta),
    status: meta.status,
  }
}
