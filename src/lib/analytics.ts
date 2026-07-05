export const GA_MEASUREMENT_ID = 'G-D08PWLVPS5'

let scriptRequested = false

function ensureDataLayer() {
  window.dataLayer = window.dataLayer ?? []
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }
}

/** Load gtag.js after the page is interactive to avoid blocking render */
export function scheduleGoogleAnalytics() {
  if (typeof window === 'undefined' || scriptRequested || !GA_MEASUREMENT_ID) {
    return
  }

  ensureDataLayer()
  window.gtag?.('js', new Date())

  const loadScript = () => {
    if (scriptRequested) return
    scriptRequested = true

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.gtag?.('config', GA_MEASUREMENT_ID, {
      send_page_view: false,
      anonymize_ip: true,
    })
  }

  const scheduleLoad =
    typeof window.requestIdleCallback === 'function'
      ? (callback: () => void) => window.requestIdleCallback(callback, { timeout: 3500 })
      : (callback: () => void) => globalThis.setTimeout(callback, 2000)

  scheduleLoad(loadScript)
}

/** Track SPA navigations and the initial page view */
export function trackPageView(pagePath: string) {
  if (!GA_MEASUREMENT_ID) return

  ensureDataLayer()
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_path: pagePath,
  })
}
