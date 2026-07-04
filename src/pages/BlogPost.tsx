import { Link, useParams } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import { getBlogPostBySlug } from '@/content/blog'
import { defaultCTA } from '@/content/site'
import { NotFound } from '@/pages/NotFound'
import type { BlogBlock } from '@/types/content'

function BlockRenderer({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          {block.text}
        </h2>
      )
    case 'paragraph':
      return <p className="mt-5 text-lg leading-relaxed text-charcoal">{block.text}</p>
    case 'list':
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item.slice(0, 48)} className="flex items-start gap-3 text-charcoal">
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[linear-gradient(135deg,#e79a8f,#c4855a)]"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <div className="mt-8 rounded-2xl border border-warm/25 bg-[linear-gradient(135deg,rgba(232,196,168,0.35),rgba(154,143,196,0.15))] p-6 shadow-soft">
          {block.title && (
            <p className="text-sm font-semibold uppercase tracking-wider text-warm">
              {block.title}
            </p>
          )}
          <p className="mt-2 leading-relaxed text-navy">{block.text}</p>
        </div>
      )
    case 'signs':
      return (
        <div className="mt-8 space-y-5">
          {block.items.map((sign, index) => (
            <FadeIn key={sign.title} delay={index * 0.06}>
              <div className="flex gap-5 rounded-2xl border border-border/70 bg-[linear-gradient(180deg,#ffffff_0%,#fdfbf7_100%)] p-5 shadow-soft md:p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#e79a8f_0%,#c4855a_100%)] font-heading text-lg font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_8px_18px_-6px_rgba(30,42,59,0.35)]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-navy">{sign.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{sign.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      )
    default:
      return null
  }
}

/** Individual blog article */
export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) {
    return <NotFound />
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-hero-wash">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-warm/20 blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 pt-28 md:px-8 md:pb-12 md:pt-32">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-muted transition-colors hover:text-navy"
          >
            ← Back to Blog
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-cream">
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface/70 px-3 py-1 text-xs font-medium text-charcoal backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{post.standfirst}</p>
          <div className="mt-8 flex items-center gap-3 border-t border-border/70 pt-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2d3f56_0%,#1e2a3b_100%)] text-sm font-semibold text-cream shadow-soft">
              {post.author.name
                .split(' ')
                .map((part) => part[0])
                .join('')}
            </span>
            <div>
              <p className="text-sm font-semibold text-navy">{post.author.name}</p>
              <p className="text-xs text-muted">
                {post.author.role} · {post.date} · {post.readingTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <SectionContainer variant="default" size="lg" className="pt-10! md:pt-12!">
        <article className="mx-auto max-w-6xl">
          {post.body.map((block, index) => (
            <BlockRenderer key={index} block={block} />
          ))}

          <div className="mt-12 border-t border-border pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm font-medium text-navy transition-colors hover:text-warm"
            >
              ← Back to all articles
            </Link>
          </div>
        </article>
      </SectionContainer>

      <CTASection content={defaultCTA} />
    </>
  )
}
