import { useState, type FormEvent } from 'react'
import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import {
  calendlyPlaceholder,
  contactInfo,
  contactPage,
  formFields,
  thankYouMessage,
} from '@/content/contact'

/** Contact page — form UI with static thank-you state (no backend) */
export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <SectionContainer>
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cream-dark text-2xl text-warm">
            ✓
          </div>
          <h1 className="mt-6 text-3xl font-semibold">{thankYouMessage.headline}</h1>
          <p className="mt-4 leading-relaxed text-muted">{thankYouMessage.subtext}</p>
          <div className="mt-8">
            <Button to={thankYouMessage.ctaPath}>{thankYouMessage.ctaLabel}</Button>
          </div>
        </div>
      </SectionContainer>
    )
  }

  return (
    <>
      <SectionContainer noAnimation className="pb-8!">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-warm">
            {contactPage.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {contactPage.headline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            {contactPage.subheadline}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer variant="alt" className="pt-8!">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Contact form */}
          <FadeIn>
            <Card hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy">
                      {formFields.name.label}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={formFields.name.placeholder}
                      className="mt-2 w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm transition-colors focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-warm/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy">
                      {formFields.email.label}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={formFields.email.placeholder}
                      className="mt-2 w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm transition-colors focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-warm/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy">
                    {formFields.company.label}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={formFields.company.placeholder}
                    className="mt-2 w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm transition-colors focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-warm/20"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-navy">
                    {formFields.projectType.label}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="mt-2 w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm transition-colors focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-warm/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {formFields.projectType.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy">
                    {formFields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={formFields.message.placeholder}
                    className="mt-2 w-full resize-y rounded-lg border border-border bg-cream px-4 py-3 text-sm transition-colors focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-warm/20"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  {formFields.submitLabel}
                </Button>
              </form>
            </Card>
          </FadeIn>

          {/* Sidebar: contact info + calendly placeholder */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <Card hover={false}>
                <h2 className="text-lg font-semibold">Direct contact</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-muted">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="font-medium text-navy transition-colors hover:text-warm"
                      >
                        {contactInfo.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted">Phone / WhatsApp</dt>
                    <dd>
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                        className="font-medium text-navy transition-colors hover:text-warm"
                      >
                        {contactInfo.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted">Response time</dt>
                    <dd className="text-charcoal">{contactInfo.responseTime}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Availability</dt>
                    <dd className="text-charcoal">{contactInfo.availability}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Payments</dt>
                    <dd className="text-charcoal">{contactInfo.paymentNote}</dd>
                  </div>
                </dl>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card hover={false} className="border-warm/20 bg-cream">
                <h2 className="text-lg font-semibold">{calendlyPlaceholder.headline}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {calendlyPlaceholder.subtext}
                </p>
                <Button variant="secondary" className="mt-6 w-full" disabled>
                  {calendlyPlaceholder.buttonLabel}
                </Button>
                <p className="mt-3 text-center text-xs text-muted">{calendlyPlaceholder.note}</p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
