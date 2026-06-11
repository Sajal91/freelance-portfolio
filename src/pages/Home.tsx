import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import {
  featuredCaseStudies,
  homeCTA,
  homeHero,
  serviceHighlights,
  trustStrip,
} from '@/content/home'

/** Home page — hero, services preview, case studies, trust strip, CTA */
export function Home() {
  return (
    <>
      {/* Hero */}
      <SectionContainer noAnimation variant="default" className="!pb-12 md:!pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-warm">
              {homeHero.eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight text-navy md:text-5xl lg:text-[3.25rem]">
              {homeHero.headline}
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
        </div>
      </SectionContainer>

      {/* Service highlights */}
      <SectionContainer variant="alt" size="xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What I help with</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Three core areas — each scoped clearly, delivered with a process you can follow.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <Card className="flex h-full flex-col">
                <span className="text-2xl text-warm" aria-hidden="true">
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
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Featured work</h2>
            <p className="mt-4 max-w-xl text-muted">
              Recent projects with measurable outcomes — problem, process, and result.
            </p>
          </div>
          <Button to="/case-studies" variant="secondary" size="sm">
            View all case studies
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredCaseStudies.map((study, index) => (
            <FadeIn key={study.slug} delay={index * 0.1}>
              <Link to={`/case-studies/${study.slug}`} className="block h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-cream-dark px-3 py-1 text-xs font-medium text-charcoal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
              <div className="rounded-xl border border-border bg-surface px-6 py-4 text-sm font-semibold tracking-wide text-navy/70 transition-colors hover:border-navy/20 hover:text-navy">
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
