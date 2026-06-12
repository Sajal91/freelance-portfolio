import { useEffect, useState } from 'react'
import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import { getProducts } from '@/api/products'
import type { Product } from '@/types/api'

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
}

/** Unified pricing comparison across all products */
export function Pricing() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then(({ products: data }) => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  const tierNames = ['Starter', 'Pro', 'Agency']

  return (
    <>
      <SectionContainer noAnimation className="!pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-warm">Pricing</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Simple tiers across all products
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            Compare Starter, Pro, and Agency plans. Each product follows the same tier structure —
            pick what fits your volume and team size.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer variant="alt" className="!pt-8">
        {loading ? (
          <p className="text-center text-sm text-muted">Loading pricing…</p>
        ) : products.length === 0 ? (
          <p className="text-center text-sm text-muted">No pricing data available.</p>
        ) : (
          <div className="space-y-12">
            {products.map((product, productIndex) => (
              <FadeIn key={product.slug} delay={productIndex * 0.08}>
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold">{product.name}</h2>
                      <p className="mt-2 max-w-2xl text-sm text-muted">{product.shortDescription}</p>
                    </div>
                    <Button to={`/products/${product.slug}`} variant="secondary" size="sm">
                      View details
                    </Button>
                  </div>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 pr-4 font-medium text-muted">Tier</th>
                          {tierNames.map((name) => (
                            <th key={name} className="px-4 py-3 font-semibold text-navy">
                              {name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-4 pr-4 font-medium text-muted">Price / month</td>
                          {tierNames.map((name) => {
                            const tier = product.pricingTiers.find((t) => t.name === name)
                            return (
                              <td
                                key={name}
                                className={`px-4 py-4 font-heading text-lg font-semibold ${
                                  tier?.recommended ? 'text-warm' : 'text-navy'
                                }`}
                              >
                                {tier ? formatPrice(tier.price) : '—'}
                              </td>
                            )
                          })}
                        </tr>
                        <tr>
                          <td className="py-4 pr-4 align-top font-medium text-muted">Key features</td>
                          {tierNames.map((name) => {
                            const tier = product.pricingTiers.find((t) => t.name === name)
                            return (
                              <td key={name} className="px-4 py-4 align-top">
                                {tier ? (
                                  <ul className="space-y-2">
                                    {tier.features.map((f) => (
                                      <li key={f} className="text-charcoal">
                                        {f}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  '—'
                                )}
                              </td>
                            )
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </SectionContainer>

      <SectionContainer>
        <Card className="mx-auto max-w-2xl text-center" hover={false}>
          <h2 className="text-2xl font-semibold">Need something custom?</h2>
          <p className="mt-4 text-muted">
            If your workflow does not fit our subscription products, we build bespoke automation
            systems and full-stack applications from scratch.
          </p>
          <Button to="/custom-services" className="mt-6">
            Explore Custom Services
          </Button>
        </Card>
      </SectionContainer>

      <CTASection
        content={{
          headline: 'Ready to subscribe?',
          subtext: 'Pick a product, choose your tier, and go live in days.',
          primaryLabel: 'Browse Products',
          primaryPath: '/products',
          secondaryLabel: 'Contact Us',
          secondaryPath: '/contact',
        }}
      />
    </>
  )
}
