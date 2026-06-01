// Process section — step layout ported from tanta-visa-pathways how-it-works page

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We start by understanding your goals, timeline, and must-haves. Every client and every transaction is different — this conversation sets the foundation for everything that follows.',
  },
  {
    number: '02',
    title: 'Property Search',
    description: 'Curated listings matched to your criteria across NC and VA. I filter the noise so you see only what truly fits your needs, neighborhood preferences, and budget.',
  },
  {
    number: '03',
    title: 'Offer & Negotiation',
    description: 'Expert guidance through offers, counteroffers, and due diligence. I represent your interests firmly and thoughtfully — protecting you at every turn of the transaction.',
  },
  {
    number: '04',
    title: 'Closing Day',
    description: 'From contract to keys — I\'m with you every step. We handle the paperwork, coordinate the details, and make sure you cross the finish line with confidence.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{
        padding: '96px 24px',
        background: 'var(--cream)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{
            fontFamily: 'var(--font-accent, Georgia, serif)',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'var(--brass)',
            marginBottom: '12px',
          }}>
            How It Works
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display, Georgia, serif)',
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: 'var(--ink)',
            fontWeight: 400,
          }}>
            The Process
          </h2>
          <div style={{ width: '60px', height: '1px', background: 'var(--brass)', margin: '16px auto 0' }} />
        </div>

        {/* Steps — vertical timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                gap: '40px',
                alignItems: 'flex-start',
                position: 'relative',
                paddingBottom: i < steps.length - 1 ? '56px' : '0',
              }}
            >
              {/* Timeline spine */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '28px',
                  top: '60px',
                  width: '1px',
                  height: 'calc(100% - 28px)',
                  background: 'rgba(176,141,87,0.3)',
                  zIndex: 0,
                }} />
              )}

              {/* Step circle */}
              <div style={{
                flexShrink: 0,
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--brass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(44,24,16,0.15)',
                position: 'relative',
                zIndex: 1,
              }}>
                <span style={{
                  fontFamily: 'var(--font-display, Georgia, serif)',
                  fontSize: '0.9rem',
                  color: 'var(--cream)',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}>
                  {step.number}
                </span>
              </div>

              {/* Step content */}
              <div style={{ paddingTop: '10px', flex: 1 }}>
                <h3 style={{
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '1.15rem',
                  color: 'var(--ink)',
                  fontWeight: 700,
                  marginBottom: '10px',
                  letterSpacing: '0.01em',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.95rem',
                  color: 'var(--sepia)',
                  lineHeight: '1.8',
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
