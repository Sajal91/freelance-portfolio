import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/content/site'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'
import logo from '@/assets/logo.png'

/** Site navigation with mobile menu and auth state */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user, loading, logout } = useAuth()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-navy' : 'text-muted hover:text-navy'
    }`

  const authButtons = loading ? (
    <span className="text-sm text-muted">…</span>
  ) : user ? (
    <>
      <NavLink to="/dashboard" className={linkClass}>
        Dashboard
      </NavLink>
      <Button variant="secondary" size="sm" onClick={() => logout()}>
        Log out
      </Button>
    </>
  ) : (
    <>
      <NavLink to="/login" className={linkClass}>
        Log in
      </NavLink>
      <Button to="/register" size="sm">
        Sign up
      </Button>
    </>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="group flex flex-col" onClick={() => setMobileOpen(false)}>
          <img src={logo} className="w-14 rounded-lg" alt="" />
        </Link>

        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <div className="ml-2 flex items-center gap-3 border-l border-border pl-6">
            {authButtons}
          </div>
          <Button to="/products" size="sm" variant="secondary">
            View Products
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-navy transition-transform ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-navy transition-opacity ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-navy transition-transform ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-cream md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-base ${
                      isActive ? 'bg-cream-dark font-medium text-navy' : 'text-charcoal'
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 space-y-2 border-t border-border pt-4">
                {!loading && user ? (
                  <>
                    <NavLink
                      to="/dashboard"
                      className="block rounded-lg px-3 py-2.5 text-base text-charcoal"
                      onClick={() => setMobileOpen(false)}
                    >
                      Dashboard
                    </NavLink>
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => {
                        logout()
                        setMobileOpen(false)
                      }}
                    >
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      to="/login"
                      variant="secondary"
                      className="w-full"
                      onClick={() => setMobileOpen(false)}
                    >
                      Log in
                    </Button>
                    <Button to="/register" className="w-full" onClick={() => setMobileOpen(false)}>
                      Sign up
                    </Button>
                  </>
                )}
                <Button to="/products" className="w-full" onClick={() => setMobileOpen(false)}>
                  View Products
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
