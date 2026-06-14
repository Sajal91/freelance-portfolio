import { Link, NavLink } from 'react-router-dom'
import { footerLinks, siteConfig } from '@/content/site'
import logo from '@/assets/logo.png'

/** Site footer with navigation columns */
export function Footer() {
  return (
    <footer className="border-t border-border bg-cream-dark">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-2">
            <NavLink to="/" className="text-xl font-semibold text-navy w-fit">
              <img src={logo} className='w-28 rounded-lg -ml-4' alt={siteConfig.name} />
            </NavLink>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.footerBlurb}
            </p>
            <p className="mt-4 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-navy transition-colors hover:text-warm"
              >
                {siteConfig.email}
              </a>
              <span className="mx-2">·</span>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="text-navy transition-colors hover:text-warm"
              >
                {siteConfig.phone}
              </a>
            </p>
            <p className="mt-1 text-sm text-muted">{siteConfig.location}</p>
            <p className="mt-3 flex gap-4 text-sm">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy transition-colors hover:text-warm"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy transition-colors hover:text-warm"
              >
                GitHub
              </a>
            </p>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted transition-colors hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted transition-colors hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="text-xs">Built with care.</p>
        </div>
      </div>
    </footer>
  )
}
