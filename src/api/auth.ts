import { apiFetch } from '@/api/client'
import type { AuthResponse, User } from '@/types/api'

export async function register(name: string, email: string, password: string) {
  return apiFetch<AuthResponse>('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  })
}

export async function login(email: string, password: string) {
  return apiFetch<AuthResponse>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

export async function logout() {
  return apiFetch<{ message: string }>('/api/auth/logout', { method: 'POST' })
}

export async function getMe() {
  return apiFetch<{ user: User }>('/api/auth/me')
}
