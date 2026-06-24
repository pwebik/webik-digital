import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GrainOverlay from './GrainOverlay';

const testimonials = [
  {
    quote: "Working with Pryce on our website, thegenesiscompany.com, was a fantastic experience. He was very responsive, professional, and quick to turn things around without sacrificing quality. Pryce took the time to understand our needs, offered thoughtful options, and made the entire process smooth and stress-free. He's accommodating and very easy to work with. Highly recommend!",
    name: 'Tiana Emery',
    role: 'Director of Client Value — The Genesis Company',
  },
  {
    quote: "Pryce was a pleasure to work with from start to finish. He took the time to understand our brand, our goals, and our audience, and turned that into a clean, professional, and engaging website that we're proud of. His creativity, technical skills, and attention to detail were matched by his excellent communication and responsiveness throughout the process. I would happily recommend Pryce to anyone looking for a talented and reliable web designer.",
    name: 'Lewis Normoyle',
    role: 'Chief of Operations, LearnPac Systems Inc.',
  },
  {
    quote: "We hired Webik Digital to build the websites and landing pages for two of our companies, and they did an excellent job. Alfred Achurra was our main contact and was great to work with throughout the process. The entire experience was very smooth and well executed. They listened to our needs, were quick to make changes, and paid attention to the details. The finished websites look clean, professional, and function exactly the way we intended. Really happy with the result and would gladly work with Pryce, Alfred, and the team again.",
    name: 'Samuel Herschorn',
    role: 'CEO and Founder, Biosis Designs',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const goTo = useCallback((idx) => {
    const n = testimonials.length;
    setActive((idx + n) % n);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section
      className="relative py-24 lg:py-32 px-6 lg:px-12 overflow-hidden"
      style={{ background: 'var(--webik-dark)' }}
    >
      <GrainOverlay />
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>
              ( What Clients Say )
            </span>
            <h2
              className="font-grotesk font-light mt-5"
              style={{ color: 'var(--webik-cream)', fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.03em' }}
            >
              Do Not Take Our Word for It.
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(200,240,72,0.25)', color: 'var(--webik-cream)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--webik-lime)'; e.currentTarget.style.color = 'var(--webik-lime)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,240,72,0.25)'; e.currentTarget.style.color = 'var(--webik-cream)'; }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(200,240,72,0.25)', color: 'var(--webik-cream)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--webik-lime)'; e.currentTarget.style.color = 'var(--webik-lime)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,240,72,0.25)'; e.currentTarget.style.color = 'var(--webik-cream)'; }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div className="mt-12 relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="w-full flex-shrink-0 px-0.5">
                <div
                  className="rounded-2xl p-8 lg:p-12 flex flex-col justify-between min-h-[340px] lg:min-h-[320px]"
                  style={{ background: 'var(--webik-dark-2)', border: '1px solid rgba(200,240,72,0.12)' }}
                >
                  <div>
                    <span className="font-grotesk text-5xl lg:text-6xl leading-none block mb-4" style={{ color: 'var(--webik-lime)' }}>"</span>
                    <p
                      className="font-grotesk font-light text-lg lg:text-2xl leading-relaxed"
                      style={{ color: 'var(--webik-cream)' }}
                    >
                      {item.quote}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(245,243,236,0.08)' }}>
                    <p className="font-inter font-medium text-sm" style={{ color: 'var(--webik-cream)' }}>{item.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] mt-1" style={{ color: 'var(--webik-lime)' }}>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? '32px' : '8px',
                height: '8px',
                background: i === active ? 'var(--webik-lime)' : 'rgba(245,243,236,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}