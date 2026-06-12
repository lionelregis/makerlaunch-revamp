import type { ReactNode } from 'react';
import Icon from './Icon';
import { accents } from '../lib/accents';
import { stages, umbrella, landing, exploreTracks, ui } from '../data/content';
import type { Accent, Stage, StageId } from '../data/content';

const byId = Object.fromEntries(stages.map((s) => [s.id, s])) as Record<string, Stage>;
const makerTracks = stages.filter((s) => s.group === 'makerlaunch');

/** Pick callback: a stage id, plus (for Explore track cards) which sub-track. */
type Pick = (stage: StageId, exploreTrack?: string) => void;

/** One card in the map. Becomes a button when onClick is given. */
function TrackCard({
  accent,
  icon,
  name,
  tagline,
  onClick,
}: {
  accent: Accent;
  icon: string;
  name: string;
  tagline: string;
  onClick?: () => void;
}) {
  const a = accents[accent];
  const base = `flex h-full w-full flex-col items-center rounded-2xl border bg-white p-5 text-center shadow-sm ${a.border}`;
  const inner = (
    <>
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white ${a.gradient}`}>
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{tagline}</p>
    </>
  );
  if (onClick) {
    return (
      <button onClick={onClick} className={`group ${base} transition hover:-translate-y-0.5 hover:shadow-md`}>
        {inner}
      </button>
    );
  }
  return <div className={base}>{inner}</div>;
}

const BOX: Record<string, string> = {
  amber: 'border-amber-200 bg-amber-50/40',
  ember: 'border-ember-200 bg-ember-50/40',
};

/** An umbrella box holding two track cards, with a labelled header. */
function UmbrellaBox({
  accent,
  icon,
  name,
  label,
  separator,
  left,
  right,
}: {
  accent: 'amber' | 'ember';
  icon: string;
  name: string;
  label: string;
  /** Shown between the two cards (e.g. "or"); omit for non-exclusive tracks. */
  separator?: string;
  left: ReactNode;
  right: ReactNode;
}) {
  const tone = accent === 'ember' ? 'ember' : 'amber';
  return (
    <div className={`rounded-3xl border-2 p-4 sm:p-5 ${BOX[accent]}`}>
      <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
        <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-white ${tone === 'ember' ? 'bg-ember-700' : 'bg-amber-500'}`}>
          <Icon name={icon} className="h-4 w-4" />
        </span>
        <span className={`font-display text-sm font-extrabold uppercase tracking-wide ${tone === 'ember' ? 'text-ember-800' : 'text-amber-800'}`}>
          {name}
        </span>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${tone === 'ember' ? 'bg-ember-100 text-ember-700' : 'bg-amber-100 text-amber-800'}`}>
          {label}
        </span>
      </div>
      {separator ? (
        <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
          {left}
          <span className={`mx-auto rounded-full border bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide ${tone === 'ember' ? 'border-ember-200 text-ember-500' : 'border-amber-200 text-amber-600'}`}>
            {separator}
          </span>
          {right}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {left}
          {right}
        </div>
      )}
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
 * The path map: the Explore stage (holding the Courses and Extracurricular
 * tracks), then the MakerLaunch umbrella (holding the Product Studio and
 * Accelerator tracks), then the Founders Network.
 */
export default function StageMap({ onPick }: { onPick?: Pick }) {
  return (
    <div className="mx-auto max-w-3xl">
      {/* Explore: two activity tracks */}
      <UmbrellaBox
        accent="amber"
        icon={byId.explore.icon}
        name={byId.explore.name}
        label={ui.map.twoTracks}
        left={
          <TrackCard
            accent="amber"
            icon={exploreTracks[0].icon}
            name={exploreTracks[0].name}
            tagline={exploreTracks[0].tagline}
            onClick={onPick && (() => onPick('explore', exploreTracks[0].id))}
          />
        }
        right={
          <TrackCard
            accent="amber"
            icon={exploreTracks[1].icon}
            name={exploreTracks[1].name}
            tagline={exploreTracks[1].tagline}
            onClick={onPick && (() => onPick('explore', exploreTracks[1].id))}
          />
        }
      />

      <Connector />

      {/* MakerLaunch: two entry tracks */}
      <UmbrellaBox
        accent="ember"
        icon="rocket"
        name={umbrella.name}
        label={landing.pipelineBranchLabel}
        separator={ui.map.or}
        left={
          <TrackCard
            accent={makerTracks[0].accent}
            icon={makerTracks[0].icon}
            name={makerTracks[0].name}
            tagline={makerTracks[0].tagline}
            onClick={onPick && (() => onPick(makerTracks[0].id))}
          />
        }
        right={
          <TrackCard
            accent={makerTracks[1].accent}
            icon={makerTracks[1].icon}
            name={makerTracks[1].name}
            tagline={makerTracks[1].tagline}
            onClick={onPick && (() => onPick(makerTracks[1].id))}
          />
        }
      />

      <Connector />

      {/* Founders Network */}
      <TrackCard
        accent={byId.scale.accent}
        icon={byId.scale.icon}
        name={byId.scale.name}
        tagline={byId.scale.tagline}
        onClick={onPick && (() => onPick(byId.scale.id))}
      />
    </div>
  );
}
