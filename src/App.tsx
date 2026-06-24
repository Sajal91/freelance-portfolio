import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import { CaseStudies } from '@/pages/CaseStudies'
import { CaseStudyDetail } from '@/pages/CaseStudyDetail'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { PrivacyPolicy } from '@/pages/PrivacyPolicy'
import { NotFound } from '@/pages/NotFound'

/** Shared route tree used by both client hydration and SSR */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
