import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import AnnouncementBar from '../components/webik/AnnouncementBar';
import StickyNav from '../components/webik/StickyNav';
import Footer from '../components/webik/Footer';
import GrainOverlay from '../components/webik/GrainOverlay';
import HeroBackground from '../components/webik/HeroBackground';
import { base44 } from '@/api/base44Client';

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
  const [post, setPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    base44.entities.BlogPost.filter({ slug }, '-datePublished', 100)
      .then(posts => {
        if (posts.length > 0) {
          setPost(posts[0]);
          return base44.entities.BlogPost.list('-datePublished', 100).then(all => {
            const idx = all.findIndex(p => p.slug === slug);
            if (idx >= 0 && all.length > 1) {
              setNextPost(all[(idx + 1) % all.length]);
            } else if (all.length > 0) {
              setNextPost(all[0]);
            }
          });
        }
      })
      .catch(err => console.error('Failed to load post', err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ ...pageVars, background: 'var(--webik-cream)' }}>
        <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{ borderColor: 'var(--webik-cream-2)', borderTopColor: 'var(--webik-dark)' }}></div>
      </div>
    );
  }

  if (!post) return <Navigate to="/blog" replace />;

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
            {(post.sections || []).map((section, i) => {
              if (section.type === 'heading') {
                return (
                  <div key={i} className="[&+*]:!mt-3">
                    <h2 className="font-grotesk font-light text-2xl lg:text-3xl" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>
                      {section.heading}
                    </h2>
                    {section.body && (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => (
                            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
                              {children}
                            </p>
                          ),
                          a: ({ children, href }) => (
                            <a href={href} target="_blank" rel="noopener noreferrer" className="underline transition-colors" style={{ color: 'var(--webik-dark)' }}
                              onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-lime)'}
                              onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-dark)'}>
                              {children}
                            </a>
                          ),
                        }}
                      >
                        {section.body}
                      </ReactMarkdown>
                    )}
                  </div>
                );
              }
              if (section.type === 'paragraph') {
                return (
                  <ReactMarkdown
                    key={i}
                    components={{
                      p: ({ children }) => (
                        <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
                          {children}
                        </p>
                      ),
                      a: ({ children, href }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="underline transition-colors" style={{ color: 'var(--webik-dark)' }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-lime)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-dark)'}>
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {section.body}
                  </ReactMarkdown>
                );
              }
              if (section.type === 'list') {
                return (
                  <ul key={i} className="space-y-2 pl-1">
                    {(section.items || []).map((item, j) => (
                      <li key={j} className="flex items-start gap-3 font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--webik-lime)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === 'image') {
                return (
                  <div key={i} className="my-8">
                    <img src={section.imageUrl} alt={section.imageAlt || ''} className="w-full rounded-2xl" />
                  </div>
                );
              }
              if (section.type === 'button') {
                return (
                  <div key={i} className="my-6">
                    <a href={section.buttonLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300" style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}>
                      {section.buttonText}
                    </a>
                  </div>
                );
              }
              if (section.type === 'link') {
                return (
                  <p key={i} className="font-inter text-base lg:text-lg leading-relaxed">
                    <a href={section.linkUrl} target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: 'var(--webik-dark)' }}>
                      {section.linkText}
                    </a>
                  </p>
                );
              }
              return null;
            })}
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
          {nextPost && (
            <div className="mt-16 pt-10 border-t" style={{ borderColor: 'var(--webik-cream-2)' }}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--webik-muted)' }}>Next Article</p>
              <Link to={`/blog/${nextPost.slug}`} className="group flex items-start gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 rounded" style={{ background: 'rgba(200,240,72,0.12)', color: 'var(--webik-lime)' }}>{nextPost.category}</span>
                <h3 className="font-grotesk font-light text-xl lg:text-2xl group-hover:text-[var(--webik-muted)] transition-colors" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>
                  {nextPost.title} →
                </h3>
              </Link>
            </div>
          )}
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