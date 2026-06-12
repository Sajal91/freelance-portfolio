import type { ReactNode } from 'react'
import { Card } from '@/components/ui/Card'
import { FeaturedRibbon } from '@/components/ui/FeaturedRibbon'

interface ServiceCardProps {
  children: ReactNode
  featured?: boolean
}

/** Service detail card with optional corner ribbon */
export function ServiceCard({ children, featured }: ServiceCardProps) {
  if (!featured) {
    return (
      <Card hover={false} className="md:p-10">
        {children}
      </Card>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <FeaturedRibbon />
      <Card hover={false} className="md:p-10">
        {children}
      </Card>
    </div>
  )
}
