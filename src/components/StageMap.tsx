import Icon from './Icon';
import { accents } from '../lib/accents';
import { stages, umbrella, landing } from '../data/content';
import type { Stage, StageId } from '../data/content';

const byId = Object.fromEntries(stages.map((s) => [s.id, s])) as Record<string, Stage>;
const tracks = stages.filter((s) => s.group === 'makerlaunch');

/** One stage/track node in the map. Becomes a button when onPick is given. */
function StageNode({ stage, onPick }: { stage: Stage; onPick?: (stage: StageId) => void }) {
  const a = accents[stage.accent];
  const base = `flex h-full w-full flex-col items-center rounded-2xl border bg-white p-5 text-center shadow-sm ${a.border}`;
  const inner = (
    <>
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white ${a.gradient}`}>
        <Icon name={stage.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{stage.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{stage.tagline}</p>
    </>
  );

  if (onPick) {
    return (
      <button onClick={() => onPick(stage.id)} className={`group ${base} transition hover:-translate-y-0.5 hover:shadow-md`}>
        {inner}
      </button>
    );
  }
  return <div className={base}>{inner}</div>;
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
 * The path map: Explore at the top, then the MakerLaunch umbrella holding its two
 * entry tracks (Product Studio or the Accelerator), then the Founders Network.
 * This shows that Product Studio and the Accelerator are two ways into the one
 * MakerLaunch program.
 */
export default function StageMap({ onPick }: { onPick?: (stage: StageId) => void }) {
  return (
    <div className="mx-auto max-w-3xl">
      {/* Top: Explore */}
      <StageNode stage={byId.explore} onPick={onPick} />

      <Connector />

      {/* Middle: the MakerLaunch umbrella holding the two tracks */}
      <div className="rounded-3xl border-2 border-garnet-200 bg-garnet-50/40 p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-garnet-700 text-white">
            <Icon name="rocket" className="h-4 w-4" />
          </span>
          <span className="font-display text-sm font-extrabold uppercase tracking-wide text-garnet-800">
            {umbrella.name}
          </span>
          <span className="rounded-full bg-garnet-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-garnet-700">
            {landing.pipelineBranchLabel}
          </span>
        </div>
        <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
          <StageNode stage={tracks[0]} onPick={onPick} />
          <span className="mx-auto rounded-full border border-garnet-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-garnet-500">
            or
          </span>
          <StageNode stage={tracks[1]} onPick={onPick} />
        </div>
      </div>

      <Connector />

      {/* Bottom: Founders Network */}
      <StageNode stage={byId.scale} onPick={onPick} />
    </div>
  );
}
