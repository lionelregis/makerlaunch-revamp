import { useState } from 'react';
import Logo from './Logo';
import Icon from './Icon';
import { navigate } from '../lib/router';
import type { View } from '../lib/router';

const LINKS: { view: View; label: string }[] = [
  { view: 'founder', label: 'Founders' },
  { view: 'advisor', label: 'Advisors & alumni' },
  { view: 'mentors', label: 'Mentors' },
  { view: 'launchpad', label: 'Launchpad' },
];

export default function Nav({ view }: { view: View }) {
  const [open, setOpen] = useState(false);

  const go = (next: View) => {
    setOpen(false);
    navigate(next);
  };

  function linkClass(active: boolean, block = false) {
    return `${block ? 'block w-full text-left' : ''} rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
      active ? 'bg-garnet-50 text-garnet-700' : 'text-slate-700 hover:bg-slate-100'
    }`;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <button
          onClick={() => go('home')}
          aria-label="Home"
          aria-current={view === 'home' ? 'page' : undefined}
          className="rounded-lg transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-garnet-400"
        >
          <Logo />
        </button>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.view}
              onClick={() => go(l.view)}
              aria-current={view === l.view ? 'page' : undefined}
              className={linkClass(view === l.view)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-garnet-400 md:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-4 py-3">
            {LINKS.map((l) => (
              <button
                key={l.view}
                onClick={() => go(l.view)}
                aria-current={view === l.view ? 'page' : undefined}
                className={linkClass(view === l.view, true)}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
