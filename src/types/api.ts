export interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
}

export interface PricingTier {
  name: string
  price: number
  billingInterval: 'month' | 'year'
  stripePriceId: string
  features: string[]
  recommended?: boolean
}

export interface ProductFAQ {
  question: string
  answer: string
}

export interface Product {
  _id: string
  name: string
  slug: string
  shortDescription: string
  description: string
  problem: string
  solution: string
  features: string[]
  integrations: string[]
  idealFor: string
  pricingTiers: PricingTier[]
  faq: ProductFAQ[]
}

export interface Subscription {
  _id: string
  productSlug: string
  productName?: string
  tier: string
  status: string
  currentPeriodEnd: string
}

export interface AuthResponse {
  user: User
  message?: string
}

export interface ApiError {
  message: string
}
