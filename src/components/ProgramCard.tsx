import { useState } from 'react';
import Icon from './Icon';
import { accents } from '../lib/accents';
import type { Accent, Program } from '../data/content';

const STATUS_LABEL: Record<Exclude<Program['status'], ''>, string> = {
  new: 'New',
  refreshed: 'Refreshed',
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
                Flagship
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{program.summary}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1">
              <Icon name="spark" className={`h-3.5 w-3.5 ${a.text}`} />
              {program.type}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="calendar" className="h-3.5 w-3.5" />
              {program.when}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="users" className="h-3.5 w-3.5" />
              {program.reach}
            </span>
          </div>
        </div>
        <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${a.soft} ${a.text}`}>
          <Icon name={open ? 'minus' : 'plus'} className="h-4 w-4" />
        </span>
      </button>
      {open && (
        <div className="animate-fade-in border-t border-slate-100 px-5 pb-5 pt-4">
          <p className="text-sm leading-relaxed text-slate-700">{program.detail}</p>
        </div>
      )}
    </div>
  );
}
