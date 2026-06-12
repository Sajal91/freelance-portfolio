import { siteConfig } from '@/content/site'

/** Contact page content */
export const contactPage = {
  eyebrow: 'Contact',
  headline: 'Start with a conversation',
  subheadline:
    'Share a bit about your project and I’ll get back to you within one working day. No hard sell — just an honest assessment of scope, timeline, and ballpark budget.',
}

export const contactInfo = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  responseTime: 'Within 1 working day (IST)',
  availability: 'Mon – Sat, 10:00 AM – 7:00 PM IST',
  paymentNote: 'UPI, bank transfer, or Razorpay',
}

export const calendlyPlaceholder = {
  headline: 'Prefer to book directly?',
  subtext:
    'Schedule a free 30-minute consultation at a time that suits you. Calendly integration coming soon.',
  buttonLabel: 'Book a Free Consultation',
  note: 'Calendly embed placeholder — link your scheduling URL here',
}

export const formFields = {
  name: { label: 'Name', placeholder: 'Your full name' },
  email: { label: 'Email', placeholder: 'you@company.in' },
  company: { label: 'Company', placeholder: 'Company name (optional)' },
  projectType: {
    label: 'Project type',
    options: [
      'Web / Full-Stack Development',
      'App Development',
      'AI Automation',
      'API / Backend Development',
      'Workflow Automation',
      'Not sure yet',
    ],
  },
  message: {
    label: 'Tell me about your project',
    placeholder:
      'What are you trying to build or fix? Share your timeline and approximate budget if you have one — even a rough range helps.',
  },
  submitLabel: 'Send Message',
}

export const thankYouMessage = {
  headline: 'Thank you — message received',
  subtext:
    'I’ll review your note and respond within one working day. In the meantime, feel free to browse case studies for examples of my recent work.',
  ctaLabel: 'View Case Studies',
  ctaPath: '/case-studies',
}
