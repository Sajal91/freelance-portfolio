import mongoose, { Schema, type Document } from 'mongoose'

export interface IPricingTier {
  name: string
  price: number
  billingInterval: 'month' | 'year'
  stripePriceId: string
  features: string[]
  recommended?: boolean
}

export interface IProductFAQ {
  question: string
  answer: string
}

export interface IProduct extends Document {
  name: string
  slug: string
  shortDescription: string
  description: string
  problem: string
  solution: string
  features: string[]
  integrations: string[]
  idealFor: string
  pricingTiers: IPricingTier[]
  faq: IProductFAQ[]
}

const pricingTierSchema = new Schema<IPricingTier>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    billingInterval: { type: String, enum: ['month', 'year'], default: 'month' },
    stripePriceId: { type: String, required: true },
    features: [{ type: String }],
    recommended: { type: Boolean, default: false },
  },
  { _id: false },
)

const faqSchema = new Schema<IProductFAQ>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false },
)

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    problem: { type: String, required: true },
    solution: { type: String, required: true },
    features: [{ type: String }],
    integrations: [{ type: String }],
    idealFor: { type: String, required: true },
    pricingTiers: [pricingTierSchema],
    faq: [faqSchema],
  },
  { timestamps: true },
)

export const Product = mongoose.model<IProduct>('Product', productSchema)
