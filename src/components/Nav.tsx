import { useI18n } from '../lib/i18n';
import { brand, ui } from '../data/content';
import type { Role } from '../data/content';
import Logo from './Logo';
import Icon from './Icon';

type View = 'home' | Role;

export default function Nav({ view, onNavigate }: { view: View; onNavigate: (view: View) => void }) {
  const { t, toggle, lang } = useI18n();

  const links: { id: Role; label: string }[] = [
    { id: 'founder', label: t(ui.navFounders) },
    { id: 'advisor', label: t(ui.navAdvisors) },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 rounded-xl py-1 pr-2 text-left transition hover:opacity-90"
          aria-label={t(ui.navHome)}
        >
          <Logo className="h-9 w-9 shrink-0" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-slate-900">{t(brand.programName)}</span>
            <span className="block text-[11px] font-medium text-slate-500">
              {t(brand.short)} · {t(brand.faculty)}
            </span>
          </span>
        </button>

        <nav className="ml-auto flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const active = view === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
                  active
                    ? 'bg-garnet-700 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <button
            onClick={toggle}
            className="ml-1 flex items-center gap-1 rounded-full border border-slate-300 px-2.5 py-1.5 text-xs font-bold text-slate-700 transition hover:border-garnet-400 hover:text-garnet-700"
            aria-label={`Switch language to ${t(ui.langLabel)}`}
            title={t(ui.langLabel)}
          >
            <Icon name="language" className="h-3.5 w-3.5" />
            <span>{lang === 'en' ? 'FR' : 'EN'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
