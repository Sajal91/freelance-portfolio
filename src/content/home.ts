import type { CaseStudyPreview, ServiceHighlight, TechLogo } from '@/types/content'

/** Home page content — edit here without touching components */
export const homeHero = {
  eyebrow: 'Full-Stack Developer & AI Automation Specialist',
  headline: 'Build reliable systems that save time and scale your business',
  subheadline:
    'I help Indian founders, MSMEs, and small teams ship custom web apps, AI-powered workflows, and dashboards — with a calm, process-led approach from discovery to deployment.',
  ctaPrimary: { label: 'Book a Free Consultation', path: '/contact' },
  ctaSecondary: { label: 'View Case Studies', path: '/case-studies' },
}

export const serviceHighlights: ServiceHighlight[] = [
  {
    id: 'web-dev',
    title: 'Web & Full-Stack Development',
    description:
      'Production-ready MERN applications, APIs, and integrations — built for Indian businesses that need dependable, maintainable software.',
    icon: '◈',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Systems',
    description:
      'Practical AI agents and workflows that cut manual work — without the hype or inflated tool costs.',
    icon: '◎',
  },
  {
    id: 'dashboards',
    title: 'SaaS & Dashboard Development',
    description:
      'Real-time dashboards and internal tools that replace scattered spreadsheets with one clear view of your operations.',
    icon: '▣',
  },
]

export const featuredCaseStudies: CaseStudyPreview[] = [
  {
    slug: 'ops-dashboard-saas',
    title: 'Unified Operations Dashboard for a Bengaluru SaaS Team',
    client: 'B2B SaaS Startup',
    industry: 'B2B SaaS',
    summary:
      'A fragmented reporting stack was costing the team hours every week. We consolidated data sources into a single live dashboard.',
    result: '12+ hours saved per week on reporting',
    tags: ['React', 'Node.js', 'Supabase'],
  },
  {
    slug: 'lead-qualification-automation',
    title: 'AI-Powered Lead Qualification for a Mumbai Consultancy',
    client: 'Professional Services Firm',
    industry: 'Consulting',
    summary:
      'Manual lead triage was slowing follow-ups. An n8n workflow now enriches, scores, and routes inbound leads automatically.',
    result: 'Response time cut from 24 hours to under 2 hours',
    tags: ['n8n', 'OpenAI', 'Zoho CRM'],
  },
]

export const trustStrip = {
  headline: 'Built with tools you can trust',
  subtext:
    'Modern, proven technologies — chosen for reliability and sensible running costs.',
  logos: [
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'TypeScript' },
    { name: 'n8n' },
    { name: 'Supabase' },
    { name: 'Razorpay' },
  ] satisfies TechLogo[],
}

export const homeCTA = {
  headline: 'Let’s talk about what you’re building',
  subtext:
    'Whether you need a full application, an automation system, or a clear technical roadmap — start with a no-pressure conversation. Based in India, working in IST.',
  primaryLabel: 'Schedule a Consultation',
  primaryPath: '/contact',
  secondaryLabel: 'Explore Services',
  secondaryPath: '/services',
}
