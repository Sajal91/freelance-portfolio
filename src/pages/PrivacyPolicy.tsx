import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { privacyPolicyPage, privacyPolicySections } from '@/content/privacyPolicy'

/** Privacy policy page */
export function PrivacyPolicy() {
  return (
    <>
      <SectionContainer variant="default" size="md" className="pb-8! md:pb-10!">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-warm">
              {privacyPolicyPage.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {privacyPolicyPage.headline}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {privacyPolicyPage.subheadline}
            </p>
            <p className="mt-4 text-sm text-muted">
              Last updated: {privacyPolicyPage.lastUpdated}
            </p>
          </div>
        </FadeIn>
      </SectionContainer>

      <SectionContainer variant="alt" size="md" className="pt-0!">
        <FadeIn>
          <Card hover={false} className="space-y-4">
            {privacyPolicyPage.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed text-charcoal">
                {paragraph}
              </p>
            ))}
          </Card>
        </FadeIn>

        <div className="mt-8 space-y-6">
          {privacyPolicySections.map((section, index) => (
            <FadeIn key={section.id} delay={index * 0.04}>
              <div id={section.id} className="scroll-mt-28">
                <Card hover={false}>
                  <h2 className="text-xl font-semibold md:text-2xl">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className="leading-relaxed text-muted">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="list-disc space-y-2 pl-5 text-muted">
                        {section.bullets.map((item) => (
                          <li key={item.slice(0, 40)} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-10 text-center text-sm text-muted">
            Questions?{' '}
            <Link to="/contact" className="font-medium text-navy transition-colors hover:text-warm">
              Contact us
            </Link>
            .
          </p>
        </FadeIn>
      </SectionContainer>
    </>
  )
}
