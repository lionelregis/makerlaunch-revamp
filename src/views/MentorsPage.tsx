import { useMemo, useState } from 'react';
import Icon from '../components/Icon';
import MentorCard from '../components/MentorCard';
import { navigate } from '../lib/router';
import { advisor, mentors, mentorsPage as copy } from '../data/content';

export default function MentorsPage() {
  const onBack = () => navigate('advisor');
  const fields = useMemo(
    () => [copy.filterAll, ...Array.from(new Set(mentors.map((m) => m.field)))],
    [],
  );
  const [active, setActive] = useState(copy.filterAll);

  const shown =
    active === copy.filterAll ? mentors : mentors.filter((m) => m.field === active);

  return (
    <div>
      {/* Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-slate-800"
          >
            <Icon name="arrowLeft" className="h-4 w-4" />
            Back to advisors &amp; alumni
          </button>
          <div className="mt-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              {copy.eyebrow}
            </span>
            <h1 className="mt-3 font-display text-3xl font-black leading-tight text-slate-900 text-balance sm:text-4xl">
              {copy.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">{copy.subtitle}</p>
            <p className="mt-3 text-sm font-semibold text-slate-500">
              {mentors.length} {copy.countLabel}
            </p>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* Filter chips */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-bold uppercase tracking-wide text-slate-400">
            {copy.filterLabel}
          </span>
          {fields.map((f) => {
            const isActive = f === active;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                  isActive
                    ? 'border-transparent bg-indigo-600 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {shown.length > 0 ? (
          <div key={active} className="mt-8 grid animate-fade-in gap-5 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((m) => (
              <MentorCard key={m.name} mentor={m} />
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-slate-500">{copy.emptyLabel}</p>
        )}

        <p className="mt-8 text-xs text-slate-400">{advisor.mentorsNote}</p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-center text-white sm:p-12">
          <h2 className="font-display text-2xl font-black text-balance sm:text-3xl">
            {advisor.ctaTitle}
          </h2>
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
