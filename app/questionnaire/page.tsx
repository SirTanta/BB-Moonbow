'use client';

import { useState, useEffect, useCallback } from 'react';
import { SECTIONS } from '@/lib/questions';
import { QuestionField } from '@/components/QuestionField';
import { useSaveAnswers, useSaveSection, clearSavedForm } from '@/lib/useFormPersistence';

const TOTAL = SECTIONS.length;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [resumed, setResumed] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('swell_questionnaire_v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.answers && Object.keys(parsed.answers).length > 0) {
          setAnswers(parsed.answers);
          setResumed(true);
        }
      }
      const savedSection = localStorage.getItem('swell_questionnaire_v1_section');
      if (savedSection) setSectionIndex(parseInt(savedSection, 10));
    } catch {}
    setMounted(true);
  }, []);

  useSaveAnswers(answers);
  useSaveSection(sectionIndex);

  const onChange = useCallback((id: string, value: unknown) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  }, []);

  const section = SECTIONS[sectionIndex];
  const progress = Math.round((sectionIndex / TOTAL) * 100);

  async function handleSubmit() {
    setStatus('submitting');
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          submittedAt: new Date().toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          }),
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('done');
        clearSavedForm();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (!mounted) return null;

  if (status === 'done') {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div className="section-card fade-in" style={{ maxWidth: '580px', width: '100%', padding: '60px 48px', textAlign: 'center' }}>
          <p className="ornament" style={{ marginBottom: '24px' }}>✦ ✦ ✦</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: 'var(--ink)', marginBottom: '16px' }}>
            Thank You
          </h1>
          <div style={{ width: '60px', height: '1px', background: 'var(--brass)', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: 'Georgia, serif', color: 'var(--sepia)', lineHeight: '1.8', marginBottom: '32px' }}>
            Your answers have been received. We will read everything carefully and be in touch soon — your brand is next.
          </p>
          <p className="ornament">✦</p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p className="ornament" style={{ marginBottom: '16px' }}>✦ ✦ ✦</p>
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            color: 'var(--ink)',
            fontWeight: '400',
            letterSpacing: '0.04em',
            marginBottom: '8px',
          }}>
            Britteney Powers
          </h1>
          <p style={{ fontFamily: 'Georgia, serif', color: 'var(--sepia)', fontStyle: 'italic', fontSize: '1rem' }}>
            Brand Discovery
          </p>
          <div style={{ width: '60px', height: '1px', background: 'var(--brass)', margin: '20px auto' }} />
        </div>

        {/* Intro card */}
        <div className="section-card" style={{ padding: '36px 48px', marginBottom: '40px' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: '1.85', marginBottom: '20px' }}>
            Before we build anything — before a color gets chosen or a word gets written — we need to understand who you are. Not your job title. You. Your energy, your aesthetic, your voice, the things that make you unmistakably yourself.
          </p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: '1.85', marginBottom: '20px' }}>
            <strong>Answer with as much detail as possible.</strong> There are no wrong answers and no answer that is too long. The more you give us — stories, specifics, images, feelings — the less we have to guess, and the more the final brand will feel like you instead of a template with your name on it. Vague answers produce generic brands. Your answers produce something built for you specifically.
          </p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: '1.85', marginBottom: '0' }}>
            If you are unsure about something, say so and explain your hesitation — that is just as useful. If a question does not apply, write "skip." You can close this at any time and return exactly where you left off. Your progress saves automatically.
          </p>
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(176,141,87,0.3)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brass)', flexShrink: 0 }} />
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.85rem', color: 'var(--sepia)', fontStyle: 'italic', margin: 0 }}>
              7 sections &nbsp;·&nbsp; ~15–20 minutes &nbsp;·&nbsp; saves automatically &nbsp;·&nbsp; close and return any time
            </p>
          </div>
        </div>

        {/* Resume banner */}
        {resumed && sectionIndex > 0 && status === 'idle' && (
          <div style={{
            background: 'rgba(176,141,87,0.12)',
            border: '1px solid var(--brass)',
            borderRadius: '2px',
            padding: '12px 20px',
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.88rem', color: 'var(--sepia)', fontStyle: 'italic' }}>
              Welcome back — your progress was saved.
            </span>
            <button
              onClick={() => { setSectionIndex(0); setAnswers({}); clearSavedForm(); setResumed(false); }}
              style={{ fontFamily: 'Georgia, serif', fontSize: '0.8rem', color: 'var(--oxblood)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Start over
            </button>
          </div>
        )}

        {/* Progress */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.82rem', color: 'var(--sepia)', fontStyle: 'italic' }}>
              Section {sectionIndex + 1} of {TOTAL}
            </span>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.82rem', color: 'var(--sepia)' }}>
              {progress}% complete
            </span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '12px', flexWrap: 'wrap' }}>
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                title={s.title}
                onClick={() => setSectionIndex(i)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: i === sectionIndex ? 'var(--oxblood)' : i < sectionIndex ? 'var(--brass)' : 'var(--parchment)',
                  transition: 'all 0.2s',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Section card */}
        <div className="section-card fade-in" key={sectionIndex} style={{ padding: '40px 48px 48px' }}>
          <div style={{ marginBottom: '36px' }}>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: 'var(--brass)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Section {sectionIndex + 1}
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', color: 'var(--ink)', fontWeight: '400', marginBottom: '8px' }}>
              {section.title}
            </h2>
            {section.subtitle && (
              <p style={{ fontFamily: 'Georgia, serif', color: 'var(--sepia)', fontStyle: 'italic', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {section.subtitle}
              </p>
            )}
            <div style={{ width: '40px', height: '1px', background: 'var(--brass)', marginTop: '16px' }} />
          </div>

          {section.questions.map(q => (
            <QuestionField
              key={q.id}
              question={q}
              value={answers[q.id]}
              onChange={onChange}
            />
          ))}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(176,141,87,0.3)' }}>
            <button
              className="btn-secondary"
              onClick={() => setSectionIndex(i => Math.max(0, i - 1))}
              style={{ opacity: sectionIndex === 0 ? 0 : 1, pointerEvents: sectionIndex === 0 ? 'none' : 'auto' }}
            >
              ← Previous
            </button>

            {sectionIndex < TOTAL - 1 ? (
              <button
                className="btn-vintage"
                onClick={() => { setSectionIndex(i => i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Continue →
              </button>
            ) : (
              <button
                className="btn-vintage"
                onClick={handleSubmit}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Questionnaire'}
              </button>
            )}
          </div>

          {status === 'error' && (
            <p style={{ fontFamily: 'Georgia, serif', color: 'var(--oxblood)', textAlign: 'center', marginTop: '16px', fontStyle: 'italic', fontSize: '0.9rem' }}>
              Something went wrong. Your answers are still saved — please try again.
            </p>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px', paddingBottom: '40px' }}>
          <p className="ornament" style={{ marginBottom: '12px' }}>✦</p>
          <p style={{ fontFamily: 'Georgia, serif', color: 'var(--sepia)', fontSize: '0.8rem', fontStyle: 'italic' }}>
            Your answers save automatically with every keystroke.
          </p>
        </div>

      </div>
    </main>
  );
}
