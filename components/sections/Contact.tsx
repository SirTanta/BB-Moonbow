'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY: FormState = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function update(k: keyof FormState, v: string) {
    setForm(prev => ({ ...prev, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  // Success: vintage parchment thank-you card
  if (status === 'sent') {
    return (
      <section id="contact" style={{ padding: '96px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '540px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-card" style={{ padding: '56px 48px' }}>
            <p className="ornament" style={{ marginBottom: '20px' }}>✦ ✦ ✦</p>
            <h3 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: '2rem',
              color: 'var(--ink)',
              fontWeight: 400,
              marginBottom: '12px',
            }}>
              Thank You
            </h3>
            <div style={{ width: '48px', height: '1px', background: 'var(--brass)', margin: '0 auto 20px' }} />
            <p style={{
              fontFamily: 'var(--font-accent, Georgia, serif)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--sepia)',
              lineHeight: '1.85',
            }}>
              Your message has been received. Britteney will be in touch shortly.
            </p>
            <p className="ornament" style={{ marginTop: '28px', fontSize: '1rem' }}>✦</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
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

          {/* Left: intro copy */}
          <div>
            <p style={{
              fontFamily: 'var(--font-accent, Georgia, serif)',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--brass)',
              marginBottom: '12px',
            }}>
              Get In Touch
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              color: 'var(--ink)',
              fontWeight: 400,
              marginBottom: '8px',
            }}>
              Let&apos;s Talk
            </h2>
            <div style={{ width: '40px', height: '1px', background: 'var(--brass)', marginBottom: '24px' }} />
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              color: 'var(--sepia)',
              lineHeight: '1.85',
              marginBottom: '32px',
            }}>
              {/* STUB: contact intro copy awaiting questionnaire response */}
              Whether you are ready to start your property search, thinking about selling, or simply have questions — reach out. Every journey begins with a conversation.
            </p>

            {/* Contact details — STUB */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--brass)', fontSize: '0.8rem' }}>✦</span>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.88rem', color: 'var(--sepia)' }}>
                  {/* STUB: phone number from questionnaire */}
                  Phone: [STUB]
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--brass)', fontSize: '0.8rem' }}>✦</span>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.88rem', color: 'var(--sepia)' }}>
                  {/* STUB: email address from questionnaire */}
                  Email: [STUB]
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--brass)', fontSize: '0.8rem' }}>✦</span>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.88rem', color: 'var(--sepia)' }}>
                  NC &amp; VA Licensed
                </span>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="section-card" style={{ padding: '40px 36px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Name */}
              <div>
                <label htmlFor="contact-name" style={{
                  display: 'block',
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--sepia)',
                  marginBottom: '8px',
                }}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                  placeholder="Your full name"
                  className="vintage-input"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" style={{
                  display: 'block',
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--sepia)',
                  marginBottom: '8px',
                }}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  placeholder="you@example.com"
                  className="vintage-input"
                />
              </div>

              {/* Phone — optional */}
              <div>
                <label htmlFor="contact-phone" style={{
                  display: 'block',
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--sepia)',
                  marginBottom: '8px',
                }}>
                  Phone <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, opacity: 0.6 }}>(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={form.phone}
                  onChange={e => update('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="vintage-input"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={{
                  display: 'block',
                  fontFamily: 'var(--font-subhead, Georgia, serif)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--sepia)',
                  marginBottom: '8px',
                }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  placeholder="Tell me how I can help..."
                  className="vintage-input"
                  style={{ resize: 'none' }}
                />
              </div>

              {/* Error message */}
              {status === 'error' && (
                <p style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.85rem',
                  color: 'var(--oxblood)',
                  fontStyle: 'italic',
                  textAlign: 'center',
                }}>
                  Something went wrong — please try again or email directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-vintage"
                style={{ width: '100%' }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
