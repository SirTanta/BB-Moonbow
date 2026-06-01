// Services section — grid layout ported from tanta-visa-pathways ServicesTiers (stripped of pricing/tiers/checkout)

const services = [
  {
    id: 'buyer',
    title: 'Buyer Representation',
    // STUB: description awaiting questionnaire response
    description: 'From your first showing to closing day, I advocate for your interests at every step — helping you find the right property at the right price.',
  },
  {
    id: 'seller',
    title: 'Seller Representation',
    // STUB: description awaiting questionnaire response
    description: 'Strategic pricing, professional marketing, and expert negotiation to help you sell with confidence and maximize your return.',
  },
  {
    id: 'relocation',
    title: 'Relocation Services',
    // STUB: description awaiting questionnaire response
    description: 'Moving to NC or VA? I make the transition seamless — from neighborhood guidance to school research and community connections.',
  },
  {
    id: 'investment',
    title: 'Investment Properties',
    // STUB: description awaiting questionnaire response
    description: 'Whether you are building a portfolio or buying your first rental, I help you identify opportunities with strong returns across both states.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '96px 24px',
        background: 'var(--parchment)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontFamily: 'var(--font-accent, Georgia, serif)',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'var(--brass)',
            marginBottom: '12px',
          }}>
            What I Offer
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display, Georgia, serif)',
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: 'var(--ink)',
            fontWeight: 400,
            marginBottom: '0',
          }}>
            Services
          </h2>
          <div style={{ width: '60px', height: '1px', background: 'var(--brass)', margin: '16px auto 0' }} />
        </div>

        {/* 4-up desktop, 2-up tablet, 1-up mobile grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
        }}>
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                background: 'rgba(245,237,214,0.9)',
                border: '1px solid rgba(176,141,87,0.35)',
                borderTop: '3px solid var(--brass)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1px',
                boxShadow: '0 2px 8px rgba(44,24,16,0.07)',
                transition: 'box-shadow 0.2s',
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-subhead, Georgia, serif)',
                fontSize: '1.05rem',
                color: 'var(--ink)',
                fontWeight: 700,
                marginBottom: '14px',
                letterSpacing: '0.02em',
              }}>
                {service.title}
              </h3>

              <p style={{
                fontFamily: 'Georgia, serif',
                fontSize: '0.9rem',
                color: 'var(--sepia)',
                lineHeight: '1.75',
                flexGrow: 1,
                marginBottom: '20px',
              }}>
                {service.description}
              </p>

              {/* STUB: Learn More link — no destination yet */}
              <a
                href="#contact"
                style={{
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.78rem',
                  color: 'var(--brass)',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                  borderBottom: '1px solid transparent',
                  transition: 'border-color 0.2s',
                }}
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
