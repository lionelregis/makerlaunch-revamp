import Icon from './Icon';
import { accents } from '../lib/accents';
import { stages, previewCopy } from '../data/content';
import type { Stage } from '../data/content';

const byId = Object.fromEntries(stages.map((s) => [s.id, s])) as Record<string, Stage>;

/** One stage node in the branching map. */
function StageNode({ stage }: { stage: Stage }) {
  const a = accents[stage.accent];
  return (
    <div className={`h-full rounded-2xl border bg-white p-5 shadow-sm ${a.border}`}>
      <div className="flex items-center gap-3">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white ${a.gradient}`}>
          <Icon name={stage.icon} className="h-6 w-6" />
        </span>
        <h3 className="font-display text-lg font-bold text-slate-900">{stage.name}</h3>
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{stage.tagline}</p>
    </div>
  );
}

/** A short vertical connector with a down chevron. */
function Connector() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400">
        <Icon name="arrowDown" className="h-4 w-4" />
      </span>
    </div>
  );
}

/**
 * Branching path map: Explore at the top feeds two parallel routes (Product
 * Studio or MakerLaunch), which both converge into the Founders Network. This
 * reflects the real logic: you either build your way up through Product Studio,
 * or enter MakerLaunch directly once you already have the proof.
 */
export default function StageMap() {
  return (
    <div className="mx-auto max-w-3xl">
      {/* Top: Explore — full width, mirroring Founders Network at the bottom. */}
      <StageNode stage={byId.explore} />

      <Connector />
      <div className="flex justify-center">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-500">
          {previewCopy.mapBranchLabel}
        </span>
      </div>
      <div className="py-2" />

      {/* Two parallel routes */}
      <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <StageNode stage={byId.validate} />
        <span className="mx-auto rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-400">
          or
        </span>
        <StageNode stage={byId.build} />
      </div>

      <Connector />

      {/* Bottom: Founders Network — full width, mirroring Explore at the top. */}
      <StageNode stage={byId.scale} />
    </div>
  );
}
