import type { CTABlock } from '@/types/content'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { Button } from '@/components/ui/Button'

interface CTASectionProps {
  content: CTABlock
  variant?: 'default' | 'navy'
}

/** Reusable closing CTA block used across pages */
export function CTASection({ content, variant = 'navy' }: CTASectionProps) {
  return (
    <SectionContainer variant={variant} size="lg">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {content.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed opacity-80 md:text-lg">
          {content.subtext}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            to={content.primaryPath}
            variant={variant === 'navy' ? 'secondary' : 'primary'}
            size="lg"
          >
            {content.primaryLabel}
          </Button>
          {content.secondaryLabel && content.secondaryPath && (
            <Button
              to={content.secondaryPath}
              variant="ghost"
              size="lg"
              className={variant === 'navy' ? 'text-cream hover:bg-white/10' : ''}
            >
              {content.secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </SectionContainer>
  )
}
