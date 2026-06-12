import { useEffect, useState, type FormEvent } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useAuth } from '@/context/AuthContext'
import { ApiClientError } from '@/api/client'

/** Register page */
export function Register() {
  const { register, user, loading } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('redirect') ?? '/dashboard'
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!loading && user) {
      navigate(redirect, { replace: true })
    }
  }, [loading, user, navigate, redirect])

  if (loading || user) {
    return null
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSubmitting(true)

    const form = event.currentTarget
    const data = new FormData(form)
    const password = String(data.get('password'))
    const confirm = String(data.get('confirmPassword'))

    if (password !== confirm) {
      setError('Passwords do not match.')
      setSubmitting(false)
      return
    }

    try {
      await register(String(data.get('name')), String(data.get('email')), password)
      navigate(redirect, { replace: true })
    } catch (err) {
      setError(err instanceof ApiClientError ? err.message : 'Registration failed.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card hover={false}>
      <h1 className="text-2xl font-semibold">Create an account</h1>
      <p className="mt-2 text-sm text-muted">Subscribe to automation products and manage billing.</p>

      {error && (
        <p className="mt-4 rounded-lg border border-warm/30 bg-cream px-4 py-3 text-sm text-charcoal">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-warm/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-warm/20"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-navy">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            className="mt-2 w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-warm/20"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-navy">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            className="mt-2 w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-warm/20"
          />
        </div>
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? 'Creating account…' : 'Sign up'}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{' '}
        <Link to={`/login?redirect=${encodeURIComponent(redirect)}`} className="font-medium text-navy hover:text-warm">
          Log in
        </Link>
      </p>
    </Card>
  )
}
