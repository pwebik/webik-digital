import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import StickyNav from '../components/webik/StickyNav';
import Footer from '../components/webik/Footer';
import GrainOverlay from '../components/webik/GrainOverlay';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';

const signs = [
  { num: '01', title: 'You Are Not Showing Up on Google', preview: 'If someone in your city searches for what you do and your business does not appear in the results, you are invisible to your best potential clients.' },
  { num: '02', title: 'Your Website Does Not Work on Mobile', preview: 'More than 60% of web traffic comes from mobile. If your site is broken on a phone, you are losing more than half your visitors before they read a word.' },
  { num: '03', title: 'Visitors Leave Without Doing Anything', preview: 'High bounce rates mean something is broken — the design, the messaging, or the call to action. Your website is failing its most basic job.' },
  { num: '04', title: 'Your Website Looks Like It Was Built a Decade Ago', preview: 'Design is credibility. An outdated website tells visitors — before they read anything — that you are not invested in your own business.' },
  { num: '05', title: 'Your Entire Digital Presence Lives on Social Media', preview: 'A Facebook page with thousands of followers is not a digital presence. It is a tenant arrangement on land you do not own.' },
];

const pageVars = {
  '--webik-lime': '#C8F048',
  '--webik-dark': '#0E1A0A',
  '--webik-dark-2': '#15240F',
  '--webik-cream': '#F5F3EC',
  '--webik-cream-2': '#EBE8DD',
  '--webik-muted': '#6B7560',
};

export default function LeadMagnet() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await base44.functions.invoke('sendLeadMagnet', { name: form.name, email: form.email });
    if (res?.data?.success) {
      setSubmitted(true);
    } else {
      alert('Something went wrong. Please try again or email pryce@webikdigital.com');
    }
    setLoading(false);
  };

  return (
    <div style={pageVars}>
      <StickyNav />

      {/* Hero */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'radial-gradient(circle at 25% 60%, rgba(200,240,72,0.1), transparent 50%)' }} />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(200,240,72,0.12)', color: 'var(--webik-lime)' }}>
                Free Guide
              </span>
              <h1
                className="font-fraunces italic font-light leading-[1.05]"
                style={{ color: 'var(--webik-cream)', fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-0.02em' }}
              >
                5 Signs Your Website Is Losing You Clients
              </h1>
              <p className="mt-6 font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.65)' }}>
                Most businesses do not lose clients because of a bad product or service. They lose them because their digital presence does not match the quality of what they actually do.
              </p>
              <p className="mt-4 font-inter text-sm leading-relaxed" style={{ color: 'rgba(245,243,236,0.45)' }}>
                This guide walks through 5 warning signs — and the fix for each one. Free, no catch.
              </p>
            </div>

            {/* Form */}
            <div className="rounded-2xl p-8 lg:p-10" style={{ background: 'var(--webik-cream)' }}>
              {submitted ? (
                <div className="flex flex-col items-start gap-4 py-8">
                  <CheckCircle size={40} style={{ color: 'var(--webik-lime)' }} />
                  <h2 className="font-fraunces italic font-light text-2xl lg:text-3xl" style={{ color: 'var(--webik-dark)' }}>
                    On its way to your inbox.
                  </h2>
                  <p className="font-inter text-base leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
                    Check your email for the full guide. If you do not see it within a few minutes, check your spam folder.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-inter font-medium text-sm transition-all duration-300"
                    style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
                  >
                    See What We Can Do Together <ArrowUpRight size={16} />
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="font-fraunces italic font-light text-2xl lg:text-3xl mb-2" style={{ color: 'var(--webik-dark)' }}>
                    Get the Free Guide
                  </h2>
                  <p className="font-inter text-sm mb-8" style={{ color: 'var(--webik-muted)' }}>
                    We will send it to your inbox instantly. No spam, ever.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--webik-muted)' }}>Your Name</label>
                      <input
                        type="text"
                        placeholder="First and last name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full font-inter text-sm px-5 py-3.5 rounded-xl border outline-none transition-all"
                        style={{ background: 'var(--webik-cream-2)', border: '1px solid rgba(14,26,10,0.15)', color: 'var(--webik-dark)' }}
                        onFocus={e => e.currentTarget.style.border = '1px solid var(--webik-dark)'}
                        onBlur={e => e.currentTarget.style.border = '1px solid rgba(14,26,10,0.15)'}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--webik-muted)' }}>Email Address <span style={{ color: 'var(--webik-dark)' }}>*</span></label>
                      <input
                        type="email"
                        required
                        placeholder="We will send the guide here"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full font-inter text-sm px-5 py-3.5 rounded-xl border outline-none transition-all"
                        style={{ background: 'var(--webik-cream-2)', border: '1px solid rgba(14,26,10,0.15)', color: 'var(--webik-dark)' }}
                        onFocus={e => e.currentTarget.style.border = '1px solid var(--webik-dark)'}
                        onBlur={e => e.currentTarget.style.border = '1px solid rgba(14,26,10,0.15)'}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300"
                      style={{ background: loading ? 'rgba(14,26,10,0.5)' : 'var(--webik-dark)', color: 'var(--webik-cream)', cursor: loading ? 'not-allowed' : 'pointer' }}
                      onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'var(--webik-dark-2)'; }}
                      onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--webik-dark)'; }}
                    >
                      {loading ? 'Sending…' : 'Get the Free Guide'}
                      {!loading && <ArrowUpRight size={16} />}
                    </button>
                  </form>
                  <p className="mt-4 font-mono text-[10px] text-center uppercase tracking-[0.15em]" style={{ color: 'rgba(14,26,10,0.35)' }}>No spam. Unsubscribe anytime.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Preview of signs */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>What's Inside</span>
          <h2 className="font-fraunces italic font-light text-3xl lg:text-4xl mt-4 mb-12" style={{ color: 'var(--webik-dark)' }}>
            A quick look at what the guide covers.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--webik-cream-2)' }}>
            {signs.map((sign, i) => (
              <div key={i} className="p-8 transition-colors duration-400" style={{ background: 'var(--webik-cream)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-cream-2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-cream)'}
              >
                <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: 'var(--webik-lime)' }}>SIGN {sign.num}</span>
                <h3 className="font-fraunces italic font-light text-xl mt-3 mb-3 leading-snug" style={{ color: 'var(--webik-dark)' }}>{sign.title}</h3>
                <p className="font-inter text-sm leading-relaxed" style={{ color: 'var(--webik-muted)' }}>{sign.preview}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: 'rgba(14,26,10,0.3)' }}>Full explanation + fix inside ↓</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}