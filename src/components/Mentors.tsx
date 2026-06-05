import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import MentorCard from './MentorCard';
import { advisor, mentors } from '../data/content';

/**
 * Featured mentors on the advisor view — a small preview of the directory, with
 * a link through to the full Mentors & Advisors page.
 */
export default function Mentors({ onSeeAll }: { onSeeAll: () => void }) {
  const featured = mentors.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow={advisor.mentorsSubtitle}
        title={advisor.mentorsTitle}
        align="center"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <MentorCard mentor={m} />
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          onClick={onSeeAll}
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
        >
          See all {mentors.length} mentors &amp; advisors
          <Icon name="arrowRight" className="h-4 w-4" />
        </button>
        <p className="text-xs text-slate-400">{advisor.mentorsNote}</p>
      </div>
    </div>
  );
}
