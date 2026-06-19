import { aboutPage } from '@/content/about'
import { caseStudies, caseStudiesPage, getCaseStudyBySlug } from '@/content/caseStudies'
import { contactPage } from '@/content/contact'
import { servicesPage } from '@/content/services'
import { siteConfig } from '@/content/site'

export interface PageMeta {
  title: string
  description: string
  canonical: string
  status: number
}

const defaultDescription =
  'The Automation Hub - full-stack development and AI automation for Indian startups and MSMEs. Custom web apps, dashboards, and workflow systems - based in India, priced in INR.'

function normalizePathname(url: string): string {
  const pathname = new URL(url, siteConfig.url).pathname
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname
}

/** Route-level SEO metadata injected during SSR */
export function getPageMeta(url: string): PageMeta {
  const pathname = normalizePathname(url)
  const canonical = `${siteConfig.url}${pathname === '/' ? '/' : pathname}`

  switch (pathname) {
    case '/':
      return {
        title: `${siteConfig.name} - ${siteConfig.tagline} for Indian Businesses`,
        description: defaultDescription,
        canonical,
        status: 200,
      }
    case '/about':
      return {
        title: `${aboutPage.headline} | ${siteConfig.name}`,
        description: aboutPage.subheadline,
        canonical,
        status: 200,
      }
    case '/services':
      return {
        title: `${servicesPage.headline} | ${siteConfig.name}`,
        description: servicesPage.subheadline,
        canonical,
        status: 200,
      }
    case '/case-studies':
      return {
        title: `${caseStudiesPage.headline} | ${siteConfig.name}`,
        description: caseStudiesPage.subheadline,
        canonical,
        status: 200,
      }
    case '/contact':
      return {
        title: `${contactPage.headline} | ${siteConfig.name}`,
        description: contactPage.subheadline,
        canonical,
        status: 200,
      }
    default: {
      const caseStudyMatch = pathname.match(/^\/case-studies\/([^/]+)$/)
      if (caseStudyMatch) {
        const study = getCaseStudyBySlug(caseStudyMatch[1])
        if (study) {
          return {
            title: `${study.title} | ${siteConfig.name}`,
            description: study.summary,
            canonical,
            status: 200,
          }
        }
        return {
          title: `Page Not Found | ${siteConfig.name}`,
          description: defaultDescription,
          canonical,
          status: 404,
        }
      }

      return {
        title: `Page Not Found | ${siteConfig.name}`,
        description: defaultDescription,
        canonical,
        status: 404,
      }
    }
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

/** HTML fragment for SSR head injection */
export function renderHeadMeta(meta: PageMeta): string {
  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(meta.canonical)}" />`,
    `<meta property="og:type" content="website" />`,
  ].join('\n    ')
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

/** Sync document head after client-side route changes */
export function applyPageMeta(meta: PageMeta) {
  document.title = meta.title
  upsertMeta('name', 'description', meta.description)
  upsertCanonical(meta.canonical)
  upsertMeta('property', 'og:site_name', siteConfig.name)
  upsertMeta('property', 'og:title', meta.title)
  upsertMeta('property', 'og:description', meta.description)
  upsertMeta('property', 'og:url', meta.canonical)
  upsertMeta('property', 'og:type', 'website')
}

/** Known static routes for prerender hints / sitemap alignment */
export const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/case-studies',
  '/contact',
  ...caseStudies.map((study) => `/case-studies/${study.slug}`),
]
