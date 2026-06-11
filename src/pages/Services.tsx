import { FadeIn } from '@/components/animation/FadeIn'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import { services, servicesCTA, servicesPage } from '@/content/services'

/** Services page — detailed breakdown of each offering */
export function Services() {
  return (
    <>
      {/* Page header */}
      <SectionContainer noAnimation className="!pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-warm">
            {servicesPage.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {servicesPage.headline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            {servicesPage.subheadline}
          </p>
        </div>
      </SectionContainer>

      {/* Service cards */}
      <SectionContainer variant="alt" className="!pt-8">
        <div className="space-y-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.08}>
              <Card hover={false} className="md:p-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
                  <div>
                    <h2 className="text-2xl font-semibold md:text-3xl">{service.title}</h2>
                    <p className="mt-4 leading-relaxed text-muted">{service.description}</p>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
                        Ideal for
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal">
                        {service.idealFor}
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-charcoal">
                          <span className="mt-1 text-warm" aria-hidden="true">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-border bg-cream p-6 lg:h-fit">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {service.pricing.model}
                    </p>
                    <p className="mt-2 font-heading text-3xl font-semibold text-navy">
                      From {service.pricing.from}
                    </p>
                    {service.pricing.note && (
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {service.pricing.note}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      <CTASection content={servicesCTA} />
    </>
  )
}
