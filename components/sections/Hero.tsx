'use client';

import Image from 'next/image';
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
      <div
        style={{
          position: 'absolute',
          top: '32px',
          left: '32px',
          right: '32px',
          borderTop: '1px solid rgba(176,141,87,0.3)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '32px',
          right: '32px',
          borderBottom: '1px solid rgba(176,141,87,0.3)',
        }}
      />

      <div
        style={{
          maxWidth: '1080px',
          width: '100%',
          display: 'grid',
          gap: '40px',
          alignItems: 'center',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
      >
        <div style={{ order: 2, textAlign: 'left' }}>
          <p className="ornament" style={{ marginBottom: '28px' }} aria-hidden="true">
            ✦ ✦ ✦
          </p>

          <p
            style={{
              fontFamily: 'var(--font-accent, Georgia, serif)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--sepia)',
              letterSpacing: '0.08em',
              marginBottom: '20px',
            }}
          >
            NC Broker &nbsp;·&nbsp; VA Salesperson
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              color: 'var(--ink)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            {AGENT.name}
          </h1>

          <div style={{ width: '80px', height: '1px', background: 'var(--brass)', margin: '0 0 24px' }} />

          <p
            style={{
              fontFamily: 'var(--font-subhead, Georgia, serif)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'var(--sepia)',
              lineHeight: 1.7,
              marginBottom: '48px',
              maxWidth: '560px',
            }}
          >
            {AGENT.tagline}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <button
              type="button"
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
              className="btn-vintage"
            >
              View Properties
            </button>
            <button
              type="button"
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
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>

          <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', opacity: 0.9 }}>
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '0.72rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--sepia)',
              }}
            >
              Serving North Carolina & Virginia
            </p>
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '0.84rem',
                color: 'var(--ink)',
                lineHeight: 1.7,
                maxWidth: '520px',
              }}
            >
              {AGENT.bio}
            </p>
          </div>
        </div>

        <div style={{ order: 1 }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '440px',
              margin: '0 auto',
              aspectRatio: '4 / 5',
              border: '1px solid rgba(176,141,87,0.45)',
              boxShadow: '0 20px 40px rgba(44,24,16,0.16)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={AGENT.photo}
              alt="Portrait of Britteney Powers standing in a softly lit interior with a confident, welcoming expression"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 440px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-subhead, Georgia, serif)',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--sepia)',
              }}
            >
              License #{AGENT.licenseNumber} · {AGENT.licenseState}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
