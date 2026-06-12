import Icon from './Icon';
import type { LaunchPost, LaunchpadCopy } from '../data/content';

/** A single team-formation post on the Launchpad board. */
export default function LaunchpadCard({
  post,
  copy,
  onRemove,
}: {
  post: LaunchPost;
  copy: LaunchpadCopy;
  onRemove?: () => void;
}) {
  const email = post.contact?.trim() || copy.fallbackContact;
  const href = `mailto:${email}?subject=${encodeURIComponent(copy.mailtoSubject)}`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-slate-900">{post.title}</h3>
        {post.local && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            aria-label={copy.removeLabel}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <Icon name="minus" className="h-4 w-4" />
          </button>
        )}
      </div>

      {post.local && (
        <span className="mt-1 inline-flex w-fit items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-indigo-700">
          {copy.yourPostBadge}
        </span>
      )}

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.vision}</p>

      {post.team.length > 0 && (
        <div className="mt-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
            {copy.teamHeading}
          </p>
          <ul className="mt-1.5 space-y-1">
            {post.team.map((m, i) => (
              <li key={`${m.name}-${i}`} className="text-sm text-slate-700">
                <span className="font-semibold text-slate-800">{m.name}</span>
                {m.role && <span className="text-slate-500"> · {m.role}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
          {copy.seekingHeading}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {post.seeking.map((s) => (
            <span
              key={s}
              className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-5">
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-indigo-700"
        >
          {copy.reachOut}
          <Icon name="arrowRight" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
