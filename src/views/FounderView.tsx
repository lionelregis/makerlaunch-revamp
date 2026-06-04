import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../lib/i18n';
import { founder, tracks } from '../data/content';
import type { StageId } from '../data/content';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import StageFinder from '../components/StageFinder';
import { PipelineExplorer } from '../components/Pipeline';

export default function FounderView({ initialStage }: { initialStage?: StageId }) {
  const { t } = useI18n();
  // `initialStage` seeds the local selection; App remounts this view (via `key`)
  // when a new stage is picked from the landing strip, so no syncing effect.
  const [stage, setStage] = useState<StageId>(initialStage ?? 'validate');
  const pipelineRef = useRef<HTMLDivElement>(null);
  const finderRef = useRef<HTMLDivElement>(null);

  // If we arrived with a pre-selected stage, scroll the pipeline into view.
  useEffect(() => {
    if (initialStage) {
      pipelineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [initialStage]);

  function focusStage(next: StageId) {
    setStage(next);
    requestAnimationFrame(() =>
      pipelineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    );
  }

  return (
    <div>
      {/* Sub-hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-garnet-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-garnet-700">
            {t(founder.eyebrow)}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-slate-900 text-balance sm:text-4xl">
            {t(founder.title)}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{t(founder.intro)}</p>
        </div>
      </section>

      {/* Stage finder */}
      <section ref={finderRef} className="mx-auto max-w-4xl px-6 py-14">
        <SectionHeading
          title={t(founder.finderTitle)}
          subtitle={t(founder.finderSubtitle)}
          align="center"
        />
        <div className="mt-8">
          <StageFinder onSeeInPipeline={focusStage} />
        </div>
      </section>

      {/* Pipeline explorer */}
      <section ref={pipelineRef} className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={t(founder.pipelineTitle)} subtitle={t(founder.pipelineSubtitle)} />
          <div className="mt-8">
            <PipelineExplorer selected={stage} onSelect={setStage} />
          </div>
        </div>
      </section>

      {/* Readiness criteria */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="overflow-hidden rounded-3xl border border-garnet-200 bg-garnet-900 text-white">
          <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_1.4fr] md:p-10">
            <div>
              <h2 className="text-2xl font-bold text-balance">{t(founder.readinessTitle)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-garnet-100">{t(founder.readinessBody)}</p>
            </div>
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <div className="flex-1 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <Icon name="users" className="h-6 w-6 text-emerald-300" />
                <p className="mt-3 text-sm font-medium leading-relaxed">{t(founder.readinessA)}</p>
              </div>
              <span className="self-center rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-wide">
                {t(founder.readinessOr)}
              </span>
              <div className="flex-1 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <Icon name="beaker" className="h-6 w-6 text-emerald-300" />
                <p className="mt-3 text-sm font-medium leading-relaxed">{t(founder.readinessB)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={t(founder.tracksTitle)} subtitle={t(founder.tracksSubtitle)} />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {tracks.map((track, i) => (
              <Reveal key={track.id} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-garnet-50 text-garnet-700">
                    <Icon name={track.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{t(track.name)}</h3>
                  <p className="mt-1 text-xs font-semibold text-garnet-700">{t(track.audience)}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{t(track.summary)}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
                    <Icon name="arrowRight" className="h-3.5 w-3.5 text-garnet-600" />
                    <span className="font-medium">{t({ en: 'Enters at', fr: 'Entre à' })}:</span>{' '}
                    {t(track.entersAt)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to get involved */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading title={t(founder.stepsTitle)} align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {founder.steps.map((s, i) => (
            <Reveal key={t(s.title)} delay={i * 100}>
              <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-garnet-700 text-base font-black text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(s.body)}</p>
                {i < founder.steps.length - 1 && (
                  <Icon
                    name="arrowRight"
                    className="absolute -right-3 top-10 hidden h-6 w-6 text-slate-300 md:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => finderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="inline-flex items-center gap-2 rounded-full bg-garnet-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-garnet-800"
          >
            {t(founder.finderTitle)}
            <Icon name="arrowRight" className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
