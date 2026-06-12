import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import Icon from './Icon';
import LaunchpadCard from './LaunchpadCard';
import { launchpadPage as copy, launchpadPosts } from '../data/content';
import type { LaunchPost, TeamMember } from '../data/content';
import { newId, parseTags, tagUnion, useStoredCollection } from '../lib/board';

const STORAGE_KEY = 'makerlaunch.launchpad.posts.v1';

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

const field =
  'mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200';
const label = 'block text-sm font-semibold text-slate-700';
const hint = 'mt-0.5 text-xs text-slate-500';

export default function VentureBoard() {
  const { items: userPosts, add, remove } = useStoredCollection<LaunchPost>(STORAGE_KEY);
  const [active, setActive] = useState(copy.filterAll);
  const [formOpen, setFormOpen] = useState(false);

  const [fTitle, setFTitle] = useState('');
  const [fVision, setFVision] = useState('');
  const [fTeam, setFTeam] = useState('');
  const [fSeeking, setFSeeking] = useState('');
  const [fContact, setFContact] = useState('');
  const [formError, setFormError] = useState('');

  const posts = useMemo(() => [...userPosts, ...launchpadPosts], [userPosts]);
  const skills = useMemo(() => tagUnion(posts, (p) => p.seeking, copy.filterAll), [posts]);
  const effectiveActive = skills.includes(active) ? active : copy.filterAll;
  const shown =
    effectiveActive === copy.filterAll
      ? posts
      : posts.filter((p) => p.seeking.includes(effectiveActive));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const title = fTitle.trim();
    const vision = fVision.trim();
    const seeking = parseTags(fSeeking);
    if (!title || !vision || seeking.length === 0) {
      setFormError(copy.formError);
      return;
    }
    add({
      id: newId(),
      title,
      vision,
      team: parseTeam(fTeam),
      seeking,
      contact: fContact.trim() || undefined,
      local: true,
    });
    setFTitle('');
    setFVision('');
    setFTeam('');
    setFSeeking('');
    setFContact('');
    setFormError('');
    setFormOpen(false);
    setActive(copy.filterAll);
  }

  return (
    <div>
      <p className="text-sm font-semibold text-slate-500">
        {posts.length} {copy.countLabel}
      </p>

      <button
        type="button"
        onClick={() => setFormOpen((v) => !v)}
        aria-expanded={formOpen}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700"
      >
        <Icon name={formOpen ? 'minus' : 'plus'} className="h-4 w-4" />
        {formOpen ? copy.postCancel : copy.postButton}
      </button>

      {formOpen && (
        <form onSubmit={handleSubmit} className="animate-fade-in mt-5 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-display text-lg font-bold text-slate-900">{copy.formTitle}</h2>
          <p className="mt-1 text-sm text-slate-600">{copy.formIntro}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="lp-title" className={label}>{copy.titleLabel}</label>
              <input id="lp-title" required className={field} value={fTitle} onChange={(e) => setFTitle(e.target.value)} placeholder={copy.titlePlaceholder} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="lp-vision" className={label}>{copy.visionLabel}</label>
              <textarea id="lp-vision" required rows={3} className={field} value={fVision} onChange={(e) => setFVision(e.target.value)} placeholder={copy.visionPlaceholder} />
            </div>
            <div>
              <label htmlFor="lp-team" className={label}>{copy.teamLabel}</label>
              <textarea id="lp-team" rows={3} className={field} value={fTeam} onChange={(e) => setFTeam(e.target.value)} placeholder={copy.teamPlaceholder} />
              <p className={hint}>{copy.teamHint}</p>
            </div>
            <div>
              <label htmlFor="lp-seeking" className={label}>{copy.seekingLabel}</label>
              <input id="lp-seeking" required className={field} value={fSeeking} onChange={(e) => setFSeeking(e.target.value)} placeholder={copy.seekingPlaceholder} />
              <p className={hint}>{copy.seekingHint}</p>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="lp-contact" className={label}>{copy.contactLabel}</label>
              <input id="lp-contact" type="email" className={field} value={fContact} onChange={(e) => setFContact(e.target.value)} placeholder={copy.contactPlaceholder} />
            </div>
          </div>
          {formError && <p role="alert" className="mt-4 text-sm font-medium text-rose-600">{formError}</p>}
          <div className="mt-5 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700">
              {copy.submitButton}
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => { setFormOpen(false); setFormError(''); }} className="text-sm font-semibold text-slate-500 transition hover:text-slate-800">
              {copy.postCancel}
            </button>
          </div>
        </form>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-bold uppercase tracking-wide text-slate-400">{copy.filterLabel}</span>
        {skills.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            aria-pressed={s === effectiveActive}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
              s === effectiveActive
                ? 'border-transparent bg-indigo-600 text-white'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <div key={effectiveActive} className="mt-8 grid animate-fade-in gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <LaunchpadCard
              key={p.id}
              post={p}
              copy={copy}
              onRemove={p.local ? () => remove(p.id) : undefined}
            />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-slate-500">{copy.emptyLabel}</p>
      )}

      <p className="mt-8 text-xs text-slate-400">{copy.note}</p>
    </div>
  );
}
