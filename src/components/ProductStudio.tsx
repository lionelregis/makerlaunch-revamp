import Icon from './Icon';
import { productStudio as ps } from '../data/content';

/** Tag style for a phase's depth marker (Framework vs Hands-on vs core). */
function depthClass(depth: string): string {
  const d = depth.toLowerCase();
  if (d.includes('core')) return 'bg-emerald-600 text-white';
  if (d.includes('hands-on')) return 'bg-emerald-50 text-emerald-700';
  return 'bg-slate-100 text-slate-600';
}

/**
 * Product Studio detail, shown inside the "What you'll learn" disclosure on the
 * Product Studio stage of the path explorer: a short lead, the six build-to-ship
 * phases (with depth markers), and the frameworks and tools the curriculum teaches.
 */
export default function ProductStudio() {
  return (
    <div>
      <p className="text-sm leading-relaxed text-slate-700">
        {ps.tagline} It assumes your discovery is done, and works for software, a service, or hardware, with no tech
        stack assumed.
      </p>
      <p className="mt-2 text-sm text-slate-600">
        <span className="font-semibold text-slate-800">Three formats: </span>
        {ps.formats.map((f) => f.name).join(', ')} — drop in, sprint, or commit to the full cohort.
      </p>

      {/* Six phases */}
      <p className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-400">The six phases</p>
      <ol className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ps.phases.map((p) => (
          <li key={p.name} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Phase {p.n}</span>
                  <h4 className="font-display text-base font-bold text-slate-900">{p.name}</h4>
                </div>
              </div>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${depthClass(p.depth)}`}>
                {p.depth}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.can}</p>
            <div className="mt-3 flex items-start gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
              <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <p>
                <span className="font-semibold text-slate-600">You produce: </span>
                {p.produces}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Frameworks & tools */}
      <p className="mt-8 text-xs font-bold uppercase tracking-wide text-slate-400">{ps.toolkitTitle}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{ps.toolkitSubtitle}</p>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ps.toolkit.map((t) => (
          <div key={t.area} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h4 className="font-display text-base font-bold text-slate-900">{t.area}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.methods}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{ps.toolsLabel}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {ps.tools.map((t) => (
            <span key={t} className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Gate note */}
      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-garnet-900 p-5 text-white">
        <Icon name="target" className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" />
        <p className="text-sm leading-relaxed text-garnet-50">{ps.gateNote}</p>
      </div>
    </div>
  );
}
