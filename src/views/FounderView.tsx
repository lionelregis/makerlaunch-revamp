import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import StageFinder from '../components/StageFinder';
import ProductStudio from '../components/ProductStudio';
import { PipelineExplorer } from '../components/Pipeline';
import { founder } from '../data/content';
import type { StageId } from '../data/content';

export default function FounderView({ initialStage }: { initialStage?: StageId }) {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-garnet-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-garnet-700">
              {founder.eyebrow}
            </span>
            <h1 className="mt-3 font-display text-3xl font-black leading-tight text-slate-900 text-balance sm:text-4xl">
              {founder.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">{founder.intro}</p>
          </div>
        </div>
      </section>

      {/* Stage finder */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <SectionHeading
          eyebrow={founder.finderSubtitle}
          title={founder.finderTitle}
          align="center"
        />
        <div className="mt-8">
          <StageFinder />
        </div>
      </section>

      {/* Product Studio deep-dive */}
      <section className="border-y border-slate-200 bg-white py-16">
        <ProductStudio />
      </section>

      {/* Full path explorer */}
      <section className="border-b border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Your full path"
            title={founder.pipelineTitle}
            subtitle={founder.pipelineSubtitle}
          />
          <div className="mt-8">
            <PipelineExplorer initialStage={initialStage} />
          </div>
        </div>
      </section>

      {/* Readiness criteria */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl border border-garnet-200 bg-gradient-to-br from-garnet-900 to-garnet-800 text-white">
          <div className="grid gap-8 p-8 md:grid-cols-[1fr_1.2fr] md:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                <Icon name="target" className="h-4 w-4" />
                MakerLaunch readiness
              </span>
              <h2 className="mt-4 font-display text-2xl font-black text-balance">{founder.readinessTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-garnet-100">{founder.readinessBody}</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                  <Icon name="checkCircle" className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" />
                  <p className="text-sm font-medium leading-relaxed">{founder.readinessA}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-white/20" />
                <span className="text-xs font-bold uppercase tracking-widest text-garnet-200">
                  {founder.readinessOr}
                </span>
                <span className="h-px flex-1 bg-white/20" />
              </div>
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                  <Icon name="checkCircle" className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" />
                  <p className="text-sm font-medium leading-relaxed">{founder.readinessB}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={founder.stepsTitle} align="center" />
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {founder.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} as="li">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-garnet-700 font-display text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
