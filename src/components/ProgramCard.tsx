import { useState } from 'react';
import { useI18n } from '../lib/i18n';
import { stages, ui } from '../data/content';
import type { Program } from '../data/content';
import { ACCENTS } from '../lib/accents';
import Icon from './Icon';

function statusLabel(status: Program['status']) {
  switch (status) {
    case 'new':
      return ui.statusNew;
    case 'refreshed':
      return ui.statusRefreshed;
    case 'repositioned':
      return ui.statusRepositioned;
    default:
      return null;
  }
}

export default function ProgramCard({
  program,
  defaultOpen = false,
}: {
  program: Program;
  defaultOpen?: boolean;
}) {
  const { t } = useI18n();
  const [open, setOpen] = useState(defaultOpen);
  const stage = stages.find((s) => s.id === program.stage)!;
  const a = ACCENTS[stage.accent];
  const status = statusLabel(program.status);
  const hasDetails = program.details.length > 0;

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition hover:shadow-lg ${
        program.flagship ? `${a.border} ring-1 ${a.ring}` : 'border-slate-200'
      }`}
    >
      {program.flagship && <div className={`h-1 w-full bg-gradient-to-r ${a.gradient}`} />}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${a.chip}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
            {t(stage.name)}
          </span>
          {status && (
            <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              {t(status)}
            </span>
          )}
          {program.flagship && (
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${a.bgSoft} ${a.text}`}>
              <Icon name="spark" className="h-3 w-3" />
              {t(ui.flagship)}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold leading-snug text-slate-900">{t(program.name)}</h3>
        <p className={`mt-0.5 text-xs font-semibold ${a.text}`}>{t(program.type)}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{t(program.summary)}</p>

        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <Icon name="users" className="h-4 w-4 shrink-0 text-slate-400" />
          <span>
            <span className="font-medium text-slate-600">{t(ui.annualReach)}:</span> {t(program.reach)}
          </span>
        </div>

        {hasDetails && (
          <>
            <button
              onClick={() => setOpen((o) => !o)}
              className={`mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold ${a.text} transition hover:gap-2.5`}
              aria-expanded={open}
            >
              {open ? '−' : '+'} {t(ui.learnMore)}
            </button>

            {open && (
              <ul className="mt-3 space-y-2.5 border-t border-slate-100 pt-3">
                {program.details.map((d, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                    <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
                    <span>{t(d)}</span>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}
