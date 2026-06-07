import Icon from './Icon';
import { makerLaunch as ml } from '../data/content';

/**
 * MakerLaunch detail, shown inside the "Inside the MakerLaunch accelerator"
 * disclosure on the MakerLaunch stage of the path explorer: a short lead, the
 * cohort journey (each step with the milestone it reaches), and what the cohort
 * gives a venture along the way.
 */
export default function MakerLaunch() {
  return (
    <div>
      <p className="text-sm leading-relaxed text-slate-700">{ml.lead}</p>

      {/* The cohort journey */}
      <p className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-400">{ml.journeyTitle}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{ml.journeySubtitle}</p>
      <ol className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ml.phases.map((p) => (
          <li key={p.name} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-garnet-50 text-garnet-700">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Step {p.n}</span>
                <h4 className="font-display text-base font-bold text-slate-900">{p.name}</h4>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.focus}</p>
            <div className="mt-3 flex items-start gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
              <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0 text-garnet-600" />
              <p>
                <span className="font-semibold text-slate-600">You reach: </span>
                {p.milestone}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* What the cohort gives you */}
      <p className="mt-8 text-xs font-bold uppercase tracking-wide text-slate-400">{ml.supportsTitle}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{ml.supportsSubtitle}</p>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ml.supports.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-garnet-50 text-garnet-700">
              <Icon name={s.icon} className="h-5 w-5" />
            </span>
            <h4 className="mt-3 font-display text-base font-bold text-slate-900">{s.title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>

      {/* Closing note */}
      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-garnet-900 p-5 text-white">
        <Icon name="trophy" className="mt-0.5 h-6 w-6 shrink-0 text-amber-300" />
        <p className="text-sm leading-relaxed text-garnet-50">{ml.closingNote}</p>
      </div>
    </div>
  );
}
