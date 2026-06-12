import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/content/site'
import { Button } from '@/components/ui/Button'
import logo from '@/assets/logo.png'

/** Site navigation with mobile menu */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-navy font-semibold' : 'text-muted hover:text-navy'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        {/* Brand */}
        <Link to="/" className="group flex flex-col" onClick={() => setMobileOpen(false)}>
          {/* <span className="font-heading text-xl font-semibold tracking-tight text-navy transition-colors group-hover:text-navy-light">
            {siteConfig.name}
          </span> */}
          <img src={logo} className='w-14 rounded-lg' alt="" />
          {/* <span className="text-xs text-muted">{siteConfig.tagline}</span> */}
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

      {/* Mobile menu */}
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
              <div className="mt-2 pt-2">
                <Button to="/contact" className="w-full" onClick={() => setMobileOpen(false)}>
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
