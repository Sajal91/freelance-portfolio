import type { ProcessStep } from '@/types/content'

/** About page content */
export const aboutPage = {
  eyebrow: 'About',
  headline: 'Technical depth, delivered calmly',
  subheadline:
    'I’m an India-based solo full-stack developer specialising in MERN applications and AI workflow automation — focused on work that lasts, not flashy demos.',
}

export const founderStory = {
  name: 'Your Name',
  role: 'Full-Stack Developer & AI Automation Specialist',
  intro:
    'After years building products for Indian startups and agencies, I started Studio to offer a direct, thoughtful way to work with technical talent — without the overhead or inflated pricing of a large agency.',
  paragraphs: [
    'My background spans full-stack web development, systems integration, and the practical application of AI to real business workflows. I’ve shipped customer-facing SaaS products, internal ops tools, and automation systems that Indian teams actually use — not shelfware that gathers dust after launch.',
    'I work best with founders, MSMEs, D2C brands, and small product teams who value clarity over complexity. If you need someone who can own a project end-to-end — from architecture to deployment — communicate in English (or Hindi), and respect your budget, we’ll likely work well together.',
  ],
  highlights: [
    { label: 'Years of experience', value: '8+' },
    { label: 'Projects delivered', value: '40+' },
    { label: 'Primary stack', value: 'MERN + n8n' },
  ],
}

export const methodology: ProcessStep[] = [
  {
    step: 1,
    title: 'Discover',
    description:
      'We start with your goals, budget, and existing systems. No assumptions — just a clear picture of what success looks like for your business.',
  },
  {
    step: 2,
    title: 'Design',
    description:
      'I propose a scoped solution with milestones, tech choices explained simply, and a realistic timeline — with transparent pricing in INR before any build begins.',
  },
  {
    step: 3,
    title: 'Build',
    description:
      'Iterative development with regular check-ins over call or WhatsApp. You see progress early and often, with room to refine as we learn.',
  },
  {
    step: 4,
    title: 'Deploy & Support',
    description:
      'Thorough handover, documentation, and optional ongoing support. GST-compliant invoicing. The goal is systems your team can own confidently.',
  },
]

export const aboutCTA = {
  headline: 'Interested in working together?',
  subtext:
    'Tell me about your project — I typically respond within one working day (IST).',
  primaryLabel: 'Get in Touch',
  primaryPath: '/contact',
}
