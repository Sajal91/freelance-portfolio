import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Card } from '@/components/ui/Card'
import { PageBanner } from '@/components/ui/PageBanner'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import { CaseStudyBadges } from '@/components/case-studies/CaseStudyBadges'
import { caseStudies, caseStudiesPage } from '@/content/caseStudies'
import { defaultCTA } from '@/content/site'
import bgImg from '@/assets/casestudy-bg.webp'

/** Case studies list page */
export function CaseStudies() {
  return (
    <>
      <PageBanner
        image={bgImg}
        eyebrow={caseStudiesPage.eyebrow}
        headline={caseStudiesPage.headline}
        subheadline={caseStudiesPage.subheadline}
      />

      <SectionContainer variant="alt" className="">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.slug} delay={index * 0.08}>
              <Link to={`/case-studies/${study.slug}`} className="block h-full">
                <Card className="flex h-full flex-col">
                  <CaseStudyBadges tags={study.tags} highlight={study.highlight} limit={3} />
                  <h2 className="mt-4 text-lg font-semibold leading-snug">{study.title}</h2>
                  <p className="mt-2 text-sm text-muted ">{study.industry}</p>
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
