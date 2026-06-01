// Footer component for Swell Realty — ported from tanta-holdings Footer pattern

import { AGENT } from '@/lib/stub-data';

const navLinks = [
  { href: '#about',       label: 'About' },
  { href: '#properties',  label: 'Properties' },
  { href: '#process',     label: 'Process' },
  { href: '#contact',     label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--ink)',
      color: 'rgba(245,237,214,0.6)',
      borderTop: '3px solid var(--brass)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 24px 32px' }}>

        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <p style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: '1.4rem',
                color: 'var(--brass)',
                letterSpacing: '0.08em',
                fontWeight: 600,
                marginBottom: '4px',
              }}>
                Britteney Powers
              </p>
              <p style={{
                fontFamily: 'var(--font-accent, Georgia, serif)',
                fontSize: '0.8rem',
                color: 'rgba(245,237,214,0.5)',
                fontStyle: 'italic',
              }}>
                Real Estate Professional
              </p>
            </div>

            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.8rem',
              lineHeight: '1.8',
              color: 'rgba(245,237,214,0.45)',
              maxWidth: '220px',
              marginBottom: '16px',
            }}>
              {/* STUB: tagline will be replaced with questionnaire response */}
              Serving NC &amp; VA with dedication, expertise, and a personal touch.
            </p>

            {/* Social placeholders */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* STUB: social URLs pending — using # placeholder */}
              <a href="#" aria-label="Facebook" style={{ color: 'rgba(245,237,214,0.4)', transition: 'color 0.2s' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" style={{ color: 'rgba(245,237,214,0.4)', transition: 'color 0.2s' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" style={{ color: 'rgba(245,237,214,0.4)', transition: 'color 0.2s' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p style={{
              fontFamily: 'var(--font-subhead, Georgia, serif)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(245,237,214,0.3)',
              marginBottom: '16px',
            }}>
              Navigate
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '10px' }}>
                  <a href={link.href} style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '0.85rem',
                    color: 'rgba(245,237,214,0.5)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/questionnaire" style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.85rem',
                  color: 'rgba(184,134,11,0.7)',
                  textDecoration: 'none',
                }}>
                  Website Questionnaire
                </a>
              </li>
            </ul>
          </div>

          {/* Licensing column */}
          <div>
            <p style={{
              fontFamily: 'var(--font-subhead, Georgia, serif)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(245,237,214,0.3)',
              marginBottom: '16px',
            }}>
              Licensing
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ fontFamily: 'Georgia, serif', fontSize: '0.8rem', color: 'rgba(245,237,214,0.45)', lineHeight: 1.6 }}>
                NC Broker License #{AGENT.ncLicense}
                {/* STUB: NC license number */}
                <br />
                <span style={{ fontSize: '0.75rem', color: 'rgba(245,237,214,0.3)' }}>
                  Swell Real Estate Co
                </span>
              </li>
              <li style={{ fontFamily: 'Georgia, serif', fontSize: '0.8rem', color: 'rgba(245,237,214,0.45)', lineHeight: 1.6 }}>
                VA Salesperson License #{AGENT.vaLicense}
                {/* STUB: VA license number */}
                <br />
                <span style={{ fontSize: '0.75rem', color: 'rgba(245,237,214,0.3)' }}>
                  Swell Realty Co
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(184,134,11,0.25)', marginBottom: '24px' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'rgba(245,237,214,0.3)', margin: 0 }}>
            &copy; {year} Britteney Powers. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'rgba(245,237,214,0.3)', margin: 0 }}>
            NC &amp; VA &middot; Swell Real Estate Co &middot; Swell Realty Co
          </p>
        </div>
      </div>
    </footer>
  );
}
