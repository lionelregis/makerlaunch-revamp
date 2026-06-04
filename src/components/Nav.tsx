import Logo from './Logo';
import Icon from './Icon';
import type { Role } from '../data/content';

type View = 'home' | Role;

export default function Nav({
  view,
  onNavigate,
}: {
  view: View;
  onNavigate: (view: View) => void;
}) {
  const onRole = view !== 'home';

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <button
          onClick={() => onNavigate('home')}
          className="rounded-lg transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-garnet-400"
          aria-label="Back to start"
        >
          <Logo />
        </button>

        <nav className="flex items-center gap-1.5 sm:gap-2">
          {onRole ? (
            <>
              <span className="hidden rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 sm:inline">
                {view === 'founder' ? 'Founder view' : 'Advisor & alumni view'}
              </span>
              <button
                onClick={() => onNavigate(view === 'founder' ? 'advisor' : 'founder')}
                className="rounded-full px-3 py-1.5 text-sm font-semibold text-garnet-700 transition hover:bg-garnet-50"
              >
                {view === 'founder' ? 'I’m an advisor' : 'I’m a founder'}
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Icon name="arrowLeft" className="h-4 w-4" />
                <span className="hidden sm:inline">Start over</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onNavigate('founder')}
                className="rounded-full px-3.5 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                For founders
              </button>
              <button
                onClick={() => onNavigate('advisor')}
                className="rounded-full bg-garnet-700 px-3.5 py-1.5 text-sm font-semibold text-white transition hover:bg-garnet-800"
              >
                For advisors & alumni
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
