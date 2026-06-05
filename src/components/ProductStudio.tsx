import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { productStudio as ps } from '../data/content';

/**
 * Product Studio deep-dive: the year-round skills programme that takes a student
 * from a first idea to a MakerLaunch-ready venture. Shows the three formats and
 * the six phases of building a product.
 */
export default function ProductStudio() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Intro */}
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
            <span className="h-px w-6 bg-emerald-300" />
            {ps.eyebrow}
          </div>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight text-slate-900 text-balance sm:text-4xl">
            {ps.name}
          </h2>
          <p className="mt-2 font-display text-lg font-semibold text-emerald-700">{ps.tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">{ps.intro}</p>
        </div>
        <Reveal className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
          <div className="flex items-center gap-2 text-emerald-800">
            <Icon name="users" className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wide">Who it’s for</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{ps.forWhom}</p>
        </Reveal>
      </div>

      {/* Three formats */}
      <div className="mt-14">
        <SectionHeading eyebrow={ps.formatsSubtitle} title={ps.formatsTitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ps.formats.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{f.name}</h3>
                <span className="mt-1 inline-block w-fit rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
                  {f.commitment}
                </span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Six phases */}
      <div className="mt-14">
        <SectionHeading eyebrow={ps.phasesSubtitle} title={ps.phasesTitle} />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ps.phases.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} as="li">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                      Phase {p.n}
                    </span>
                    <h3 className="font-display text-base font-bold text-slate-900">{p.name}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.can}</p>
                <div className="mt-3 flex items-start gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
                  <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <p>
                    <span className="font-semibold text-slate-600">You produce: </span>
                    {p.produces}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Gate note */}
        <Reveal className="mt-6 flex items-start gap-3 rounded-2xl bg-garnet-900 p-5 text-white">
          <Icon name="target" className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" />
          <p className="text-sm leading-relaxed text-garnet-50">{ps.gateNote}</p>
        </Reveal>
      </div>
    </div>
  );
}
