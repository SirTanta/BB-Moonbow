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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}>

          {/* Left: Portrait placeholder */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {AGENT.photo ? (
              // STUB: replace this block with next/image when photo is received
              <div style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '3/4',
                background: 'var(--parchment)',
                border: '1px solid var(--brass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '4px 4px 16px rgba(44,24,16,0.15)',
              }}>
                <p style={{ fontFamily: 'Georgia, serif', color: 'var(--sepia)', fontStyle: 'italic', fontSize: '0.85rem' }}>
                  Photo
                </p>
              </div>
            ) : (
              /* STUB: Photo placeholder — replace with <Image src={AGENT.photo} ... /> when available */
              <div style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '3/4',
                background: 'var(--parchment)',
                border: '1px solid rgba(176,141,87,0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '4px 4px 16px rgba(44,24,16,0.1), inset 0 0 40px rgba(176,141,87,0.08)',
              }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--brass)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--brass)', fontSize: '1.4rem' }}>✦</span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-accent, Georgia, serif)',
                  fontStyle: 'italic',
                  color: 'var(--sepia)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.05em',
                }}>
                  Photo Coming Soon
                </p>
              </div>
            )}
          </div>

          {/* Right: Bio content */}
          <div>
            {/* Section label */}
            <p style={{
              fontFamily: 'var(--font-accent, Georgia, serif)',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--brass)',
              letterSpacing: '0.05em',
              marginBottom: '12px',
            }}>
              About Britteney
            </p>

            {/* Section heading */}
            <h2 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              color: 'var(--ink)',
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: '8px',
            }}>
              {AGENT.name}
            </h2>

            <div style={{ width: '40px', height: '1px', background: 'var(--brass)', marginBottom: '28px' }} />

            {/* Bio paragraphs — STUB */}
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1rem',
              color: 'var(--ink)',
              lineHeight: '1.9',
              marginBottom: '36px',
            }}>
              {/* STUB: bio paragraphs awaiting questionnaire response */}
              <p style={{ marginBottom: '18px' }}>
                {AGENT.bio}
              </p>
            </div>

            {/* Credential badges — wax seal style */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{
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
              }}>
                NC Broker &middot; Swell Real Estate Co
              </div>
              <div style={{
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
              }}>
                VA Salesperson &middot; Swell Realty Co
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
