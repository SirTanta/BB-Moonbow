'use client';

import dynamic from 'next/dynamic';

// Dynamic import — SSR: false required for Leaflet (uses browser APIs)
const CoverageMap = dynamic(() => import('./CoverageMap'), { ssr: false });

export default function CoverageMapSection() {
  return (
    <section
      id="coverage"
      style={{
        padding: '96px 24px',
        background: 'var(--parchment)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            fontFamily: 'var(--font-accent, Georgia, serif)',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'var(--brass)',
            marginBottom: '12px',
          }}>
            Service Area
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display, Georgia, serif)',
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: 'var(--ink)',
            fontWeight: 400,
          }}>
            Coverage
          </h2>
          <div style={{ width: '60px', height: '1px', background: 'var(--brass)', margin: '16px auto 0' }} />
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '0.9rem',
            color: 'var(--sepia)',
            marginTop: '16px',
            fontStyle: 'italic',
          }}>
            Serving North Carolina &amp; Virginia
          </p>
        </div>

        {/* Map */}
        <CoverageMap />

        {/* Attribution note */}
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.72rem',
          color: 'var(--sepia)',
          textAlign: 'center',
          marginTop: '12px',
          opacity: 0.7,
        }}>
          Map tiles by Stamen Design, CC BY 3.0 &middot; Map data &copy; OpenStreetMap contributors
        </p>

      </div>
    </section>
  );
}
