import { useState } from 'react';
import Icon from './Icon';
import ProgramCard from './ProgramCard';
import StageDisclosure from './StageDisclosure';
import ProductStudio from './ProductStudio';
import MakerLaunch from './MakerLaunch';
import { accents } from '../lib/accents';
import { programs, stages, umbrella, exploreTracks } from '../data/content';
import type { Accent, Program, Stage, StageId } from '../data/content';

const byId = Object.fromEntries(stages.map((s) => [s.id, s])) as Record<string, Stage>;
const tracks = stages.filter((s) => s.group === 'makerlaunch');

type TabKey = 'explore' | 'makerlaunch' | 'scale';

/** Left column: a stage's description and entry/exit criteria. */
function StageInfo({ stage }: { stage: Stage }) {
  const a = accents[stage.accent];
  return (
    <div key={stage.id} className="animate-fade-in">
      <div className={`rounded-2xl bg-gradient-to-br p-6 text-white ${a.gradient}`}>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
          <Icon name={stage.icon} className="h-4 w-4" />
          {stage.owner}
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
  );
}

/** Right column: a list of program cards. */
function ProgramList({ list, accent }: { list: Program[]; accent: Accent }) {
  return (
    <div className="animate-fade-in space-y-3">
      {list.map((p) => (
        <ProgramCard key={p.id} program={p} accent={accent} />
      ))}
    </div>
  );
}

/** A stage shown as info + all of its programs. */
function StageDetail({ stage }: { stage: Stage }) {
  const stagePrograms = programs.filter((p) => p.stage === stage.id);
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
      <StageInfo stage={stage} />
      <ProgramList list={stagePrograms} accent={stage.accent} />
    </div>
  );
}

/** The Explore stage, with a Courses / Extracurricular sub-track toggle. */
function ExploreDetail({ initialTrack }: { initialTrack?: string }) {
  const stage = byId.explore;
  const [track, setTrack] = useState(
    initialTrack && exploreTracks.some((t) => t.id === initialTrack) ? initialTrack : exploreTracks[0].id,
  );
  const activeTrack = exploreTracks.find((t) => t.id === track) ?? exploreTracks[0];
  const list = programs.filter((p) => p.stage === 'explore' && p.track === activeTrack.id);
  const a = accents[stage.accent];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
      <StageInfo stage={stage} />
      <div>
        {/* Sub-track toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="self-center text-xs font-bold uppercase tracking-wide text-slate-400">Show:</span>
          {exploreTracks.map((t) => {
            const isActive = t.id === activeTrack.id;
            return (
              <button
                key={t.id}
                onClick={() => setTrack(t.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive ? `${a.solid} border-transparent` : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Icon name={t.icon} className="h-4 w-4" />
                {t.name}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{activeTrack.tagline}</p>
        <div key={activeTrack.id} className="mt-4">
          <ProgramList list={list} accent={stage.accent} />
        </div>
      </div>
    </div>
  );
}

/** The on-demand detail disclosure for a MakerLaunch track. */
function TrackDisclosure({ track }: { track: StageId }) {
  if (track === 'validate') {
    return (
      <StageDisclosure
        accent="emerald"
        icon="beaker"
        title="What you’ll learn in Product Studio"
        subtitle="The six phases, plus the frameworks and tools the curriculum teaches."
      >
        <ProductStudio />
      </StageDisclosure>
    );
  }
  return (
    <StageDisclosure
      accent="garnet"
      icon="rocket"
      title="Inside the Accelerator"
      subtitle="The cohort journey, and everything you get along the way."
    >
      <MakerLaunch />
    </StageDisclosure>
  );
}

/* ------------------------------------------------------------------ */
/* PipelineExplorer — three stages; Explore and MakerLaunch hold tracks */
/* ------------------------------------------------------------------ */
export function PipelineExplorer({
  initialStage,
  initialExploreTrack,
}: {
  initialStage?: StageId;
  initialExploreTrack?: string;
}) {
  const initialActive: TabKey =
    initialStage === 'validate' || initialStage === 'build'
      ? 'makerlaunch'
      : initialStage === 'scale'
        ? 'scale'
        : 'explore';
  const [active, setActive] = useState<TabKey>(initialActive);
  const [track, setTrack] = useState<StageId>(initialStage === 'build' ? 'build' : 'validate');

  const tabs: { key: TabKey; name: string; icon: string; accent: Stage['accent'] }[] = [
    { key: 'explore', name: byId.explore.name, icon: byId.explore.icon, accent: byId.explore.accent },
    { key: 'makerlaunch', name: umbrella.name, icon: 'rocket', accent: 'garnet' },
    { key: 'scale', name: byId.scale.name, icon: byId.scale.icon, accent: byId.scale.accent },
  ];

  return (
    <div>
      {/* Top-level stage tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => {
          const sa = accents[t.accent];
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive ? `${sa.solid} border-transparent` : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Icon name={t.icon} className="h-4 w-4" />
              {t.name}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        {active === 'explore' && <ExploreDetail initialTrack={initialExploreTrack} />}
        {active === 'scale' && <StageDetail stage={byId.scale} />}

        {active === 'makerlaunch' && (
          <div>
            {/* Umbrella intro */}
            <div className="rounded-2xl border border-garnet-200 bg-garnet-50/60 p-4 text-sm leading-relaxed text-slate-700">
              <span className="font-bold text-garnet-800">{umbrella.name}.</span> {umbrella.tagline}
            </div>

            {/* Track sub-tabs */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="self-center text-xs font-bold uppercase tracking-wide text-slate-400">Choose a track:</span>
              {tracks.map((tr) => {
                const ta = accents[tr.accent];
                const isActive = tr.id === track;
                return (
                  <button
                    key={tr.id}
                    onClick={() => setTrack(tr.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      isActive ? `${ta.solid} border-transparent` : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <Icon name={tr.icon} className="h-4 w-4" />
                    {tr.name}
                  </button>
                );
              })}
            </div>

            <div className="mt-5">
              <StageDetail stage={byId[track]} />
            </div>
            <TrackDisclosure track={track} />
          </div>
        )}
      </div>
    </div>
  );
}
