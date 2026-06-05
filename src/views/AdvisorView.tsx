import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Mentors from '../components/Mentors';
import { advisor, partners } from '../data/content';

export default function AdvisorView({ onSeeMentors }: { onSeeMentors: () => void }) {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              {advisor.eyebrow}
            </span>
            <h1 className="mt-3 font-display text-3xl font-black leading-tight text-slate-900 text-balance sm:text-4xl">
              {advisor.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">{advisor.intro}</p>
          </div>
        </div>
      </section>

      {/* How giving back comes full circle */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="How it works" title={advisor.flywheelTitle} align="center" />
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {advisor.flywheelSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} as="li">
              <div className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
                {i < advisor.flywheelSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-2.5 top-9 hidden text-slate-300 md:block"
                  >
                    <Icon name="arrowRight" className="h-5 w-5" />
                  </span>
                )}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 font-display text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Ways to get involved */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={advisor.waysTitle} align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advisor.ways.map((way, i) => (
              <Reveal key={way.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                    <Icon name={way.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900">{way.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{way.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PEO advantage */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="grid gap-8 p-8 md:grid-cols-[auto_1fr] md:items-center md:p-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white">
              <Icon name="shield" className="h-9 w-9" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-black text-slate-900">{advisor.peoTitle}</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">{advisor.peoBody}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Meet the mentors */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <Mentors onSeeAll={onSeeMentors} />
      </section>

      {/* Impact goals */}
      <section className="border-y border-slate-200 bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
              <span className="h-px w-6 bg-indigo-400" />
              {advisor.goalsSubtitle}
            </div>
            <h2 className="mt-3 font-display text-2xl font-black sm:text-3xl">{advisor.goalsTitle}</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advisor.goals.map((goal, i) => (
              <Reveal key={goal.label} delay={i * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                  <div className="font-display text-4xl font-black text-white">{goal.value}</div>
                  <div className="mt-2 text-sm leading-snug text-slate-300">{goal.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title={advisor.recognitionTitle} align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {advisor.recognition.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
                <Icon name="checkCircle" className="h-7 w-7 text-indigo-600" />
                <h3 className="mt-4 font-display text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ecosystem partners */}
      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400">
            Where ventures go next — the partners we introduce them to
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {partners.map((p) => (
              <span
                key={p.name}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm"
              >
                <span className="font-semibold text-slate-800">{p.name}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">{p.category}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-center text-white sm:p-12">
          <h2 className="font-display text-3xl font-black text-balance">{advisor.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-indigo-100">
            {advisor.ctaBody}
          </p>
          <a
            href="mailto:ceed@uottawa.ca?subject=Mentor%20interest%20%E2%80%94%20Engineering%20Entrepreneurship"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-indigo-700 transition hover:bg-indigo-50"
          >
            {advisor.ctaButton}
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
