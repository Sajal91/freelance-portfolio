import type { ServiceDetail } from '@/types/content'

/** Services page content */
export const servicesPage = {
  eyebrow: 'Services',
  headline: 'What I build and automate',
  subheadline:
    'Core offerings based on my production experience - web and app development, API design, and AI workflow automation scoped transparently from discovery to deployment.',
}

export const services: ServiceDetail[] = [
  {
    id: 'web-fullstack',
    title: 'Web & Full-Stack Development',
    description:
      'End-to-end web applications - responsive frontends, robust APIs, and database backends with schema design, indexing, and query optimization.',
    idealFor:
      'Startups and product teams who need a dependable developer to build or extend a customer-facing web application from MVP to production.',
    pricing: {
      model: 'Fixed project fee',
      from: '₹50,000',
      // note: 'Scoped after discovery; typical MVPs from ₹6.5L–₹12.5L.',
    },
    features: [
      'Responsive, mobile-first user interfaces',
      'RESTful APIs with authentication and authorization',
      'Database schema design with optimized queries',
      'Production deployment with handover documentation',
    ],
    featured: true,
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Systems',
    description:
      'Practical AI implementations - intelligent integrations, prompt-engineered workflows, and agents that automate real business processes rather than demo-only prototypes.',
    idealFor:
      'Teams looking to integrate AI into existing products - design automation, content generation, or decision-support workflows with multiple providers.',
    pricing: {
      model: 'Fixed project fee',
      from: '₹35,000',
      // note: 'Includes scoping, build, testing, and team walkthrough.',
    },
    features: [
      'Multi-provider AI integration',
      'Dynamic prompt engineering and context-aware workflows',
      'Intelligent agents for content scheduling and process automation',
      'Usage cost modelling so bills stay predictable',
    ],
    featured: true,
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description:
      'Automations that connect your apps, eliminate repetitive manual work, and keep data flowing accurately between services and external platforms.',
    idealFor:
      'Businesses with disconnected tools, manual handoffs, or content workflows that need reliable, scalable automation.',
    pricing: {
      model: 'Project or monthly retainer',
      from: '₹25,000',
      // note: 'Ongoing support from ₹40,000/month.',
    },
    features: [
      'Workflow design, build, and documentation',
      'Social media, CRM, and third-party integrations',
      'Error handling, logging, and alert notifications',
      'Audit of existing automations and optimisation',
    ],
    featured: true,
  },
  {
    id: 'app-development',
    title: 'App Development',
    description:
      'Mobile and cross-platform applications built for real user engagement - from onboarding and authentication to notifications, real-time features, and social interactions.',
    idealFor:
      'Founders and teams launching a consumer or community app who need a full build - fitness trackers, social platforms, productivity tools, or niche lifestyle products.',
    pricing: {
      model: 'Fixed project fee',
      from: '₹40,000',
      // note: 'Scoped after discovery; feature set and platforms affect timeline.',
    },
    features: [
      'Google and social sign-in for frictionless onboarding',
      'Push notifications for reminders, activity, and milestones',
      'Real-time chat, live updates, and in-app messaging',
      'User profiles, groups, leaderboards, and social features',
    ],
  },
  {
    id: 'api-backend',
    title: 'API & Backend Development',
    description:
      'Robust backends with efficient API design, database optimization, and clean architecture - the foundation your frontend and integrations depend on.',
    idealFor:
      'Products that need reliable APIs, database performance improvements, or backend systems that integrate with third-party services.',
    pricing: {
      model: 'Fixed project fee',
      from: '₹30,000',
      // note: 'Scope depends on endpoints and integrations.',
    },
    features: [
      'RESTful API design and documentation',
      'Database indexing, schema design, and query optimization',
      'Authentication, middleware, and error handling',
      'Third-party API integrations and webhook handling',
    ],
  },
]

export const featuredServices = services.filter((service) => service.featured)
export const otherServices = services.filter((service) => !service.featured)

export const servicesCTA = {
  headline: 'Not sure which service fits?',
  subtext:
    'Most projects blend a few of these. Book a free consultation and we’ll map the right approach and ballpark budget together.',
  primaryLabel: 'Book a Free Consultation',
  primaryPath: '/contact',
}
