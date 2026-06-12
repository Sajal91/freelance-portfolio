import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { getProducts } from '@/api/products'
import { useSubscribe } from '@/hooks/useSubscribe'
import type { Product } from '@/types/api'

/** Products listing — grid of all automation products */
export function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { subscribe, loadingTier, error } = useSubscribe()

  useEffect(() => {
    getProducts()
      .then(({ products: data }) => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <SectionContainer noAnimation className="!pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-warm">Products</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Automation products, ready to subscribe
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            Pick a system that matches your workflow. Each product includes onboarding, integrations,
            and ongoing support.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer variant="alt" className="!pt-8">
        {error && (
          <p className="mb-6 rounded-lg border border-warm/30 bg-cream px-4 py-3 text-sm text-charcoal">
            {error}
          </p>
        )}
        {loading ? (
          <p className="text-center text-sm text-muted">Loading products…</p>
        ) : products.length === 0 ? (
          <p className="text-center text-sm text-muted">
            No products available yet. Run the server seed script to populate products.
          </p>
        ) : (
          <div className="grid gap-8">
            {products.map((product, index) => (
              <FadeIn key={product.slug} delay={index * 0.08}>
                <Card className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-warm">
                      Ideal for: {product.idealFor}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{product.name}</h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                      {product.shortDescription}
                    </p>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {product.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex gap-2 text-sm text-charcoal">
                          <span className="text-warm">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Button to={`/products/${product.slug}`} variant="secondary">
                      View Details
                    </Button>
                    {product.pricingTiers[0] && (
                      <Button
                        onClick={() => subscribe(product.slug, product.pricingTiers[0].name)}
                        disabled={loadingTier === product.pricingTiers[0].name}
                      >
                        {loadingTier === product.pricingTiers[0].name
                          ? 'Redirecting…'
                          : 'Subscribe'}
                      </Button>
                    )}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        )}
        <p className="mt-10 text-center text-sm text-muted">
          Compare all tiers on the{' '}
          <Link to="/pricing" className="font-medium text-navy hover:text-warm">
            pricing page
          </Link>
          .
        </p>
      </SectionContainer>
    </>
  )
}
