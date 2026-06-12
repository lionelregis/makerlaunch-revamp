import Icon from './Icon';
import Avatar from './Avatar';
import type { Mentor } from '../data/content';

/** A single mentor/advisor profile card. */
export default function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <Avatar name={mentor.name} className="h-14 w-14" textClassName="text-base" />
        <figcaption className="min-w-0">
          <div className="font-display text-base font-bold text-slate-900">{mentor.name}</div>
          <div className="text-xs leading-snug text-slate-500">{mentor.role}</div>
        </figcaption>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">{mentor.bio}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {mentor.expertise.map((tag) => (
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
        <p className="font-accent mt-2 text-sm italic leading-relaxed text-slate-700">“{mentor.quote}”</p>
      </blockquote>
    </figure>
  );
}
