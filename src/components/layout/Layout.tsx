import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageMeta } from '@/components/layout/PageMeta'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { PageTransition } from '@/components/animation/PageTransition'
import { ScrollToTop } from '@/components/animation/ScrollToTop'

/** Base layout wrapping all pages with Navbar, Footer, and route transitions */
export function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <PageMeta />
      <GoogleAnalytics />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="sync" initial={false}>
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
