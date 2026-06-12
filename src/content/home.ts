import type { TechLogo } from '@/types/content'

/** Home page content */
export const homeHero = {
  eyebrow: 'Automation Products Studio',
  headline: 'Plug-and-play automation systems for real estate, social media & customer support',
  subheadline:
    'Subscribe to a ready-made automation product and go live in days — no custom build required. Connect your accounts, we handle the rest.',
  ctaPrimary: { label: 'Browse Products', path: '/products' },
  ctaSecondary: { label: 'See Pricing', path: '/pricing' },
}

export const featuredProductSlugs = [
  'real-estate-lead-management',
  'social-media-auto-posting',
  'ai-chatbot',
] as const

export const howItWorks = [
  {
    step: 1,
    title: 'Subscribe',
    description:
      'Pick a product and tier that fits your team. Checkout takes minutes — no lengthy sales calls.',
  },
  {
    step: 2,
    title: 'Onboarding & setup',
    description:
      'We walk you through configuration, connect your tools, and tailor defaults to your workflow.',
  },
  {
    step: 3,
    title: 'Connect accounts & data',
    description:
      'Link your CRM, ad platforms, social accounts, or website — securely and with clear permissions.',
  },
  {
    step: 4,
    title: 'Automation runs',
    description:
      'Your system goes live. Leads flow, posts publish, chatbots respond — with monitoring and support included.',
  },
]

export const trustStrip = {
  headline: 'Trusted by teams across India',
  subtext: 'Placeholder social proof — add client logos, testimonials, or metrics here.',
  logos: [
    { name: 'Real Estate' },
    { name: 'Agencies' },
    { name: 'D2C Brands' },
    { name: 'Consultancies' },
    { name: 'SaaS Teams' },
    { name: 'MSMEs' },
  ] satisfies TechLogo[],
}

export const homeCTA = {
  headline: 'Need something built from scratch?',
  subtext:
    'Beyond our subscription products, we offer bespoke development and custom automation systems for unique requirements.',
  primaryLabel: 'Explore Custom Services',
  primaryPath: '/custom-services',
  secondaryLabel: 'Contact Us',
  secondaryPath: '/contact',
}
