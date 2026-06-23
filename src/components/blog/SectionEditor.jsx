import React from 'react';
import { Trash2, ChevronUp, ChevronDown, Image as ImageIcon, Type, Link2, MousePointerClick, Heading } from 'lucide-react';

const sectionTypes = [
  { value: 'heading', label: 'Heading', icon: Heading },
  { value: 'paragraph', label: 'Paragraph', icon: Type },
  { value: 'image', label: 'Image', icon: ImageIcon },
  { value: 'button', label: 'Button', icon: MousePointerClick },
  { value: 'link', label: 'Link', icon: Link2 },
];

export default function SectionEditor({ section, index, total, onChange, onRemove, onMove }) {
  const update = (field, value) => {
    onChange({ ...section, [field]: value });
  };

  return (
    <div className="rounded-xl border p-5" style={{ background: 'var(--webik-cream)', borderColor: 'var(--webik-cream-2)' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          {sectionTypes.map(t => {
            const Icon = t.icon;
            const active = section.type === t.value;
            return (
              <button
                key={t.value}
                type="button"
                onClick={() => update('type', t.value)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${active ? 'text-white' : ''}`}
                style={active ? { background: 'var(--webik-dark)' } : { background: 'white', color: 'var(--webik-muted)', border: '1px solid var(--webik-cream-2)' }}
              >
                <Icon size={13} /> {t.label}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-1">
          <button type="button" disabled={index === 0} onClick={() => onMove(index, -1)} className="p-1.5 rounded-lg disabled:opacity-30 hover:bg-white transition-colors" style={{ color: 'var(--webik-muted)' }}>
            <ChevronUp size={16} />
          </button>
          <button type="button" disabled={index === total - 1} onClick={() => onMove(index, 1)} className="p-1.5 rounded-lg disabled:opacity-30 hover:bg-white transition-colors" style={{ color: 'var(--webik-muted)' }}>
            <ChevronDown size={16} />
          </button>
          <button type="button" onClick={onRemove} className="p-1.5 rounded-lg hover:bg-red-50 transition-colors" style={{ color: '#dc2626' }}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {(section.type === 'heading') && (
          <input
            type="text"
            value={section.heading || ''}
            onChange={e => update('heading', e.target.value)}
            placeholder="Heading text"
            className="w-full rounded-lg border px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2"
            style={{ borderColor: 'var(--webik-cream-2)', background: 'white' }}
          />
        )}

        {(section.type === 'heading' || section.type === 'paragraph') && (
          <textarea
            value={section.body || ''}
            onChange={e => update('body', e.target.value)}
            placeholder={section.type === 'heading' ? 'Optional supporting text under the heading' : 'Paragraph text'}
            rows={section.type === 'paragraph' ? 4 : 2}
            className="w-full rounded-lg border px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2 resize-y"
            style={{ borderColor: 'var(--webik-cream-2)', background: 'white' }}
          />
        )}

        {section.type === 'image' && (
          <>
            <input
              type="text"
              value={section.imageUrl || ''}
              onChange={e => update('imageUrl', e.target.value)}
              placeholder="Image URL (paste here or upload below)"
              className="w-full rounded-lg border px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--webik-cream-2)', background: 'white' }}
            />
            {section.imageUrl && (
              <img src={section.imageUrl} alt={section.imageAlt || ''} className="w-full max-h-48 object-cover rounded-lg" />
            )}
            <input
              type="text"
              value={section.imageAlt || ''}
              onChange={e => update('imageAlt', e.target.value)}
              placeholder="Image alt text (for accessibility/SEO)"
              className="w-full rounded-lg border px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--webik-cream-2)', background: 'white' }}
            />
          </>
        )}

        {section.type === 'button' && (
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              type="text"
              value={section.buttonText || ''}
              onChange={e => update('buttonText', e.target.value)}
              placeholder="Button label"
              className="rounded-lg border px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--webik-cream-2)', background: 'white' }}
            />
            <input
              type="text"
              value={section.buttonLink || ''}
              onChange={e => update('buttonLink', e.target.value)}
              placeholder="Button link URL"
              className="rounded-lg border px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--webik-cream-2)', background: 'white' }}
            />
          </div>
        )}

        {section.type === 'link' && (
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              type="text"
              value={section.linkText || ''}
              onChange={e => update('linkText', e.target.value)}
              placeholder="Link text"
              className="rounded-lg border px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--webik-cream-2)', background: 'white' }}
            />
            <input
              type="text"
              value={section.linkUrl || ''}
              onChange={e => update('linkUrl', e.target.value)}
              placeholder="Link URL"
              className="rounded-lg border px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--webik-cream-2)', background: 'white' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}