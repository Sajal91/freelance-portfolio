import type { Response } from 'express'
import { Inquiry } from '../models/Inquiry.js'
import { Subscription } from '../models/Subscription.js'
import { Product } from '../models/Product.js'
import type { AuthRequest } from '../middleware/auth.js'

export async function listInquiries(_req: AuthRequest, res: Response) {
  const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(100)
  res.json({ inquiries })
}

export async function listSubscriptions(_req: AuthRequest, res: Response) {
  const subscriptions = await Subscription.find().sort({ createdAt: -1 }).limit(100)
  const products = await Product.find()
  const productMap = new Map(products.map((p) => [p.slug, p.name]))

  res.json({
    subscriptions: subscriptions.map((sub) => ({
      _id: sub._id.toString(),
      userId: sub.userId.toString(),
      productSlug: sub.productSlug,
      productName: productMap.get(sub.productSlug),
      tier: sub.tier,
      status: sub.status,
      currentPeriodEnd: sub.currentPeriodEnd?.toISOString(),
    })),
  })
}
