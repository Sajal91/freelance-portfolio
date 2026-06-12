import type { Response } from 'express'
import { User } from '../models/User.js'
import { assertStripeConfigured } from '../services/stripe.service.js'
import { env, isStripeConfigured } from '../config/env.js'
import type { AuthRequest } from '../middleware/auth.js'

export async function createBillingPortalSession(req: AuthRequest, res: Response) {
  if (!isStripeConfigured()) {
    res.status(503).json({
      message: 'Stripe is not configured yet. Add STRIPE_SECRET_KEY to server/.env.',
    })
    return
  }

  if (!req.user) {
    res.status(401).json({ message: 'Authentication required' })
    return
  }

  const user = await User.findById(req.user._id)

  if (!user?.stripeCustomerId) {
    res.status(400).json({ message: 'No billing account found. Subscribe to a product first.' })
    return
  }

  const stripe = assertStripeConfigured()
  const session = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: `${env.clientUrl}/dashboard`,
  })

  res.json({ url: session.url })
}
