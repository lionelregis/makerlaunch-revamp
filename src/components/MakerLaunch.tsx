import Icon from './Icon';
import { makerLaunch as ml } from '../data/content';

/**
 * MakerLaunch detail, shown inside the "Inside the MakerLaunch accelerator"
 * disclosure on the MakerLaunch stage of the path explorer. Kept scannable: a
 * short lead, the cohort journey as a one-line-each list, what the cohort gives
 * you as a compact checklist, and the closing note.
 */
export default function MakerLaunch() {
  return (
    <div>
      <p className="text-sm leading-relaxed text-slate-700">{ml.lead}</p>

      {/* Cohort journey, one line each */}
      <p className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-400">{ml.journeyTitle}</p>
      <ol className="mt-3 space-y-2">
        {ml.phases.map((p) => (
          <li key={p.name} className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember-50 text-[11px] font-bold text-ember-700">
              {p.n}
            </span>
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-slate-900">{p.name}.</span> {p.focus}
            </p>
          </li>
        ))}
      </ol>

      {/* What you get, compact checklist */}
      <p className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-400">{ml.supportsTitle}</p>
      <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {ml.supports.map((s) => (
          <li key={s.title} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
            <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0 text-ember-600" />
            <span>
              <span className="font-semibold text-slate-900">{s.title}.</span> {s.body}
            </span>
          </li>
        ))}
      </ul>

      {/* Closing note */}
      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-ink-900 p-4 text-white">
        <Icon name="trophy" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
        <p className="text-sm leading-relaxed text-ink-50">{ml.closingNote}</p>
      </div>
    </div>
  );
}
