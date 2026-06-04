import { useI18n } from '../lib/i18n';
import { brand, footer } from '../data/content';
import Logo from './Logo';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <div className="leading-tight">
                <div className="text-sm font-bold text-white">{t(brand.programName)}</div>
                <div className="text-xs text-slate-400">{t(brand.centre)}</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{t(footer.blurb)}</p>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-white">{t(brand.faculty)}</div>
            <a
              href="mailto:ceed@uottawa.ca"
              className="mt-2 inline-block text-garnet-300 underline-offset-4 transition hover:text-garnet-200 hover:underline"
            >
              {t(footer.contact)} →
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
          {t(footer.rights)}
        </div>
      </div>
    </footer>
  );
}
