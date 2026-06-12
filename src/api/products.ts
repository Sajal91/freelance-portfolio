import { apiFetch } from '@/api/client'
import type { Product } from '@/types/api'

export async function getProducts() {
  return apiFetch<{ products: Product[] }>('/api/products')
}

export async function getProduct(slug: string) {
  return apiFetch<{ product: Product }>(`/api/products/${slug}`)
}
