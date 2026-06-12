import type { CaseStudyDetail } from '@/types/content'

/** Case studies list and detail content */
export const caseStudiesPage = {
  eyebrow: 'Case Studies',
  headline: 'Real projects from production work',
  subheadline:
    'A selection of web applications, mobile apps, and automation systems built for real business and community needs.',
}

export const caseStudies: CaseStudyDetail[] = [
  {
    slug: 'ai-design-automation-platform',
    title: 'AI-Powered Design Automation Platform',
    client: 'Design Platform',
    industry: 'Architecture & Design Tech',
    summary:
      'An AI-powered platform that transforms user inputs into comprehensive 3D architectural outputs including sketches, elevations, floor plans, and base models.',
    result: 'Context-aware results via dynamic prompt adaptation',
    tags: ['Web App', 'AI', 'Automation'],
    highlight: 'Production',
    problem:
      'The team needed a way to turn varied user inputs into complete architectural design outputs - sketches, elevations, floor plans, and base 3D models - without manual rework for each service type. Results had to stay accurate and context-aware depending on what the user selected.',
    process: [
      'Mapped user input flows and the architectural output types required for each service',
      'Designed prompt-engineered workflows with dynamic adaptation based on selected services',
      'Integrated multiple AI providers behind a unified application layer',
      'Built the web interface for submitting inputs and reviewing generated outputs',
    ],
    solution:
      'A design automation platform that accepts user inputs, adapts prompts dynamically per service, and orchestrates multiple AI providers to produce comprehensive 3D architectural deliverables from a single workflow.',
    results: [
      'Unified multiple AI providers behind one consistent user experience',
      'Dynamic prompt adaptation ensures context-aware outputs per selected service',
      'End-to-end pipeline from user input to sketches, elevations, floor plans, and base models',
    ],
    metrics: [
      { label: 'Output types', value: '4+' },
      { label: 'AI integrations', value: 'Multi-provider' },
      { label: 'Delivery', value: 'End-to-end' },
    ],
  },
  {
    slug: 'social-media-automation-agent',
    title: 'AI Social Media Automation Agent',
    client: 'Content Automation',
    industry: 'Marketing Automation',
    summary:
      'An intelligent automation system for scheduling and managing social media content with external platform integrations.',
    result: 'Scalable automated posting and content management',
    tags: ['Automation', 'Integrations', 'AI'],
    highlight: 'Production',
    problem:
      'Managing and scheduling social media content across platforms was manual and time-consuming. The team needed a reliable automation layer that could handle posting schedules and integrate with external social media platforms without constant oversight.',
    process: [
      'Audited existing content workflows and identified automation touchpoints',
      'Designed scalable workflows for scheduling and publishing content',
      'Integrated external social media platforms for automated posting',
      'Added error handling and monitoring so failed posts could be caught early',
    ],
    solution:
      'An automation agent that schedules content, manages posting cadence, and connects to external social media platforms - reducing manual effort while keeping the team in control of what gets published.',
    results: [
      'Automated content scheduling replaced manual posting routines',
      'Scalable workflows support new platforms and integrations as needed',
      'External integrations enable hands-off publishing with oversight',
    ],
    metrics: [
      { label: 'Scope', value: 'Multi-platform' },
      { label: 'Integrations', value: 'Social APIs' },
      { label: 'Approach', value: 'Agentic AI' },
    ],
  },
  {
    slug: 'pushup-crew-app',
    title: 'Pushup Crew App',
    client: 'Fitness Community App',
    industry: 'Health & Fitness',
    summary:
      'A social fitness app where users form crews, log daily pushups, compete on leaderboards, and stay motivated together through chat and notifications.',
    result: 'Crew-based tracking with daily competition and real-time engagement',
    tags: ['Mobile App', 'Social', 'Real-time'],
    highlight: 'Production',
    problem:
      'People struggle to stay consistent with fitness goals when working out alone. The app needed a way for friends and groups to form crews, track pushups daily, see how they rank against each other, and stay accountable without a complicated setup.',
    process: [
      'Designed crew creation and invite flows so users can build groups quickly',
      'Built daily pushup logging with personal stats and crew-wide leaderboards',
      'Integrated Google sign-in for fast, secure onboarding',
      'Added push notifications for reminders, milestones, and crew activity',
      'Implemented real-time chat so crew members can encourage each other live',
    ],
    solution:
      'Pushup Crew - a fitness app where users join or create crews, log pushups every day, compete on crew leaderboards, receive timely notifications, and chat in real time to keep motivation high.',
    results: [
      'Crew-based structure turns solo workouts into friendly competition',
      'Daily tracking and leaderboards give members a clear reason to show up',
      'Google sign-in lowers friction for new users joining a crew',
      'Notifications and real-time chat keep crews engaged between workouts',
    ],
    metrics: [
      { label: 'Core feature', value: 'Crew tracking' },
      { label: 'Engagement', value: 'Real-time chat' },
      { label: 'Auth', value: 'Google sign-in' },
    ],
  },
]

/** Helper to look up a case study by slug */
export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
