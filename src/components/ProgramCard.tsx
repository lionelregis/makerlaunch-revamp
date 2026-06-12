import { useState } from 'react';
import Icon from './Icon';
import { accents } from '../lib/accents';
import { ui } from '../data/content';
import type { Accent, Program } from '../data/content';

const STATUS_LABEL: Record<Exclude<Program['status'], ''>, string> = {
  new: ui.program.statusNew,
  refreshed: ui.program.statusRefreshed,
};

export default function ProgramCard({
  program,
  accent,
}: {
  program: Program;
  accent: Accent;
}) {
  const [open, setOpen] = useState(false);
  const a = accents[accent];

  return (
    <div
      className={`rounded-2xl border bg-white transition hover:shadow-md ${
        program.flagship ? `${a.border} ring-1 ${a.ring}/40` : 'border-slate-200'
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-3 p-5 text-left"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-display text-base font-bold text-slate-900">{program.name}</h4>
            {program.status && (
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${a.soft} ${a.text}`}>
                {STATUS_LABEL[program.status]}
              </span>
            )}
            {program.flagship && (
              <span className="rounded-full bg-garnet-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                {ui.program.flagship}
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{program.summary}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1">
              <Icon name="spark" className={`h-3.5 w-3.5 ${a.text}`} />
              {program.kind}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="calendar" className="h-3.5 w-3.5" />
              {program.when}
            </span>
          </div>
        </div>
        <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${a.soft} ${a.text}`}>
          <Icon name={open ? 'minus' : 'plus'} className="h-4 w-4" />
        </span>
      </button>

      {open && (
        <div className="animate-fade-in border-t border-slate-100 px-5 pb-5 pt-4">
          <div className="flex items-start gap-2 text-sm text-slate-600">
            <Icon name="users" className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
            <p>
              <span className="font-semibold text-slate-800">{ui.program.whoFor}</span>
              {program.forWhom}
            </p>
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">{ui.program.offers}</p>
          <ul className="mt-2 space-y-1.5">
            {program.offers.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                <Icon name="check" className={`mt-1 h-3.5 w-3.5 shrink-0 ${a.text}`} />
                {item}
              </li>
            ))}
          </ul>

          <div className={`mt-4 rounded-xl ${a.soft} p-3.5`}>
            <p className="text-sm leading-relaxed text-slate-700">
              <span className={`font-semibold ${a.text}`}>{ui.program.takeaway}</span>
              {program.takeaway}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
