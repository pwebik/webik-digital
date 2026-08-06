import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import StickyNav from '../components/webik/StickyNav';
import Footer from '../components/webik/Footer';
import GrainOverlay from '../components/webik/GrainOverlay';
import HeroBackground from '../components/webik/HeroBackground';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';

const pageVars = {
  '--webik-lime': '#C8F048',
  '--webik-dark': '#0E1A0A',
  '--webik-dark-2': '#15240F',
  '--webik-cream': '#F5F3EC',
  '--webik-cream-2': '#EBE8DD',
  '--webik-muted': '#6B7560',
};

const nextSteps = [
  'We read your message or receive your booking within one business day.',
  'We reach out to confirm a time for a free discovery call — usually 20 to 30 minutes.',
  'On the call, we ask about your business, your goals, and what is not working right now. No pitch.',
  'Within a few days, we send a clear proposal scoped to exactly what you need.',
  'You decide. No pressure, no follow-up calls if you are not ready.',
];

const inputStyle = {
  background: 'var(--webik-cream-2)',
  border: '1px solid rgba(14,26,10,0.15)',
  color: 'var(--webik-dark)',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', businessName: '', email: '', lookingFor: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await base44.functions.invoke('sendContactEmail', {
      name: form.name,
      email: form.email,
      phone: '',
      message: `Business: ${form.businessName}\n\nLooking for: ${form.lookingFor}\n\nAdditional context:\n${form.message}`,
    });
    if (res?.data?.success) {
      setSubmitted(true);
    } else {
      alert('Something went wrong. Please try again or email us directly at pryce@webikdigital.com');
    }
    setLoading(false);
  };

  return (
    <div style={pageVars}>
      <StickyNav />

      {/* Hero */}
      <section className="relative bg-[var(--webik-dark)] pt-24 pb-20 lg:pt-32 lg:pb-28 px-6 lg:px-12 overflow-hidden">
        <GrainOverlay />
        <HeroBackground />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>Contact</span>
          <h1
            className="font-grotesk font-light leading-[1.0] mt-6 tracking-tight"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(42px, 7vw, 110px)', letterSpacing: '-0.04em' }}
          >
            Let's Figure Out What You Need.
          </h1>
          <p className="mt-6 font-inter text-base lg:text-lg leading-relaxed max-w-[520px]" style={{ color: 'rgba(245,243,236,0.65)' }}>
            You do not need to arrive with a full brief. Most of our best client relationships started with one honest conversation about where a business was and where it wanted to go. That is what the first call is for.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300"
              style={{ background: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-cream)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--webik-lime)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              See What We Can Do Together
              <ArrowUpRight size={16} />
            </Link>
            <p className="mt-3 font-inter text-sm" style={{ color: 'rgba(245,243,236,0.55)' }}>
              Prefer to pick a time yourself?{' '}
              <Link to="/book" className="underline underline-offset-2 hover:text-[var(--webik-lime)] transition-colors" style={{ color: 'var(--webik-lime)' }}>
                Book a 20-min discovery call →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section id="contact-form" className="bg-[var(--webik-cream)] py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

            {/* Left info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-muted)' }}>Email</p>
                <a href="mailto:pryce@webikdigital.com" className="font-grotesk text-lg font-medium text-[var(--webik-dark)] hover:text-[var(--webik-muted)] transition-colors">pryce@webikdigital.com</a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-muted)' }}>Phone</p>
                <a href="tel:+639273532498" className="font-grotesk text-lg font-medium text-[var(--webik-dark)] hover:text-[var(--webik-muted)] transition-colors">+63 927 353 2498</a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-muted)' }}>Office</p>
                <p className="font-inter text-sm leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
                  Suite 110 Centro Maximo Bldg.,<br />Dionisio Jakosalem St.,<br />Cebu City, Philippines 6000
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-muted)' }}>Response Time</p>
                <p className="font-inter text-sm" style={{ color: 'var(--webik-muted)' }}>Within one business day, Mon–Fri</p>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-3">
              <h2 className="font-grotesk font-light text-2xl lg:text-3xl mb-2" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>Or Send Us a Message</h2>
              <p className="font-inter text-sm mb-8" style={{ color: 'var(--webik-muted)' }}>Prefer to write it out first? Fill in the form below and we will come back to you within one business day.</p>

              {submitted ? (
                <div className="flex flex-col items-start justify-center min-h-[400px]">
                  <div className="inline-flex items-center px-5 py-2 rounded-full mb-8" style={{ background: 'rgba(200,240,72,0.15)', border: '1px solid rgba(200,240,72,0.3)' }}>
                    <span className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--webik-lime)' }}>Sent ✓</span>
                  </div>
                  <h3 className="font-grotesk font-light text-3xl lg:text-4xl" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>We got your message.</h3>
                  <p className="mt-4 font-inter text-base leading-relaxed" style={{ color: 'var(--webik-muted)', maxWidth: 420 }}>
                    Expect a reply within one business day. In the meantime, feel free to browse our work.
                  </p>
                  <Link to="/work" className="mt-8 inline-flex items-center gap-2 font-inter text-sm font-medium text-[var(--webik-dark)] underline underline-offset-4 hover:text-[var(--webik-muted)] transition-colors">
                    See our work →
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'First and last name', required: true },
                    { id: 'businessName', label: 'Your Business Name', type: 'text', placeholder: 'Or your own name if you are a solo operator', required: false },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'We will reply here', required: true },
                    { id: 'lookingFor', label: 'What You Are Looking For', type: 'text', placeholder: 'Website, branding, email design, not sure yet — all valid answers', required: false },
                  ].map(field => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--webik-muted)' }}>
                        {field.label} {field.required && <span style={{ color: 'var(--webik-dark)' }}>*</span>}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={form[field.id]}
                        onChange={handleChange}
                        className="w-full font-inter text-sm px-5 py-3.5 rounded-xl border outline-none transition-all"
                        style={inputStyle}
                        onFocus={e => e.currentTarget.style.border = '1px solid var(--webik-dark)'}
                        onBlur={e => e.currentTarget.style.border = '1px solid rgba(14,26,10,0.15)'}
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--webik-muted)' }}>
                      Anything Else We Should Know
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Optional — but the more context you give us, the better our first conversation will be"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full font-inter text-sm px-5 py-3.5 rounded-xl border outline-none transition-all resize-none"
                      style={inputStyle}
                      onFocus={e => e.currentTarget.style.border = '1px solid var(--webik-dark)'}
                      onBlur={e => e.currentTarget.style.border = '1px solid rgba(14,26,10,0.15)'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300"
                    style={{ background: loading ? 'rgba(14,26,10,0.5)' : 'var(--webik-dark)', color: 'var(--webik-cream)', cursor: loading ? 'not-allowed' : 'pointer' }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'var(--webik-dark-2)'; }}
                    onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--webik-dark)'; }}
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                    {!loading && <ArrowUpRight size={16} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream-2)' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>What Happens Next</span>
              <h2 className="font-grotesk font-light text-3xl lg:text-4xl mt-4" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>No Surprises. Here Is Exactly What to Expect.</h2>
              <div className="mt-10 space-y-6">
                {nextSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--webik-dark)' }}>
                      <span className="font-mono text-[11px] font-semibold" style={{ color: 'var(--webik-lime)' }}>{i + 1}</span>
                    </div>
                    <p className="font-inter text-base leading-relaxed pt-1" style={{ color: 'var(--webik-muted)' }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>A Few Things Worth Knowing</span>
              <h2 className="font-grotesk font-light text-3xl lg:text-4xl mt-4 mb-8" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>Worth reading before you reach out.</h2>
              <div className="space-y-6">
                {[
                  'We do not publish our pricing publicly — not because we are hiding anything, but because every project is different. The call is where we figure out what makes sense for your situation.',
                  'We serve clients locally in Cebu and across the Philippines, and internationally in English-speaking markets. Time zone differences are not a barrier — we work across them regularly.',
                  'If the first call tells us we are not the right fit for what you need, we will tell you that directly. We would rather give you an honest answer than take a project that is not right for either of us.',
                ].map((para, i) => (
                  <p key={i} className="font-inter text-base leading-relaxed pb-6 border-b last:border-none" style={{ color: 'var(--webik-muted)', borderColor: 'var(--webik-cream)' }}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}