import type { CaseStudyDetail } from '@/types/content'

/** Case studies list and detail content */
export const caseStudiesPage = {
  eyebrow: 'Case Studies',
  headline: 'Real problems, measured outcomes',
  subheadline:
    'A selection of recent work with Indian businesses. Each project follows the same discipline: understand the bottleneck, design a practical solution, ship and support.',
}

export const caseStudies: CaseStudyDetail[] = [
  {
    slug: 'ops-dashboard-saas',
    title: 'Unified Operations Dashboard for a Bengaluru SaaS Team',
    client: 'B2B SaaS Startup',
    industry: 'B2B SaaS · Bengaluru',
    summary:
      'Consolidated five data sources into a single live dashboard, replacing weekly manual exports and spreadsheet chaos.',
    result: '12+ hours saved per week on reporting',
    tags: ['React', 'Node.js', 'Supabase', 'Chart.js'],
    problem:
      'The operations team relied on a patchwork of Excel sheets, Razorpay exports, and Zoho CRM reports. Leadership lacked a real-time view of key metrics, and preparing weekly reports consumed half a day every Monday.',
    process: [
      'Mapped existing data sources and identified the 8 metrics that mattered most to the founding team',
      'Designed a lightweight data model and sync pipeline in Supabase',
      'Built a React dashboard with role-based views for ops and leadership',
      'Deployed with automated daily syncs and alert thresholds via email and WhatsApp',
    ],
    solution:
      'A custom operations dashboard pulling from Razorpay, Zoho CRM, and internal Postgres via scheduled syncs. Leadership gets a morning snapshot; ops can drill into cohorts and churn signals without leaving the app.',
    results: [
      'Weekly reporting time dropped from 6 hours to under 30 minutes',
      'Leadership adopted the dashboard as their primary metrics view within two weeks',
      'Identified a billing discrepancy two months earlier than the previous manual process would have',
    ],
    metrics: [
      { label: 'Time saved weekly', value: '12+ hrs' },
      { label: 'Data sources unified', value: '5' },
      { label: 'Delivery timeline', value: '6 weeks' },
    ],
  },
  {
    slug: 'lead-qualification-automation',
    title: 'AI-Powered Lead Qualification for a Mumbai Consultancy',
    client: 'Professional Services Firm',
    industry: 'Consulting · Mumbai',
    summary:
      'Automated lead enrichment, scoring, and CRM routing with n8n and OpenAI — replacing hours of manual research.',
    result: 'Response time cut from 24 hours to under 2 hours',
    tags: ['n8n', 'OpenAI', 'Zoho CRM', 'WhatsApp'],
    problem:
      'Inbound leads arrived via website form, email, and LinkedIn with no consistent triage. Sales reps spent hours researching prospects before first contact, and high-intent leads sometimes waited a full day for a reply.',
    process: [
      'Documented the current lead flow and defined scoring criteria with the sales lead',
      'Built an n8n workflow to enrich, score, and route leads based on fit signals',
      'Added AI-assisted personalisation for first-touch email and WhatsApp drafts',
      'Ran a two-week pilot before switching on full automation',
    ],
    solution:
      'An n8n orchestration layer that enriches every inbound lead, assigns a fit score, creates a Zoho CRM record with context, and notifies the right rep with a draft outreach message — all within minutes of submission.',
    results: [
      'Median first-response time fell from 24 hours to under 2 hours',
      'Rep research time per lead reduced by roughly 70%',
      'Lead-to-meeting conversion improved by 18% in the first quarter',
    ],
    metrics: [
      { label: 'Response time', value: '< 2 hrs' },
      { label: 'Research time saved', value: '~70%' },
      { label: 'Conversion uplift', value: '+18%' },
    ],
  },
  {
    slug: 'client-portal-agency',
    title: 'Client Portal for a Delhi NCR Digital Agency',
    client: 'Digital Marketing Agency',
    industry: 'Agency · Delhi NCR',
    summary:
      'A branded client portal for project updates, file sharing, and approval workflows — cutting endless email threads.',
    result: 'Client update emails reduced by 80%',
    tags: ['React', 'MongoDB', 'AWS S3', 'Node.js'],
    problem:
      'Project updates lived in long email and WhatsApp threads. Clients missed deliverables, approvals stalled, and the team spent hours each week on status messages that duplicated information already in their tools.',
    process: [
      'Interviewed account managers and two key clients on pain points',
      'Designed a portal with project timelines, file vault, and approval checkpoints',
      'Integrated with existing PM tool via webhook for status sync',
      'Piloted with three accounts before rolling out agency-wide',
    ],
    solution:
      'A white-labelled client portal where each account sees active projects, pending approvals, shared assets, and a concise activity feed — replacing most status-update emails and scattered WhatsApp follow-ups.',
    results: [
      'Status-update emails dropped by roughly 80%',
      'Average approval turnaround improved from 4 days to 1.5 days',
      'Client satisfaction scores for communication improved significantly',
    ],
    metrics: [
      { label: 'Email reduction', value: '80%' },
      { label: 'Approval speed', value: '1.5 days' },
      { label: 'Pilot to rollout', value: '4 weeks' },
    ],
  },
]

/** Helper to look up a case study by slug */
export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
