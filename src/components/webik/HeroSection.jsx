import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const wRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Background W fades in over 1.5s
    if (wRef.current) {
      wRef.current.style.opacity = '0';
      wRef.current.style.transition = 'opacity 1.5s ease-out';
      requestAnimationFrame(() => {
        setTimeout(() => { if (wRef.current) wRef.current.style.opacity = '0.2'; }, 100);
      });
    }

    // Staggered headline lines: 0ms, 200ms, 400ms, 600ms
    const els = [line1Ref.current, line2Ref.current, subRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
      setTimeout(() => {
        if (el) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      }, 100 + i * 200);
    });
  }, []);

  return (
    <section className="relative bg-[var(--webik-cream)] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 px-6 lg:px-12">
      {/* Background decorative W pattern */}
      <div
        ref={wRef}
        className="absolute right-[-5vw] top-0 h-full w-[55vw] select-none pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0 }}
      >
        <img
          src="https://media.base44.com/images/public/69ecce3288377cd246349884/848d53c15_Group5.png"
          alt=""
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Meta line */}
        <div ref={line1Ref} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[var(--webik-muted)] text-xs font-inter tracking-wide uppercase">
              SEC-Registered · Cebu, Philippines · Est. 2025
            </span>
          </div>
          <span className="text-[var(--webik-muted)] text-xs font-inter tracking-wide hidden lg:block">
            (01) Digital Legitimacy as a Service
          </span>
        </div>

        {/* Headline */}
        <h1 ref={line2Ref} className="font-grotesk font-light leading-[0.92] text-[var(--webik-dark)] text-[12vw] sm:text-[9vw] lg:text-[7.5vw] xl:text-[6.5vw] max-w-[1100px]">
          Premium digital presence,{' '}
          <em className="not-italic font-fraunces italic">accessible</em>{' '}
          <span className="relative inline-block">
            to all.
            <span className="absolute bottom-[0.08em] left-0 right-0 h-[0.3em] bg-[var(--webik-lime)] -z-10 rounded-sm"></span>
          </span>
        </h1>

        {/* Subhead */}
        <p ref={subRef} className="mt-8 lg:mt-10 max-w-[640px] text-[var(--webik-muted)] font-inter text-base lg:text-lg leading-relaxed">
          We're a Cebu-based digital agency building future-ready websites for SMEs. AI-accelerated workflows. Human-perfected design. Built to be found by Google, ChatGPT, and Siri — not just look good on a moodboard.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[var(--webik-dark)] text-[var(--webik-cream)] px-7 py-3.5 rounded-full text-sm font-inter font-medium hover:bg-[var(--webik-dark-2)] transition-colors group"
          >
            Book a 15-min discovery call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#work"
            className="text-[var(--webik-dark)] font-inter text-sm font-medium hover:text-[var(--webik-muted)] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See our work →
          </a>
        </div>
      </div>
    </section>
  );
}