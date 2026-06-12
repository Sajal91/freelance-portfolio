interface FeaturedRibbonProps {
  label?: string
}

/** Diagonal corner ribbon for featured cards */
export function FeaturedRibbon({ label = 'Featured' }: FeaturedRibbonProps) {
  return (
    <div
      className="pointer-events-none absolute -right-11 top-6 z-10 w-44 rotate-45 bg-warm py-1.5 text-center text-[11px] font-semibold uppercase tracking-widest text-white shadow-[0_2px_8px_rgba(30,42,59,0.18)]"
      aria-label={label}
    >
      {label}
    </div>
  )
}
