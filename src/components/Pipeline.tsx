import { useState } from 'react';
import Icon from './Icon';
import ProgramCard from './ProgramCard';
import StageDisclosure from './StageDisclosure';
import ProductStudio from './ProductStudio';
import MakerLaunch from './MakerLaunch';
import { accents } from '../lib/accents';
import { programs, stages } from '../data/content';
import type { StageId } from '../data/content';

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

      {/* Each program stage with a deeper curriculum carries one on-demand
          disclosure, so the stage panel stays compact until a reader asks for the
          detail: Product Studio reveals its six build-to-ship phases and toolkit;
          MakerLaunch reveals its cohort journey and what the accelerator gives you. */}
      {active === 'validate' && (
        <StageDisclosure
          accent="emerald"
          icon="beaker"
          title="What you’ll learn in Product Studio"
          subtitle="The six phases, plus the frameworks and tools the curriculum teaches."
        >
          <ProductStudio />
        </StageDisclosure>
      )}
      {active === 'build' && (
        <StageDisclosure
          accent="garnet"
          icon="rocket"
          title="Inside the MakerLaunch accelerator"
          subtitle="The cohort journey, and everything you get along the way."
        >
          <MakerLaunch />
        </StageDisclosure>
      )}
    </div>
  );
}
