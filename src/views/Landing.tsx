import { useI18n } from '../lib/i18n';
import {
  founder,
  heroStats,
  landing,
  mission,
  principles,
  roleCards,
  vision,
} from '../data/content';
import type { Role, StageId } from '../data/content';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { PipelineStrip } from '../components/Pipeline';

export default function Landing({
  onSelectRole,
  onPickStage,
}: {
  onSelectRole: (role: Role) => void;
  onPickStage: (stage: StageId) => void;
}) {
  const { t } = useI18n();

  return (
    <div>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-garnet-900 text-white">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-garnet-500/30 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl animate-float-slow" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t(landing.eyebrow)}
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] text-balance sm:text-5xl md:text-6xl">
              {t(landing.title)}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-garnet-100">
              {t(landing.subtitle)}
            </p>
          </div>

          {/* Role selection */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="text-center">
              <h2 className="text-xl font-bold">{t(landing.roleQuestion)}</h2>
              <p className="mt-1 text-sm text-garnet-200">{t(landing.roleHint)}</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {roleCards.map((card, i) => (
                <Reveal key={card.role} delay={i * 110}>
                  <button
                    onClick={() => onSelectRole(card.role)}
                    className="group flex h-full w-full flex-col rounded-2xl border border-white/15 bg-white/10 p-6 text-left backdrop-blur transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-garnet-700 shadow-sm">
                      <Icon name={card.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-4 text-xl font-bold">{t(card.title)}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-garnet-100">{t(card.body)}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      {t(card.cta)}
                      <Icon
                        name="arrowRight"
                        className="h-4 w-4 transition group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Hero stats */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={t(stat.label)} className="bg-garnet-900/40 p-5 text-center backdrop-blur">
                <div className="text-3xl font-black text-white">{t(stat.value)}</div>
                <div className="mt-1 text-xs leading-snug text-garnet-200">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Vision & Mission                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7">
            <div className="flex items-center gap-2 text-garnet-700">
              <Icon name="compass" className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wide">{t(landing.visionTitle)}</span>
            </div>
            <p className="mt-3 text-lg font-medium leading-relaxed text-slate-800">{t(vision)}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7">
            <div className="flex items-center gap-2 text-garnet-700">
              <Icon name="rocket" className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wide">{t(landing.missionTitle)}</span>
            </div>
            <p className="mt-3 text-lg font-medium leading-relaxed text-slate-800">{t(mission)}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Pipeline peek                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow={t(landing.eyebrow)}
            title={t(landing.pipelinePeek)}
            subtitle={t(founder.pipelineSubtitle)}
            align="center"
          />
          <div className="mt-10">
            <PipelineStrip onPick={onPickStage} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Principles                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title={t(landing.principlesTitle)} align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={t(p.title)} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-garnet-50 text-garnet-700">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{t(p.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(p.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
