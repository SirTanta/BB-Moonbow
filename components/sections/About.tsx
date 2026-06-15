import Image from 'next/image';
import { AGENT } from '@/lib/stub-data';

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '96px 24px',
        background: 'var(--cream)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '3/4',
                boxShadow: '4px 4px 16px rgba(44,24,16,0.15)',
                border: '1px solid var(--brass)',
                overflow: 'hidden',
              }}
            >
              <Image
                src={AGENT.photo}
                alt="Portrait of Britteney Powers in a soft neutral setting, framed like a vintage studio photograph"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p
              style={{
                marginTop: '12px',
                fontFamily: 'var(--font-subhead, Georgia, serif)',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--sepia)',
              }}
            >
              {AGENT.licenseState} License #{AGENT.licenseNumber}
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'var(--font-accent, Georgia, serif)',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: 'var(--brass)',
                letterSpacing: '0.05em',
                marginBottom: '12px',
              }}
            >
              About Britteney
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                color: 'var(--ink)',
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: '8px',
              }}
            >
              {AGENT.name}
            </h2>

            <div style={{ width: '40px', height: '1px', background: 'var(--brass)', marginBottom: '28px' }} />

            <div
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1rem',
                color: 'var(--ink)',
                lineHeight: '1.9',
                marginBottom: '36px',
              }}
            >
              <p style={{ marginBottom: '18px' }}>{AGENT.bio}</p>
              <p>
                She brings the same steady attention to listings, negotiations, and client communication across every step of the journey.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <div
                style={{
                  background: 'var(--oxblood)',
                  color: 'var(--cream)',
                  padding: '8px 18px',
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  borderRadius: '1px',
                  border: '1px solid rgba(245,237,214,0.15)',
                  boxShadow: '2px 2px 6px rgba(44,24,16,0.2)',
                }}
              >
                NC & VA Representation
              </div>
              <div
                style={{
                  background: 'var(--oxblood)',
                  color: 'var(--cream)',
                  padding: '8px 18px',
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  borderRadius: '1px',
                  border: '1px solid rgba(245,237,214,0.15)',
                  boxShadow: '2px 2px 6px rgba(44,24,16,0.2)',
                }}
              >
                Virginia License #{AGENT.licenseNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
