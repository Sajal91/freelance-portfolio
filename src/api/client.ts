import type { ApiError } from '@/types/api'

export class ApiClientError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

async function parseResponse<T>(response: Response): Promise<T> {
  const data = (await response.json().catch(() => ({}))) as T & ApiError

  if (!response.ok) {
    throw new ApiClientError(data.message ?? 'Something went wrong', response.status)
  }

  return data
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(path, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  return parseResponse<T>(response)
}
