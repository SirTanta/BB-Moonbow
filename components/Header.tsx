'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#about',        label: 'About' },
  { href: '#properties',  label: 'Properties' },
  { href: '#process',     label: 'Process' },
  { href: '#contact',     label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  function handleNavClick(href: string) {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--parchment)',
        borderBottom: `1px solid var(--brass)`,
        boxShadow: scrolled ? '0 2px 12px rgba(44,24,16,0.12)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Logo / Monogram */}
          <a
            href="/"
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}
          >
            <span style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: '1.5rem',
              color: 'var(--brass)',
              letterSpacing: '0.08em',
              fontWeight: 600,
            }}>
              BP
            </span>
            <span style={{
              fontFamily: 'var(--font-subhead, Georgia, serif)',
              fontSize: '0.6rem',
              color: 'var(--sepia)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginTop: '1px',
            }}>
              Britteney Powers
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.82rem',
                  color: 'var(--ink)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '4px 0',
                  position: 'relative',
                  transition: 'color 0.2s',
                }}
                className="header-nav-link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'none',
            }}
            className="header-hamburger"
          >
            <span style={{
              display: 'block', width: '22px', height: '1px',
              background: 'var(--ink)', marginBottom: '6px',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              transition: 'transform 0.3s',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px',
              background: 'var(--ink)', marginBottom: '6px',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px',
              background: 'var(--ink)',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              transition: 'transform 0.3s',
            }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: '1px solid rgba(176,141,87,0.3)',
              paddingTop: '16px',
              paddingBottom: '20px',
            }}
            className="header-mobile-menu"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.88rem',
                  color: 'var(--ink)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '10px 4px',
                  borderBottom: '1px solid rgba(176,141,87,0.15)',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
