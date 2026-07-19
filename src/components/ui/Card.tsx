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
      className={`relative rounded-2xl border border-border/80 bg-[linear-gradient(180deg,#ffffff_0%,#fdfbf7_100%)] p-6 shadow-card md:p-8 ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-1.5 hover:border-navy/12 hover:shadow-lift'
          : ''
      } ${className}`}
    >
      {/* soft top highlight for subtle depth */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-linear-to-r from-transparent via-white/80 to-transparent"
      />
      {children}
    </div>
  )
}
