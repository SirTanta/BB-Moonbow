'use client';

import { AGENT } from '@/lib/stub-data';

export default function Hero() {
  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at 60% 40%, var(--parchment) 0%, var(--cream) 70%)',
        padding: '80px 24px',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      {/* Decorative corner rules */}
      <div style={{
        position: 'absolute', top: '32px', left: '32px', right: '32px',
        borderTop: '1px solid rgba(176,141,87,0.3)',
      }} />
      <div style={{
        position: 'absolute', bottom: '32px', left: '32px', right: '32px',
        borderBottom: '1px solid rgba(176,141,87,0.3)',
      }} />

      <div style={{ maxWidth: '760px', width: '100%' }}>

        {/* Ornament */}
        <p className="ornament" style={{ marginBottom: '28px' }}>✦ ✦ ✦</p>

        {/* Credential line */}
        <p style={{
          fontFamily: 'var(--font-accent, Georgia, serif)',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'var(--sepia)',
          letterSpacing: '0.08em',
          marginBottom: '20px',
        }}>
          NC Broker &nbsp;·&nbsp; VA Salesperson
        </p>

        {/* Name headline */}
        <h1 style={{
          fontFamily: 'var(--font-display, Georgia, serif)',
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          color: 'var(--ink)',
          fontWeight: 400,
          letterSpacing: '0.04em',
          lineHeight: 1.1,
          marginBottom: '24px',
        }}>
          {AGENT.name}
        </h1>

        {/* Brass rule */}
        <div style={{ width: '80px', height: '1px', background: 'var(--brass)', margin: '0 auto 24px' }} />

        {/* Tagline — STUB */}
        <p style={{
          fontFamily: 'var(--font-subhead, Georgia, serif)',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'var(--sepia)',
          lineHeight: 1.7,
          marginBottom: '48px',
          maxWidth: '560px',
          margin: '0 auto 48px',
        }}>
          {/* STUB: tagline awaiting questionnaire response */}
          Your trusted guide through every step of buying and selling in North Carolina &amp; Virginia.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => scrollTo('properties')}
            style={{
              fontFamily: 'var(--font-subhead, Georgia, serif)',
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              background: 'var(--brass)',
              color: 'var(--cream)',
              border: '1px solid var(--brass)',
              padding: '14px 36px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              borderRadius: '1px',
            }}
          >
            View Properties
          </button>
          <button
            onClick={() => scrollTo('contact')}
            style={{
              fontFamily: 'var(--font-subhead, Georgia, serif)',
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              background: 'transparent',
              color: 'var(--brass)',
              border: '1px solid var(--brass)',
              padding: '14px 36px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              borderRadius: '1px',
            }}
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.5 }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--sepia)' }}>
            Scroll
          </p>
          <div style={{ width: '1px', height: '40px', background: 'var(--brass)', opacity: 0.6 }} />
        </div>

      </div>
    </section>
  );
}
