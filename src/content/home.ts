import type { ServiceHighlight, TechLogo } from '@/types/content'

/** Home page content - edit here without touching components */
export const homeHero = {
  eyebrow: 'Full-Stack Developer & AI Automation Specialist',
  headline: 'Scalable apps and AI workflows that ship to production',
  subheadline:
    'I build and deploy web and mobile applications with efficient APIs, responsive interfaces, and practical AI automation - from requirement analysis through deployment.',
  ctaPrimary: { label: 'Book a Free Consultation', path: '/contact' },
  ctaSecondary: { label: 'View Case Studies', path: '/case-studies' },
}

export const serviceHighlights: ServiceHighlight[] = [
  {
    id: 'web-dev',
    title: 'Web & Full-Stack Development',
    description:
      'Production-ready web applications with RESTful APIs, thoughtful database design, and responsive user interfaces built for real-world use.',
    icon: '◈',
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description:
      'Mobile and cross-platform apps with secure authentication, push notifications, real-time features, and engaging user experiences.',
    icon: '◉',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Systems',
    description:
      'AI integrations and intelligent workflows that automate routine processes - from content pipelines to scheduling and decision-support agents.',
    icon: '◎',
  },
  {
    id: 'api-dev',
    title: 'API & Backend Development',
    description:
      'Reliable backends with optimized database queries, clean architecture, and deployment to production - built to scale with your product.',
    icon: '▣',
  },
]

export const trustStrip = {
  headline: 'What I bring to every project',
  subtext:
    'A practical, end-to-end approach - from architecture through deployment.',
  logos: [
    { name: 'Web Apps' },
    { name: 'Mobile Apps' },
    { name: 'APIs' },
    { name: 'AI Integration' },
    { name: 'Automation' },
    { name: 'Real-time' },
    { name: 'Databases' },
    { name: 'Deployment' },
  ] satisfies TechLogo[],
}

export const homeCTA = {
  headline: 'Let’s talk about what you’re building',
  subtext:
    'Whether you need a web app, mobile app, AI automation system, or backend development - start with a no-pressure conversation. Based in Delhi, working in IST.',
  primaryLabel: 'Schedule a Consultation',
  primaryPath: '/contact',
  secondaryLabel: 'Explore Services',
  secondaryPath: '/services',
}
