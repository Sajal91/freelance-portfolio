import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: isSsrBuild
    ? [react(), tailwindcss()]
    : [
        react(),
        tailwindcss(),
        sitemap({
          hostname: 'https://www.theautomationhub.in',
          outDir: 'dist/client',
          generateRobotsTxt: false,
          dynamicRoutes: [
            '/about',
            '/services',
            '/case-studies',
            '/case-studies/social-media-automation-agent',
            '/case-studies/ai-design-automation-platform',
            '/case-studies/pushup-crew-app',
            '/contact',
            '/privacy-policy',
          ],
        }),
      ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: isSsrBuild
    ? {
        outDir: 'dist/server',
        rollupOptions: {
          input: 'src/entry-server.tsx',
        },
      }
    : {
        outDir: 'dist/client',
      },
  ssr: {
    noExternal: ['react-router-dom'],
  },
}))
