import type { Response } from 'express'
import { Product } from '../models/Product.js'
import { User } from '../models/User.js'
import { assertStripeConfigured } from '../services/stripe.service.js'
import { env, isStripeConfigured } from '../config/env.js'
import type { AuthRequest } from '../middleware/auth.js'

export async function createCheckoutSession(req: AuthRequest, res: Response) {
  if (!isStripeConfigured()) {
    res.status(503).json({
      message:
        'Stripe is not configured yet. Add STRIPE_SECRET_KEY and stripePriceId values to server/.env, then run npm run seed.',
    })
    return
  }

  if (!req.user) {
    res.status(401).json({ message: 'Authentication required' })
    return
  }

  const { productSlug, tierName } = req.body as {
    productSlug?: string
    tierName?: string
  }

  if (!productSlug || !tierName) {
    res.status(400).json({ message: 'productSlug and tierName are required' })
    return
  }

  const product = await Product.findOne({ slug: productSlug })
  if (!product) {
    res.status(404).json({ message: 'Product not found' })
    return
  }

  const tier = product.pricingTiers.find((t) => t.name === tierName)
  if (!tier) {
    res.status(400).json({ message: 'Invalid pricing tier' })
    return
  }

  if (tier.stripePriceId.startsWith('price_placeholder_')) {
    res.status(503).json({
      message:
        'Stripe Price ID not configured for this tier. Replace placeholder IDs in the seed script or database with real Stripe test Price IDs.',
    })
    return
  }

  const stripe = assertStripeConfigured()
  const user = await User.findById(req.user._id)

  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }

  let customerId = user.stripeCustomerId

  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      metadata: { userId: user._id.toString() },
    })
    customerId = customer.id
    user.stripeCustomerId = customerId
    await user.save()
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    customer: customerId,
    line_items: [{ price: tier.stripePriceId, quantity: 1 }],
    success_url: `${env.clientUrl}/dashboard?checkout=success`,
    cancel_url: `${env.clientUrl}/products/${productSlug}`,
    metadata: {
      userId: user._id.toString(),
      productSlug: product.slug,
      tierName: tier.name,
    },
  })

  if (!session.url) {
    res.status(500).json({ message: 'Failed to create checkout session' })
    return
  }

  res.json({ url: session.url })
}
