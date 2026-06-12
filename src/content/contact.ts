import { siteConfig } from '@/content/site'

/** Contact page content */
export const contactPage = {
  eyebrow: 'Contact',
  headline: 'Questions, custom projects, or general inquiries',
  subheadline:
    'Reach out about custom services, product questions, or partnership opportunities. We typically respond within one working day.',
}

export const contactInfo = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  responseTime: 'Within 1 working day (IST)',
  availability: 'Mon – Sat, 10:00 AM – 7:00 PM IST',
  paymentNote: 'Subscription billing via Stripe · Custom projects invoiced in INR',
}

export const formFields = {
  name: { label: 'Name', placeholder: 'Your full name' },
  email: { label: 'Email', placeholder: 'you@company.in' },
  service: {
    label: 'Inquiry type',
    options: [
      'Custom Web & Full-Stack Dev',
      'Custom AI Automation',
      'Custom SaaS / Dashboard',
      'Mobile App Development',
      'Product question',
      'General inquiry',
    ],
  },
  message: {
    label: 'Your message',
    placeholder:
      'Tell us about your project, timeline, or question. For custom work, a rough budget range helps us respond with useful next steps.',
  },
  submitLabel: 'Send Message',
}

export const thankYouMessage = {
  headline: 'Thank you — message received',
  subtext:
    'We will review your note and respond within one working day. In the meantime, browse our automation products or pricing.',
  ctaLabel: 'View Products',
  ctaPath: '/products',
}
