import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.BlogPost.list('-datePublished', 100)
      .then(data => setBlogPosts(data))
      .catch(err => console.error('Failed to load blog posts', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={pageVars}>
      <AnnouncementBar />
      <StickyNav />

      {/* Hero */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <HeroBackground />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( Blog )</span>
          <h1
            className="font-grotesk font-light leading-[1.0] tracking-tight mt-6"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(42px, 7vw, 110px)', letterSpacing: '-0.04em' }}
          >
            Insights From the Team.
          </h1>
          <p className="mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[580px]" style={{ color: 'rgba(245,243,236,0.65)' }}>
            We write about what we know — digital presence, web design, and what it actually takes to build a business online. No fluff, no keyword stuffing. Just useful content from a team that has been doing this work for years.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {loading ? (
              <div className="col-span-full flex items-center justify-center py-20">
                <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{ borderColor: 'var(--webik-cream-2)', borderTopColor: 'var(--webik-dark)' }}></div>
              </div>
            ) : blogPosts.length === 0 ? (
              <p className="col-span-full text-center font-inter text-sm py-20" style={{ color: 'var(--webik-muted)' }}>No blog posts yet.</p>
            ) : blogPosts.map((post, i) => (
              <article key={post.id || i} className="flex flex-col group">
                <div className="aspect-[16/9] rounded-xl mb-6 relative overflow-hidden">
                  <img
                    src={post.coverImage || 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,26,10,0.5), transparent)' }} />
                </div>

                <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 self-start" style={{ background: 'rgba(200,240,72,0.15)', color: 'var(--webik-dark)' }}>
                  {post.category}
                </span>

                <h2 className="font-grotesk font-medium text-xl lg:text-2xl leading-snug flex-1" style={{ color: 'var(--webik-dark)' }}>
                  {post.title}
                </h2>

                <p className="font-inter text-sm leading-relaxed mt-4" style={{ color: 'var(--webik-muted)' }}>
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-inter text-sm font-medium transition-colors"
                  style={{ color: 'var(--webik-dark)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-muted)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-dark)'}
                >
                  Read More →
                </Link>
                </article>
                ))}
                </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-12 text-center" style={{ background: 'var(--webik-cream-2)' }}>
        <div className="max-w-[600px] mx-auto">
          <p className="font-inter text-base leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
            Want to know if your current digital presence is working for or against you?
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300"
            style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-dark-2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--webik-dark)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            See What We Can Do Together
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}