import type { Response } from 'express'
import { Product } from '../models/Product.js'
import { Subscription } from '../models/Subscription.js'
import type { AuthRequest } from '../middleware/auth.js'

export async function getMySubscriptions(req: AuthRequest, res: Response) {
  if (!req.user) {
    res.status(401).json({ message: 'Authentication required' })
    return
  }

  const subscriptions = await Subscription.find({
    userId: req.user._id,
    status: { $in: ['active', 'trialing', 'past_due'] },
  }).sort({ createdAt: -1 })

  const products = await Product.find({
    slug: { $in: subscriptions.map((s) => s.productSlug) },
  })
  const productMap = new Map(products.map((p) => [p.slug, p.name]))

  res.json({
    subscriptions: subscriptions.map((sub) => ({
      _id: sub._id.toString(),
      productSlug: sub.productSlug,
      productName: productMap.get(sub.productSlug),
      tier: sub.tier,
      status: sub.status,
      currentPeriodEnd: sub.currentPeriodEnd?.toISOString(),
    })),
  })
}
