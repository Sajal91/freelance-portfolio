import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageBanner } from '@/components/ui/PageBanner'
import { SectionContainer } from '@/components/ui/SectionContainer'
import {
  calendlyPlaceholder,
  contactInfo,
  contactPage,
  formFields,
  thankYouMessage,
} from '@/content/contact'
import bgImg from '@/assets/contact-bg.jpg'

/** Contact page - form UI with static thank-you state (no backend) */
/** Maps known query-param slugs to the display label locked into the form */
const projectTypeSlugMap: Record<string, string> = {
  whatsappautomationagent: 'WhatsApp Automation Agent',
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const rawProjectType = searchParams.get('projectType');
  const normalizedProjectType = rawProjectType
    ? rawProjectType.toLowerCase().replace(/[^a-z0-9]/g, '')
    : '';
  const lockedProjectType = rawProjectType
    ? projectTypeSlugMap[normalizedProjectType] ?? rawProjectType
    : null;
  const isProjectTypeLocked = Boolean(lockedProjectType);

  const openCalendarPopup = () => {
    const width = 940;
    const height = 800;

    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1f6RfbGtG4_hejOsRcIYpuYdbriUwK5F3JJMkzDZdTNy9rCEE7iIIzRqKfKyuWYQDSL1IEkBuW?gv=true",
      "BookMeeting",
      `
        width=${width},
        height=${height},
        left=${left},
        top=${top},
        toolbar=no,
        menubar=no,
        location=no,
        status=no,
        scrollbars=yes,
        resizable=yes
      `
    );
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);
    setLoading(true)

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwe_oOtb2dBq9uqeguav_uoITLqypLQStpj5I2V9yy-MqXMF60dYe3w6dcbu2r1JzIS/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      setSubmitted(true)
      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false)
    }
  };

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
      <PageBanner
        image={bgImg}
        eyebrow={contactPage.eyebrow}
        headline={contactPage.headline}
        subheadline={contactPage.subheadline}
      />

      <SectionContainer variant="alt" className="">
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

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy">
                      {formFields.phone.label}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder={formFields.phone.placeholder}
                      className="mt-2 w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm transition-colors focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-warm/20"
                    />
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
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-navy">
                    {formFields.projectType.label}
                  </label>
                  {isProjectTypeLocked ? (
                    <>
                      <input
                        id="projectType"
                        type="text"
                        value={lockedProjectType ?? ''}
                        readOnly
                        aria-readonly="true"
                        className="mt-2 w-full cursor-not-allowed rounded-lg border border-border bg-cream-dark/40 px-4 py-3 text-sm text-navy focus:outline-none"
                      />
                      <input type="hidden" name="projectType" value={lockedProjectType ?? ''} />
                    </>
                  ) : (
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
                  )}
                </div>

                {!isProjectTypeLocked && (
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
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full sm:w-auto cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    formFields.submitLabel
                  )}
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
                </dl>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card hover={false} className="border-warm/20 bg-cream">
                <h2 className="text-lg font-semibold">{calendlyPlaceholder.headline}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {calendlyPlaceholder.subtext}
                </p>
                <Button variant="secondary" className="mt-6 w-full cursor-pointer" onClick={openCalendarPopup}>
                  {calendlyPlaceholder.buttonLabel}
                </Button>
                {/* <p className="mt-3 text-center text-xs text-muted">{calendlyPlaceholder.note}</p> */}
              </Card>
            </FadeIn>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
