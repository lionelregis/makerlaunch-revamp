import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import Icon from './Icon';
import StudentCard from './StudentCard';
import { launchpadPage, launchpadProfiles } from '../data/content';
import type { StudentProfile } from '../data/content';
import { newId, parseTags, tagUnion, useStoredCollection } from '../lib/board';

const STORAGE_KEY = 'makerlaunch.launchpad.students.v1';
const copy = launchpadPage.students;

const field =
  'mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200';
const label = 'block text-sm font-semibold text-slate-700';
const hint = 'mt-0.5 text-xs text-slate-500';

export default function StudentBoard() {
  const { items: userProfiles, add, remove } = useStoredCollection<StudentProfile>(STORAGE_KEY);
  const [active, setActive] = useState(copy.filterAll);
  const [formOpen, setFormOpen] = useState(false);

  const [fName, setFName] = useState('');
  const [fDegree, setFDegree] = useState('');
  const [fConcentration, setFConcentration] = useState('');
  const [fYear, setFYear] = useState('');
  const [fInterests, setFInterests] = useState('');
  const [fLooking, setFLooking] = useState('');
  const [fContact, setFContact] = useState('');
  const [formError, setFormError] = useState('');

  const profiles = useMemo(() => [...userProfiles, ...launchpadProfiles], [userProfiles]);
  const interests = useMemo(() => tagUnion(profiles, (p) => p.interests, copy.filterAll), [profiles]);
  const effectiveActive = interests.includes(active) ? active : copy.filterAll;
  const shown =
    effectiveActive === copy.filterAll
      ? profiles
      : profiles.filter((p) => p.interests.includes(effectiveActive));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const name = fName.trim();
    const degree = fDegree.trim();
    const interestTags = parseTags(fInterests);
    if (!name || !degree || interestTags.length === 0) {
      setFormError(copy.formError);
      return;
    }
    add({
      id: newId(),
      name,
      degree,
      concentration: fConcentration.trim() || undefined,
      year: fYear.trim(),
      interests: interestTags,
      looking: fLooking.trim(),
      contact: fContact.trim() || undefined,
      local: true,
    });
    setFName('');
    setFDegree('');
    setFConcentration('');
    setFYear('');
    setFInterests('');
    setFLooking('');
    setFContact('');
    setFormError('');
    setFormOpen(false);
    setActive(copy.filterAll);
  }

  return (
    <div>
      <p className="text-sm font-semibold text-slate-500">
        {profiles.length} {copy.countLabel}
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
              <label htmlFor="sp-name" className={label}>{copy.nameLabel}</label>
              <input id="sp-name" required className={field} value={fName} onChange={(e) => setFName(e.target.value)} placeholder={copy.namePlaceholder} />
            </div>
            <div>
              <label htmlFor="sp-degree" className={label}>{copy.degreeLabel}</label>
              <input id="sp-degree" required className={field} value={fDegree} onChange={(e) => setFDegree(e.target.value)} placeholder={copy.degreePlaceholder} />
            </div>
            <div>
              <label htmlFor="sp-concentration" className={label}>{copy.concentrationLabel}</label>
              <input id="sp-concentration" className={field} value={fConcentration} onChange={(e) => setFConcentration(e.target.value)} placeholder={copy.concentrationPlaceholder} />
            </div>
            <div>
              <label htmlFor="sp-year" className={label}>{copy.yearLabel}</label>
              <input id="sp-year" className={field} value={fYear} onChange={(e) => setFYear(e.target.value)} placeholder={copy.yearPlaceholder} />
            </div>
            <div>
              <label htmlFor="sp-interests" className={label}>{copy.interestsLabel}</label>
              <input id="sp-interests" required className={field} value={fInterests} onChange={(e) => setFInterests(e.target.value)} placeholder={copy.interestsPlaceholder} />
              <p className={hint}>{copy.interestsHint}</p>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="sp-looking" className={label}>{copy.lookingLabel}</label>
              <textarea id="sp-looking" rows={2} className={field} value={fLooking} onChange={(e) => setFLooking(e.target.value)} placeholder={copy.lookingPlaceholder} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="sp-contact" className={label}>{copy.contactLabel}</label>
              <input id="sp-contact" type="email" className={field} value={fContact} onChange={(e) => setFContact(e.target.value)} placeholder={copy.contactPlaceholder} />
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
        {interests.map((s) => (
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
            <StudentCard
              key={p.id}
              profile={p}
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
