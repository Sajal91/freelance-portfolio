import Stripe from 'stripe'
import { env, isStripeConfigured } from '../config/env.js'

let stripe: Stripe | null = null

export function getStripe(): Stripe | null {
  if (!isStripeConfigured()) return null

  if (!stripe) {
    stripe = new Stripe(env.stripeSecretKey)
  }

  return stripe
}

export function assertStripeConfigured(): Stripe {
  const client = getStripe()
  if (!client) {
    throw new Error(
      'Stripe is not configured. Add STRIPE_SECRET_KEY to server/.env and create Price IDs in Stripe Dashboard.',
    )
  }
  return client
}
