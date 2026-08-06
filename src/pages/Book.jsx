import React, { useState, useMemo } from 'react';
import { Calendar, Clock, Video, Check, ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import GrainOverlay from '@/components/webik/GrainOverlay';
import HeroBackground from '@/components/webik/HeroBackground';
import BookingCalendar from '@/components/webik/BookingCalendar';
import { base44 } from '@/api/base44Client';

const pageVars = {
  '--webik-lime': '#C8F048',
  '--webik-dark': '#0E1A0A',
  '--webik-dark-2': '#15240F',
  '--webik-cream': '#F5F3EC',
  '--webik-cream-2': '#EBE8DD',
  '--webik-muted': '#6B7560',
};

function toDateStr(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

const PH_TZ = 'Asia/Manila';

function generateSlots(dateStr) {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 20) {
      const dt = new Date(`${dateStr}T${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:00+08:00`);
      slots.push(dt);
    }
  }
  return slots;
}

function isSlotBusy(slotStart, busyIntervals) {
  const slotEnd = new Date(slotStart.getTime() + 20 * 60000);
  return busyIntervals.some(interval => {
    const bStart = new Date(interval.start);
    const bEnd = new Date(interval.end);
    return slotStart < bEnd && slotEnd > bStart;
  });
}

const inputStyle = {
  background: 'var(--webik-cream)',
  border: '1px solid rgba(14,26,10,0.12)',
  color: 'var(--webik-dark)',
};

export default function Book() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [busy, setBusy] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booking, setBooking] = useState(false);
  const [booked, setBooked] = useState(null);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', notes: '' });

  const timezone = PH_TZ;

  const handleDateSelect = async (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setError(null);
    setLoadingSlots(true);

    const dateStr = toDateStr(date);
    const timeMin = new Date(`${dateStr}T00:00:00+08:00`).toISOString();
    const timeMax = new Date(`${dateStr}T23:59:59+08:00`).toISOString();

    try {
      const res = await base44.functions.invoke('manageBooking', {
        action: 'getAvailability',
        timeMin,
        timeMax,
      });
      setBusy(res.data.busy || []);
    } catch {
      setError('Could not load availability. Please try again.');
    }
    setLoadingSlots(false);
  };

  const availableSlots = useMemo(() => {
    if (!selectedDate) return [];
    const dateStr = toDateStr(selectedDate);
    const now = new Date();
    return generateSlots(dateStr).filter(slot => {
      if (slot < now) return false;
      return !isSlotBusy(slot, busy);
    });
  }, [selectedDate, busy]);

  const handleBook = async (e) => {
    e.preventDefault();
    setBooking(true);
    setError(null);
    try {
      const res = await base44.functions.invoke('manageBooking', {
        action: 'bookCall',
        startISO: selectedSlot.toISOString(),
        name: form.name,
        email: form.email,
        notes: form.notes,
        timezone,
      });
      if (res.data.success) {
        setBooked({ slot: selectedSlot, meetLink: res.data.meetLink });
      } else {
        setError(res.data.error || 'Booking failed.');
      }
    } catch {
      setError('Booking failed. Please try again or email us at pryce@webikdigital.com');
    }
    setBooking(false);
  };

  const formatSlot = (date) =>
    date.toLocaleString('en-US', { weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: PH_TZ });

  return (
    <div style={pageVars}>
      <StickyNav />

      {/* Hero */}
      <section className="relative bg-[var(--webik-dark)] pt-24 pb-20 lg:pt-32 lg:pb-28 px-6 lg:px-12 overflow-hidden">
        <GrainOverlay />
        <HeroBackground />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>Book a Call</span>
          <h1
            className="font-grotesk font-light leading-[1.0] mt-6 tracking-tight"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(42px, 7vw, 110px)', letterSpacing: '-0.04em' }}
          >
            Let's Find a Time<br />That Works for You.
          </h1>
          <p className="mt-6 font-inter text-base lg:text-lg leading-relaxed max-w-[520px]" style={{ color: 'rgba(245,243,236,0.65)' }}>
            Pick a slot below for a free 20-minute discovery call. No pitch — just an honest conversation about your business and where you want to go.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2.5 font-inter text-sm" style={{ color: 'rgba(245,243,236,0.5)' }}>
              <Clock size={16} style={{ color: 'var(--webik-lime)' }} /> 20 minutes
            </div>
            <div className="flex items-center gap-2.5 font-inter text-sm" style={{ color: 'rgba(245,243,236,0.5)' }}>
              <Video size={16} style={{ color: 'var(--webik-lime)' }} /> Google Meet
            </div>
            <div className="flex items-center gap-2.5 font-inter text-sm" style={{ color: 'rgba(245,243,236,0.5)' }}>
              <Calendar size={16} style={{ color: 'var(--webik-lime)' }} /> 24/7 Availability {timezone ? `(${timezone.split('/').pop().replace(/_/g, ' ')})` : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Booking interface */}
      <section className="bg-[var(--webik-cream)] py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto">
          {booked ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center text-center py-12 lg:py-20">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8" style={{ background: 'var(--webik-dark)' }}>
                <Check size={36} style={{ color: 'var(--webik-lime)' }} />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-muted)' }}>Confirmed</span>
              <h2 className="font-grotesk font-light text-3xl lg:text-5xl mb-4" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>
                You're booked in.
              </h2>
              <p className="font-inter text-base lg:text-lg leading-relaxed max-w-[480px] mb-2" style={{ color: 'var(--webik-muted)' }}>
                We've sent a confirmation to <span style={{ color: 'var(--webik-dark)' }}>{form.email}</span> with all the details.
              </p>
              <p className="font-grotesk text-xl mt-6" style={{ color: 'var(--webik-dark)' }}>
                {formatSlot(booked.slot)}
              </p>
              {booked.meetLink && (
                <a
                  href={booked.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-inter text-sm font-medium underline underline-offset-4"
                  style={{ color: 'var(--webik-dark)' }}
                >
                  <Video size={16} /> Google Meet link
                </a>
              )}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-inter font-medium text-sm transition-all duration-300"
                  style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
                >
                  <ArrowLeft size={16} /> Back to Home
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-inter font-medium text-sm transition-all duration-300"
                  style={{ border: '1px solid rgba(14,26,10,0.15)', color: 'var(--webik-dark)' }}
                >
                  Browse Our Work
                </Link>
              </div>
            </div>
          ) : (
            /* ── Booking flow ── */
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Calendar */}
              <div className="lg:col-span-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] mb-5 block" style={{ color: 'var(--webik-muted)' }}>Step 1 — Pick a Date</span>
                <div className="p-6 rounded-2xl" style={{ background: 'var(--webik-cream-2)', border: '1px solid rgba(14,26,10,0.06)' }}>
                  <BookingCalendar selectedDate={selectedDate} onSelect={handleDateSelect} maxDays={14} />
                </div>
              </div>

              {/* Slots + Form */}
              <div className="lg:col-span-3">
                {!selectedDate ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 px-6 rounded-2xl" style={{ border: '2px dashed rgba(14,26,10,0.1)' }}>
                    <Calendar size={40} style={{ color: 'var(--webik-muted)', opacity: 0.4 }} />
                    <p className="mt-4 font-inter text-sm" style={{ color: 'var(--webik-muted)' }}>
                      Select a date to see available times.
                    </p>
                  </div>
                ) : !selectedSlot ? (
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] mb-5 block" style={{ color: 'var(--webik-muted)' }}>
                      Step 2 — Choose a Time · {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </span>
                    {error ? (
                      <p className="font-inter text-sm" style={{ color: 'var(--webik-dark)' }}>{error}</p>
                    ) : loadingSlots ? (
                      <div className="flex items-center gap-3 py-8">
                        <Loader2 size={20} className="animate-spin" style={{ color: 'var(--webik-muted)' }} />
                        <span className="font-inter text-sm" style={{ color: 'var(--webik-muted)' }}>Loading availability…</span>
                      </div>
                    ) : availableSlots.length === 0 ? (
                      <div className="flex flex-col items-center text-center py-12 px-6 rounded-2xl" style={{ border: '2px dashed rgba(14,26,10,0.1)' }}>
                        <Clock size={32} style={{ color: 'var(--webik-muted)', opacity: 0.4 }} />
                        <p className="mt-4 font-inter text-sm" style={{ color: 'var(--webik-muted)' }}>
                          No slots available on this day. Try another date.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {availableSlots.map((slot, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedSlot(slot)}
                            className="px-4 py-3 rounded-xl font-inter text-sm font-medium transition-all"
                            style={{ border: '1px solid rgba(14,26,10,0.1)', color: 'var(--webik-dark)', background: 'var(--webik-cream-2)' }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-dark)'; e.currentTarget.style.color = 'var(--webik-cream)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'var(--webik-cream-2)'; e.currentTarget.style.color = 'var(--webik-dark)'; }}
                          >
                            {slot.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: PH_TZ })}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Booking form */
                  <div>
                    <button
                      onClick={() => setSelectedSlot(null)}
                      className="inline-flex items-center gap-1.5 font-inter text-sm mb-6 hover:underline"
                      style={{ color: 'var(--webik-muted)' }}
                    >
                      <ArrowLeft size={14} /> Back to time slots
                    </button>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] mb-3 block" style={{ color: 'var(--webik-muted)' }}>Step 3 — Your Details</span>
                    <div className="p-5 rounded-2xl mb-6" style={{ background: 'var(--webik-cream-2)', border: '1px solid rgba(14,26,10,0.06)' }}>
                      <p className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--webik-muted)' }}>Selected Slot</p>
                      <p className="font-grotesk text-lg" style={{ color: 'var(--webik-dark)' }}>{formatSlot(selectedSlot)}</p>
                      <p className="font-inter text-sm mt-1" style={{ color: 'var(--webik-muted)' }}>20-minute discovery call via Google Meet</p>
                    </div>
                    <form onSubmit={handleBook} className="space-y-5">
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--webik-muted)' }}>
                          Your Name <span style={{ color: 'var(--webik-dark)' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="First and last name"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full font-inter text-sm px-5 py-3.5 rounded-xl border outline-none transition-all"
                          style={inputStyle}
                          onFocus={e => e.currentTarget.style.border = '1px solid var(--webik-dark)'}
                          onBlur={e => e.currentTarget.style.border = '1px solid rgba(14,26,10,0.12)'}
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--webik-muted)' }}>
                          Email Address <span style={{ color: 'var(--webik-dark)' }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="We'll send the confirmation here"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full font-inter text-sm px-5 py-3.5 rounded-xl border outline-none transition-all"
                          style={inputStyle}
                          onFocus={e => e.currentTarget.style.border = '1px solid var(--webik-dark)'}
                          onBlur={e => e.currentTarget.style.border = '1px solid rgba(14,26,10,0.12)'}
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--webik-muted)' }}>
                          Anything You'd Like to Cover
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Optional — tell us a bit about your business or what you're looking for"
                          value={form.notes}
                          onChange={e => setForm({ ...form, notes: e.target.value })}
                          className="w-full font-inter text-sm px-5 py-3.5 rounded-xl border outline-none transition-all resize-none"
                          style={inputStyle}
                          onFocus={e => e.currentTarget.style.border = '1px solid var(--webik-dark)'}
                          onBlur={e => e.currentTarget.style.border = '1px solid rgba(14,26,10,0.12)'}
                        />
                      </div>
                      {error && <p className="font-inter text-sm" style={{ color: '#c44' }}>{error}</p>}
                      <button
                        type="submit"
                        disabled={booking}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300"
                        style={{ background: booking ? 'rgba(14,26,10,0.5)' : 'var(--webik-dark)', color: 'var(--webik-cream)', cursor: booking ? 'not-allowed' : 'pointer' }}
                        onMouseEnter={e => { if (!booking) e.currentTarget.style.background = 'var(--webik-dark-2)'; }}
                        onMouseLeave={e => { if (!booking) e.currentTarget.style.background = 'var(--webik-dark)'; }}
                      >
                        {booking ? (
                          <><Loader2 size={16} className="animate-spin" /> Booking…</>
                        ) : (
                          <>Confirm Booking <Check size={16} /></>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}