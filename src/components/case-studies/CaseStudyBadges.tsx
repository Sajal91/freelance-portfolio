interface CaseStudyBadgesProps {
  tags: string[]
  highlight?: string
  limit?: number
}

/** Tag pills for case study cards with optional highlight badge */
export function CaseStudyBadges({ tags, highlight, limit }: CaseStudyBadgesProps) {
  const visibleTags = limit ? tags.slice(0, limit) : tags

  return (
    <div className="flex flex-wrap gap-2">
      {highlight && (
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-cream">
          {highlight}
        </span>
      )}
      {visibleTags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-cream-dark px-3 py-1 text-xs font-medium text-charcoal"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
