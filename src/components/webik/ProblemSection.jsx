import React, { useRef, useEffect } from 'react';

export default function ProblemSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('revealed');
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-24 lg:py-36 px-6 lg:px-12"
      style={{ background: 'var(--webik-cream)' }}>
      
      <div
        ref={sectionRef}
        className="max-w-[900px] mx-auto reveal-on-scroll">
        
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>
          Sound Familiar?
        </span>
        <h2
          className="font-grotesk font-light mt-5 leading-[1.05]"
          style={{ color: 'var(--webik-dark)', fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.03em' }}>
          
          Build a Digital Presence<br />You Truly Own
        </h2>

        <div className="mt-10 space-y-6 max-w-[680px]">
          <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
            Most businesses are pouring time, energy, and money into platforms they don't own, such as Facebook pages, Instagram profiles, and other rented digital spaces.
          </p>
          <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
            One algorithm change, one suspended account, or one platform update can significantly impact the audience you've worked hard to build.
          </p>
          <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
            Your business deserves better than that. It deserves a digital presence that's truly yours, built to convert, built to last, and built to grow with you. <span style={{ fontWeight: 700, color: 'var(--webik-dark)' }}>That's what we do at Webik Corp.</span>
          </p>
        </div>
      </div>
    </section>);

}