import { apiFetch } from '@/api/client'

export async function submitInquiry(data: {
  name: string
  email: string
  service: string
  message: string
}) {
  return apiFetch<{ message: string }>('/api/inquiries', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
