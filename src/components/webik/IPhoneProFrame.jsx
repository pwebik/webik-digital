import React from 'react';

/**
 * Realistic iPhone 17 Pro device frame.
 * @param screenW - pixel width of the screen content area (where iframe shows)
 * @param screenH - pixel height of the screen content area
 * @param children - the iframe content (rendered at native resolution, scaled by parent)
 */
export default function IPhoneProFrame({ screenW, screenH, children }) {
  const bezel = 7;
  const bodyW = screenW + bezel * 2;
  const bodyH = screenH + bezel * 2;
  const cornerRadius = 48;
  const islandW = Math.min(120, screenW * 0.35);
  const islandH = 28;

  return (
    <div style={{ position: 'relative', flexShrink: 0, width: `${bodyW + 8}px`, height: `${bodyH}px` }}>
      {/* Side buttons — left (volume up / volume down) */}
      <div style={{ position: 'absolute', left: '-2px', top: `${bodyH * 0.22}px`, width: '3px', height: '32px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(90deg, #1a1a1c, #3a3a3c)' }} />
      <div style={{ position: 'absolute', left: '-2px', top: `${bodyH * 0.22 + 44}px`, width: '3px', height: '52px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(90deg, #1a1a1c, #3a3a3c)' }} />
      {/* Side button — right (power) */}
      <div style={{ position: 'absolute', right: '-2px', top: `${bodyH * 0.28}px`, width: '3px', height: '70px', borderRadius: '0 2px 2px 0', background: 'linear-gradient(270deg, #1a1a1c, #3a3a3c)' }} />

      {/* Phone body */}
      <div
        style={{
          width: `${bodyW}px`,
          height: `${bodyH}px`,
          borderRadius: `${cornerRadius}px`,
          background: 'linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 40%, #2a2a2c 70%, #1a1a1c 100%)',
          padding: `${bezel}px`,
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      >
        {/* Titanium edge highlight */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: `${cornerRadius}px`,
            border: '1px solid rgba(255,255,255,0.07)',
            pointerEvents: 'none',
          }}
        />

        {/* Screen content */}
        <div
          style={{
            width: `${screenW}px`,
            height: `${screenH}px`,
            borderRadius: `${cornerRadius - bezel}px`,
            overflow: 'hidden',
            background: '#000',
            position: 'relative',
          }}
        >
          {children}

          {/* Dynamic Island overlay */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${islandW}px`,
              height: `${islandH}px`,
              background: '#050505',
              borderRadius: '20px',
              zIndex: 10,
              boxShadow: 'inset 0 0 1px rgba(255,255,255,0.05)',
            }}
          >
            {/* Camera dot inside island */}
            <div
              style={{
                position: 'absolute',
                top: '8px',
                right: '12px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#0a0a1a',
                boxShadow: 'inset 0 0 3px rgba(80,100,200,0.4)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}