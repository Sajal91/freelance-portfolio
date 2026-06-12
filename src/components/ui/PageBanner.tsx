interface PageBannerProps {
  image: string
  eyebrow: string
  headline: string
  subheadline: string
}

/** Full-width page hero with background image and overlay */
export function PageBanner({ image, eyebrow, headline, subheadline }: PageBannerProps) {
  return (
    <section className="relative flex min-h-[280px] items-center overflow-hidden md:min-h-[340px]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/90" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-warm-light">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-cream md:text-5xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
          {subheadline}
        </p>
      </div>
    </section>
  )
}
