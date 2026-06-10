import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import AnnouncementBar from '../components/webik/AnnouncementBar';
import StickyNav from '../components/webik/StickyNav';
import Footer from '../components/webik/Footer';
import GrainOverlay from '../components/webik/GrainOverlay';
import HeroBackground from '../components/webik/HeroBackground';
import { blogPosts } from '../lib/blogData';

const pageVars = {
  '--webik-lime': '#C8F048',
  '--webik-dark': '#0E1A0A',
  '--webik-dark-2': '#15240F',
  '--webik-cream': '#F5F3EC',
  '--webik-cream-2': '#EBE8DD',
  '--webik-muted': '#6B7560',
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const postIndex = blogPosts.indexOf(post);
  const nextPost = blogPosts[(postIndex + 1) % blogPosts.length];

  return (
    <div style={pageVars}>
      <AnnouncementBar />
      <StickyNav />

      {/* Hero */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <HeroBackground />
        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/blog" className="font-mono text-[11px] uppercase tracking-[0.2em] transition-colors" style={{ color: 'var(--webik-muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-lime)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-muted)'}>
              ← Back to Blog
            </Link>
            <span style={{ color: 'rgba(245,243,236,0.2)' }}>|</span>
            <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full" style={{ background: 'rgba(200,240,72,0.12)', color: 'var(--webik-lime)' }}>
              {post.category}
            </span>
          </div>
          <h1
            className="font-grotesk font-light leading-[1.1]"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(32px, 5vw, 72px)', letterSpacing: '-0.03em' }}
          >
            {post.title}
          </h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: 'var(--webik-muted)' }}>
            Webik Corp · {new Date(post.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[720px] mx-auto">
          <p className="font-inter text-lg lg:text-xl leading-relaxed mb-12" style={{ color: 'var(--webik-dark)', fontStyle: 'italic' }}>
            {post.excerpt}
          </p>

          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-grotesk font-light text-2xl lg:text-3xl mb-4" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>
                  {section.heading}
                </h2>
                <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl" style={{ background: 'var(--webik-dark)' }}>
            <p className="font-grotesk font-light text-xl lg:text-2xl leading-snug" style={{ color: 'var(--webik-cream)' }}>
              {post.cta}
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300"
              style={{ background: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-cream)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--webik-lime)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              See What We Can Do Together
            </Link>
          </div>

          {/* Next article */}
          <div className="mt-16 pt-10 border-t" style={{ borderColor: 'var(--webik-cream-2)' }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--webik-muted)' }}>Next Article</p>
            <Link to={`/blog/${nextPost.slug}`} className="group flex items-start gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 rounded" style={{ background: 'rgba(200,240,72,0.12)', color: 'var(--webik-lime)' }}>{nextPost.category}</span>
              <h3 className="font-grotesk font-light text-xl lg:text-2xl group-hover:text-[var(--webik-muted)] transition-colors" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>
                {nextPost.title} →
              </h3>
            </Link>
          </div>
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `https://webikdigital.com/blog/${post.slug}#article`,
            "headline": post.title,
            "author": { "@type": "Organization", "name": "Webik Corp", "@id": "https://webikdigital.com/#organization" },
            "publisher": { "@type": "Organization", "name": "Webik Corp", "@id": "https://webikdigital.com/#organization" },
            "datePublished": post.datePublished,
            "mainEntityOfPage": `https://webikdigital.com/blog/${post.slug}`,
            "articleBody": post.sections.map(s => s.body).join(' '),
            "description": post.excerpt,
          })
        }}
      />

      <Footer />
    </div>
  );
}