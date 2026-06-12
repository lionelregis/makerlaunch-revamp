// Lightweight hash router. GitHub Pages serves a single static file, so we keep
// app state in the URL hash: this gives working Back/Forward, deep links, and
// shareable URLs without any server config. Each top-level view maps to a slug;
// view-specific state (e.g. the founder stage) rides along as query params.
import { useEffect, useState } from 'react';

export type View = 'home' | 'founder' | 'advisor' | 'mentors' | 'launchpad' | 'finder';

const SLUGS: Record<View, string> = {
  home: '/',
  founder: '/founders',
  advisor: '/advisors',
  mentors: '/mentors',
  launchpad: '/launchpad',
  finder: '/find-your-start',
};

const BY_SLUG: Record<string, View> = Object.fromEntries(
  Object.entries(SLUGS).map(([view, slug]) => [slug, view as View]),
);

export interface Route {
  view: View;
  params: URLSearchParams;
}

function parse(hash: string): Route {
  const raw = hash.replace(/^#/, '');
  const [path, query = ''] = raw.split('?');
  const slug = !path || path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return { view: BY_SLUG[slug] ?? 'home', params: new URLSearchParams(query) };
}

export function buildHash(view: View, params?: Record<string, string | undefined>): string {
  const sp = new URLSearchParams();
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value) sp.set(key, value);
    }
  }
  const query = sp.toString();
  return `#${SLUGS[view]}${query ? `?${query}` : ''}`;
}

/** Navigate to a view. Updating the hash triggers the hashchange listener. */
export function navigate(view: View, params?: Record<string, string | undefined>): void {
  const next = buildHash(view, params);
  if (`#${location.hash.replace(/^#/, '')}` === next) {
    window.scrollTo({ top: 0, behavior: 'auto' });
  } else {
    location.hash = next;
  }
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    parse(typeof location !== 'undefined' ? location.hash : ''),
  );
  useEffect(() => {
    const onChange = () => setRoute(parse(location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}
