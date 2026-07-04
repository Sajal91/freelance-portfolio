import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { caseStudyNotFound, notFoundLinks, notFoundPage } from '@/content/notFound'
import aboutBg from '@/assets/about-bg.avif'

interface NotFoundContent {
  code: string
  eyebrow: string
  headline: string
  subheadline: string
  primaryLabel: string
  primaryPath: string
  secondaryLabel: string
  secondaryPath: string
}

interface NotFoundProps {
  variant?: 'default' | 'case-study'
}

const variants: Record<NonNullable<NotFoundProps['variant']>, NotFoundContent> = {
  default: notFoundPage,
  'case-study': caseStudyNotFound,
}

/** 404 page for unknown routes and missing content */
export function NotFound({ variant = 'default' }: NotFoundProps) {
  const content = variants[variant]

  return (
    <>
      <section className="relative flex min-h-[380px] items-center overflow-hidden pt-24 md:min-h-[440px] md:pt-28">
        <img
          src={aboutBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(120deg,rgba(23,33,48,0.95)_0%,rgba(30,42,59,0.9)_45%,rgba(45,63,86,0.85)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-warm/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-6xl font-semibold tracking-tight text-warm-light md:text-7xl">
            {content.code}
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-widest text-warm-light">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-cream md:text-5xl">
            {content.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
            {content.subheadline}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to={content.primaryPath} size="lg">
              {content.primaryLabel}
            </Button>
            <Button to={content.secondaryPath} variant="secondary" size="lg">
              {content.secondaryLabel}
            </Button>
          </div>
        </div>
      </section>

      <SectionContainer variant="alt" size="md">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Popular pages</h2>
          <p className="mt-3 text-muted">Or jump straight to a section of the site.</p>
          <nav
            aria-label="Popular pages"
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {notFoundLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="rounded-full border border-border/80 bg-[linear-gradient(180deg,#ffffff_0%,#f7f3ec_100%)] px-5 py-2.5 text-sm font-medium text-navy shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-warm/40 hover:shadow-card"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SectionContainer>
    </>
  )
}
