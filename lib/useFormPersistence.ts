'use client';

import { useEffect } from 'react';

const STORAGE_KEY = 'swell_questionnaire_v1';

export function useSaveAnswers(answers: Record<string, unknown>) {
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, savedAt: Date.now() }));
    } catch {}
  }, [answers]);
}

export function useLoadAnswers(): Record<string, unknown> {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed.answers ?? {};
  } catch {
    return {};
  }
}

export function useSaveSection(sectionIndex: number) {
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_section`, String(sectionIndex));
    } catch {}
  }, [sectionIndex]);
}

export function useLoadSection(): number {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(`${STORAGE_KEY}_section`) : null;
    return raw ? parseInt(raw, 10) : 0;
  } catch {
    return 0;
  }
}

export function clearSavedForm() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(`${STORAGE_KEY}_section`);
  } catch {}
}
