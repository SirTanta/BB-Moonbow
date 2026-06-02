export default function BrandBrief() {
  const directions = [
    {
      number: '01',
      name: 'The Collector',
      logline: 'Dark. Rich. Atmospheric. The agent who has seen everything and knows exactly what makes a home worth keeping.',
      palette: [
        { name: 'Deep Ink', hex: '#1C1410' },
        { name: 'Oxblood', hex: '#6E1A1A' },
        { name: 'Aged Brass', hex: '#B08D57' },
        { name: 'Warm Cream', hex: '#F5EDD6' },
        { name: 'Dusty Sage', hex: '#7A8C6E' },
      ],
      fontVar: 'var(--font-subhead)',
      fontName: 'Playfair Display — ornate, weighty, prestigious',
      tagline: '"Homes with history. An agent who knows the difference."',
      mood: 'Victorian cabinet of curiosities meets Southern estate. Every object in the room has a story. So does every house she represents. For the client who wants an expert — not a salesperson.',
      bestIf: 'She\'s drawn to dark, moody, layered aesthetics. Victorian or Art Deco. Ornate over minimal. The kind of room that makes you lean in.',
      bg: '#1C1410',
      fg: '#F5EDD6',
      accent: '#B08D57',
    },
    {
      number: '02',
      name: 'The Magnolia',
      logline: 'Warm. Southern. Editorial. The agent you trust like a brilliant friend — the one your whole neighborhood calls.',
      palette: [
        { name: 'Deep Espresso', hex: '#2C1810' },
        { name: 'Dusty Rose', hex: '#C49A8A' },
        { name: 'Terracotta', hex: '#C4623A' },
        { name: 'Warm Linen', hex: '#FAF0E0' },
        { name: 'Antique Gold', hex: '#C49A45' },
      ],
      fontVar: 'var(--font-display)',
      fontName: 'Cormorant Garamond — elegant, flowing, personal',
      tagline: '"Every home has a story. Let\'s find yours."',
      mood: 'Magnolia meets a Kinfolk spread. Terracotta walls and linen everything. Warm and people-first, but with an editorial sophistication that makes it feel elevated — never generic. For the client who needs to feel seen before they\'ll trust you.',
      bestIf: 'She\'s warm and relationship-driven. Light and airy over dark and moody. Southern and slow. Dusty rose, terracotta, antique gold. The brilliant friend who happens to know everything about real estate.',
      bg: '#FAF0E0',
      fg: '#2C1810',
      accent: '#C4623A',
    },
    {
      number: '03',
      name: 'The Cartographer',
      logline: 'Precise. Dual-market. The authority on both sides of the NC/VA border — and the romance of knowing exactly where you are.',
      palette: [
        { name: 'Faded Navy', hex: '#1B2A4A' },
        { name: 'Weathered Brass', hex: '#A07840' },
        { name: 'Slate Blue', hex: '#5B7A8C' },
        { name: 'Aged Parchment', hex: '#E8D9B0' },
        { name: 'Charcoal', hex: '#3A3A3A' },
      ],
      fontVar: 'var(--font-accent)',
      fontName: 'IM Fell English — letterpress, old map, tactile',
      tagline: '"Two states. One agent. Wherever you\'re going."',
      mood: 'Old maps, compass roses, the romance of finding somewhere. Built for the broker who leads with her NC/VA dual-market expertise — historic homes, waterfront, relocation clients crossing the border. Authoritative without being cold.',
      bestIf: 'She leads with geography. Historic homes, coastal or waterfront, relocation clients. The dual NC/VA market is her superpower and she wants it front and center.',
      bg: '#1B2A4A',
      fg: '#E8D9B0',
      accent: '#A07840',
    },
  ];

  return (
    <main style={{ minHeight: '100vh', padding: '60px 20px 80px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="ornament" style={{ marginBottom: '20px' }}>✦ ✦ ✦</p>
          <h1 style={{
            fontFamily: 'var(--font-subhead)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: 'var(--ink)',
            fontWeight: '700',
            letterSpacing: '0.02em',
            marginBottom: '12px',
          }}>
            Preliminary Brand Directions
          </h1>
          <p style={{ fontFamily: 'var(--font-display)', color: 'var(--sepia)', fontStyle: 'italic', fontSize: '1.05rem' }}>
            Britteney Powers · Swell Realty · NC & VA
          </p>
          <div style={{ width: '60px', height: '1px', background: 'var(--brass)', margin: '24px auto' }} />
        </div>

        {/* What this is */}
        <div className="section-card" style={{ padding: '36px 44px', marginBottom: '32px' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'var(--brass)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
            What This Is
          </p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', color: 'var(--ink)', lineHeight: '1.85', marginBottom: '16px' }}>
            These are three distinct brand directions built before the questionnaire — based on what we know about Britteney, her markets, and the vintage aesthetic she\'s drawn to. They are starting points, not conclusions. The questionnaire answers will shape the final brand. These exist so there is something concrete to react to.
          </p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', color: 'var(--ink)', lineHeight: '1.85', margin: 0 }}>
            Each direction includes a name, a color palette, a typography feel, a sample tagline, and a description of who it\'s best for. One of these will probably feel right immediately — or the right answer will be somewhere between two of them. Both are useful.
          </p>
        </div>

        {/* Swell Contrast */}
        <div style={{
          background: 'rgba(44, 24, 16, 0.04)',
          border: '1px solid rgba(176, 141, 87, 0.3)',
          borderRadius: '2px',
          padding: '32px 44px',
          marginBottom: '48px',
        }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'var(--brass)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            What We Are Moving Away From
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-subhead)', fontSize: '1rem', color: 'var(--oxblood)', fontWeight: '700', marginBottom: '12px' }}>
                Swell Real Estate Co
              </p>
              {[
                'Corporate blue and white — clean, safe, institutional',
                'Modern sans-serif — readable, forgettable',
                '"Trusted partner, 100+ years combined experience"',
                'Built for a 150-agent brokerage',
                'Nobody, specifically — everybody, generically',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--sepia)', fontFamily: 'Georgia, serif', fontSize: '0.85rem', flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.88rem', color: 'var(--sepia)', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-subhead)', fontSize: '1rem', color: 'var(--oxblood)', fontWeight: '700', marginBottom: '12px' }}>
                Britteney Powers
              </p>
              {[
                'A palette that feels like a specific person, not a brokerage',
                'Vintage serif with warmth and personality',
                'A voice that sounds like her — specific, human, memorable',
                'Built for one agent who knows exactly who she is',
                'The right client — and only the right client',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--brass)', fontFamily: 'Georgia, serif', fontSize: '0.85rem', flexShrink: 0 }}>✦</span>
                  <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.88rem', color: 'var(--ink)', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Direction cards */}
        {directions.map((dir, idx) => (
          <div key={dir.number} style={{ marginBottom: '48px' }}>

            {/* Direction header bar */}
            <div style={{
              background: dir.bg,
              padding: '28px 44px',
              borderRadius: '2px 2px 0 0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '24px',
            }}>
              <span style={{
                fontFamily: 'var(--font-subhead)',
                fontSize: '3rem',
                color: dir.accent,
                opacity: 0.6,
                lineHeight: '1',
                flexShrink: 0,
              }}>{dir.number}</span>
              <div>
                <h2 style={{
                  fontFamily: dir.fontVar,
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  color: dir.fg,
                  fontWeight: idx === 0 ? '700' : '400',
                  marginBottom: '8px',
                  lineHeight: '1.2',
                }}>
                  {dir.name}
                </h2>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.92rem', color: dir.accent, lineHeight: '1.6', margin: 0 }}>
                  {dir.logline}
                </p>
              </div>
            </div>

            {/* Direction body */}
            <div className="section-card" style={{ borderRadius: '0 0 2px 2px', borderTop: 'none', padding: '36px 44px' }}>

              {/* Palette */}
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'var(--brass)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  Color Palette
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {dir.palette.map(swatch => (
                    <div key={swatch.hex} style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: swatch.hex,
                        border: '1px solid rgba(176,141,87,0.3)',
                        marginBottom: '6px',
                        boxShadow: '0 2px 6px rgba(44,24,16,0.15)',
                      }} />
                      <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.7rem', color: 'var(--sepia)', margin: 0 }}>{swatch.name}</p>
                      <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'var(--brass)', margin: 0 }}>{swatch.hex}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: '100%', height: '1px', background: 'rgba(176,141,87,0.25)', marginBottom: '32px' }} />

              {/* Typography */}
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'var(--brass)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Typography
                </p>
                <p style={{
                  fontFamily: dir.fontVar,
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  color: 'var(--ink)',
                  lineHeight: '1.3',
                  marginBottom: '8px',
                }}>
                  Britteney Powers
                </p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.82rem', color: 'var(--sepia)', fontStyle: 'italic' }}>
                  {dir.fontName}
                </p>
              </div>

              {/* Divider */}
              <div style={{ width: '100%', height: '1px', background: 'rgba(176,141,87,0.25)', marginBottom: '32px' }} />

              {/* Tagline */}
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'var(--brass)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Sample Tagline
                </p>
                <p style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '1.3rem',
                  color: 'var(--oxblood)',
                  fontStyle: 'italic',
                  lineHeight: '1.5',
                }}>
                  {dir.tagline}
                </p>
              </div>

              {/* Mood */}
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'var(--brass)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  The Feel
                </p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.95rem', color: 'var(--ink)', lineHeight: '1.8', margin: 0 }}>
                  {dir.mood}
                </p>
              </div>

              {/* Best if */}
              <div style={{
                background: 'rgba(176,141,87,0.08)',
                border: '1px solid rgba(176,141,87,0.25)',
                borderRadius: '2px',
                padding: '16px 20px',
              }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.78rem', color: 'var(--brass)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Best fit if —
                </p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.9rem', color: 'var(--sepia)', fontStyle: 'italic', lineHeight: '1.7', margin: 0 }}>
                  {dir.bestIf}
                </p>
              </div>

            </div>
          </div>
        ))}

        {/* What happens next */}
        <div className="section-card" style={{ padding: '40px 44px' }}>
          <p className="ornament" style={{ marginBottom: '20px' }}>✦</p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'var(--brass)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
            What Happens Next
          </p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', color: 'var(--ink)', lineHeight: '1.85', marginBottom: '16px', textAlign: 'center' }}>
            Britteney fills out the questionnaire. Her answers — color world, voice, personality, what makes her different — either confirm one of these directions or pull them somewhere more specific. Then we build the real brand brief: finalized palette, typography pairing, logo direction, voice guide, positioning statement.
          </p>
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <a
              href="/questionnaire"
              className="btn-vintage"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Go to Questionnaire →
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p className="ornament">✦ ✦ ✦</p>
        </div>

      </div>
    </main>
  );
}
