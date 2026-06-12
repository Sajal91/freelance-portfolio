import type { ProcessStep } from '@/types/content'

/** About page content */
export const aboutPage = {
  eyebrow: 'About Studio',
  headline: 'Automation products, built with care',
  subheadline:
    'We build subscription-ready automation systems so businesses can go live fast — and offer custom development when off-the-shelf is not enough.',
}

export const founderStory = {
  name: 'Your Name',
  role: 'Founder · Automation Products Studio',
  intro:
    'Studio started as a freelance practice building custom systems for Indian startups and MSMEs. Today we productise the automations we saw teams need most — while still offering bespoke work for unique requirements.',
  paragraphs: [
    'Our subscription products cover the highest-demand workflows: real estate lead management, social media publishing, and AI-powered customer support. Each is designed to deploy in days, not months.',
    'When a business needs something entirely custom — a new SaaS product, a complex integration, or a mobile app — our custom services team scopes and delivers with the same transparent, process-led approach.',
  ],
  highlights: [
    { label: 'Products live', value: '3+' },
    { label: 'Automations deployed', value: '40+' },
    { label: 'Primary stack', value: 'MERN + n8n' },
  ],
}

export const mission = {
  headline: 'Our mission',
  text: 'Make reliable automation accessible to growing businesses — through products you can subscribe to today and custom systems when you need something unique.',
}

export const methodology: ProcessStep[] = [
  {
    step: 1,
    title: 'Productise what works',
    description:
      'We turn proven client workflows into subscription products — tested, documented, and ready to deploy.',
  },
  {
    step: 2,
    title: 'Onboard fast',
    description:
      'Clear setup guides, account connections, and support so you go live in days, not quarters.',
  },
  {
    step: 3,
    title: 'Iterate with customers',
    description:
      'Product roadmaps driven by real usage — features that solve actual operational pain.',
  },
  {
    step: 4,
    title: 'Custom when needed',
    description:
      'Bespoke builds for teams whose needs go beyond our catalog — scoped transparently in INR.',
  },
]

export const aboutCTA = {
  headline: 'Explore our automation products',
  subtext: 'Subscribe to a ready-made system or reach out for a custom build.',
  primaryLabel: 'View Products',
  primaryPath: '/products',
  secondaryLabel: 'Custom Services',
  secondaryPath: '/custom-services',
}
