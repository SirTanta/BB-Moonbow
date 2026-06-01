'use client';

import { LISTINGS } from '@/lib/stub-data';

export default function PropertyJournal() {
  return (
    <section
      id="properties"
      style={{
        padding: '96px 24px',
        background: 'var(--cream)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Masthead header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            fontFamily: 'var(--font-accent, Georgia, serif)',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'var(--brass)',
            marginBottom: '12px',
          }}>
            The Property Journal
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display, Georgia, serif)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--ink)',
            fontWeight: 400,
            marginBottom: '0',
            letterSpacing: '0.02em',
          }}>
            Current Properties
          </h2>
          {/* Masthead decorative rule */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
            <div style={{ height: '1px', width: '60px', background: 'var(--brass)' }} />
            <span style={{ color: 'var(--brass)', fontSize: '0.8rem' }}>✦</span>
            <div style={{ height: '1px', width: '60px', background: 'var(--brass)' }} />
          </div>
        </div>

        {/* Listing cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '48px',
        }}>
          {LISTINGS.map((listing) => (
            <div
              key={listing.id}
              style={{
                background: 'rgba(252,244,224,0.9)',
                border: '1px solid rgba(176,141,87,0.35)',
                borderRadius: '1px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(44,24,16,0.08)',
              }}
            >
              {/* Image area */}
              <div style={{
                width: '100%',
                aspectRatio: '4/3',
                background: 'var(--parchment)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid rgba(176,141,87,0.2)',
                position: 'relative',
                // STUB: sepia filter applied for vintage aesthetic
                filter: 'sepia(0.4) contrast(1.1)',
              }}>
                {/* STUB: listing.image will replace this placeholder when real photos are provided */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: 0.4,
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--sepia)' }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'var(--sepia)', fontStyle: 'italic' }}>
                    Photo Coming Soon
                  </span>
                </div>

                {/* Status badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: listing.status === 'Active' ? 'var(--brass)' : 'var(--sepia)',
                  color: 'var(--cream)',
                  padding: '3px 10px',
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}>
                  {listing.status}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px 22px 24px' }}>
                <p style={{
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.95rem',
                  color: 'var(--ink)',
                  fontWeight: 700,
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}>
                  {listing.address}
                  {/* STUB: address from stub-data */}
                </p>

                <p style={{
                  fontFamily: 'var(--font-display, Georgia, serif)',
                  fontSize: '1.3rem',
                  color: 'var(--brass)',
                  marginBottom: '12px',
                  letterSpacing: '0.02em',
                }}>
                  {listing.price}
                  {/* STUB: price from stub-data */}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '16px',
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.78rem',
                  color: 'var(--sepia)',
                  marginBottom: '20px',
                }}>
                  <span>{listing.beds} bed{listing.beds !== 1 ? 's' : ''}</span>
                  <span>&middot;</span>
                  <span>{listing.baths} bath{listing.baths !== 1 ? 's' : ''}</span>
                  <span>&middot;</span>
                  <span>{listing.sqft.toLocaleString()} sqft</span>
                </div>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: '1px solid var(--brass)',
                    color: 'var(--brass)',
                    fontFamily: 'var(--font-subhead, Georgia, serif)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    padding: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    borderRadius: '1px',
                  }}
                >
                  For Enquiries
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MLS footer note */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-accent, Georgia, serif)',
            fontStyle: 'italic',
            fontSize: '0.85rem',
            color: 'var(--sepia)',
          }}>
            {/* STUB: MLS platform name pending */}
            All listings on <a href="#contact" style={{ color: 'var(--brass)', textDecoration: 'underline' }}>[STUB: MLS platform]</a>
          </p>
        </div>

      </div>
    </section>
  );
}
