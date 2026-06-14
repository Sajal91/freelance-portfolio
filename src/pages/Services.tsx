import { FadeIn } from '@/components/animation/FadeIn'
import { ServiceCard } from '@/components/services/ServiceCard'
import { PageBanner } from '@/components/ui/PageBanner'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import type { ServiceDetail } from '@/types/content'
import { featuredServices, otherServices, servicesCTA, servicesPage } from '@/content/services'
import serviceBg from '@/assets/services-bg.webp'

function ServiceDetailContent({ service }: { service: ServiceDetail }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
      <div>
        <h2 className="text-2xl font-semibold md:text-3xl">{service.title}</h2>
        <p className="mt-4 leading-relaxed text-muted">{service.description}</p>

        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">Ideal for</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal">{service.idealFor}</p>
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
          <p className="mt-2 text-xs leading-relaxed text-muted">{service.pricing.note}</p>
        )}
      </div>
    </div>
  )
}

/** Services page - detailed breakdown of each offering */
export function Services() {
  return (
    <>
      <PageBanner
        image={serviceBg}
        eyebrow={servicesPage.eyebrow}
        headline={servicesPage.headline}
        subheadline={servicesPage.subheadline}
      />

      <SectionContainer variant="alt" className="" noAnimation>
        <div className="space-y-8">
          {featuredServices.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.08}>
              <ServiceCard featured>
                <ServiceDetailContent service={service} />
              </ServiceCard>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl text-center font-semibold tracking-tight md:text-3xl">More services</h2>
          <p className="mt-3 max-w-2xl text-muted text-center mx-auto">
            Additional offerings to round out your product - from mobile apps to dedicated backend
            work.
          </p>
          <div className="mt-8 space-y-8">
            {otherServices.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.08}>
                <ServiceCard>
                  <ServiceDetailContent service={service} />
                </ServiceCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionContainer>

      <CTASection content={servicesCTA} />
    </>
  )
}
