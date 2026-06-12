import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { createBillingPortalSession, getMySubscriptions } from '@/api/subscriptions'
import { useAuth } from '@/context/AuthContext'
import { ApiClientError } from '@/api/client'
import type { Subscription } from '@/types/api'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function statusLabel(status: string) {
  return status.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

/** Dashboard — subscriptions, billing portal, account info */
export function Dashboard() {
  const { user, logout } = useAuth()
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const [loading, setLoading] = useState(true)
  const [billingLoading, setBillingLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getMySubscriptions()
      .then(({ subscriptions: data }) => setSubscriptions(data))
      .catch(() => setSubscriptions([]))
      .finally(() => setLoading(false))
  }, [])

  async function handleBillingPortal() {
    setBillingLoading(true)
    setError(null)
    try {
      const { url } = await createBillingPortalSession()
      window.location.href = url
    } catch (err) {
      setError(err instanceof ApiClientError ? err.message : 'Unable to open billing portal.')
      setBillingLoading(false)
    }
  }

  return (
    <>
      <SectionContainer noAnimation className="!pb-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-warm">Dashboard</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">Welcome, {user?.name}</h1>
            <p className="mt-4 text-muted">Manage your subscriptions and account.</p>
          </div>
          <Button variant="secondary" onClick={() => logout()}>
            Log out
          </Button>
        </div>
      </SectionContainer>

      <SectionContainer variant="alt" className="!pt-8">
        {error && (
          <p className="mb-6 rounded-lg border border-warm/30 bg-cream px-4 py-3 text-sm text-charcoal">
            {error}
          </p>
        )}

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-xl font-semibold">Active subscriptions</h2>
            {loading ? (
              <p className="mt-4 text-sm text-muted">Loading subscriptions…</p>
            ) : subscriptions.length === 0 ? (
              <Card hover={false} className="mt-6">
                <p className="text-sm text-muted">You have no active subscriptions yet.</p>
                <Button to="/products" className="mt-4">
                  Browse Products
                </Button>
              </Card>
            ) : (
              <div className="mt-6 space-y-4">
                {subscriptions.map((sub, index) => (
                  <FadeIn key={sub._id} delay={index * 0.05}>
                    <Card hover={false}>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold">
                            {sub.productName ?? sub.productSlug} · {sub.tier}
                          </h3>
                          <p className="mt-1 text-sm text-muted">
                            Status: {statusLabel(sub.status)}
                            {sub.currentPeriodEnd && (
                              <> · Renews {formatDate(sub.currentPeriodEnd)}</>
                            )}
                          </p>
                        </div>
                        <Link
                          to={`/products/${sub.productSlug}`}
                          className="text-sm font-medium text-navy hover:text-warm"
                        >
                          View product →
                        </Link>
                      </div>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <Card hover={false}>
                <h2 className="text-lg font-semibold">Billing</h2>
                <p className="mt-3 text-sm text-muted">
                  Update payment method, view invoices, or cancel subscriptions via Stripe.
                </p>
                <Button
                  className="mt-6 w-full"
                  variant="secondary"
                  onClick={handleBillingPortal}
                  disabled={billingLoading}
                >
                  {billingLoading ? 'Opening…' : 'Manage Billing'}
                </Button>
              </Card>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Card hover={false}>
                <h2 className="text-lg font-semibold">Account</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-muted">Name</dt>
                    <dd className="font-medium text-charcoal">{user?.name}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Email</dt>
                    <dd className="font-medium text-charcoal">{user?.email}</dd>
                  </div>
                </dl>
              </Card>
            </FadeIn>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
