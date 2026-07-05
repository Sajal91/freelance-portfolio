import { siteConfig } from '@/content/site'

export interface PrivacyPolicySection {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

/** Privacy policy page content */
export const privacyPolicyPage = {
  eyebrow: 'Legal',
  headline: 'Privacy Policy',
  subheadline:
    'How The Automation Hub collects, uses, and protects information when you visit our website or get in touch.',
  lastUpdated: 'June 25, 2026',
  intro: [
    `This Privacy Policy explains how ${siteConfig.name} ("we", "us", or "our") handles personal information when you use ${siteConfig.domain} and related pages (the "Site").`,
    'We build software and automation solutions for businesses. This policy applies to visitors and prospective clients who browse the Site, submit the contact form, or book a consultation.',
  ],
}

export const privacyPolicySections: PrivacyPolicySection[] = [
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    paragraphs: [
      'We collect only the information needed to respond to enquiries, improve the Site, and understand how visitors use our pages.',
    ],
    bullets: [
      'Contact details you submit voluntarily, such as your name, email address, company name, project type, and message.',
      'Basic usage data collected through Google Analytics, including pages visited, approximate location (country/city level), browser type, device type, and referral source.',
      'Technical data automatically sent by your browser, such as IP address (anonymized where supported), date and time of visit, and operating system.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How we use your information',
    paragraphs: ['We use the information we collect for the following purposes:'],
    bullets: [
      'To respond to messages sent through the contact form or email.',
      'To schedule and manage consultation bookings made through Google Calendar.',
      'To understand Site traffic and improve content, performance, and user experience.',
      'To maintain the security and reliability of the Site.',
    ],
  },
  {
    id: 'legal-basis',
    title: 'Legal basis for processing',
    paragraphs: [
      'Where applicable, we process personal information based on your consent (for example, when you submit the contact form), our legitimate interest in operating and improving the Site, and our interest in responding to business enquiries.',
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-party services',
    paragraphs: [
      'We use trusted third-party providers to operate parts of the Site. These services may process data according to their own privacy policies:',
    ],
    bullets: [
      'Google Analytics — website usage statistics (Measurement ID: G-D08PWLVPS5).',
      'Google Apps Script — stores contact form submissions submitted through the Site.',
      'Google Calendar — appointment scheduling when you book a consultation.',
      'Hosting and infrastructure providers that deliver the Site to your browser.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and analytics',
    paragraphs: [
      'The Site may use cookies and similar technologies through Google Analytics to measure traffic and usage patterns. You can control cookies through your browser settings. Blocking cookies may affect certain analytics features but should not prevent you from using the Site.',
      'Google Analytics is configured with IP anonymization where supported.',
    ],
  },
  {
    id: 'data-retention',
    title: 'Data retention',
    paragraphs: [
      'Contact form submissions and enquiry correspondence are retained only as long as needed to respond, manage a project discussion, or meet reasonable business record-keeping requirements. Analytics data is retained according to Google Analytics settings.',
    ],
  },
  {
    id: 'data-sharing',
    title: 'Sharing of information',
    paragraphs: [
      'We do not sell your personal information. We may share information with service providers who help us operate the Site or respond to enquiries, when required by law, or to protect our rights and the security of the Site.',
    ],
  },
  {
    id: 'security',
    title: 'Security',
    paragraphs: [
      'We take reasonable technical and organizational measures to protect information submitted through the Site. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights and choices',
    paragraphs: ['Depending on your location, you may have the right to:'],
    bullets: [
      'Request access to personal information we hold about you.',
      'Request correction or deletion of your information.',
      'Object to or restrict certain processing.',
      'Withdraw consent where processing is based on consent.',
    ],
  },
  {
    id: 'children',
    title: "Children's privacy",
    paragraphs: [
      'The Site is intended for business professionals and is not directed at children under 18. We do not knowingly collect personal information from children.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will reflect the latest revision. Continued use of the Site after changes are posted constitutes acceptance of the updated policy.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact us',
    paragraphs: [
      `If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
      `${siteConfig.name} · ${siteConfig.location}`,
    ],
  },
]
