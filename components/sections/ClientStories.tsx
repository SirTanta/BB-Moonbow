'use client';

import { useState } from 'react';
import { TESTIMONIALS } from '@/lib/stub-data';

export default function ClientStories() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="testimonials"
      style={{
        padding: '96px 24px',
        background: 'var(--parchment)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{
            fontFamily: 'var(--font-accent, Georgia, serif)',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'var(--brass)',
            marginBottom: '12px',
          }}>
            Client Stories
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display, Georgia, serif)',
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: 'var(--ink)',
            fontWeight: 400,
          }}>
            What Clients Say
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
            <div style={{ height: '1px', width: '40px', background: 'var(--brass)' }} />
            <span style={{ color: 'var(--brass)', fontSize: '0.8rem' }}>✦</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--brass)' }} />
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '24px',
          scrollSnapType: 'x mandatory',
          paddingBottom: '24px',
          scrollbarWidth: 'none',
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              style={{
                scrollSnapAlign: 'start',
                minWidth: '320px',
                maxWidth: '480px',
                flexShrink: 0,
                background: 'rgba(252,244,224,0.95)',
                border: '1px solid rgba(176,141,87,0.35)',
                borderRadius: '1px',
                padding: '40px 36px',
                position: 'relative',
                boxShadow: i === activeIdx ? '0 4px 20px rgba(44,24,16,0.12)' : '0 2px 8px rgba(44,24,16,0.06)',
                transition: 'box-shadow 0.3s',
              }}
              onClick={() => setActiveIdx(i)}
            >
              {/* Large decorative quotation mark */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '20px',
                fontFamily: 'Georgia, serif',
                fontSize: '6rem',
                color: 'var(--brass)',
                opacity: 0.12,
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}>
                &ldquo;
              </div>

              {/* Quote text */}
              <p style={{
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'var(--ink)',
                lineHeight: '1.85',
                marginBottom: '28px',
                position: 'relative',
                zIndex: 1,
              }}>
                {/* STUB: testimonial quote from stub-data */}
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Brass rule */}
              <div style={{ width: '32px', height: '1px', background: 'var(--brass)', marginBottom: '16px' }} />

              {/* Signature */}
              <div>
                <p style={{
                  fontFamily: 'var(--font-accent, Georgia, serif)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'var(--ink)',
                  marginBottom: '2px',
                }}>
                  {/* STUB: client name from stub-data */}
                  {t.name}
                </p>
                <p style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.78rem',
                  color: 'var(--sepia)',
                }}>
                  {/* STUB: client city from stub-data */}
                  {t.city}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: `1px solid var(--brass)`,
                cursor: 'pointer',
                padding: 0,
                background: i === activeIdx ? 'var(--brass)' : 'var(--parchment)',
                transition: 'background 0.2s',
              } as React.CSSProperties}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
