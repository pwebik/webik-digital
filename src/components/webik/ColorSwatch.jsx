import React, { useState } from 'react';

export default function ColorSwatch({ name, hex, rgb }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div
      className="flex flex-col cursor-pointer group"
      onClick={handleCopy}
      title={`Copy ${hex}`}
    >
      <div
        className="w-full aspect-square rounded-sm mb-3 relative overflow-hidden transition-transform duration-200 group-hover:scale-[1.03]"
        style={{ background: hex }}
      >
        {copied && (
          <div
            className="absolute inset-0 flex items-center justify-center text-xs font-mono font-semibold"
            style={{ background: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
          >
            Copied!
          </div>
        )}
      </div>
      <p className="font-inter text-xs font-semibold" style={{ color: 'var(--webik-dark)' }}>{name}</p>
      <p className="font-mono text-[10px] mt-0.5" style={{ color: 'var(--webik-muted)' }}>{hex}</p>
      <p className="font-mono text-[10px]" style={{ color: 'var(--webik-muted)' }}>{rgb}</p>
    </div>
  );
}