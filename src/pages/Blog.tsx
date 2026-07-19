import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/animation/FadeIn'
import { Card } from '@/components/ui/Card'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { CTASection } from '@/components/ui/CTASection'
import { blogPage, blogPosts } from '@/content/blog'
import { defaultCTA } from '@/content/site'
import type { BlogPostPreview } from '@/types/content'

function PostMeta({ post }: { post: BlogPostPreview }) {
  return (
    <p className="text-xs text-muted">
      {post.date} · {post.readingTime}
    </p>
  )
}

/** Blog listing page - hero, featured post, and article grid */
export function Blog() {
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const rest = blogPosts.filter((post) => post.slug !== featured?.slug)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-wash">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-warm-light/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-violet/15 blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-28 text-center md:px-8 md:pb-20 md:pt-36">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-warm">
              {blogPage.eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight text-navy md:text-5xl">
              {blogPage.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-6xl text-base leading-relaxed text-muted md:text-lg">
              {blogPage.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionContainer variant="alt" size="xl">
        {/* Featured post */}
        {featured && (
          <FadeIn>
            <Link to={`/blog/${featured.slug}`} className="group block">
              <Card className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center md:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-cream">
                      Featured
                    </span>
                    <span className="rounded-full bg-cream-dark px-3 py-1 text-xs font-medium text-charcoal">
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold leading-snug md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <PostMeta post={featured} />
                    <span className="inline-flex items-center text-sm font-medium text-navy transition-colors group-hover:text-warm">
                      Read article
                      <span className="ml-1" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </div>
                </div>
                {/* Decorative gradient panel */}
                <div className="relative hidden aspect-4/3 overflow-hidden rounded-2xl border border-white/60 bg-[linear-gradient(135deg,#e79a8f_0%,#c4855a_55%,#9a8fc4_100%)] shadow-float md:block">
                  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                  <span className="absolute bottom-5 left-6 font-heading text-6xl font-semibold text-white/90">
                    01
                  </span>
                  <span className="absolute right-5 top-5 rounded-full bg-white/25 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    New post
                  </span>
                </div>
              </Card>
            </Link>
          </FadeIn>
        )}

        {/* Remaining posts */}
        {rest.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.08}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col">
                    <span className="w-fit rounded-full bg-cream-dark px-3 py-1 text-xs font-medium text-charcoal">
                      {post.category}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold leading-snug">{post.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                    <div className="mt-6 border-t border-border pt-4">
                      <PostMeta post={post} />
                    </div>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <p className="mt-10 text-center text-sm text-muted">
              More articles are on the way. Check back soon.
            </p>
          </FadeIn>
        )}
      </SectionContainer>

      <CTASection content={defaultCTA} />
    </>
  )
}
