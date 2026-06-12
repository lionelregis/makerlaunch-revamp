// Language selection for the bilingual (English / French) site.
//
// Content and UI strings are chosen at module-init time based on the language
// returned here, so switching language reloads the page (robust and simple, with
// no per-component refactor). Priority: an explicit ?lang in the URL, then the
// saved preference, then English.

export type Lang = 'en' | 'fr';

const KEY = 'ml.lang';

function fromUrl(): Lang | null {
  if (typeof location === 'undefined') return null;
  const hashQuery = location.hash.includes('?') ? location.hash.split('?')[1] : '';
  const params = new URLSearchParams(hashQuery || location.search);
  const value = params.get('lang');
  return value === 'fr' || value === 'en' ? value : null;
}

export function getLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const url = fromUrl();
  if (url) return url;
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === 'fr' || stored === 'en') return stored;
  } catch {
    /* storage unavailable */
  }
  return 'en';
}

export function setLang(lang: Lang): void {
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    /* storage unavailable */
  }
  // Reflect the choice in the URL (so the language survives the reload and the
  // link is shareable), then reload to re-initialise content in that language.
  const [path, query = ''] = location.hash.replace(/^#/, '').split('?');
  const params = new URLSearchParams(query);
  params.set('lang', lang);
  location.hash = `#${path || '/'}?${params.toString()}`;
  location.reload();
}
