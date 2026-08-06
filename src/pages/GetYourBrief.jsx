import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

const INDUSTRIES = [
  'Restaurant / Food & Beverage',
  'Law Firm / Legal',
  'E-commerce / Retail',
  'Healthcare / Medical',
  'Fitness / Wellness',
  'Real Estate',
  'Creative Agency / Studio',
  'Education',
  'SaaS / Tech',
  'Nonprofit',
  'Barbershop / Salon',
  'Other',
];

const BRAND_PERSONALITIES = [
  'Bold & Energetic',
  'Calm & Trustworthy',
  'Luxurious & Minimal',
  'Playful & Approachable',
  'Corporate & Authoritative',
  'Creative & Expressive',
  'Warm & Friendly',
  'Edgy & Unconventional',
];

const PAGE_OPTIONS = [
  'Home', 'About', 'Services', 'Portfolio / Work', 'Contact', 'Blog',
  'E-commerce / Shop', 'Booking / Reservations', 'Team / Staff',
  'Testimonials', 'Pricing', 'FAQ', 'Other',
];

const CONTENT_STATUSES = [
  'I have everything ready',
  'I have some content but need help',
  'I need content created from scratch',
];

const BUDGET_RANGES = [
  'Under $500',
  '$500 – $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000+',
  'Not sure yet',
];

const initialForm = {
  business_name: '',
  industry: '',
  target_audience: '',
  brand_personality: '',
  color_preferences: '',
  design_inspiration: '',
  pages_needed: [],
  content_status: '',
  competitors: '',
  goals: '',
  deadline: '',
  budget_range: '',
};

const REQUIRED_FIELDS = ['business_name', 'industry', 'target_audience', 'brand_personality', 'goals'];

export default function GetYourBrief() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const togglePage = (page) => {
    setForm((prev) => ({
      ...prev,
      pages_needed: prev.pages_needed.includes(page)
        ? prev.pages_needed.filter((p) => p !== page)
        : [...prev.pages_needed, page],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const missing = REQUIRED_FIELDS.filter((f) => !form[f]?.trim());
    if (missing.length > 0) {
      setError('Please fill in all required fields before submitting.');
      return;
    }

    setSubmitting(true);
    try {
      await base44.entities.ClientBrief.create({
        ...form,
        status: 'submitted',
      });
      setSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div
        style={{
          '--webik-lime': '#C8F048',
          '--webik-dark': '#0E1A0A',
          '--webik-dark-2': '#15240F',
          '--webik-cream': '#F5F3EC',
          '--webik-cream-2': '#EBE8DD',
          '--webik-muted': '#6B7560',
        }}
      >
        <StickyNav />
        <section
          className="min-h-[70vh] flex items-center justify-center px-6 py-20"
          style={{ background: 'var(--webik-cream)' }}
        >
          <div className="max-w-xl text-center">
            <div
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8"
              style={{ background: 'rgba(200,240,72,0.15)' }}
            >
              <CheckCircle2 size={40} style={{ color: 'var(--webik-dark)' }} />
            </div>
            <h1
              className="font-grotesk font-light text-4xl lg:text-5xl leading-tight mb-6"
              style={{ color: 'var(--webik-dark)' }}
            >
              Thank You!
            </h1>
            <p
              className="font-inter text-lg leading-relaxed mb-10"
              style={{ color: 'var(--webik-muted)' }}
            >
              We've received your brief and will prepare your personalized website plan within 1-2 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button
                  className="rounded-full px-8 py-6 text-base font-inter font-medium"
                  style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
                >
                  Back to Home
                </Button>
              </Link>
              <button
                onClick={() => {
                  setForm(initialForm);
                  setSuccess(false);
                }}
                className="rounded-full px-8 py-6 text-base font-inter font-medium border-2 transition-all hover:-translate-y-0.5"
                style={{ borderColor: 'var(--webik-dark)', color: 'var(--webik-dark)' }}
              >
                Submit Another Brief
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div
      style={{
        '--webik-lime': '#C8F048',
        '--webik-dark': '#0E1A0A',
        '--webik-dark-2': '#15240F',
        '--webik-cream': '#F5F3EC',
        '--webik-cream-2': '#EBE8DD',
        '--webik-muted': '#6B7560',
      }}
    >
      <StickyNav />

      {/* Hero */}
      <section className="px-6 lg:px-12 pt-16 pb-10" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <span
            className="font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ color: 'var(--webik-muted)' }}
          >
            Free Website Brief
          </span>
          <h1
            className="font-grotesk font-light mt-5 leading-[1.05]"
            style={{ color: 'var(--webik-dark)', fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em' }}
          >
            Get a Free Website Brief
          </h1>
          <p
            className="font-inter text-lg leading-relaxed mt-6 max-w-2xl mx-auto"
            style={{ color: 'var(--webik-muted)' }}
          >
            Tell us about your business and your vision. We'll turn it into a clear, actionable website plan — no cost, no obligation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 lg:px-12 py-16" style={{ background: 'var(--webik-cream-2)' }}>
        <div className="max-w-[800px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Business Details */}
            <div className="space-y-6">
              <h2 className="font-grotesk text-2xl font-medium" style={{ color: 'var(--webik-dark)' }}>
                Business Details
              </h2>
              <div className="space-y-2">
                <Label style={{ color: 'var(--webik-dark)' }}>
                  Business Name <span style={{ color: '#dc2626' }}>*</span>
                </Label>
                <Input
                  value={form.business_name}
                  onChange={(e) => handleChange('business_name', e.target.value)}
                  placeholder="e.g. Brew & Co. Coffee"
                  className="bg-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label style={{ color: 'var(--webik-dark)' }}>
                  Industry <span style={{ color: '#dc2626' }}>*</span>
                </Label>
                <Select value={form.industry} onValueChange={(v) => handleChange('industry', v)}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDUSTRIES.map((ind) => (
                      <SelectItem key={ind} value={ind}>
                        {ind}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label style={{ color: 'var(--webik-dark)' }}>
                  Target Audience <span style={{ color: '#dc2626' }}>*</span>
                </Label>
                <Textarea
                  value={form.target_audience}
                  onChange={(e) => handleChange('target_audience', e.target.value)}
                  placeholder="Who are your ideal customers? e.g. Young professionals in Cebu aged 25-40"
                  className="bg-white"
                  rows={3}
                  required
                />
              </div>
            </div>

            {/* Brand & Design */}
            <div className="space-y-6">
              <h2 className="font-grotesk text-2xl font-medium" style={{ color: 'var(--webik-dark)' }}>
                Brand &amp; Design
              </h2>
              <div className="space-y-2">
                <Label style={{ color: 'var(--webik-dark)' }}>
                  Brand Personality <span style={{ color: '#dc2626' }}>*</span>
                </Label>
                <Select value={form.brand_personality} onValueChange={(v) => handleChange('brand_personality', v)}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select a personality that fits your brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {BRAND_PERSONALITIES.map((bp) => (
                      <SelectItem key={bp} value={bp}>
                        {bp}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label style={{ color: 'var(--webik-dark)' }}>Color Preferences</Label>
                <Textarea
                  value={form.color_preferences}
                  onChange={(e) => handleChange('color_preferences', e.target.value)}
                  placeholder="Any colors you love or want to avoid? e.g. Deep navy and gold, no bright pink"
                  className="bg-white"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label style={{ color: 'var(--webik-dark)' }}>Design Inspiration</Label>
                <Textarea
                  value={form.design_inspiration}
                  onChange={(e) => handleChange('design_inspiration', e.target.value)}
                  placeholder="Links or names of websites you love the look of"
                  className="bg-white"
                  rows={2}
                />
              </div>
            </div>

            {/* Scope */}
            <div className="space-y-6">
              <h2 className="font-grotesk text-2xl font-medium" style={{ color: 'var(--webik-dark)' }}>
                Scope &amp; Content
              </h2>
              <div className="space-y-3">
                <Label style={{ color: 'var(--webik-dark)' }}>Pages Needed</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PAGE_OPTIONS.map((page) => (
                    <div key={page} className="flex items-center space-x-2">
                      <Checkbox
                        id={`page-${page}`}
                        checked={form.pages_needed.includes(page)}
                        onCheckedChange={() => togglePage(page)}
                      />
                      <Label htmlFor={`page-${page}`} className="text-sm font-normal cursor-pointer" style={{ color: 'var(--webik-dark)' }}>
                        {page}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label style={{ color: 'var(--webik-dark)' }}>Content Status</Label>
                <Select value={form.content_status} onValueChange={(v) => handleChange('content_status', v)}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="How ready is your content?" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONTENT_STATUSES.map((cs) => (
                      <SelectItem key={cs} value={cs}>
                        {cs}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label style={{ color: 'var(--webik-dark)' }}>Competitors</Label>
                <Textarea
                  value={form.competitors}
                  onChange={(e) => handleChange('competitors', e.target.value)}
                  placeholder="Name 1-3 competitors or similar businesses in your space"
                  className="bg-white"
                  rows={2}
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <h2 className="font-grotesk text-2xl font-medium" style={{ color: 'var(--webik-dark)' }}>
                Project Info
              </h2>
              <div className="space-y-2">
                <Label style={{ color: 'var(--webik-dark)' }}>
                  Goals <span style={{ color: '#dc2626' }}>*</span>
                </Label>
                <Textarea
                  value={form.goals}
                  onChange={(e) => handleChange('goals', e.target.value)}
                  placeholder="What should your website achieve? e.g. Get more online bookings, showcase our portfolio, sell products"
                  className="bg-white"
                  rows={3}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label style={{ color: 'var(--webik-dark)' }}>Deadline</Label>
                  <Input
                    type="date"
                    value={form.deadline}
                    onChange={(e) => handleChange('deadline', e.target.value)}
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label style={{ color: 'var(--webik-dark)' }}>Budget Range</Label>
                  <Select value={form.budget_range} onValueChange={(v) => handleChange('budget_range', v)}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                    <SelectContent>
                      {BUDGET_RANGES.map((br) => (
                        <SelectItem key={br} value={br}>
                          {br}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {error && (
              <div className="rounded-lg p-4 text-sm" style={{ background: 'rgba(220,38,38,0.08)', color: '#dc2626' }}>
                {error}
              </div>
            )}

            <div className="flex flex-col items-center gap-4 pt-4">
              <Button
                type="submit"
                disabled={submitting}
                className="rounded-full px-10 py-6 text-base font-inter font-medium w-full sm:w-auto"
                style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit My Brief
                    <ArrowRight size={18} className="ml-2" />
                  </>
                )}
              </Button>
              <p className="font-inter text-xs text-center" style={{ color: 'var(--webik-muted)' }}>
                No cost, no obligation. We'll prepare your brief within 1-2 business days.
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}