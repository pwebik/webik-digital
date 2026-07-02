import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div
      className="relative overflow-hidden py-3.5"
      style={{ background: 'var(--webik-dark)', borderBottom: '2px solid var(--webik-lime)' }}
    >
      {/* Animated lime glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at left center, rgba(200,240,72,0.15) 0%, transparent 50%), radial-gradient(ellipse at right center, rgba(200,240,72,0.1) 0%, transparent 50%)',
        }}
      />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-center gap-3 text-center relative z-10">
        <Flame size={18} className="flex-shrink-0 animate-pulse" style={{ color: 'var(--webik-lime)' }} />
        <p className="font-inter text-sm sm:text-base font-medium leading-tight" style={{ color: 'var(--webik-cream)' }}>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] mr-2" style={{ color: 'var(--webik-lime)' }}>
            Special Launch Offer
          </span>
          <span className="hidden sm:inline">50% off for the first 10 signed clients. </span>
          <span className="sm:hidden">50% off first 10 clients. </span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 font-semibold underline decoration-2 underline-offset-2 transition-colors hover:opacity-80"
            style={{ color: 'var(--webik-lime)' }}
          >
            Message Us
            <ArrowRight size={14} className="inline-block" />
          </Link>
          <span className="ml-1">to claim your slot.</span>
        </p>
      </div>
    </div>
  );
}