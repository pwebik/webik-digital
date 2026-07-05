import React from 'react';

/**
 * Realistic MacBook Pro device frame.
 * @param screenW - pixel width of the screen content area (where iframe shows)
 * @param screenH - pixel height of the screen content area
 * @param children - the iframe content (rendered at native resolution, scaled by parent)
 */
export default function MacBookProFrame({ screenW, screenH, children }) {
  const bezel = 9;
  const baseH = 26;
  const baseOverhang = 14; // base is wider than the lid
  const totalW = screenW + bezel * 2;
  const lidH = screenH + bezel; // no bottom bezel; base connects
  const notchW = Math.min(200, screenW * 0.16);
  const notchH = 20;

  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      {/* Screen lid */}
      <div
        style={{
          width: totalW,
          height: lidH,
          background: 'linear-gradient(180deg, #2a2a2c 0%, #1c1c1e 100%)',
          borderRadius: '14px 14px 2px 2px',
          padding: `${bezel}px ${bezel}px 0 ${bezel}px`,
          position: 'relative',
          boxShadow: '0 2px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        {/* Notch / camera housing */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: `${notchW}px`,
            height: `${notchH}px`,
            background: '#050505',
            borderRadius: '0 0 12px 12px',
            zIndex: 10,
          }}
        >
          {/* Camera dot */}
          <div
            style={{
              position: 'absolute',
              top: '4px',
              right: '14px',
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: '#1a1a2a',
              boxShadow: 'inset 0 0 2px rgba(100,130,255,0.3)',
            }}
          />
        </div>

        {/* Screen content */}
        <div
          style={{
            width: `${screenW}px`,
            height: `${screenH}px`,
            overflow: 'hidden',
            borderRadius: '4px 4px 0 0',
            background: '#000',
            position: 'relative',
          }}
        >
          {children}
        </div>
      </div>

      {/* Base / keyboard deck */}
      <div
        style={{
          width: `${totalW + baseOverhang * 2}px`,
          height: `${baseH}px`,
          marginLeft: `-${baseOverhang}px`,
          background: 'linear-gradient(180deg, #3a3a3c 0%, #2a2a2c 40%, #1a1a1c 100%)',
          borderRadius: '0 0 16px 16px',
          position: 'relative',
          boxShadow: '0 10px 35px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        {/* Front indentation (notch for opening the lid) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '130px',
            height: '5px',
            background: '#0a0a0a',
            borderRadius: '0 0 10px 10px',
          }}
        />
        {/* Subtle keyboard deck texture */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            left: '20%',
            right: '20%',
            height: '10px',
            borderRadius: '2px',
            background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 22px)',
          }}
        />
      </div>
    </div>
  );
}