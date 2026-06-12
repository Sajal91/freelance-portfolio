import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCheckoutSession } from '@/api/subscriptions'
import { ApiClientError } from '@/api/client'
import { useAuth } from '@/context/AuthContext'

/** Handles subscribe flow with auth redirect and Stripe checkout */
export function useSubscribe() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loadingTier, setLoadingTier] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const subscribe = useCallback(
    async (slug: string, tierName: string) => {
      setError(null)

      if (!user) {
        navigate(
          `/login?redirect=${encodeURIComponent(`/products/${slug}?tier=${encodeURIComponent(tierName)}`)}`,
        )
        return
      }

      setLoadingTier(tierName)
      try {
        const { url } = await createCheckoutSession(slug, tierName)
        window.location.href = url
      } catch (err) {
        const message =
          err instanceof ApiClientError
            ? err.message
            : 'Unable to start checkout. Please try again.'
        setError(message)
        setLoadingTier(null)
      }
    },
    [user, navigate],
  )

  return { subscribe, loadingTier, error, setError }
}
