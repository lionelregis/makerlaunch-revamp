import { useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import Icon from '../components/Icon';
import LaunchpadCard from '../components/LaunchpadCard';
import { launchpadPage as copy, launchpadPosts } from '../data/content';
import type { LaunchPost, TeamMember } from '../data/content';

const STORAGE_KEY = 'makerlaunch.launchpad.posts.v1';

function newId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Parse the team textarea: one "Name, Role" per line (role optional). */
function parseTeam(text: string): TeamMember[] {
  return text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const i = l.indexOf(',');
      return i === -1
        ? { name: l, role: '' }
        : { name: l.slice(0, i).trim(), role: l.slice(i + 1).trim() };
    });
}

/** Parse comma-separated skills into trimmed, de-duplicated tags. */
function parseSeeking(text: string): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const part of text.split(',').map((s) => s.trim()).filter(Boolean)) {
    const key = part.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(part);
    }
  }
  return out;
}

/** Read saved posts from localStorage. Degrades to [] if unavailable/corrupt. */
function loadStoredPosts(): LaunchPost[] {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return (parsed as LaunchPost[])
      .filter((p) => p && typeof p.id === 'string' && typeof p.title === 'string')
      .map((p) => ({ ...p, local: true }));
  } catch {
    return [];
  }
}

export default function LaunchpadPage({ onBack }: { onBack: () => void }) {
  const [userPosts, setUserPosts] = useState<LaunchPost[]>(loadStoredPosts);
  const [active, setActive] = useState(copy.filterAll);
  const [formOpen, setFormOpen] = useState(false);

  const [fTitle, setFTitle] = useState('');
  const [fVision, setFVision] = useState('');
  const [fTeam, setFTeam] = useState('');
  const [fSeeking, setFSeeking] = useState('');
  const [fContact, setFContact] = useState('');
  const [formError, setFormError] = useState('');

  // Persist on change, but skip the very first render so we don't write on load.
  const hydrated = useRef(false);
  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userPosts));
    } catch {
      /* quota or private mode: ignore */
    }
  }, [userPosts]);

  const posts = useMemo(() => [...userPosts, ...launchpadPosts], [userPosts]);

  const skills = useMemo(() => {
    const set = new Set<string>();
    for (const p of posts) for (const s of p.seeking) set.add(s);
    return [copy.filterAll, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  // If the active skill disappears (e.g. its only post was removed), fall back
  // to "all" for display without forcing a state update from an effect.
  const effectiveActive = skills.includes(active) ? active : copy.filterAll;

  const shown =
    effectiveActive === copy.filterAll
      ? posts
      : posts.filter((p) => p.seeking.includes(effectiveActive));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const title = fTitle.trim();
    const vision = fVision.trim();
    const seeking = parseSeeking(fSeeking);
    if (!title || !vision || seeking.length === 0) {
      setFormError(copy.formError);
      return;
    }
    const post: LaunchPost = {
      id: newId(),
      title,
      vision,
      team: parseTeam(fTeam),
      seeking,
      contact: fContact.trim() || undefined,
      local: true,
    };
    setUserPosts((prev) => [post, ...prev]);
    setFTitle('');
    setFVision('');
    setFTeam('');
    setFSeeking('');
    setFContact('');
    setFormError('');
    setFormOpen(false);
    setActive(copy.filterAll);
  }

  function handleRemove(id: string) {
    setUserPosts((prev) => prev.filter((p) => p.id !== id));
  }

  const field =
    'mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200';
  const label = 'block text-sm font-semibold text-slate-700';
  const hint = 'mt-0.5 text-xs text-slate-500';

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
            Back to the founder path
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
              {posts.length} {copy.countLabel}
            </p>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* Post toggle */}
        <button
          type="button"
          onClick={() => setFormOpen((v) => !v)}
          aria-expanded={formOpen}
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700"
        >
          <Icon name={formOpen ? 'minus' : 'plus'} className="h-4 w-4" />
          {formOpen ? copy.postCancel : copy.postButton}
        </button>

        {/* Post form */}
        {formOpen && (
          <form
            onSubmit={handleSubmit}
            className="animate-fade-in mt-5 rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h2 className="font-display text-lg font-bold text-slate-900">{copy.formTitle}</h2>
            <p className="mt-1 text-sm text-slate-600">{copy.formIntro}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="lp-title" className={label}>{copy.titleLabel}</label>
                <input id="lp-title" className={field} value={fTitle}
                  onChange={(e) => setFTitle(e.target.value)} placeholder={copy.titlePlaceholder} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="lp-vision" className={label}>{copy.visionLabel}</label>
                <textarea id="lp-vision" rows={3} className={field} value={fVision}
                  onChange={(e) => setFVision(e.target.value)} placeholder={copy.visionPlaceholder} />
              </div>
              <div>
                <label htmlFor="lp-team" className={label}>{copy.teamLabel}</label>
                <textarea id="lp-team" rows={3} className={field} value={fTeam}
                  onChange={(e) => setFTeam(e.target.value)} placeholder={copy.teamPlaceholder} />
                <p className={hint}>{copy.teamHint}</p>
              </div>
              <div>
                <label htmlFor="lp-seeking" className={label}>{copy.seekingLabel}</label>
                <input id="lp-seeking" className={field} value={fSeeking}
                  onChange={(e) => setFSeeking(e.target.value)} placeholder={copy.seekingPlaceholder} />
                <p className={hint}>{copy.seekingHint}</p>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="lp-contact" className={label}>{copy.contactLabel}</label>
                <input id="lp-contact" type="email" className={field} value={fContact}
                  onChange={(e) => setFContact(e.target.value)} placeholder={copy.contactPlaceholder} />
              </div>
            </div>

            {formError && (
              <p role="alert" className="mt-4 text-sm font-medium text-rose-600">{formError}</p>
            )}

            <div className="mt-5 flex items-center gap-3">
              <button type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700">
                {copy.submitButton}
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => { setFormOpen(false); setFormError(''); }}
                className="text-sm font-semibold text-slate-500 transition hover:text-slate-800">
                {copy.postCancel}
              </button>
            </div>
          </form>
        )}

        {/* Filter chips */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-bold uppercase tracking-wide text-slate-400">
            {copy.filterLabel}
          </span>
          {skills.map((s) => {
            const isActive = s === effectiveActive;
            return (
              <button
                key={s}
                onClick={() => setActive(s)}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                  isActive
                    ? 'border-transparent bg-indigo-600 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {shown.length > 0 ? (
          <div key={effectiveActive} className="mt-8 grid animate-fade-in gap-5 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <LaunchpadCard
                key={p.id}
                post={p}
                copy={copy}
                onRemove={p.local ? () => handleRemove(p.id) : undefined}
              />
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-slate-500">{copy.emptyLabel}</p>
        )}

        <p className="mt-8 text-xs text-slate-400">{copy.note}</p>
      </section>
    </div>
  );
}
