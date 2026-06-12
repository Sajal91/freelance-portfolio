import type { NavLink } from '@/types/content'

/** Shared site-wide config: branding, navigation, footer */
export const siteConfig = {
  name: 'Studio',
  tagline: 'Automation products for growing businesses',
  email: 'hello@yourstudio.in',
  phone: '+91 98765 43210',
  location: 'India · Remote, nationwide',
  footerBlurb:
    'Plug-and-play automation systems for real estate, social media, and customer support — subscribe and go live in days.',
  gstNote: 'All prices exclusive of 18% GST. Invoices provided.',
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Custom Services', path: '/custom-services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const footerLinks = {
  products: [
    { label: 'Real Estate Lead Management', path: '/products/real-estate-lead-management' },
    { label: 'Social Media Auto-Posting', path: '/products/social-media-auto-posting' },
    { label: 'AI Chatbot', path: '/products/ai-chatbot' },
    { label: 'All Products', path: '/products' },
  ],
  company: [
    { label: 'About', path: '/about' },
    { label: 'Custom Services', path: '/custom-services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ],
  account: [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Log in', path: '/login' },
    { label: 'Sign up', path: '/register' },
  ],
}

export const defaultCTA = {
  headline: 'Ready to automate your workflow?',
  subtext:
    'Browse our subscription products or book a consultation for a custom-built system tailored to your business.',
  primaryLabel: 'View Products',
  primaryPath: '/products',
  secondaryLabel: 'Custom Services',
  secondaryPath: '/custom-services',
}
