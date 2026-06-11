import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import Icon from '../components/Icon';
import Image from '../components/Image';
import { boardCopy as copy, seededProjects, highlightProjects } from '../data/projectboard';
import type { ProjectPost, ProjectHighlight } from '../data/projectboard';
import { newId, parseTags, tagUnion, useStoredCollection } from '../lib/board';

const STORAGE_KEY = 'uottawa.projectboard.posts.v1';

const field =
  'mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200';
const label = 'block text-sm font-semibold text-slate-700';
const hint = 'mt-0.5 text-xs text-slate-500';

function ProjectCard({ post, onRemove }: { post: ProjectPost; onRemove?: () => void }) {
  const mailto = `mailto:${post.contact}?subject=${encodeURIComponent(`${copy.mailtoSubject} ${post.title}`)}`;
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700">{post.course}</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">{post.semester}</span>
        {post.local && (
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700">{copy.yourPostBadge}</span>
        )}
      </div>
      <h3 className="mt-3 font-display text-lg font-bold leading-snug text-slate-900">{post.title}</h3>
      <p className="mt-1 text-sm font-medium text-slate-500">{post.professor}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.description}</p>

      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">{copy.partnerHeading}</p>
      <p className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-700">
        <Icon name="globe" className="h-4 w-4 shrink-0 text-blue-600" />
        {post.partner}
      </p>

      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">{copy.skillsHeading}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {post.skills.map((s) => (
          <span key={s} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <a
          href={mailto}
          className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-800"
        >
          {copy.contactButton}
          <Icon name="arrowRight" className="h-4 w-4" />
        </a>
        {onRemove && (
          <button onClick={onRemove} className="text-xs font-semibold text-slate-400 transition hover:text-rose-600">
            {copy.removeLabel}
          </button>
        )}
      </div>
    </article>
  );
}

function HighlightCard({ item }: { item: ProjectHighlight }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative">
        <Image src={item.image} alt={item.imageAlt ?? ''} gradient="from-blue-500 to-indigo-700" className="aspect-[16/9] w-full" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-blue-700 shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
          {copy.highlightStatusLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700">{item.course}</span>
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">{item.semester}</span>
        </div>
        <h3 className="mt-3 font-display text-base font-bold leading-snug text-slate-900">{item.title}</h3>
        <p className="mt-1 text-sm font-medium text-slate-500">{item.team}</p>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className="uppercase tracking-wide">{copy.highlightProgressLabel}</span>
            <span className="text-blue-700">{item.progress}%</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${item.progress}%` }} />
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
          <span className="font-semibold text-slate-800">{copy.highlightUpdateLabel}: </span>
          {item.update}
        </p>
      </div>
    </article>
  );
}

/**
 * Standalone Course Project Board, served at /projectboard.html. Professors
 * post projects for project-based courses (industry partner, required skills,
 * semester); students browse by course and contact the professor. Visitor posts
 * are a localStorage demo, like the Launchpad. Deliberately unbranded and
 * unlinked from the rest of the site.
 */
export default function ProjectBoardPage() {
  const { items: userPosts, add, remove } = useStoredCollection<ProjectPost>(STORAGE_KEY);
  const [active, setActive] = useState(copy.filterAll);
  const [formOpen, setFormOpen] = useState(false);

  const [fTitle, setFTitle] = useState('');
  const [fCourse, setFCourse] = useState('');
  const [fSemester, setFSemester] = useState('');
  const [fProfessor, setFProfessor] = useState('');
  const [fPartner, setFPartner] = useState('');
  const [fDescription, setFDescription] = useState('');
  const [fSkills, setFSkills] = useState('');
  const [fContact, setFContact] = useState('');
  const [formError, setFormError] = useState('');

  const posts = useMemo(() => [...userPosts, ...seededProjects], [userPosts]);
  const courses = useMemo(() => tagUnion(posts, (p) => [p.course], copy.filterAll), [posts]);
  const effectiveActive = courses.includes(active) ? active : copy.filterAll;
  const shown = effectiveActive === copy.filterAll ? posts : posts.filter((p) => p.course === effectiveActive);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const skills = parseTags(fSkills);
    const required = [fTitle, fCourse, fSemester, fProfessor, fDescription, fContact].map((v) => v.trim());
    if (required.some((v) => !v) || skills.length === 0) {
      setFormError(copy.formError);
      return;
    }
    add({
      id: newId(),
      title: fTitle.trim(),
      course: fCourse.trim(),
      semester: fSemester.trim(),
      professor: fProfessor.trim(),
      partner: fPartner.trim(),
      description: fDescription.trim(),
      skills,
      contact: fContact.trim(),
      local: true,
    });
    setFTitle(''); setFCourse(''); setFSemester(''); setFProfessor('');
    setFPartner(''); setFDescription(''); setFSkills(''); setFContact('');
    setFormError('');
    setFormOpen(false);
    setActive(copy.filterAll);
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      {/* Neutral header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 font-display text-base font-extrabold text-white" aria-hidden="true">
            P
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-extrabold text-slate-900">{copy.title}</span>
            <span className="block text-[11px] font-medium text-slate-500">{copy.eyebrow}</span>
          </span>
        </div>
      </header>

      <main className="flex-1">
        {/* Page header */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50 to-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h1 className="font-display text-3xl font-black leading-tight text-slate-900 text-balance sm:text-4xl">
              {copy.title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-700">{copy.subtitle}</p>
          </div>
        </section>

        {/* Project highlights — projects currently in progress */}
        {highlightProjects.length > 0 && (
          <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-6 py-12">
              <h2 className="font-display text-2xl font-black text-slate-900">{copy.highlightsTitle}</h2>
              <p className="mt-2 max-w-2xl text-slate-600">{copy.highlightsSubtitle}</p>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {highlightProjects.map((h) => (
                  <HighlightCard key={h.id} item={h} />
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-400">{copy.highlightNote}</p>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-sm font-semibold text-slate-500">
            {posts.length} {copy.countLabel}
          </p>

          <button
            type="button"
            onClick={() => setFormOpen((v) => !v)}
            aria-expanded={formOpen}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800"
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
                  <label htmlFor="pb-title" className={label}>{copy.titleLabel}</label>
                  <input id="pb-title" className={field} value={fTitle} onChange={(e) => setFTitle(e.target.value)} placeholder={copy.titlePlaceholder} />
                </div>
                <div>
                  <label htmlFor="pb-course" className={label}>{copy.courseLabel}</label>
                  <input id="pb-course" className={field} value={fCourse} onChange={(e) => setFCourse(e.target.value)} placeholder={copy.coursePlaceholder} />
                </div>
                <div>
                  <label htmlFor="pb-semester" className={label}>{copy.semesterLabel}</label>
                  <input id="pb-semester" className={field} value={fSemester} onChange={(e) => setFSemester(e.target.value)} placeholder={copy.semesterPlaceholder} />
                </div>
                <div>
                  <label htmlFor="pb-professor" className={label}>{copy.professorLabel}</label>
                  <input id="pb-professor" className={field} value={fProfessor} onChange={(e) => setFProfessor(e.target.value)} placeholder={copy.professorPlaceholder} />
                </div>
                <div>
                  <label htmlFor="pb-partner" className={label}>{copy.partnerLabel}</label>
                  <input id="pb-partner" className={field} value={fPartner} onChange={(e) => setFPartner(e.target.value)} placeholder={copy.partnerPlaceholder} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="pb-description" className={label}>{copy.descriptionLabel}</label>
                  <textarea id="pb-description" rows={3} className={field} value={fDescription} onChange={(e) => setFDescription(e.target.value)} placeholder={copy.descriptionPlaceholder} />
                </div>
                <div>
                  <label htmlFor="pb-skills" className={label}>{copy.skillsLabel}</label>
                  <input id="pb-skills" className={field} value={fSkills} onChange={(e) => setFSkills(e.target.value)} placeholder={copy.skillsPlaceholder} />
                  <p className={hint}>{copy.skillsHint}</p>
                </div>
                <div>
                  <label htmlFor="pb-contact" className={label}>{copy.contactLabel}</label>
                  <input id="pb-contact" type="email" className={field} value={fContact} onChange={(e) => setFContact(e.target.value)} placeholder={copy.contactPlaceholder} />
                </div>
              </div>
              {formError && <p role="alert" className="mt-4 text-sm font-medium text-rose-600">{formError}</p>}
              <div className="mt-5 flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800">
                  {copy.submitButton}
                  <Icon name="arrowRight" className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => { setFormOpen(false); setFormError(''); }} className="text-sm font-semibold text-slate-500 transition hover:text-slate-800">
                  {copy.postCancel}
                </button>
              </div>
            </form>
          )}

          {/* Course filter */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-bold uppercase tracking-wide text-slate-400">{copy.filterLabel}</span>
            {courses.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                  c === effectiveActive
                    ? 'border-transparent bg-blue-700 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {shown.length > 0 ? (
            <div key={effectiveActive} className="mt-8 grid animate-fade-in gap-5 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((p) => (
                <ProjectCard key={p.id} post={p} onRemove={p.local ? () => remove(p.id) : undefined} />
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center text-slate-500">{copy.emptyLabel}</p>
          )}

          <p className="mt-8 text-xs text-slate-400">{copy.note}</p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-slate-400">{copy.footerLine}</div>
      </footer>
    </div>
  );
}
