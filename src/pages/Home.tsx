import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import { caseStudies } from '@/content/caseStudies'
import { homeCTA, homeHero, serviceHighlights, trustStrip } from '@/content/home'
import { CaseStudyBadges } from '@/components/case-studies/CaseStudyBadges'

/** Gradient fills for service icon tiles - warm, on-brand accent stops */
const serviceTileGradients = [
  'bg-[linear-gradient(135deg,#e79a8f_0%,#c4855a_100%)]',
  'bg-[linear-gradient(135deg,#7fa8c9_0%,#4f7ba3_100%)]',
  'bg-[linear-gradient(135deg,#e6b566_0%,#c4855a_100%)]',
  'bg-[linear-gradient(135deg,#9a8fc4_0%,#6f639e_100%)]',
]

/** Home page - hero, services preview, case studies, trust strip, CTA */
export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-wash">
        {/* Decorative gradient blobs for realistic depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-warm-light/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-warm/20 blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-5xl px-5 pb-16 pt-28 text-center md:px-8 md:pb-20 md:pt-36">
          <FadeIn>
            <span className="pill-announce">
              <span className="rounded-full bg-navy px-2.5 py-0.5 text-xs font-semibold text-cream">
                {homeHero.announce.badge}
              </span>
              <span className="text-charcoal/80">{homeHero.announce.text}</span>
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight text-navy md:text-5xl lg:text-[3.5rem]">
              {homeHero.headline}{' '}
              <span className="text-gradient-warm">{homeHero.headlineAccent}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {homeHero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to={homeHero.ctaPrimary.path} size="lg">
                {homeHero.ctaPrimary.label}
              </Button>
              <Button to={homeHero.ctaSecondary.path} variant="secondary" size="lg">
                {homeHero.ctaSecondary.label}
              </Button>
            </div>
          </FadeIn>

          {/* Floating product-preview panel with 3D-style stat chips */}
          <FadeIn delay={0.4}>
            <div className="relative mx-auto mt-14 max-w-3xl">
              <div className="relative rounded-3xl border border-border/70 bg-surface/80 p-3 shadow-float backdrop-blur-sm md:p-4">
                <div className="overflow-hidden rounded-2xl border border-border/70 bg-[linear-gradient(180deg,#ffffff_0%,#f7f3ec_100%)]">
                  {/* window chrome */}
                  <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-rose/70" />
                    <span className="h-3 w-3 rounded-full bg-amber/70" />
                    <span className="h-3 w-3 rounded-full bg-sage/70" />
                    <span className="ml-3 text-xs font-medium text-muted">
                      the-automation-hub · deploy pipeline
                    </span>
                  </div>
                  {/* pipeline rows */}
                  <div className="space-y-2.5 p-5 text-left md:p-6">
                    {[
                      { step: 'Build & bundle', state: 'Passed' },
                      { step: 'Run test suite', state: 'Passed' },
                      { step: 'AI workflow checks', state: 'Passed' },
                      { step: 'Deploy to production', state: 'Live' },
                    ].map((row) => (
                      <div
                        key={row.step}
                        className="flex items-center justify-between rounded-xl border border-border/60 bg-surface px-4 py-3 shadow-soft"
                      >
                        <span className="flex items-center gap-3 text-sm font-medium text-navy">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-sage),#6f9276)] text-xs text-white shadow-sm">
                            ✓
                          </span>
                          {row.step}
                        </span>
                        <span className="rounded-full bg-cream-dark px-3 py-1 text-xs font-semibold text-charcoal">
                          {row.state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stat chips */}
              <div className="pointer-events-none absolute -left-3 top-16 hidden rounded-2xl border border-border/70 bg-surface/90 px-4 py-3 shadow-float backdrop-blur-md md:block">
                <p className="text-lg font-semibold text-navy">{homeHero.stats[0].value}</p>
                <p className="text-xs text-muted">{homeHero.stats[0].label}</p>
              </div>
              <div className="pointer-events-none absolute -right-6 bottom-28 hidden rounded-2xl border border-border/70 bg-surface/90 px-4 py-3 shadow-float backdrop-blur-md md:block">
                <p className="text-lg font-semibold text-navy">{homeHero.stats[1].value}</p>
                <p className="text-xs text-muted">{homeHero.stats[1].label}</p>
              </div>
            </div>
          </FadeIn>

          {/* Stat row (mobile-friendly) */}
          <FadeIn delay={0.45}>
            <div className="mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-4 md:hidden">
              {homeHero.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-semibold text-navy">{stat.value}</p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service highlights */}
      <SectionContainer variant="alt" size="xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What we help with</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Core offerings - each scoped clearly, delivered with a process you can follow.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceHighlights.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <Card className="flex h-full flex-col">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl text-white shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_8px_18px_-6px_rgba(30,42,59,0.35)] ${serviceTileGradients[index % serviceTileGradients.length]}`}
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center text-sm font-medium text-navy transition-colors hover:text-warm"
                >
                  Learn more
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      {/* Featured case studies */}
      <SectionContainer variant="default" size="xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected work</h2>
            <p className="mt-4 max-w-xl text-muted">
              Recent projects with measurable outcomes - problem, process, and result.
            </p>
          </div>
          <Button to="/case-studies" variant="secondary" size="sm">
            View all case studies
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.slug} delay={index * 0.1}>
              <Link to={`/case-studies/${study.slug}`} className="block h-full">
                <Card className="flex h-full flex-col">
                  <CaseStudyBadges tags={study.tags} highlight={study.highlight} />
                  <h3 className="mt-4 text-xl font-semibold leading-snug">{study.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {study.industry} · {study.client}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal">
                    {study.summary}
                  </p>
                  <p className="mt-6 border-t border-border pt-4 text-sm font-medium text-warm">
                    {study.result}
                  </p>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      {/* Trust strip */}
      <SectionContainer variant="alt" size="lg">
        <div className="text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">{trustStrip.headline}</h2>
          <p className="mt-3 text-sm text-muted">{trustStrip.subtext}</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {trustStrip.logos.map((logo, index) => (
            <FadeIn key={logo.name} delay={index * 0.05}>
              <div className="cursor-default rounded-xl border border-border/80 bg-[linear-gradient(180deg,#ffffff_0%,#f7f3ec_100%)] px-6 py-4 text-sm font-semibold tracking-wide text-navy/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-warm/40 hover:text-navy hover:shadow-card">
                {logo.name}
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      {/* Final CTA */}
      <CTASection content={homeCTA} />
    </>
  )
}
