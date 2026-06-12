import Logo from './Logo';
import { navigate } from '../lib/router';
import type { View } from '../lib/router';
import { brand, footer, ui } from '../data/content';

export default function Footer() {
  const links: { view: View; label: string }[] = [
    { view: 'founder', label: ui.footer.founders },
    { view: 'advisor', label: ui.footer.advisors },
    { view: 'mentors', label: ui.footer.mentors },
    { view: 'launchpad', label: ui.footer.launchpad },
  ];
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-md">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">{footer.blurb}</p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <div className="font-semibold text-slate-700">{ui.footer.explore}</div>
            <ul className="mt-3 space-y-2">
              {links.map((l) => (
                <li key={l.view}>
                  <button
                    onClick={() => navigate(l.view)}
                    className="rounded text-slate-500 transition hover:text-ember-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-400"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <div className="font-semibold text-slate-700">{brand.centre}</div>
            <div className="mt-1 text-slate-500">{brand.faculty}</div>
            <a
              href="mailto:ceed@uottawa.ca"
              className="mt-3 inline-block font-semibold text-ember-700 transition hover:text-ember-800"
            >
              {footer.contact} →
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-400">
          {footer.rights}
        </div>
      </div>
    </footer>
  );
}
