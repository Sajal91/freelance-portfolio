import { Link, Outlet } from 'react-router-dom'
import logo from '@/assets/logo.png'
import { siteConfig } from '@/content/site'

/** Minimal layout for auth pages — no footer */
export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <header className="border-b border-border/80 bg-cream/90 px-5 py-4 md:px-8">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={logo} className="w-12 rounded-lg" alt="" />
          <span className="font-heading text-lg font-semibold text-navy">{siteConfig.name}</span>
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-5 py-12 md:px-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
