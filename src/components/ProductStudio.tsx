import Icon from './Icon';
import { productStudio as ps } from '../data/content';

/**
 * Product Studio detail, shown inside the "What you'll learn in Product Studio"
 * disclosure on the Product Studio stage of the path explorer. Kept deliberately
 * scannable: a short lead, the six phases as a one-line-each list, the tools as a
 * single chip row, and the gate note.
 */
export default function ProductStudio() {
  return (
    <div>
      <p className="text-sm leading-relaxed text-slate-700">
        {ps.tagline} It works for software, a service, or hardware, and assumes your discovery is already done.
      </p>
      <p className="mt-2 text-sm text-slate-600">
        <span className="font-semibold text-slate-800">Three formats: </span>
        {ps.formats.map((f) => f.name).join(', ')}.
      </p>

      {/* Six phases, one line each */}
      <p className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-400">
        From a validated idea to a shipped product
      </p>
      <ol className="mt-3 space-y-2">
        {ps.phases.map((p) => (
          <li key={p.name} className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-700">
              {p.n}
            </span>
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-slate-900">{p.name}.</span> {p.can}
            </p>
          </li>
        ))}
      </ol>

      {/* Tools, one chip row */}
      <p className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-400">Tools you’ll use</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {ps.tools.map((t) => (
          <span key={t} className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            {t}
          </span>
        ))}
      </div>

      {/* Gate note */}
      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-garnet-900 p-4 text-white">
        <Icon name="target" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
        <p className="text-sm leading-relaxed text-garnet-50">{ps.gateNote}</p>
      </div>
    </div>
  );
}
