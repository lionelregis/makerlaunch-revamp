import Icon from './Icon';
import type { StudentProfile, StudentCopy } from '../data/content';

/** A single student profile on the Launchpad board. */
export default function StudentCard({
  profile,
  copy,
  onRemove,
}: {
  profile: StudentProfile;
  copy: StudentCopy;
  onRemove?: () => void;
}) {
  const email = profile.contact?.trim() || copy.fallbackContact;
  const href = `mailto:${email}?subject=${encodeURIComponent(copy.mailtoSubject)}`;
  const meta = [profile.degree, profile.concentration, profile.year].filter(Boolean).join(' · ');

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold text-slate-900">{profile.name}</h3>
          <p className="mt-0.5 text-sm text-slate-500">{meta}</p>
        </div>
        {profile.local && onRemove && (
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

      {profile.local && (
        <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-indigo-700">
          {copy.yourPostBadge}
        </span>
      )}

      <div className="mt-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
          {copy.interestsHeading}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {profile.interests.map((s) => (
            <span key={s} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
              {s}
            </span>
          ))}
        </div>
      </div>

      {profile.looking && (
        <div className="mt-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
            {copy.lookingHeading}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{profile.looking}</p>
        </div>
      )}

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
