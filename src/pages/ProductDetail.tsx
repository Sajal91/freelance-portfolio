import { useEffect, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { PricingTable } from '@/components/pricing/PricingTable'
import { getProduct } from '@/api/products'
import { useSubscribe } from '@/hooks/useSubscribe'
import type { Product } from '@/types/api'

/** Product detail — data-driven template for each automation product */
export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [searchParams] = useSearchParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const { subscribe, loadingTier, error } = useSubscribe()
  const checkoutTriggered = useRef(false)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    getProduct(slug)
      .then(({ product: data }) => setProduct(data))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [slug])

  useEffect(() => {
    const tier = searchParams.get('tier')
    if (tier && product && slug && !loading && !checkoutTriggered.current) {
      checkoutTriggered.current = true
      void subscribe(slug, tier)
    }
  }, [searchParams, product, slug, loading, subscribe])

  if (loading) {
    return (
      <SectionContainer>
        <p className="text-center text-sm text-muted">Loading product…</p>
      </SectionContainer>
    )
  }

  if (notFound || !product) {
    return (
      <SectionContainer>
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-3xl font-semibold">Product not found</h1>
          <p className="mt-4 text-muted">This product may have been moved or is not yet available.</p>
          <Button to="/products" className="mt-8">
            Back to Products
          </Button>
        </div>
      </SectionContainer>
    )
  }

  return (
    <>
      <SectionContainer noAnimation className="!pb-8">
        <div className="mx-auto max-w-3xl">
          <Link to="/products" className="text-sm font-medium text-muted hover:text-navy">
            ← All products
          </Link>
          <p className="mt-6 text-sm font-medium uppercase tracking-widest text-warm">
            {product.idealFor}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{product.name}</h1>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            {product.description}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer variant="alt" className="!pt-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <Card hover={false}>
              <h2 className="text-xl font-semibold">The problem</h2>
              <p className="mt-4 leading-relaxed text-muted">{product.problem}</p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card hover={false}>
              <h2 className="text-xl font-semibold">Our solution</h2>
              <p className="mt-4 leading-relaxed text-muted">{product.solution}</p>
            </Card>
          </FadeIn>
        </div>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-3xl font-semibold">Features</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {product.features.map((feature, index) => (
            <FadeIn key={feature} delay={index * 0.05}>
              <li className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-sm">
                <span className="text-warm">✓</span>
                {feature}
              </li>
            </FadeIn>
          ))}
        </ul>
      </SectionContainer>

      {product.integrations.length > 0 && (
        <SectionContainer variant="alt">
          <h2 className="text-3xl font-semibold">Integrations</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {product.integrations.map((integration) => (
              <span
                key={integration}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-charcoal"
              >
                {integration}
              </span>
            ))}
          </div>
        </SectionContainer>
      )}

      <SectionContainer>
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Pricing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Choose a tier that fits your team. Upgrade or downgrade anytime via your dashboard.
          </p>
        </div>
        {error && (
          <p className="mx-auto mt-6 max-w-2xl rounded-lg border border-warm/30 bg-cream px-4 py-3 text-sm text-charcoal">
            {error}
          </p>
        )}
        <div className="mt-12">
          <PricingTable
            tiers={product.pricingTiers}
            onSubscribe={(tierName) => slug && subscribe(slug, tierName)}
            subscribeLoading={loadingTier}
          />
        </div>
      </SectionContainer>

      {product.faq.length > 0 && (
        <SectionContainer variant="alt">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <div className="mt-8 space-y-4">
            {product.faq.map((item, index) => (
              <FadeIn key={item.question} delay={index * 0.05}>
                <Card hover={false}>
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </SectionContainer>
      )}
    </>
  )
}
