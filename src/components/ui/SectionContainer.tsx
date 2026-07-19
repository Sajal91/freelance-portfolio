import type { ReactNode } from 'react'
import { FadeIn } from '@/components/animation/FadeIn'

interface SectionContainerProps {
  children: ReactNode
  /** Optional section id for anchor links */
  id?: string
  className?: string
  /** Background variant */
  variant?: 'default' | 'alt' | 'navy'
  /** Max width preset */
  size?: 'md' | 'lg' | 'xl'
  /** Disable scroll animation for this section */
  noAnimation?: boolean
}

const variantStyles = {
  default: 'bg-cream',
  alt: 'bg-cream-dark',
  navy: 'bg-navy-gradient text-cream [&_h2]:text-cream [&_h3]:text-cream [&_p]:text-cream/80',
}

const sizeStyles = {
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-6xl',
}

/** Consistent section wrapper with padding, max-width, and optional fade-in */
export function SectionContainer({
  children,
  id,
  className = '',
  variant = 'default',
  size = 'xl',
  noAnimation = false,
}: SectionContainerProps) {
  const content = (
    <section id={id} className={`py-16 md:py-24 lg:py-28 ${variantStyles[variant]} ${className}`}>
      <div className={`mx-auto w-full px-5 md:px-8 ${sizeStyles[size]}`}>{children}</div>
    </section>
  )

  if (noAnimation) return content

  return <FadeIn>{content}</FadeIn>
}
