import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnnouncementBar from '../components/webik/AnnouncementBar';
import StickyNav from '../components/webik/StickyNav';
import Footer from '../components/webik/Footer';
import GrainOverlay from '../components/webik/GrainOverlay';
import { base44 } from '@/api/base44Client';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.integrations.Core.SendEmail({
      to: 'pryce@webikdigital.com',
      from_name: 'Webik Contact Form',
      subject: `New enquiry from ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`,
    });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{
      '--webik-lime': '#C8F048',
      '--webik-dark': '#0E1A0A',
      '--webik-dark-2': '#15240F',
      '--webik-cream': '#F5F3EC',
      '--webik-cream-2': '#EBE8DD',
      '--webik-muted': '#6B7560',
    }}>
      <AnnouncementBar />
      <StickyNav />

      {/* Hero */}
      <section className="relative bg-[var(--webik-dark)] pt-24 pb-20 lg:pt-32 lg:pb-28 px-6 lg:px-12 overflow-hidden">
        <GrainOverlay />
        <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'radial-gradient(circle at 20% 60%, rgba(200,240,72,0.1), transparent 50%)' }} />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( Contact )</span>
          <h1
            className="font-grotesk font-light leading-[0.95] mt-4 tracking-tight"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(44px, 8vw, 112px)', letterSpacing: '-0.04em' }}
          >
            Book a <span style={{ color: 'var(--webik-lime)' }}>15-min</span><br />discovery call.
          </h1>
          <p className="mt-6 font-inter text-base lg:text-lg leading-relaxed max-w-[520px]" style={{ color: 'rgba(245,243,236,0.65)' }}>
            No pressure, no pitch deck — just an honest conversation about your goals and whether we're the right fit.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-[var(--webik-cream)] py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

            {/* Left info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-muted)' }}>Email</p>
                <a href="mailto:pryce@webikdigital.com" className="font-grotesk text-lg font-medium text-[var(--webik-dark)] hover:text-[var(--webik-muted)] transition-colors">
                  pryce@webikdigital.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-muted)' }}>Phone</p>
                <a href="tel:+639273532498" className="font-grotesk text-lg font-medium text-[var(--webik-dark)] hover:text-[var(--webik-muted)] transition-colors">
                  +63 927 353 2498
                </a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-muted)' }}>Office</p>
                <p className="font-inter text-sm leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
                  Suite 110 Centro Maximo Bldg.,<br />Dionisio Jakosalem St.,<br />Cebu City, Philippines 6000
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-muted)' }}>Response Time</p>
                <p className="font-inter text-sm" style={{ color: 'var(--webik-muted)' }}>Within 24 hours, Mon–Fri</p>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-start justify-center min-h-[400px]">
                  <div className="inline-flex items-center px-5 py-2 rounded-full mb-8" style={{ background: 'rgba(200,240,72,0.15)', border: '1px solid rgba(200,240,72,0.3)' }}>
                    <span className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--webik-lime)' }}>Sent ✓</span>
                  </div>
                  <h2 className="font-grotesk font-semibold text-3xl lg:text-4xl text-[var(--webik-dark)] leading-tight">
                    We got your message.
                  </h2>
                  <p className="mt-4 font-inter text-base leading-relaxed" style={{ color: 'var(--webik-muted)', maxWidth: 420 }}>
                    Expect a reply from Pryce within 24 hours. In the meantime, feel free to browse our work.
                  </p>
                  <a href="/work" className="mt-8 inline-flex items-center gap-2 font-inter text-sm font-medium text-[var(--webik-dark)] underline underline-offset-4 hover:text-[var(--webik-muted)] transition-colors">
                    See our portfolio →
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Juan dela Cruz' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'juan@yourbusiness.com' },
                    { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+63 9XX XXX XXXX' },
                  ].map(field => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--webik-muted)' }}>
                        {field.label} <span style={{ color: 'var(--webik-dark)' }}>*</span>
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.id]}
                        onChange={handleChange}
                        className="w-full font-inter text-sm px-5 py-3.5 rounded-xl border outline-none transition-all"
                        style={{
                          background: 'var(--webik-cream-2)',
                          border: '1px solid rgba(14,26,10,0.15)',
                          color: 'var(--webik-dark)',
                        }}
                        onFocus={e => e.currentTarget.style.border = '1px solid var(--webik-dark)'}
                        onBlur={e => e.currentTarget.style.border = '1px solid rgba(14,26,10,0.15)'}
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--webik-muted)' }}>
                      Message <span style={{ color: 'var(--webik-dark)' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you're looking for..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full font-inter text-sm px-5 py-3.5 rounded-xl border outline-none transition-all resize-none"
                      style={{
                        background: 'var(--webik-cream-2)',
                        border: '1px solid rgba(14,26,10,0.15)',
                        color: 'var(--webik-dark)',
                      }}
                      onFocus={e => e.currentTarget.style.border = '1px solid var(--webik-dark)'}
                      onBlur={e => e.currentTarget.style.border = '1px solid rgba(14,26,10,0.15)'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300"
                    style={{
                      background: loading ? 'rgba(14,26,10,0.5)' : 'var(--webik-dark)',
                      color: 'var(--webik-cream)',
                      cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'var(--webik-dark-2)'; }}
                    onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--webik-dark)'; }}
                  >
                    {loading ? 'Sending…' : 'Send message'}
                    {!loading && <ArrowUpRight size={16} />}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}