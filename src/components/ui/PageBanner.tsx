interface PageBannerProps {
  image: string
  eyebrow: string
  headline: string
  subheadline: string
}

/** Full-width page hero with background image and overlay */
export function PageBanner({ image, eyebrow, headline, subheadline }: PageBannerProps) {
  return (
    <section className="relative flex min-h-[360px] items-center overflow-hidden pt-24 md:min-h-[420px] md:pt-28">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(23,33,48,0.94)_0%,rgba(30,42,59,0.88)_45%,rgba(45,63,86,0.82)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-warm/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-violet/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-12 text-center md:px-8 md:py-16">
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
