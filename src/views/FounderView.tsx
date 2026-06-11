import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Image from '../components/Image';
import { PipelineExplorer } from '../components/Pipeline';
import { navigate } from '../lib/router';
import { founder, launchpadPage } from '../data/content';
import type { StageId } from '../data/content';

export default function FounderView({
  initialStage,
  initialExploreTrack,
}: {
  initialStage?: StageId;
  initialExploreTrack?: string;
}) {
  const onOpenFinder = () => navigate('finder');
  const onOpenLaunchpad = () => navigate('launchpad');
  return (
    <div>
      {/* Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-garnet-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-garnet-700">
                {founder.eyebrow}
              </span>
              <h1 className="mt-3 font-display text-3xl font-black leading-tight text-slate-900 text-balance sm:text-4xl">
                {founder.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">{founder.intro}</p>
              <button
                onClick={onOpenFinder}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-garnet-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-garnet-800"
              >
                <Icon name="compass" className="h-4 w-4" />
                {founder.finderCalloutCta}
                <span className="font-normal text-garnet-200">· 30 seconds</span>
              </button>
            </div>
            {founder.headerImage && (
              <Image
                src={founder.headerImage}
                alt={founder.headerImageAlt ?? ''}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full rounded-2xl shadow-sm"
              />
            )}
          </div>
        </div>
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
            <PipelineExplorer initialStage={initialStage} initialExploreTrack={initialExploreTrack} />
          </div>
        </div>
      </section>

      {/* Quick links: find your starting point, and find a cofounder */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-garnet-200 bg-garnet-50 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-garnet-700 text-white">
              <Icon name="compass" className="h-6 w-6" />
            </span>
            <h3 className="font-display text-base font-bold text-slate-900">
              {founder.finderCalloutTitle}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-slate-600">
              {founder.finderCalloutBody}
            </p>
            <button
              onClick={onOpenFinder}
              className="inline-flex items-center gap-2 rounded-full bg-garnet-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-garnet-800"
            >
              {founder.finderCalloutCta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>
          <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Icon name="users" className="h-6 w-6" />
            </span>
            <h3 className="font-display text-base font-bold text-slate-900">
              {launchpadPage.calloutTitle}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-slate-600">
              {launchpadPage.calloutBody}
            </p>
            <button
              onClick={onOpenLaunchpad}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700"
            >
              {launchpadPage.calloutCta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
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
