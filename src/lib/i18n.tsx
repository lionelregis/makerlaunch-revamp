import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang, Localized } from '../data/content';

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Resolve a localized string for the active language. */
  t: (value: Localized) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = 'ceed-lang';

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'fr') return stored;
  return window.navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(() => setLangState((l) => (l === 'en' ? 'fr' : 'en')), []);
  const t = useCallback((value: Localized) => value[lang], [lang]);

  const value = useMemo<I18nValue>(() => ({ lang, setLang, toggle, t }), [lang, setLang, toggle, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider');
  return ctx;
}
