import type { PricingTier } from '@/types/api'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

interface PricingTableProps {
  tiers: PricingTier[]
  onSubscribe?: (tierName: string) => void
  subscribeLoading?: string | null
  compact?: boolean
}

function formatPrice(price: number, interval: PricingTier['billingInterval']) {
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
  return `${formatted}/${interval}`
}

/** Tier comparison cards with recommended highlight */
export function PricingTable({
  tiers,
  onSubscribe,
  subscribeLoading,
  compact = false,
}: PricingTableProps) {
  return (
    <div className={`grid gap-6 ${compact ? 'md:grid-cols-3' : 'lg:grid-cols-3'}`}>
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          hover={!tier.recommended}
          className={`relative flex h-full flex-col ${
            tier.recommended
              ? 'border-warm/40 shadow-[0_12px_40px_-12px_rgba(196,133,90,0.25)] ring-1 ring-warm/20'
              : ''
          }`}
        >
          {tier.recommended && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-warm px-3 py-1 text-xs font-semibold text-cream">
              Recommended
            </span>
          )}
          <h3 className="text-xl font-semibold">{tier.name}</h3>
          <p className="mt-2 font-heading text-3xl font-semibold text-navy">
            {formatPrice(tier.price, tier.billingInterval)}
          </p>
          <ul className="mt-6 flex-1 space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-charcoal">
                <span className="text-warm" aria-hidden="true">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
          {onSubscribe && (
            <Button
              className="mt-8 w-full"
              variant={tier.recommended ? 'primary' : 'secondary'}
              onClick={() => onSubscribe(tier.name)}
              disabled={subscribeLoading === tier.name}
            >
              {subscribeLoading === tier.name ? 'Redirecting…' : 'Subscribe'}
            </Button>
          )}
        </Card>
      ))}
    </div>
  )
}
