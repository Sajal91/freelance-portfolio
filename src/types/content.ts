export interface NavLink {
  label: string
  path: string
}

export interface CTABlock {
  headline: string
  subtext: string
  primaryLabel: string
  primaryPath: string
  secondaryLabel?: string
  secondaryPath?: string
}

export interface ServiceHighlight {
  id: string
  title: string
  description: string
  icon: string
}

export interface ServiceDetail {
  id: string
  title: string
  description: string
  idealFor: string
  pricing: {
    model: string
    from: string
    note?: string
  }
  features: string[]
  featured?: boolean
}

export interface CaseStudyPreview {
  slug: string
  title: string
  client: string
  industry: string
  summary: string
  result: string
  tags: string[]
  highlight?: string
}

export interface CaseStudyDetail extends CaseStudyPreview {
  problem: string
  process: string[]
  solution: string
  results: string[]
  metrics: { label: string; value: string }[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface TechLogo {
  name: string
}

export interface BlogSign {
  title: string
  body: string
}

export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'signs'; items: BlogSign[] }

export interface BlogPostPreview {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  /** Pre-formatted, SSR-safe date string, e.g. "July 2, 2026" */
  date: string
  readingTime: string
  author: { name: string; role: string }
  featured?: boolean
}

export interface BlogPost extends BlogPostPreview {
  /** Short standfirst shown under the title on the article page */
  standfirst: string
  body: BlogBlock[]
}
