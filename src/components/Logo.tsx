import { brand } from '../data/content';

/** Wordmark: a garnet glyph + the program name and centre. */
export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-base font-extrabold ${
          inverted ? 'bg-white text-garnet-700' : 'bg-garnet-700 text-white'
        }`}
        aria-hidden="true"
      >
        E
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-sm font-extrabold ${
            inverted ? 'text-white' : 'text-slate-900'
          }`}
        >
          {brand.programName}
        </span>
        <span
          className={`block text-[11px] font-medium ${
            inverted ? 'text-white/70' : 'text-slate-500'
          }`}
        >
          {brand.short} · uOttawa Engineering
        </span>
      </span>
    </div>
  );
}
