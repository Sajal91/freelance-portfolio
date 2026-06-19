import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { scheduleGoogleAnalytics, trackPageView } from '@/lib/analytics'

/** Deferred Google Analytics loader with SPA page-view tracking */
export function GoogleAnalytics() {
  const { pathname, search } = useLocation()
  const hasScheduled = useRef(false)

  useEffect(() => {
    if (hasScheduled.current) return
    hasScheduled.current = true
    scheduleGoogleAnalytics()
  }, [])

  useEffect(() => {
    trackPageView(`${pathname}${search}`)
  }, [pathname, search])

  return null
}
