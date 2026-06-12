import type { NavLink } from '@/types/content'

/** Shared site-wide config: branding, navigation, footer */
export const siteConfig = {
  name: 'Sajal Kapoor',
  tagline: 'Full-Stack & AI Automation',
  email: 'kapoorsajal91@gmail.com',
  phone: '+91 95826 71770',
  location: 'East Delhi, India · Remote, nationwide',
  linkedin: 'https://www.linkedin.com/in/sajal-kapoor-38a98a215/',
  github: 'https://github.com/Sajal91',
  footerBlurb:
    'Custom web and app development, plus AI workflow automation for startups and growing teams - from API design to deployment.',
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const footerLinks = {
  services: [
    { label: 'Web Development', path: '/services' },
    { label: 'App Development', path: '/services' },
    { label: 'AI Automation', path: '/services' },
    { label: 'Workflow Automation', path: '/services' },
  ],
  company: [
    { label: 'About', path: '/about' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Contact', path: '/contact' },
  ],
}

export const defaultCTA = {
  headline: 'Ready to build something that works?',
  subtext:
    'Book a free 30-minute consultation to discuss your project, timeline, and budget - no obligation.',
  primaryLabel: 'Get in Touch',
  primaryPath: '/contact',
  secondaryLabel: 'View Services',
  secondaryPath: '/services',
}
