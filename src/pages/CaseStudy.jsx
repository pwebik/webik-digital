import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies, getNextProject } from '@/lib/caseStudyData';
import StickyNav from '@/components/webik/StickyNav';
import AnnouncementBar from '@/components/webik/AnnouncementBar';
import Footer from '@/components/webik/Footer';
import GrainOverlay from '@/components/webik/GrainOverlay';
import ColorSwatch from '@/components/webik/ColorSwatch';

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = caseStudies[slug];
  const nextProject = project ? getNextProject(slug) : null;

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.cs-reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('cs-revealed'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--webik-cream)' }}>
        <div className="text-center">
          <p className="font-mono text-sm" style={{ color: 'var(--webik-muted)' }}>Project not found.</p>
          <Link to="/" className="mt-4 inline-block font-inter text-sm underline" style={{ color: 'var(--webik-dark)' }}>← Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Page-specific meta via document.title */}
      {(() => {
        const pageTitle = `${project.title} — ${project.category.split('·')[0].trim()} Case Study by Webik Digital`;
        const pageDesc = `${project.subtitle} — A ${project.scope} case study by Webik Digital, Cebu's SEC-registered digital agency. Client: ${project.client}.`;
        document.title = pageTitle;
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', pageDesc);
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', `https://webikdigital.com/work/${project.slug}`);
        return null;
      })()}

      {/* JSON-LD Schema — CreativeWork per case study */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'CreativeWork',
                '@id': `https://webikdigital.com/work/${project.slug}`,
                'name': project.title,
                'creator': { '@id': 'https://webikdigital.com/#organization' },
                'about': project.category,
                'description': project.subtitle,
                'image': project.mockupUrl,
                'datePublished': project.year,
                'url': `https://webikdigital.com/work/${project.slug}`,
                'keywords': project.scope,
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://webikdigital.com' },
                  { '@type': 'ListItem', 'position': 2, 'name': 'Work', 'item': 'https://webikdigital.com/work' },
                  { '@type': 'ListItem', 'position': 3, 'name': project.title, 'item': `https://webikdigital.com/work/${project.slug}` },
                ]
              }
            ]
          }),
        }}
      />

      <style>{`
        .cs-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
        .cs-reveal.cs-revealed { opacity: 1; transform: translateY(0); }
        .cs-reveal-delay-1 { transition-delay: 0.1s; }
        .cs-reveal-delay-2 { transition-delay: 0.2s; }
        .cs-reveal-delay-3 { transition-delay: 0.3s; }
      `}</style>

      <div style={{ background: 'var(--webik-dark)', '--webik-lime': '#C8F048', '--webik-dark': '#0E1A0A', '--webik-dark-2': '#15240F', '--webik-cream': '#F5F3EC', '--webik-cream-2': '#EBE8DD', '--webik-muted': '#6B7560' }}>
        <AnnouncementBar />
        <StickyNav />

        {/* ── SECTION 1: HERO ── */}
        <section className="relative overflow-hidden pt-20 pb-28 lg:pt-28 lg:pb-40 px-6 lg:px-12" style={{ background: 'var(--webik-dark)' }}>
          <GrainOverlay />
          {/* Background W */}
          <div className="absolute right-[-5vw] top-[20%] h-full w-[55vw] select-none pointer-events-none" aria-hidden="true" style={{ opacity: 0.18 }}>
            <img src="https://media.base44.com/images/public/69ecce3288377cd246349884/848d53c15_Group5.png" alt="" className="w-full h-full object-cover object-left" style={{ filter: 'invert(1)' }} />
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-10">
              <Link to="/" className="font-mono text-[11px] tracking-[0.2em] uppercase transition-colors" style={{ color: 'var(--webik-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-lime)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-muted)'}
              >← Back</Link>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--webik-lime)' }}>{project.breadcrumb}</span>
            </div>

            {/* Category chip */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full mb-8" style={{ background: 'rgba(200,240,72,0.15)', border: '1px solid rgba(200,240,72,0.3)' }}>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase" style={{ color: 'var(--webik-lime)' }}>{project.category}</span>
            </div>

            {/* Title */}
            <h1
              className="font-grotesk font-light leading-[0.92] tracking-tight"
              style={{ color: 'var(--webik-cream)', fontSize: 'clamp(52px, 9vw, 140px)', letterSpacing: '-0.04em' }}
            >
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 font-grotesk text-xl lg:text-2xl font-light" style={{ color: 'var(--webik-lime)', maxWidth: 680 }}>
              {project.subtitle}
            </p>

            {/* Meta strip */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-0" style={{ borderTop: '1px solid rgba(245,243,236,0.12)', borderBottom: '1px solid rgba(245,243,236,0.12)' }}>
              {[
                { label: 'CLIENT', value: project.client },
                { label: 'YEAR', value: project.year },
                { label: 'SCOPE', value: project.scope },
              ].map((item, i) => (
                <div
                  key={i}
                  className="py-6 pr-8"
                  style={{ borderRight: i < 2 ? '1px solid rgba(245,243,236,0.12)' : 'none', paddingLeft: i > 0 ? '2rem' : 0 }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--webik-lime)' }}>{item.label}</p>
                  <p className="font-inter text-sm leading-relaxed" style={{ color: 'rgba(245,243,236,0.8)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: HERO MOCKUP ── */}
        <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
          <div className="max-w-[1100px] mx-auto text-center">
            <div className="relative">
              {/* Lime accent blob behind mockup */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(200,240,72,0.18) 0%, transparent 70%)' }} />
              <img
                src={project.mockupUrl}
                alt={`${project.title} website mockup`}
                className="relative z-10 w-full h-auto rounded-xl shadow-2xl"
                style={{ boxShadow: '0 40px 80px rgba(14,26,10,0.25)' }}
              />
            </div>
            <div className="mt-10">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-reveal inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300"
                style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-dark-2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--webik-dark)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Visit Live Site <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: THE BRIEF ── */}
        <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream-2)' }}>
          <div className="max-w-[1440px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              <div className="cs-reveal">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-lime)', background: 'var(--webik-dark)', display: 'inline-block', padding: '4px 12px', borderRadius: 99 }}>01 / THE BRIEF</p>
                <p className="font-inter text-sm mt-4" style={{ color: 'var(--webik-muted)' }}>Who they are. What they needed.</p>
              </div>
              <div className="lg:col-span-2 cs-reveal cs-reveal-delay-1">
                {project.brief.map((para, i) => (
                  <p key={i} className={`font-inter text-lg lg:text-xl leading-relaxed ${i > 0 ? 'mt-5' : ''}`} style={{ color: 'var(--webik-dark)' }}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: THE APPROACH ── */}
        <section className="relative py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-dark)' }}>
          <GrainOverlay />
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              <div className="cs-reveal">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-lime)', background: 'rgba(200,240,72,0.1)', border: '1px solid rgba(200,240,72,0.25)', display: 'inline-block', padding: '4px 12px', borderRadius: 99 }}>02 / THE APPROACH</p>
                <h2 className="font-grotesk font-light text-3xl lg:text-4xl mt-6 leading-tight" style={{ color: 'var(--webik-cream)' }}>Our strategic decisions.</h2>
              </div>
              <div className="lg:col-span-2 space-y-px" style={{ background: 'rgba(245,243,236,0.08)' }}>
                {project.approach.map((item, i) => (
                  <div key={i} className="cs-reveal flex gap-6 p-7 transition-colors duration-300" style={{ background: 'var(--webik-dark)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-dark-2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-dark)'}
                  >
                    <span className="font-grotesk text-5xl font-light leading-none shrink-0 w-16" style={{ color: 'var(--webik-lime)' }}>{item.num}</span>
                    <div>
                      <h3 className="font-inter font-semibold text-base" style={{ color: 'var(--webik-cream)' }}>{item.title}</h3>
                      <p className="font-inter text-sm mt-1.5 leading-relaxed" style={{ color: 'rgba(245,243,236,0.65)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: LIVE SITE CARD ── */}
        <section className="py-12 lg:py-16 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
          <div className="max-w-[1440px] mx-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-reveal block w-full rounded-2xl p-12 lg:p-20 text-center transition-all duration-500 group"
              style={{ background: 'var(--webik-dark)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-lime)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-dark)'}
            >
              <p
                className="font-grotesk font-light leading-none tracking-tight transition-colors duration-500 group-hover:[color:var(--webik-dark)]"
                style={{ color: 'var(--webik-cream)', fontSize: 'clamp(28px, 5vw, 72px)', letterSpacing: '-0.03em' }}
              >
                {project.liveDomain} →
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] mt-5 transition-colors duration-500 group-hover:[color:var(--webik-dark)]" style={{ color: 'var(--webik-muted)' }}>
                View the live deployment in a new tab.
              </p>
            </a>
          </div>
        </section>

        {/* ── SECTION 6: BRAND SYSTEM ── */}
        <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
          <div className="max-w-[1440px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              <div className="cs-reveal">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-lime)', background: 'var(--webik-dark)', display: 'inline-block', padding: '4px 12px', borderRadius: 99 }}>03 / BRAND SYSTEM</p>
                <h2 className="font-grotesk font-light text-3xl lg:text-4xl mt-6 leading-tight" style={{ color: 'var(--webik-dark)' }}>Typography & palette.</h2>
              </div>
              <div className="lg:col-span-2 space-y-8">
                {/* Typography Panel */}
                <div className="cs-reveal rounded-xl p-8 lg:p-10" style={{ background: 'var(--webik-cream-2)' }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--webik-muted)' }}>Typography</p>
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="shrink-0">
                      <p className="font-grotesk font-light" style={{ fontSize: 120, lineHeight: 1, color: 'var(--webik-dark)' }}>Aa</p>
                      <p className="font-inter font-semibold text-sm mt-3" style={{ color: 'var(--webik-dark)' }}>{project.typography.primary}</p>
                      <p className="font-inter text-xs mt-1" style={{ color: 'var(--webik-muted)' }}>Display / {project.typography.body} Body</p>
                    </div>
                    <div className="flex-1 space-y-2 border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-8" style={{ borderColor: 'rgba(14,26,10,0.1)' }}>
                      {project.typography.scale.map(s => (
                        <div key={s.label} className="flex items-baseline gap-4">
                          <span className="font-mono text-[10px] w-10 shrink-0" style={{ color: 'var(--webik-muted)' }}>{s.label}</span>
                          <span className="font-inter font-semibold" style={{ fontSize: s.size === '76px' ? 28 : s.size === '42px' ? 22 : s.size === '32px' ? 18 : s.size === '28px' ? 16 : 14, color: 'var(--webik-dark)' }}>{project.title}</span>
                          <span className="font-mono text-[10px] ml-auto" style={{ color: 'var(--webik-muted)' }}>{s.size}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Color Palette Panel */}
                <div className="cs-reveal cs-reveal-delay-1 rounded-xl p-8 lg:p-10" style={{ background: 'var(--webik-cream-2)' }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--webik-muted)' }}>Color Palette</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                    {project.palette.map((color, i) => (
                      <ColorSwatch key={i} {...color} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: PAGE TOUR ── */}
        <section className="relative py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-dark)' }}>
          <GrainOverlay />
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="cs-reveal mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>Page Tour</span>
              <h2 className="font-grotesk font-light text-4xl lg:text-5xl mt-4 leading-tight" style={{ color: 'var(--webik-cream)' }}>Inside the build.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(245,243,236,0.1)' }}>
              {project.pageTour.map((page, i) => (
                <div
                  key={i}
                  className="cs-reveal p-8 lg:p-10 flex flex-col justify-between min-h-[260px] transition-colors duration-300"
                  style={{ background: 'var(--webik-dark)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-dark-2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-dark)'}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>{page.label}</span>
                  <div>
                    <h3 className="font-grotesk font-light text-4xl lg:text-5xl mt-auto leading-tight" style={{ color: 'var(--webik-cream)', letterSpacing: '-0.03em' }}>{page.name}</h3>
                    <p className="font-inter text-sm mt-4 leading-relaxed" style={{ color: 'rgba(245,243,236,0.65)' }}>{page.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 8: TECH STACK ── */}
        <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
          <div className="max-w-[1440px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              <div className="cs-reveal">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-lime)', background: 'var(--webik-dark)', display: 'inline-block', padding: '4px 12px', borderRadius: 99 }}>04 / UNDER THE HOOD</p>
                <h2 className="font-grotesk font-light text-3xl lg:text-4xl mt-6 leading-tight" style={{ color: 'var(--webik-dark)' }}>Built with purpose.</h2>
              </div>
              <div className="lg:col-span-2 cs-reveal cs-reveal-delay-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--webik-muted)' }}>Tech Stack & Services</p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 rounded-full font-inter text-sm font-medium"
                      style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Custom Design', 'Mobile-First', 'SEO + AEO Schema', 'Performance Optimized'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 rounded-full font-inter text-sm"
                      style={{ border: '1px solid rgba(14,26,10,0.15)', color: 'var(--webik-muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 9: CLIENT QUOTE (conditional) ── */}
        {project.quote && (
          <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-lime)' }}>
            <div className="max-w-[900px] mx-auto text-center cs-reveal">
              <p className="font-grotesk font-light text-3xl lg:text-5xl leading-tight" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>
                "{project.quote.text}"
              </p>
              <div className="mt-10">
                <p className="font-inter font-semibold text-base" style={{ color: 'var(--webik-dark)' }}>{project.quote.author}</p>
                <p className="font-mono text-xs uppercase tracking-[0.15em] mt-1" style={{ color: 'rgba(14,26,10,0.6)' }}>{project.quote.role}</p>
              </div>
            </div>
          </section>
        )}

        {/* ── SECTION 10: NEXT PROJECT ── */}
        {nextProject && (
          <section className="py-12 lg:py-16 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
            <div className="max-w-[1440px] mx-auto">
              <Link
                to={`/work/${nextProject.slug}`}
                className="cs-reveal group block rounded-2xl p-12 lg:p-20 overflow-hidden relative transition-all duration-500"
                style={{ background: 'var(--webik-dark)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-dark-2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-dark)'}
              >
                {/* Lime shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(200,240,72,0.08), transparent 60%)' }} />
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--webik-lime)' }}>NEXT PROJECT →</p>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <h2 className="font-grotesk font-light leading-tight" style={{ color: 'var(--webik-cream)', fontSize: 'clamp(36px, 6vw, 96px)', letterSpacing: '-0.04em' }}>
                    {nextProject.title}
                  </h2>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full shrink-0" style={{ background: 'rgba(200,240,72,0.12)', border: '1px solid rgba(200,240,72,0.25)' }}>
                    <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: 'var(--webik-lime)' }}>{nextProject.category}</span>
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── SECTION 11: FINAL CTA ── */}
        <section className="relative py-32 lg:py-44 px-6 lg:px-12 text-center overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
          <GrainOverlay />
          <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(200,240,72,0.12), transparent 50%), radial-gradient(circle at 70% 50%, rgba(200,240,72,0.06), transparent 50%)' }} />
          <div className="max-w-[900px] mx-auto relative z-10 cs-reveal">
            <h2 className="font-grotesk font-light leading-[0.95] tracking-tight" style={{ color: 'var(--webik-cream)', fontSize: 'clamp(36px, 6vw, 96px)', letterSpacing: '-0.04em' }}>
              Want results like this?<br />Let's build your <em className="italic" style={{ color: 'var(--webik-lime)' }}>digital presence.</em>
            </h2>
            <p className="mt-6 lg:mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[520px] mx-auto" style={{ color: 'rgba(245,243,236,0.7)' }}>
              Free 15-minute discovery call. No pressure — just a conversation about whether we're the right partner for your business.
            </p>
            <a
              href="[CALENDLY_URL_PLACEHOLDER]"
              className="mt-10 lg:mt-14 inline-flex items-center gap-3 px-10 py-5 rounded-full font-inter font-medium text-base transition-all duration-300 group"
              style={{ background: 'var(--webik-lime)', color: 'var(--webik-dark)', border: '1px solid var(--webik-lime)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-cream)'; e.currentTarget.style.borderColor = 'var(--webik-cream)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--webik-lime)'; e.currentTarget.style.borderColor = 'var(--webik-lime)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Book a 15-min discovery call
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}