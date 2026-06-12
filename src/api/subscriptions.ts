import { apiFetch } from '@/api/client'
import type { Subscription } from '@/types/api'

export async function getMySubscriptions() {
  return apiFetch<{ subscriptions: Subscription[] }>('/api/subscriptions/me')
}

export async function createCheckoutSession(productSlug: string, tierName: string) {
  return apiFetch<{ url: string }>('/api/checkout/create-session', {
    method: 'POST',
    body: JSON.stringify({ productSlug, tierName }),
  })
}

export async function createBillingPortalSession() {
  return apiFetch<{ url: string }>('/api/billing/portal', { method: 'POST' })
}
