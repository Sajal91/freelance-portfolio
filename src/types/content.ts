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
}

export interface CaseStudyPreview {
  slug: string
  title: string
  client: string
  industry: string
  summary: string
  result: string
  tags: string[]
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
