import type { Request, Response } from 'express'
import { Product } from '../models/Product.js'

export async function listProducts(_req: Request, res: Response) {
  const products = await Product.find().sort({ name: 1 })
  res.json({ products })
}

export async function getProductBySlug(req: Request, res: Response) {
  const product = await Product.findOne({ slug: req.params.slug })

  if (!product) {
    res.status(404).json({ message: 'Product not found' })
    return
  }

  res.json({ product })
}
