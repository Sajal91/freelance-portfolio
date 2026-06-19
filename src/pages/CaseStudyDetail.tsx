import { Link, useParams } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import { CaseStudyBadges } from '@/components/case-studies/CaseStudyBadges'
import { getCaseStudyBySlug } from '@/content/caseStudies'
import { defaultCTA } from '@/content/site'
import { NotFound } from '@/pages/NotFound'

/** Individual case study - Problem → Process → Solution → Result */
export function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseStudyBySlug(slug) : undefined

  if (!study) {
    return <NotFound variant="case-study" />
  }

  return (
    <>
      {/* Header */}
      <SectionContainer noAnimation className="pb-8!">
        <Link
          to="/case-studies"
          className="inline-flex items-center text-sm text-muted transition-colors hover:text-navy"
        >
          ← Back to Case Studies
        </Link>
        <div className="mt-6">
          <CaseStudyBadges tags={study.tags} highlight={study.highlight} />
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {study.title}
        </h1>
        <p className="mt-4 text-muted">
          {study.industry} · {study.client}
        </p>
      </SectionContainer>

      {/* Key metrics */}
      <SectionContainer variant="alt" className="py-12!">
        <div className="grid gap-6 sm:grid-cols-3">
          {study.metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 0.1}>
              <div className="text-center">
                <p className="font-heading text-3xl font-semibold text-navy md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-muted">{metric.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      {/* Problem */}
      <SectionContainer>
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-warm">Problem</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal">{study.problem}</p>
          </div>
        </FadeIn>
      </SectionContainer>

      {/* Process */}
      <SectionContainer variant="alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-warm">Process</h2>
          <ol className="mt-8 space-y-6">
            {study.process.map((step, index) => (
              <FadeIn key={step} delay={index * 0.08}>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-medium text-cream">
                    {index + 1}
                  </span>
                  <p className="pt-1 leading-relaxed text-charcoal">{step}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </SectionContainer>

      {/* Solution */}
      <SectionContainer>
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-warm">Solution</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal">{study.solution}</p>
          </div>
        </FadeIn>
      </SectionContainer>

      {/* Results */}
      <SectionContainer variant="alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-warm">Results</h2>
          <div className="mt-8 grid gap-4">
            {study.results.map((result, index) => (
              <FadeIn key={result} delay={index * 0.08}>
                <Card hover={false} className="p-5!">
                  <p className="leading-relaxed text-charcoal">{result}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionContainer>

      <CTASection content={defaultCTA} />
    </>
  )
}
