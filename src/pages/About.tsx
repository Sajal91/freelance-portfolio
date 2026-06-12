import { FadeIn } from '@/components/animation/FadeIn'
import { Card } from '@/components/ui/Card'
import { PageBanner } from '@/components/ui/PageBanner'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import { aboutCTA, aboutPage, founderStory, methodology } from '@/content/about'
import serviceBg from '@/assets/about-bg.avif'
import profilePhoto from '@/assets/dp.jpeg'

/** About page - founder story and working process */
export function About() {
  return (
    <>
      <PageBanner
        image={serviceBg}
        eyebrow={aboutPage.eyebrow}
        headline={aboutPage.headline}
        subheadline={aboutPage.subheadline}
      />

      <SectionContainer variant="alt" className="">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <FadeIn>
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border bg-cream">
              <img
                src={profilePhoto}
                alt={founderStory.name}
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">{founderStory.name}</h2>
              <p className="mt-2 text-warm">{founderStory.role}</p>
              <p className="mt-6 text-lg leading-relaxed text-charcoal">{founderStory.intro}</p>
              {founderStory.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {founderStory.highlights.map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-heading text-2xl font-semibold text-navy">{item.value}</p>
                    <p className="mt-1 text-xs text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">How I work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            A consistent process across every project - so you always know what&apos;s happening
            and what comes next.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodology.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.1}>
              <Card className="h-full">
                <span className="font-heading text-4xl font-semibold text-warm/40">
                  {String(step.step).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      <CTASection content={aboutCTA} />
    </>
  )
}
