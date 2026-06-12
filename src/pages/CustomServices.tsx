import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import {
  customServices,
  customServicesCTA,
  customServicesPage,
} from '@/content/customServices'

/** Custom services — bespoke offerings beyond subscription products */
export function CustomServices() {
  return (
    <>
      <SectionContainer noAnimation className="!pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-warm">
            {customServicesPage.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {customServicesPage.headline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            {customServicesPage.subheadline}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer variant="alt" className="!pt-8">
        <div className="grid gap-6 md:grid-cols-2">
          {customServices.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.08}>
              <Card className="flex h-full flex-col">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-warm">
                  Ideal for: {service.idealFor}
                </p>
                <Button
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="mt-6 w-full sm:w-auto"
                >
                  {service.ctaLabel}
                </Button>
              </Card>
            </FadeIn>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted">
          Looking for a ready-made system?{' '}
          <Link to="/products" className="font-medium text-navy hover:text-warm">
            Browse subscription products
          </Link>
          .
        </p>
      </SectionContainer>

      <CTASection content={customServicesCTA} />
    </>
  )
}
