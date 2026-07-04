import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, siteConfig } from '@/content/site'
import { Button } from '@/components/ui/Button'
import logo from '@/assets/logo.png'

/** Site navigation with mobile menu */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-navy font-semibold' : 'text-black hover:text-navy'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between gap-4 rounded-2xl border border-white/60 bg-cream/60 px-4 py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_12px_34px_-14px_rgba(30,42,59,0.3)] backdrop-blur-xl md:px-6 md:py-3">
          {/* Brand */}
          <Link to="/" className="group flex flex-col" onClick={() => setMobileOpen(false)}>
            <img src={logo} className="w-24 rounded-lg md:w-28" alt={siteConfig.name} />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" size="sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-surface/70 shadow-soft backdrop-blur-md md:hidden"
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

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/60 bg-cream/85 shadow-[0_12px_34px_-14px_rgba(30,42,59,0.3)] backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2.5 text-base transition-colors ${
                        isActive
                          ? 'bg-surface/80 font-medium text-navy shadow-soft'
                          : 'text-charcoal hover:bg-surface/60'
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="mt-2 pt-1">
                  <Button to="/contact" className="w-full" onClick={() => setMobileOpen(false)}>
                    Get in Touch
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
