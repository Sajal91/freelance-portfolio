import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import { caseStudies, caseStudiesPage } from '@/content/caseStudies'
import { defaultCTA } from '@/content/site'

/** Case studies list page */
export function CaseStudies() {
  return (
    <>
      <SectionContainer noAnimation className="!pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-warm">
            {caseStudiesPage.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {caseStudiesPage.headline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            {caseStudiesPage.subheadline}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer variant="alt" className="!pt-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.slug} delay={index * 0.08}>
              <Link to={`/case-studies/${study.slug}`} className="block h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-cream-dark px-3 py-1 text-xs font-medium text-charcoal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 text-lg font-semibold leading-snug">{study.title}</h2>
                  <p className="mt-2 text-sm text-muted">
                    {study.industry}
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

      <CTASection content={defaultCTA} />
    </>
  )
}
