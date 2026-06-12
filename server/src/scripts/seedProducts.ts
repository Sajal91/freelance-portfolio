import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { connectDB } from '../config/db.js'
import { Product } from '../models/Product.js'

dotenv.config()

/** Resolve Stripe Price ID from env or use placeholder for dev */
function priceId(envKey: string, fallback: string) {
  return process.env[envKey] || fallback
}

const defaultTiers = (prefix: string) => [
  {
    name: 'Starter',
    price: 4999,
    billingInterval: 'month' as const,
    stripePriceId: priceId(`${prefix}_STARTER_PRICE_ID`, `price_placeholder_${prefix}_starter`),
    features: [
      'Core automation workflow',
      'Up to 500 actions/month',
      'Email support',
      'Standard onboarding',
    ],
  },
  {
    name: 'Pro',
    price: 9999,
    billingInterval: 'month' as const,
    stripePriceId: priceId(`${prefix}_PRO_PRICE_ID`, `price_placeholder_${prefix}_pro`),
    recommended: true,
    features: [
      'Everything in Starter',
      'Up to 2,500 actions/month',
      'Priority support',
      'Custom workflow tweaks',
      'Monthly health check',
    ],
  },
  {
    name: 'Agency',
    price: 19999,
    billingInterval: 'month' as const,
    stripePriceId: priceId(`${prefix}_AGENCY_PRICE_ID`, `price_placeholder_${prefix}_agency`),
    features: [
      'Everything in Pro',
      'Unlimited actions',
      'Multi-account / team seats',
      'Dedicated onboarding',
      'Quarterly strategy review',
    ],
  },
]

const products = [
  {
    name: 'Real Estate Lead Management Automation',
    slug: 'real-estate-lead-management',
    shortDescription:
      'Capture leads from ads, route to CRM or sheets, auto-assign agents, and trigger follow-ups.',
    description:
      'A complete lead management automation for real estate teams — from first touch to booked site visit, without manual copy-paste between tools.',
    problem:
      'Leads arrive from Facebook, Google Ads, and WhatsApp into different inboxes. Agents miss follow-ups, duplicates pile up, and nobody has a single view of pipeline status.',
    solution:
      'One automation pipeline: capture every lead, enrich and dedupe, push to your CRM or Google Sheet, assign the right agent, and send WhatsApp or email follow-ups on a schedule you control.',
    features: [
      'Multi-source lead capture (forms, ads, WhatsApp)',
      'CRM or Google Sheets sync with field mapping',
      'Auto-assign by territory, project, or round-robin',
      'Scheduled follow-up messages and reminders',
      'Duplicate detection and lead scoring rules',
      'Daily pipeline summary notifications',
    ],
    integrations: [
      'Facebook Lead Ads',
      'Google Ads',
      'WhatsApp Business API',
      'Zoho CRM',
      'Google Sheets',
      'Freshsales',
    ],
    idealFor: 'Real estate developers, brokers & channel partners',
    pricingTiers: defaultTiers('REAL_ESTATE'),
    faq: [
      {
        question: 'How long does setup take?',
        answer:
          'Most teams go live within 3–5 business days after subscribing, including account connections and workflow configuration.',
      },
      {
        question: 'Can I use my existing CRM?',
        answer:
          'Yes. We integrate with popular CRMs and can push to Google Sheets if you prefer a lightweight setup.',
      },
      {
        question: 'What counts as an action?',
        answer:
          'Each automated step — capture, sync, assign, or message — counts as one action. Tier limits are listed above.',
      },
    ],
  },
  {
    name: 'Social Media Post & Story Auto-Upload',
    slug: 'social-media-auto-posting',
    shortDescription:
      'Schedule posts and stories to Instagram and Facebook with AI-generated captions.',
    description:
      'Plan your content calendar once, upload media in bulk, and let automation publish posts and stories on schedule — with optional AI captions tailored to your brand voice.',
    problem:
      'Posting consistently across Instagram and Facebook is time-consuming. Teams batch content manually, miss optimal times, and struggle to keep captions on-brand.',
    solution:
      'Upload content to a shared queue, set your schedule, and automation handles publishing to Instagram and Facebook — with AI-assisted captions you can review before go-live.',
    features: [
      'Instagram feed posts & Stories publishing',
      'Facebook Page posts scheduling',
      'Bulk upload and content calendar view',
      'AI caption generation with brand tone presets',
      'Best-time scheduling suggestions',
      'Failed post alerts via email or WhatsApp',
    ],
    integrations: ['Instagram Graph API', 'Facebook Pages', 'Google Drive', 'Canva exports'],
    idealFor: 'D2C brands, agencies & social media managers',
    pricingTiers: defaultTiers('SOCIAL_MEDIA'),
    faq: [
      {
        question: 'Which platforms are supported?',
        answer: 'Instagram (feed + Stories) and Facebook Pages at launch. More platforms on the roadmap.',
      },
      {
        question: 'Do I approve captions before posting?',
        answer:
          'Yes. AI captions are drafts by default — you can auto-approve or require manual review per account.',
      },
      {
        question: 'Can my agency manage multiple clients?',
        answer: 'The Agency tier supports multiple brand accounts with separate calendars and permissions.',
      },
    ],
  },
  {
    name: 'AI Chatbot — Support & Lead Qualification',
    slug: 'ai-chatbot',
    shortDescription:
      'Website, WhatsApp, and Instagram DM chatbot with FAQ handling, lead qualification, and human handoff.',
    description:
      'Answer common questions instantly, qualify inbound leads with smart flows, and route complex conversations to your team — across website chat, WhatsApp, and Instagram DMs.',
    problem:
      'Support and sales teams repeat the same answers. After-hours messages go unanswered, and hot leads cool off before anyone follows up.',
    solution:
      'An AI chatbot trained on your FAQs and qualification criteria handles routine conversations 24/7, captures lead details, and hands off to a human with full context when needed.',
    features: [
      'Website widget + WhatsApp + Instagram DM',
      'FAQ knowledge base with fallback to AI',
      'Lead qualification flows (budget, timeline, fit)',
      'Human handoff with conversation transcript',
      'Business hours and away messages',
      'Weekly conversation analytics summary',
    ],
    integrations: [
      'Website embed',
      'WhatsApp Business API',
      'Instagram Messaging API',
      'Zoho CRM',
      'Google Sheets',
      'Slack notifications',
    ],
    idealFor: 'Service businesses, consultancies & e-commerce support teams',
    pricingTiers: defaultTiers('AI_CHATBOT'),
    faq: [
      {
        question: 'Will it sound like our brand?',
        answer:
          'We configure tone, greeting, and escalation rules during onboarding. You provide FAQ content and sample conversations.',
      },
      {
        question: 'What happens when the bot cannot answer?',
        answer:
          'The bot escalates to your team via WhatsApp or email with the full chat history, or collects contact details for follow-up.',
      },
      {
        question: 'Is customer data stored securely?',
        answer:
          'Conversations are stored encrypted. We follow least-privilege access for integrations and support data export on request.',
      },
    ],
  },
]

async function seed() {
  await connectDB()

  for (const product of products) {
    await Product.findOneAndUpdate({ slug: product.slug }, product, {
      upsert: true,
      new: true,
    })
    console.log(`Seeded: ${product.name}`)
  }

  console.log('Done. Replace price_placeholder_* IDs with real Stripe test Price IDs in .env or MongoDB.')
  await mongoose.disconnect()
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
