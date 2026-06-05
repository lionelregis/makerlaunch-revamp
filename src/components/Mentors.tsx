import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { advisor, mentors } from '../data/content';

/** A gallery of advisor/mentor profiles — bio, areas of expertise, and a quote. */
export default function Mentors() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow={advisor.mentorsSubtitle}
        title={advisor.mentorsTitle}
        align="center"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-display text-base font-extrabold text-white"
                  aria-hidden="true"
                >
                  {initials(m.name)}
                </span>
                <figcaption>
                  <div className="font-display text-base font-bold text-slate-900">{m.name}</div>
                  <div className="text-xs leading-snug text-slate-500">{m.role}</div>
                </figcaption>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">{m.bio}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {m.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <blockquote className="mt-5 flex-1 border-t border-slate-100 pt-4">
                <Icon name="spark" className="h-5 w-5 text-indigo-400" />
                <p className="mt-2 text-sm italic leading-relaxed text-slate-700">“{m.quote}”</p>
              </blockquote>
            </figure>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">{advisor.mentorsNote}</p>
    </div>
  );
}

/** First letters of the first two name parts (skipping honorific prefixes). */
function initials(name: string): string {
  const parts = name
    .replace(/,.*$/, '')
    .split(' ')
    .filter((p) => !/^(dr|mr|mrs|ms|prof)\.?$/i.test(p));
  return parts.slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}
