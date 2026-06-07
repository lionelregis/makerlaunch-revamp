import { useState } from 'react';
import Icon from './Icon';
import ProgramCard from './ProgramCard';
import ProductStudio from './ProductStudio';
import { accents } from '../lib/accents';
import { programs, stages } from '../data/content';
import type { StageId } from '../data/content';

/* ------------------------------------------------------------------ */
/* PipelineStrip — compact, clickable overview of the four stages      */
/* ------------------------------------------------------------------ */
export function PipelineStrip({ onPick }: { onPick: (stage: StageId) => void }) {
  return (
    <ol className="grid gap-4 md:grid-cols-4">
      {stages.map((stage, i) => {
        const a = accents[stage.accent];
        return (
          <li key={stage.id} className="relative">
            {i < stages.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -right-2.5 top-9 hidden text-slate-300 md:block"
              >
                <Icon name="arrowRight" className="h-5 w-5" />
              </span>
            )}
            <button
              onClick={() => onPick(stage.id)}
              className="group flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white ${a.gradient}`}>
                  <Icon name={stage.icon} className="h-6 w-6" />
                </span>
                <span className="text-xs font-bold text-slate-400">Stage {stage.order}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{stage.name}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{stage.tagline}</p>
              <span className={`mt-3 inline-flex items-center gap-1 text-xs font-bold ${a.text}`}>
                See programs
                <Icon name="arrowRight" className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* PipelineExplorer — full interactive stage explorer                  */
/* ------------------------------------------------------------------ */
export function PipelineExplorer({ initialStage }: { initialStage?: StageId }) {
  const [active, setActive] = useState<StageId>(initialStage ?? 'explore');
  const stage = stages.find((s) => s.id === active)!;
  const a = accents[stage.accent];
  const stagePrograms = programs.filter((p) => p.stage === active);

  return (
    <div>
      {/* Stage selector tabs */}
      <div className="flex flex-wrap gap-2">
        {stages.map((s) => {
          const sa = accents[s.accent];
          const isActive = s.id === active;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? `${sa.solid} border-transparent`
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Icon name={s.icon} className="h-4 w-4" />
              {s.name}
            </button>
          );
        })}
      </div>

      {/* Stage detail */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        {/* Left: stage description + criteria */}
        <div key={stage.id} className="animate-fade-in">
          <div className={`rounded-2xl bg-gradient-to-br p-6 text-white ${a.gradient}`}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
              <Icon name={stage.icon} className="h-4 w-4" />
              Stage {stage.order} · {stage.owner}
            </div>
            <h3 className="mt-3 font-display text-2xl font-black">{stage.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/90">{stage.purpose}</p>
          </div>

          <dl className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                Getting in
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-slate-700">{stage.entry}</dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                <Icon name="arrowRight" className={`h-3.5 w-3.5 ${a.text}`} />
                Moving on
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-slate-700">{stage.advance}</dd>
            </div>
          </dl>
        </div>

        {/* Right: programs */}
        <div key={`${stage.id}-programs`} className="animate-fade-in space-y-3">
          {stagePrograms.map((p) => (
            <ProgramCard key={p.id} program={p} accent={stage.accent} />
          ))}
        </div>
      </div>

      {/* On the Product Studio stage, a single on-demand disclosure reveals the
          six build-to-ship phases and the frameworks and tools it teaches, so the
          stage panel stays compact until a reader asks for the detail. */}
      {active === 'validate' && (
        <details className="group mt-6 overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Icon name="beaker" className="h-5 w-5" />
              </span>
              <span>
                <span className="font-display text-base font-bold text-slate-900">
                  What you’ll learn in Product Studio
                </span>
                <span className="block text-sm text-slate-600">
                  The six phases, plus the frameworks and tools the curriculum teaches.
                </span>
              </span>
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-300 text-emerald-700">
              <Icon name="plus" className="h-4 w-4 group-open:hidden" />
              <Icon name="minus" className="hidden h-4 w-4 group-open:block" />
            </span>
          </summary>
          <div className="border-t border-emerald-100 bg-white p-5 sm:p-6">
            <ProductStudio />
          </div>
        </details>
      )}
    </div>
  );
}
