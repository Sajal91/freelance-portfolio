import type { NavLink } from '@/types/content'

/** Shared site-wide config: branding, navigation, footer */
export const siteConfig = {
  name: 'Studio',
  tagline: 'Full-Stack & AI Automation',
  email: 'hello@yourstudio.in',
  phone: '+91 98765 43210',
  location: 'India · Remote, nationwide',
  footerBlurb:
    'Custom web apps, AI automation, and dashboards for Indian startups, MSMEs, and growing teams.',
  gstNote: 'All prices exclusive of 18% GST. Invoices provided.',
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
    { label: 'AI Automation', path: '/services' },
    { label: 'SaaS Dashboards', path: '/services' },
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
    'Book a free 30-minute consultation to discuss your project, timeline, and budget — no obligation.',
  primaryLabel: 'Get in Touch',
  primaryPath: '/contact',
  secondaryLabel: 'View Services',
  secondaryPath: '/services',
}
