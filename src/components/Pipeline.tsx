import { useI18n } from '../lib/i18n';
import { programs, stages, ui } from '../data/content';
import type { StageId } from '../data/content';
import { ACCENTS } from '../lib/accents';
import Icon from './Icon';
import ProgramCard from './ProgramCard';
import Reveal from './Reveal';

/** Non-interactive four-stage overview used on the landing page. */
export function PipelineStrip({ onPick }: { onPick?: (stage: StageId) => void }) {
  const { t } = useI18n();
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stages.map((stage, i) => {
        const a = ACCENTS[stage.accent];
        return (
          <Reveal key={stage.id} delay={i * 90}>
            <button
              type="button"
              onClick={onPick ? () => onPick(stage.id) : undefined}
              className={`relative flex h-full w-full flex-col rounded-2xl border bg-white p-5 text-left transition ${
                onPick ? 'cursor-pointer hover:-translate-y-1 hover:shadow-lg' : ''
              } ${a.border}`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white ${a.gradient}`}>
                  <Icon name={stage.icon} className="h-6 w-6" />
                </span>
                <span className="text-3xl font-black text-slate-100">{stage.order}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{t(stage.name)}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">{t(stage.tagline)}</p>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}

/** Interactive explorer: pick a stage to reveal its criteria and programs. */
export function PipelineExplorer({
  selected,
  onSelect,
}: {
  selected: StageId;
  onSelect: (stage: StageId) => void;
}) {
  const { t } = useI18n();
  const stage = stages.find((s) => s.id === selected)!;
  const a = ACCENTS[stage.accent];
  const stagePrograms = programs.filter((p) => p.stage === selected);

  return (
    <div>
      {/* Stage selector */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        {stages.map((s, i) => {
          const sa = ACCENTS[s.accent];
          const active = s.id === selected;
          return (
            <div key={s.id} className="flex flex-1 items-center gap-2">
              <button
                onClick={() => onSelect(s.id)}
                className={`flex flex-1 items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                  active
                    ? `bg-gradient-to-br text-white shadow-md ${sa.gradient} border-transparent`
                    : `border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm`
                }`}
                aria-pressed={active}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    active ? 'bg-white/20 text-white' : `${sa.bgSoft} ${sa.text}`
                  }`}
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className={`block text-[10px] font-bold uppercase tracking-wide ${active ? 'text-white/70' : 'text-slate-400'}`}>
                    {t(ui.navPipeline)} {s.order}
                  </span>
                  <span className={`block text-sm font-bold ${active ? 'text-white' : 'text-slate-800'}`}>
                    {t(s.name)}
                  </span>
                </span>
              </button>
              {i < stages.length - 1 && (
                <Icon name="arrowRight" className="hidden h-4 w-4 shrink-0 text-slate-300 sm:block" />
              )}
            </div>
          );
        })}
      </div>

      {/* Selected stage detail */}
      <div className={`mt-6 rounded-2xl border ${a.border} ${a.bgSoft} p-6`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <h3 className={`text-xl font-bold ${a.text}`}>{t(stage.name)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{t(stage.purpose)}</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white bg-white/70 p-4">
            <div className={`text-xs font-bold uppercase tracking-wide ${a.text}`}>{t(ui.entry)}</div>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{t(stage.entry)}</p>
          </div>
          <div className="rounded-xl border border-white bg-white/70 p-4">
            <div className={`text-xs font-bold uppercase tracking-wide ${a.text}`}>{t(ui.exit)}</div>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{t(stage.exit)}</p>
          </div>
        </div>
      </div>

      {/* Programs in this stage */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stagePrograms.map((p) => (
          <ProgramCard key={p.id} program={p} defaultOpen={p.flagship} />
        ))}
      </div>
    </div>
  );
}
