import Logo from './Logo';
import { brand, footer } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">{footer.blurb}</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-slate-700">{brand.centre}</div>
            <div className="mt-1 text-slate-500">{brand.faculty}</div>
            <a
              href="mailto:ceed@uottawa.ca"
              className="mt-3 inline-block font-semibold text-garnet-700 transition hover:text-garnet-800"
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
