'use client';

import { Question } from '@/lib/questions';

interface Props {
  question: Question;
  value: unknown;
  onChange: (id: string, value: unknown) => void;
}

export function QuestionField({ question, value, onChange }: Props) {
  const { id, label, help, type, required, options, scaleMin, scaleMax, placeholder } = question;

  const strVal = (value as string) ?? '';
  const arrVal = (value as string[]) ?? [];
  const numVal = (value as number) ?? 3;

  return (
    <div className="mb-8">
      <label className="q-label block mb-1">
        {label}
        {required && <span style={{ color: 'var(--oxblood)', marginLeft: '4px' }}>*</span>}
      </label>
      {help && <p className="q-help mb-3">{help}</p>}

      {type === 'text' && (
        <input
          className="vintage-input"
          type="text"
          value={strVal}
          placeholder={placeholder}
          onChange={e => onChange(id, e.target.value)}
        />
      )}

      {type === 'textarea' && (
        <textarea
          className="vintage-input"
          rows={5}
          value={strVal}
          placeholder={placeholder}
          style={{ resize: 'vertical' }}
          onChange={e => onChange(id, e.target.value)}
        />
      )}

      {type === 'url-list' && (
        <textarea
          className="vintage-input"
          rows={4}
          value={strVal}
          placeholder="Paste links here, one per line. Add a note after each one."
          style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: '0.88rem' }}
          onChange={e => onChange(id, e.target.value)}
        />
      )}

      {type === 'this-or-that' && options && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
          {options.map(opt => {
            const selected = strVal === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => onChange(id, selected ? '' : opt)}
                style={{
                  flex: '1 1 220px',
                  padding: '20px 18px',
                  border: selected ? '2px solid var(--oxblood)' : '1px solid var(--brass)',
                  borderRadius: '2px',
                  background: selected
                    ? 'rgba(110, 26, 26, 0.07)'
                    : 'rgba(248, 240, 220, 0.5)',
                  cursor: 'pointer',
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.95rem',
                  color: selected ? 'var(--oxblood)' : 'var(--ink)',
                  lineHeight: '1.6',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  boxShadow: selected
                    ? '0 2px 8px rgba(110, 26, 26, 0.12)'
                    : '0 1px 4px rgba(44, 24, 16, 0.06)',
                }}
                onMouseEnter={e => {
                  if (!selected) {
                    e.currentTarget.style.background = 'rgba(176, 141, 87, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--sepia)';
                  }
                }}
                onMouseLeave={e => {
                  if (!selected) {
                    e.currentTarget.style.background = 'rgba(248, 240, 220, 0.5)';
                    e.currentTarget.style.borderColor = 'var(--brass)';
                  }
                }}
              >
                {selected && (
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    right: '12px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'var(--oxblood)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: 'var(--cream)',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}>✓</span>
                )}
                <span style={{ display: 'block', paddingRight: selected ? '24px' : '0' }}>
                  {opt}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {type === 'radio' && options && (
        <div className="space-y-3 mt-1">
          {options.map(opt => (
            <label key={opt} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="radio"
                className="vintage-radio mt-1"
                name={id}
                value={opt}
                checked={strVal === opt}
                onChange={() => onChange(id, opt)}
              />
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.95rem', color: 'var(--ink)', lineHeight: '1.5' }}>
                {opt}
              </span>
            </label>
          ))}
        </div>
      )}

      {type === 'checkbox' && options && (
        <div className="space-y-3 mt-1">
          {options.map(opt => (
            <label key={opt} className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="vintage-check"
                checked={arrVal.includes(opt)}
                onChange={e => {
                  if (e.target.checked) {
                    onChange(id, [...arrVal, opt]);
                  } else {
                    onChange(id, arrVal.filter(v => v !== opt));
                  }
                }}
              />
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.95rem', color: 'var(--ink)', lineHeight: '1.5' }}>
                {opt}
              </span>
            </label>
          ))}
        </div>
      )}

      {type === 'scale' && (
        <div className="mt-3">
          <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--sepia)', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
            <span>← {scaleMin}</span>
            <span>{scaleMax} →</span>
          </div>
          <input
            type="range"
            className="vintage-range"
            min={1}
            max={5}
            step={1}
            value={numVal}
            onChange={e => onChange(id, parseInt(e.target.value, 10))}
          />
          <div className="flex justify-between mt-1">
            {[1, 2, 3, 4, 5].map(n => (
              <span
                key={n}
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.8rem',
                  color: n === numVal ? 'var(--oxblood)' : 'var(--sepia)',
                  fontWeight: n === numVal ? '700' : '400',
                  width: '20%',
                  textAlign: 'center',
                }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      )}

      {type === 'color-palette' && (
        <div>
          <div className="mb-3">
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.82rem', color: 'var(--sepia)', marginBottom: '8px', fontStyle: 'italic' }}>
              Tap any that call to you — or describe your own below:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Oxblood', hex: '#6E1A1A' },
                { name: 'Brass', hex: '#B08D57' },
                { name: 'Cream', hex: '#F5EDD6' },
                { name: 'Ink', hex: '#2C1810' },
                { name: 'Sage', hex: '#7A8C6E' },
                { name: 'Dusty Rose', hex: '#C49A8A' },
                { name: 'Navy', hex: '#1B2A4A' },
                { name: 'Sepia', hex: '#7A5C3A' },
                { name: 'Terracotta', hex: '#C4623A' },
                { name: 'Slate Blue', hex: '#5B7A8C' },
                { name: 'Gold', hex: '#D4A847' },
                { name: 'Charcoal', hex: '#3A3A3A' },
                { name: 'Mauve', hex: '#9B7B8A' },
                { name: 'Forest', hex: '#3D5C3A' },
                { name: 'Blush', hex: '#E8C4B4' },
                { name: 'Midnight', hex: '#1A1A2E' },
              ].map(swatch => {
                const selected = strVal.includes(swatch.name);
                return (
                  <button
                    key={swatch.hex}
                    type="button"
                    title={`${swatch.name} ${swatch.hex}`}
                    className="swatch"
                    style={{
                      background: swatch.hex,
                      border: selected ? '3px solid var(--ink)' : '2px solid transparent',
                      transform: selected ? 'scale(1.25)' : 'scale(1)',
                      transition: 'all 0.15s ease',
                    }}
                    onClick={() => {
                      const current = strVal;
                      if (current.includes(swatch.name)) {
                        onChange(id, current.replace(swatch.name + ' ' + swatch.hex, '').replace(/,\s*$/, '').replace(/^\s*,/, '').trim());
                      } else {
                        onChange(id, current ? current + ', ' + swatch.name + ' ' + swatch.hex : swatch.name + ' ' + swatch.hex);
                      }
                    }}
                  />
                );
              })}
            </div>
          </div>
          <textarea
            className="vintage-input"
            rows={3}
            value={strVal}
            placeholder='Describe in words or paste hex codes: "dusty rose, sage, warm cream, a deep oxblood red..."'
            style={{ resize: 'vertical' }}
            onChange={e => onChange(id, e.target.value)}
          />
        </div>
      )}

      {type === 'file-upload' && (
        <div>
          <label
            htmlFor={`file-${id}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '32px 24px',
              border: '1px dashed var(--brass)',
              borderRadius: '2px',
              background: 'rgba(248, 240, 220, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(176,141,87,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(248, 240, 220, 0.5)')}
          >
            {strVal ? (
              <>
                <span style={{ fontSize: '2rem' }}>✓</span>
                <span style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: '600' }}>
                  {(value as { name?: string })?.name ?? 'File attached'}
                </span>
                <span style={{ fontFamily: 'Georgia, serif', color: 'var(--sepia)', fontSize: '0.82rem', fontStyle: 'italic' }}>
                  Click to replace
                </span>
              </>
            ) : (
              <>
                <span style={{ fontSize: '2rem', opacity: 0.4 }}>⬆</span>
                <span style={{ fontFamily: 'Georgia, serif', color: 'var(--sepia)', fontSize: '0.9rem', textAlign: 'center' }}>
                  {placeholder ?? 'Click to upload'}
                </span>
                <span style={{ fontFamily: 'Georgia, serif', color: 'var(--sepia)', fontSize: '0.8rem', fontStyle: 'italic' }}>
                  SVG · PNG · JPG · PDF — max 10MB
                </span>
              </>
            )}
          </label>
          <input
            id={`file-${id}`}
            type="file"
            accept=".svg,.png,.jpg,.jpeg,.eps,.ai,.pdf"
            style={{ display: 'none' }}
            onChange={e => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => {
                onChange(id, {
                  name: file.name,
                  type: file.type,
                  size: file.size,
                  data: (reader.result as string).split(',')[1],
                  mimeType: file.type || 'application/octet-stream',
                });
              };
              reader.readAsDataURL(file);
            }}
          />
        </div>
      )}
    </div>
  );
}
