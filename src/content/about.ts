import type { ProcessStep } from '@/types/content'

/** About page content */
export const aboutPage = {
  eyebrow: 'About The Automation Hub',
  headline: 'Building scalable systems with clarity',
  subheadline:
    'The Automation Hub is a full-stack development studio focused on efficient API design, responsive interfaces, and practical AI automation - from requirement analysis through deployment.',
}

export const founderStory = {
  name: 'Sajal Kapoor',
  role: 'Founder, The Automation Hub',
  intro:
    'I build and deploy scalable web applications with a focus on efficient API design and optimized database queries - helping teams ship reliable software without unnecessary complexity.',
  paragraphs: [
    'I develop production systems spanning web apps, mobile apps, backends, and integrations. I’ve built an AI-powered design automation platform, a social fitness app with crew-based competition and real-time chat, and intelligent social media automation connected to external services.',
    'I work across the full software development lifecycle - from schema design and indexing to code reviews and deployment.',
  ],
  highlights: [
    { label: 'Current role', value: 'Full-Stack Developer' },
    { label: 'Core focus', value: 'Web + AI' },
    { label: 'Strength', value: 'Automation' },
  ],
}

export const methodology: ProcessStep[] = [
  {
    step: 1,
    title: 'Discover',
    description:
      'We start with your goals, existing systems, and constraints. No assumptions - just a clear picture of what success looks like for your product or workflow.',
  },
  {
    step: 2,
    title: 'Design',
    description:
      'We propose a scoped solution with milestones, tech choices explained simply, and a realistic timeline - with transparent pricing in INR before any build begins.',
  },
  {
    step: 3,
    title: 'Build',
    description:
      'Iterative development with regular check-ins. You see progress early and often, with room to refine as we learn - following Agile practices throughout.',
  },
  {
    step: 4,
    title: 'Deploy & Support',
    description:
      'Thorough handover, documentation, and optional ongoing support. The goal is systems your team can own confidently.',
  },
]

export const aboutCTA = {
  headline: 'Interested in working together?',
  subtext:
    'Tell us about your project - The Automation Hub typically responds within one working day (IST).',
  primaryLabel: 'Get in Touch',
  primaryPath: '/contact',
}
