import type { BlogPost } from '@/types/content'

/** Blog listing page hero copy */
export const blogPage = {
  eyebrow: 'The Automation Hub · Blog',
  headline: 'Practical notes on building and automating',
  subheadline:
    'Field-tested thinking on web development, AI, and workflow automation - written for founders and teams who want to ship, not just read about it.',
}

/** All blog posts, newest first */
export const blogPosts: BlogPost[] = [
  {
    slug: '5-signs-your-startup-needs-workflow-automation',
    title: '5 Signs Your Startup Needs Workflow Automation Right Now',
    excerpt:
      'If your team is copy-pasting between tools, chasing status updates, and hiring just to keep up - you may not have a people problem. You have a process problem. Here are five signs it is time to automate.',
    standfirst:
      'Most early teams do not notice the exact moment manual work starts holding them back. It creeps in one spreadsheet, one Slack reminder, one "did you send that yet?" at a time. Here are five clear signals it is time to automate.',
    category: 'Workflow Automation',
    tags: ['Automation', 'Startups', 'Operations'],
    date: 'July 2, 2026',
    readingTime: '6 min read',
    author: { name: 'Sajal Kapoor', role: 'Founder, The Automation Hub' },
    featured: true,
    body: [
      {
        type: 'paragraph',
        text: 'When a startup is small, manual work feels harmless. Someone copies a new lead into the CRM, someone else pings the team when an invoice goes out, and a founder personally checks that every customer got onboarded. It works - right up until it does not.',
      },
      {
        type: 'paragraph',
        text: 'The tricky part is that this kind of work rarely fails loudly. It just quietly eats hours, introduces small errors, and makes growth feel heavier than it should. Below are five signs that your team has outgrown doing things by hand - and that a bit of workflow automation would pay for itself quickly.',
      },
      {
        type: 'signs',
        items: [
          {
            title: 'You copy and paste the same data between tools',
            body: 'A lead fills out a form, and someone re-types it into your CRM. A deal closes, and someone copies the details into a billing sheet. Every manual hop is a chance to introduce typos, miss a field, or simply forget. If your team moves the same information between two or more tools every day, that is the clearest signal automation will help.',
          },
          {
            title: 'Things regularly slip through the cracks',
            body: 'Follow-ups that never happen. Invoices sent late. Leads that go cold because nobody was assigned. When important steps depend on a person remembering to do them, some of them will be missed - not because your team is careless, but because humans are not built to be reliable schedulers. Automation is.',
          },
          {
            title: 'Onboarding a customer takes a checklist and three people',
            body: 'If getting a new client up and running means someone opens a document, pings two colleagues, creates accounts by hand, and sends a sequence of emails, you have a repeatable process that is being run manually. Repeatable is exactly what software is good at. The checklist you keep re-doing is a workflow waiting to be automated.',
          },
          {
            title: 'You cannot answer "what is the status?" without asking someone',
            body: 'Whether it is an order, a support ticket, or a project, if the only way to know where something stands is to interrupt a teammate, your process lives in people\u2019s heads instead of in a system. Automated workflows leave a trail: every step is logged, visible, and searchable - so status is something you look up, not something you chase.',
          },
          {
            title: 'Growth means hiring, not scaling',
            body: 'The most expensive sign of all: every increase in volume forces you to add headcount just to keep up with routine tasks. If ten more customers means one more coordinator, your operations do not scale - they multiply. Automation lets the same team handle far more work, so you hire for judgment and creativity, not data entry.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'What workflow automation actually looks like',
      },
      {
        type: 'paragraph',
        text: 'Automation does not have to mean a giant, risky "digital transformation" project. In practice, it usually means connecting the tools you already use so that information flows on its own and routine steps happen without anyone pressing a button.',
      },
      {
        type: 'list',
        items: [
          'A new form submission automatically creates a CRM record and assigns an owner.',
          'When a deal is marked won, an invoice and a welcome email are generated instantly.',
          'Customer onboarding runs as a checklist that triggers accounts, access, and reminders on its own.',
          'Status updates post themselves to a shared dashboard, so nobody has to ask.',
          'An AI step reads incoming messages, summarises them, and routes each to the right person.',
        ],
      },
      {
        type: 'callout',
        title: 'A simple rule of thumb',
        text: 'If a task is repetitive, rule-based, and happens more than a few times a week, it is a strong candidate for automation. Start there before touching anything complex.',
      },
      {
        type: 'heading',
        text: 'Where to start without overcommitting',
      },
      {
        type: 'paragraph',
        text: 'You do not need to automate everything at once. The teams that get the most value start small, prove it works, and expand from there.',
      },
      {
        type: 'list',
        items: [
          'List the tasks your team repeats every week and roughly how long each takes.',
          'Pick the one that is most repetitive and most error-prone - not the most complex.',
          'Map the steps end to end, including the edge cases and who currently owns them.',
          'Automate that single workflow, measure the time saved, then move to the next.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Done this way, automation compounds. Each workflow you hand off to software frees up time that your team can reinvest in the next one - and the work that only people can do.',
      },
      {
        type: 'heading',
        text: 'The bottom line',
      },
      {
        type: 'paragraph',
        text: 'If you recognised your team in two or more of these signs, the constraint probably is not your people - it is your process. Workflow automation is how small teams punch above their weight: fewer mistakes, faster turnaround, and room to grow without adding overhead every step of the way.',
      },
    ],
  },
]

/** Look up a single post by slug */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
