import React from 'react';
import { ArrowRight } from 'lucide-react';
import GrainOverlay from './GrainOverlay';

export default function FinalCTA() {
  return (
    <section id="book" className="relative bg-[var(--webik-dark)] py-24 lg:py-40 px-6 lg:px-12 text-center">
      <GrainOverlay />
      <div className="max-w-[900px] mx-auto relative z-10">
        <h2 className="font-fraunces font-light text-[var(--webik-cream)] text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.95]">
          Ready to launch your{' '}
          <em className="italic">
            <span className="relative inline-block">
              digital presence?
              <span className="absolute bottom-[0.05em] left-0 right-0 h-[0.25em] bg-[var(--webik-lime)] -z-10 rounded-sm"></span>
            </span>
          </em>
        </h2>
        <p className="mt-6 lg:mt-8 text-[var(--webik-muted)] font-inter text-base lg:text-lg leading-relaxed max-w-[560px] mx-auto">
          Free 15-minute discovery call. No pressure, no pitch deck — just a conversation about whether we're the right partner for your business.
        </p>
        <a
          href="[CALENDLY_URL_PLACEHOLDER]"
          className="mt-8 lg:mt-10 inline-flex items-center gap-2 bg-[var(--webik-lime)] text-[var(--webik-dark)] px-8 py-4 rounded-full text-sm font-inter font-semibold hover:brightness-110 transition-all group"
        >
          Book a 15-min discovery call
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}