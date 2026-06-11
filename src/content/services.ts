import type { ServiceDetail } from '@/types/content'
import { siteConfig } from '@/content/site'

/** Services page content */
export const servicesPage = {
  eyebrow: 'Services',
  headline: 'Clear offerings for complex technical work',
  subheadline:
    'Every engagement starts with understanding your goals and budget. These are the core ways I help Indian clients — scoped transparently, delivered with care.',
}

export const services: ServiceDetail[] = [
  {
    id: 'web-fullstack',
    title: 'Web & Full-Stack Development',
    description:
      'End-to-end development of web applications using the MERN stack and modern tooling. From MVP to production systems with clean architecture, testing, and deployment — suited for Indian startups and product teams scaling beyond no-code.',
    idealFor:
      'Founders, D2C brands, and product teams who need a reliable technical partner to build or extend a customer-facing product.',
    pricing: {
      model: 'Fixed project fee',
      from: '₹3,50,000',
      note: `Scoped after discovery; typical MVPs from ₹6.5L–₹12.5L. ${siteConfig.gstNote}`,
    },
    features: [
      'Custom React frontends with responsive, mobile-first UI',
      'Node.js APIs, authentication, and database design',
      'Integrations with Razorpay, WhatsApp Business API, email & CRM',
      'Deployment, monitoring, and handover documentation',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Systems',
    description:
      'Practical AI implementations — not demos. Custom agents, document processing, and decision-support workflows integrated into your existing stack, at a fraction of typical SaaS AI tool costs.',
    idealFor:
      'MSMEs and service businesses drowning in manual admin, document handling, or data-heavy repetitive tasks.',
    pricing: {
      model: 'Fixed project fee',
      from: '₹2,50,000',
      note: `Includes scoping, build, testing, and team walkthrough. ${siteConfig.gstNote}`,
    },
    features: [
      'LLM-powered agents with guardrails and human-in-the-loop',
      'Document extraction, classification, and summarisation',
      'Custom GPTs and API integrations',
      'Usage cost modelling so bills stay predictable',
    ],
  },
  {
    id: 'saas-dashboards',
    title: 'SaaS & Dashboard Development',
    description:
      'Internal tools and client-facing dashboards that connect your data sources and surface the metrics that actually matter — replacing the Excel sheets your team has outgrown.',
    idealFor:
      'Teams outgrowing spreadsheets who need a single source of truth for operations, sales, or client reporting.',
    pricing: {
      model: 'Fixed project fee',
      from: '₹3,00,000',
      note: `Data source complexity affects scope. ${siteConfig.gstNote}`,
    },
    features: [
      'Real-time data visualisation and filtering',
      'Role-based access and multi-tenant architecture',
      'Supabase or MongoDB backends with secure APIs',
      'Export, alerts, and scheduled reporting',
    ],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description:
      'n8n and API-driven automations that connect your apps, eliminate copy-paste work, and keep data flowing accurately between Zoho, Google Workspace, Razorpay, and more.',
    idealFor:
      'Agencies, consultancies, and ops-heavy businesses with disconnected tools and manual handoffs between teams.',
    pricing: {
      model: 'Project or monthly retainer',
      from: '₹1,50,000',
      note: `Ongoing support from ₹40,000/month. ${siteConfig.gstNote}`,
    },
    features: [
      'n8n workflow design, build, and documentation',
      'Zoho CRM, Freshsales, Razorpay, and accounting integrations',
      'Error handling, logging, and WhatsApp/email alerts',
      'Audit of existing automations and optimisation',
    ],
  },
]

export const servicesCTA = {
  headline: 'Not sure which service fits?',
  subtext:
    'Most projects blend a few of these. Book a free consultation and we’ll map the right approach and ballpark budget together.',
  primaryLabel: 'Book a Free Consultation',
  primaryPath: '/contact',
}
