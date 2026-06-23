import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import SectionEditor from '@/components/blog/SectionEditor';
import { ArrowLeft, Plus, Upload, Save } from 'lucide-react';

const slugify = (text) =>
  text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

const inputClass = "w-full rounded-lg border px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2";
const inputStyle = { borderColor: 'var(--webik-cream-2)', background: 'white' };

export default function BlogEditor() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const editId = urlParams.get('id');

  const [post, setPost] = useState({
    title: '',
    slug: '',
    category: 'Education',
    excerpt: '',
    coverImage: '',
    datePublished: new Date().toISOString().split('T')[0],
    sections: [],
    cta: '',
  });
  const [slugEdited, setSlugEdited] = useState(false);
  const [loading, setLoading] = useState(!!editId);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!editId) { setLoading(false); return; }
    base44.entities.BlogPost.get(editId)
      .then(data => {
        setPost(data);
        setSlugEdited(true);
      })
      .catch(err => setError('Failed to load post: ' + (err.response?.data?.error || err.message)))
      .finally(() => setLoading(false));
  }, [editId]);

  const update = (field, value) => {
    setPost(prev => {
      const next = { ...prev, [field]: value };
      if (field === 'title' && !slugEdited) {
        next.slug = slugify(value);
      }
      return next;
    });
  };

  const updateSlug = (value) => {
    setSlugEdited(true);
    setPost(prev => ({ ...prev, slug: slugify(value) }));
  };

  const addSection = (type = 'paragraph') => {
    setPost(prev => ({
      ...prev,
      sections: [...prev.sections, { type, heading: '', body: '', imageUrl: '', imageAlt: '', buttonText: '', buttonLink: '', linkText: '', linkUrl: '' }]
    }));
  };

  const updateSection = (index, data) => {
    setPost(prev => ({
      ...prev,
      sections: prev.sections.map((s, i) => i === index ? data : s)
    }));
  };

  const removeSection = (index) => {
    setPost(prev => ({ ...prev, sections: prev.sections.filter((_, i) => i !== index) }));
  };

  const moveSection = (index, dir) => {
    setPost(prev => {
      const sections = [...prev.sections];
      const newIndex = index + dir;
      if (newIndex < 0 || newIndex >= sections.length) return prev;
      [sections[index], sections[newIndex]] = [sections[newIndex], sections[index]];
      return { ...prev, sections };
    });
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      update('coverImage', file_url);
    } catch (err) {
      alert('Upload failed: ' + (err.response?.data?.error || err.message));
    } finally {
      setUploading(false);
    }
  };

  const handleSectionImageUpload = async (e, index) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      updateSection(index, { ...post.sections[index], imageUrl: file_url });
    } catch (err) {
      alert('Upload failed: ' + (err.response?.data?.error || err.message));
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!post.title.trim()) { setError('Title is required'); return; }
    if (!post.slug.trim()) { setError('Slug is required'); return; }
    setSaving(true);
    setError(null);
    try {
      if (editId) {
        await base44.entities.BlogPost.update(editId, post);
      } else {
        await base44.entities.BlogPost.create(post);
      }
      navigate('/blog-dashboard');
    } catch (err) {
      setError('Failed to save: ' + (err.response?.data?.error || err.message));
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--webik-cream)' }}>
        <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{ borderColor: 'var(--webik-cream-2)', borderTopColor: 'var(--webik-dark)' }}></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--webik-cream)' }}>
      <StickyNav />

      <div className="max-w-[900px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/blog-dashboard" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors" style={{ color: 'var(--webik-muted)' }}>
            <ArrowLeft size={13} /> Back to Blog Manager
          </Link>
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-inter font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
            style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
          >
            <Save size={16} /> {saving ? 'Saving...' : 'Save Post'}
          </button>
        </div>

        {error && (
          <div className="rounded-xl p-4 mb-6 text-sm font-inter" style={{ background: 'rgba(220,38,38,0.08)', color: '#dc2626' }}>
            {error}
          </div>
        )}

        {/* Basic fields */}
        <div className="space-y-5 mb-10">
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--webik-muted)' }}>Title</label>
            <input type="text" value={post.title} onChange={e => update('title', e.target.value)} placeholder="Blog post title" className={inputClass} style={inputStyle} />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--webik-muted)' }}>Slug (URL)</label>
              <input type="text" value={post.slug} onChange={e => updateSlug(e.target.value)} placeholder="url-slug" className={inputClass} style={inputStyle} />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--webik-muted)' }}>Category</label>
              <input type="text" value={post.category || ''} onChange={e => update('category', e.target.value)} placeholder="e.g. Education" className={inputClass} style={inputStyle} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--webik-muted)' }}>Publish Date</label>
              <input type="date" value={post.datePublished || ''} onChange={e => update('datePublished', e.target.value)} className={inputClass} style={inputStyle} />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--webik-muted)' }}>CTA Text</label>
              <input type="text" value={post.cta || ''} onChange={e => update('cta', e.target.value)} placeholder="Call-to-action text at end of post" className={inputClass} style={inputStyle} />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--webik-muted)' }}>Excerpt</label>
            <textarea value={post.excerpt || ''} onChange={e => update('excerpt', e.target.value)} placeholder="Short summary shown in blog listing" rows={3} className={inputClass} style={inputStyle} />
          </div>

          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--webik-muted)' }}>Cover Image</label>
            <input type="text" value={post.coverImage || ''} onChange={e => update('coverImage', e.target.value)} placeholder="Image URL (paste here or upload below)" className={inputClass} style={inputStyle} />
            <div className="flex items-center gap-3 mt-3">
              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer font-inter text-sm transition-colors" style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}>
                <Upload size={15} /> {uploading ? 'Uploading...' : 'Upload Image'}
                <input type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={uploading} />
              </label>
              {post.coverImage && (
                <img src={post.coverImage} alt="Cover preview" className="w-20 h-20 rounded-lg object-cover" />
              )}
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-grotesk text-2xl font-light" style={{ color: 'var(--webik-dark)' }}>Content Blocks</h2>
            <span className="font-mono text-[11px]" style={{ color: 'var(--webik-muted)' }}>{post.sections.length} block{post.sections.length !== 1 ? 's' : ''}</span>
          </div>

          {post.sections.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed p-10 text-center" style={{ borderColor: 'var(--webik-cream-2)' }}>
              <p className="font-inter text-sm mb-4" style={{ color: 'var(--webik-muted)' }}>No content yet. Add your first block below.</p>
            </div>
          ) : (
            <div className="space-y-3 mb-5">
              {post.sections.map((section, i) => (
                <SectionEditor
                  key={i}
                  section={section}
                  index={i}
                  total={post.sections.length}
                  onChange={data => updateSection(i, data)}
                  onRemove={() => removeSection(i)}
                  onMove={(idx, dir) => moveSection(idx, dir)}
                />
              ))}
            </div>
          )}

          {/* Add block buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { type: 'heading', label: '+ Heading' },
              { type: 'paragraph', label: '+ Paragraph' },
              { type: 'image', label: '+ Image' },
              { type: 'button', label: '+ Button' },
              { type: 'link', label: '+ Link' },
            ].map(btn => (
              <button
                key={btn.type}
                type="button"
                onClick={() => addSection(btn.type)}
                className="px-4 py-2 rounded-lg font-inter text-sm font-medium border transition-colors hover:bg-white"
                style={{ borderColor: 'var(--webik-cream-2)', color: 'var(--webik-dark)', background: 'var(--webik-cream)' }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom save */}
        <div className="flex justify-end pt-6 border-t" style={{ borderColor: 'var(--webik-cream-2)' }}>
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-inter font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
            style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
          >
            <Save size={16} /> {saving ? 'Saving...' : editId ? 'Update Post' : 'Publish Post'}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}