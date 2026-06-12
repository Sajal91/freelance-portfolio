import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import { getProducts } from '@/api/products'
import { homeCTA, homeHero, howItWorks, trustStrip } from '@/content/home'
import type { Product } from '@/types/api'

/** Home page — hero, featured products, how-it-works, trust strip, CTA */
export function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then(({ products: data }) => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  const featured = products.slice(0, 3)

  return (
    <>
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

      <SectionContainer variant="alt" size="xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Featured products</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Ready-made automation systems — subscribe and go live in days.
          </p>
        </div>
        {loading ? (
          <p className="mt-12 text-center text-sm text-muted">Loading products…</p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((product, index) => (
              <FadeIn key={product.slug} delay={index * 0.1}>
                <Card className="flex h-full flex-col">
                  <span className="text-2xl text-warm" aria-hidden="true">
                    ◈
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {product.shortDescription}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-warm">
                    Ideal for: {product.idealFor}
                  </p>
                  <Link
                    to={`/products/${product.slug}`}
                    className="mt-6 inline-flex items-center text-sm font-medium text-navy transition-colors hover:text-warm"
                  >
                    View details
                    <span className="ml-1" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </Card>
              </FadeIn>
            ))}
          </div>
        )}
      </SectionContainer>

      <SectionContainer variant="default" size="xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            From subscription to live automation in four clear steps.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => (
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

      <SectionContainer variant="alt" size="lg">
        <div className="text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">{trustStrip.headline}</h2>
          <p className="mt-3 text-sm text-muted">{trustStrip.subtext}</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {trustStrip.logos.map((logo, index) => (
            <FadeIn key={logo.name} delay={index * 0.05}>
              <div className="rounded-xl border border-border bg-surface px-6 py-4 text-sm font-semibold tracking-wide text-navy/70">
                {logo.name}
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      <CTASection content={homeCTA} />
    </>
  )
}
