import type { Request, Response } from 'express'
import Stripe from 'stripe'
import { Subscription } from '../models/Subscription.js'
import { User } from '../models/User.js'
import { getStripe } from '../services/stripe.service.js'
import { env } from '../config/env.js'

async function upsertSubscription(
  stripeSub: Stripe.Subscription,
  metadata: { userId?: string; productSlug?: string; tierName?: string },
) {
  const userId = metadata.userId ?? stripeSub.metadata.userId
  const productSlug = metadata.productSlug ?? stripeSub.metadata.productSlug
  const tierName = metadata.tierName ?? stripeSub.metadata.tierName

  if (!userId || !productSlug || !tierName) {
    console.warn('Subscription webhook missing metadata', stripeSub.id)
    return
  }

  const currentPeriodEnd = stripeSub.current_period_end
    ? new Date(stripeSub.current_period_end * 1000)
    : undefined

  await Subscription.findOneAndUpdate(
    { stripeSubscriptionId: stripeSub.id },
    {
      userId,
      productSlug,
      tier: tierName,
      stripeSubscriptionId: stripeSub.id,
      stripeCustomerId: String(stripeSub.customer),
      status: stripeSub.status,
      currentPeriodEnd,
    },
    { upsert: true, new: true },
  )
}

export async function handleStripeWebhook(req: Request, res: Response) {
  const stripe = getStripe()

  if (!stripe || !env.stripeWebhookSecret) {
    res.status(503).json({ message: 'Stripe webhooks not configured' })
    return
  }

  const signature = req.headers['stripe-signature']

  if (!signature || typeof signature !== 'string') {
    res.status(400).json({ message: 'Missing stripe-signature header' })
    return
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(req.body, signature, env.stripeWebhookSecret)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Webhook verification failed'
    res.status(400).json({ message })
    return
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      if (session.mode === 'subscription' && session.subscription) {
        const stripeSub = await stripe.subscriptions.retrieve(String(session.subscription))
        await upsertSubscription(stripeSub, {
          userId: session.metadata?.userId,
          productSlug: session.metadata?.productSlug,
          tierName: session.metadata?.tierName,
        })

        if (session.customer && session.metadata?.userId) {
          await User.findByIdAndUpdate(session.metadata.userId, {
            stripeCustomerId: String(session.customer),
          })
        }
      }
      break
    }
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted': {
      const stripeSub = event.data.object as Stripe.Subscription
      await upsertSubscription(stripeSub, {})
      break
    }
    default:
      break
  }

  res.json({ received: true })
}
