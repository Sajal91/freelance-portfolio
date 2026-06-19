import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { applyPageMeta, getPageMeta } from '@/lib/seo'

/** Keeps title and meta tags in sync during client-side navigation */
export function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    applyPageMeta(getPageMeta(pathname))
  }, [pathname])

  return null
}
