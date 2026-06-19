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
      <section className="relative flex min-h-[320px] items-center overflow-hidden md:min-h-[380px]">
        <img
          src={aboutBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy/92" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
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
                className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy/30 hover:bg-cream"
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
