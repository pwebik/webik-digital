import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--webik-cream)] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 px-6 lg:px-12">
      {/* Background W */}
      <div
        className="absolute right-[-10vw] top-[-5vw] text-[50vw] font-fraunces italic font-light leading-none select-none pointer-events-none"
        style={{ color: 'var(--webik-lime)', opacity: 0.18 }}
        aria-hidden="true"
      >
        W
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Meta line */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 lg:mb-16">
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
        <h1 className="font-fraunces font-light leading-[0.92] text-[var(--webik-dark)] text-[12vw] sm:text-[9vw] lg:text-[7.5vw] xl:text-[6.5vw] max-w-[1100px]">
          Premium digital presence,{' '}
          <em className="not-italic font-fraunces italic">accessible</em>{' '}
          <span className="relative inline-block">
            to all.
            <span className="absolute bottom-[0.08em] left-0 right-0 h-[0.3em] bg-[var(--webik-lime)] -z-10 rounded-sm"></span>
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-8 lg:mt-10 max-w-[640px] text-[var(--webik-muted)] font-inter text-base lg:text-lg leading-relaxed">
          We're a Cebu-based digital agency building future-ready websites for SMEs. AI-accelerated workflows. Human-perfected design. Built to be found by Google, ChatGPT, and Siri — not just look good on a moodboard.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="[CALENDLY_URL_PLACEHOLDER]"
            className="inline-flex items-center gap-2 bg-[var(--webik-dark)] text-[var(--webik-cream)] px-7 py-3.5 rounded-full text-sm font-inter font-medium hover:bg-[var(--webik-dark-2)] transition-colors group"
          >
            Book a 15-min discovery call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
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