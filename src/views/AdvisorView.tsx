import { useI18n } from '../lib/i18n';
import { advisor } from '../data/content';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

export default function AdvisorView() {
  const { t } = useI18n();

  return (
    <div>
      {/* Sub-hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-garnet-600/30 blur-3xl animate-float-slow" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-garnet-300">
            {t(advisor.eyebrow)}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-balance sm:text-4xl md:text-5xl">
            {t(advisor.title)}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{t(advisor.intro)}</p>
        </div>
      </section>

      {/* Flywheel */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title={t(advisor.flywheelTitle)} align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {advisor.flywheelSteps.map((s, i) => (
            <Reveal key={t(s.title)} delay={i * 100}>
              <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-garnet-50 text-sm font-black text-garnet-700">
                    {i + 1}
                  </span>
                  <Icon name="spark" className="h-5 w-5 text-garnet-400" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(s.body)}</p>
                <Icon
                  name={i < advisor.flywheelSteps.length - 1 ? 'arrowRight' : 'arrowLeft'}
                  className="absolute -right-3 top-9 hidden h-6 w-6 text-slate-300 md:block"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-medium text-slate-500">
          {t({
            en: 'Today’s founders become tomorrow’s mentors — the cycle compounds.',
            fr: 'Les fondateurs d’aujourd’hui deviennent les mentors de demain — le cycle s’amplifie.',
          })}
        </p>
      </section>

      {/* Ways to get involved */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={t(advisor.waysTitle)} align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advisor.ways.map((w, i) => (
              <Reveal key={t(w.title)} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-garnet-500 to-garnet-800 text-white">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{t(w.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(w.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PEO spotlight */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-garnet-50 to-white p-8 md:grid-cols-[auto_1fr] md:p-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-garnet-700 text-white shadow-lg">
            <Icon name="shield" className="h-10 w-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{t(advisor.peoTitle)}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{t(advisor.peoBody)}</p>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={t(advisor.recognitionTitle)} align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {advisor.recognition.map((r, i) => (
              <Reveal key={t(r.title)} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
                  <Icon name="check" className="h-6 w-6 text-emerald-600" />
                  <h3 className="mt-3 text-base font-bold text-slate-900">{t(r.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(r.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title={t(advisor.statsTitle)} align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advisor.stats.map((stat, i) => (
            <Reveal key={t(stat.label)} delay={i * 90}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <div className="bg-gradient-to-br from-garnet-600 to-garnet-900 bg-clip-text text-4xl font-black text-transparent">
                  {t(stat.value)}
                </div>
                <div className="mt-2 text-sm leading-snug text-slate-600">{t(stat.label)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-garnet-900 p-10 text-center text-white">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-black text-balance">{t(advisor.ctaTitle)}</h2>
            <p className="mt-3 text-base leading-relaxed text-garnet-100">{t(advisor.ctaBody)}</p>
            <a
              href="mailto:ceed@uottawa.ca?subject=Mentor%20%26%20advisor%20interest"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-garnet-800 transition hover:bg-garnet-50"
            >
              {t(advisor.ctaButton)}
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
