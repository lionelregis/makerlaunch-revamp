import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Image from '../components/Image';
import Avatar from '../components/Avatar';
import StageMap from '../components/StageMap';
import { navigate } from '../lib/router';
import {
  heroStats,
  landing,
  mentors,
  principles,
  roleCards,
  venturesStrip,
} from '../data/content';
import type { StageId } from '../data/content';

export default function Landing() {
  const founders = mentors.filter((m) => m.venture);
  const onSelectRole = (role: 'founder' | 'advisor') => navigate(role);
  const onPickStage = (stage: StageId, exploreTrack?: string) =>
    navigate('founder', { stage, track: exploreTrack });

  return (
    <div>
      {/* ----------------------------------------------------------------- */}
      {/* Hero + role selection                                             */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        {landing.heroImage && (
          <Image
            src={landing.heroImage}
            alt=""
            gradient="from-ink-800 to-ink-950"
            className="absolute inset-0 opacity-25"
            priority
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/55" />
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-ember-500/30 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-ember-400/20 blur-3xl animate-float-slow" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {landing.eyebrow}
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] text-balance sm:text-5xl md:text-6xl">
              {landing.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ember-100">
              {landing.subtitle}
            </p>
          </div>

          {/* Role selection */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="text-center">
              <h2 className="font-display text-xl font-bold">{landing.roleQuestion}</h2>
              <p className="mt-1 text-sm text-ember-200">{landing.roleHint}</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {roleCards.map((card, i) => (
                <Reveal key={card.role} delay={i * 110}>
                  <button
                    onClick={() => onSelectRole(card.role)}
                    className="group flex h-full w-full flex-col rounded-2xl border border-white/15 bg-white/10 p-6 text-left backdrop-blur transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-ember-700 shadow-sm">
                      <Icon name={card.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold">{card.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ember-100">{card.body}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      {card.cta}
                      <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Hero stats */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-white/5 p-5 text-center backdrop-blur">
                <div className="font-display text-2xl font-black text-ember-400 sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs leading-snug text-ink-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Pipeline peek                                                     */}
      {/* ----------------------------------------------------------------- */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="The pathway"
            title={landing.pipelineTitle}
            subtitle={landing.pipelineSubtitle}
            align="center"
          />
          <div className="mt-10">
            <StageMap onPick={onPickStage} />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Principles                                                        */}
      {/* ----------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title={landing.principlesTitle} align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-50 text-ember-700">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Ventures built here                                               */}
      {/* ----------------------------------------------------------------- */}
      {founders.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow={venturesStrip.eyebrow}
              title={venturesStrip.title}
              subtitle={venturesStrip.subtitle}
              align="center"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {founders.map((m, i) => (
                <Reveal key={m.name} delay={i * 70}>
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md">
                    <Avatar name={m.name} className="h-12 w-12 shrink-0" textClassName="text-sm" />
                    <div className="min-w-0">
                      <div className="font-display text-base font-bold text-slate-900">
                        {m.venture}
                      </div>
                      <div className="truncate text-xs text-slate-500">
                        {m.name} · {m.field}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-slate-400">{venturesStrip.note}</p>
          </div>
        </section>
      )}
    </div>
  );
}
