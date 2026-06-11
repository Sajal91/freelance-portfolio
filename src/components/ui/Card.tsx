import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

/** Base card container with optional hover lift */
export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-6 md:p-8 ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-1 hover:border-navy/15 hover:shadow-[0_12px_40px_-12px_rgba(30,42,59,0.12)]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
