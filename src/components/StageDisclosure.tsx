import type { ReactNode } from 'react';
import Icon from './Icon';
import type { Accent } from '../data/content';

/** Accent-tinted class strings for the disclosure chrome, written out in full so
 *  Tailwind's compiler can see every class at build time. */
const STYLES: Record<Accent, { wrap: string; iconBg: string; toggle: string; rule: string }> = {
  amber: {
    wrap: 'border-amber-200 bg-amber-50/40',
    iconBg: 'bg-amber-500',
    toggle: 'border-amber-300 text-amber-700',
    rule: 'border-amber-100',
  },
  emerald: {
    wrap: 'border-emerald-200 bg-emerald-50/40',
    iconBg: 'bg-emerald-600',
    toggle: 'border-emerald-300 text-emerald-700',
    rule: 'border-emerald-100',
  },
  garnet: {
    wrap: 'border-garnet-200 bg-garnet-50/40',
    iconBg: 'bg-garnet-700',
    toggle: 'border-garnet-300 text-garnet-700',
    rule: 'border-garnet-100',
  },
  indigo: {
    wrap: 'border-indigo-200 bg-indigo-50/40',
    iconBg: 'bg-indigo-600',
    toggle: 'border-indigo-300 text-indigo-700',
    rule: 'border-indigo-100',
  },
};

/**
 * A single on-demand disclosure used inside a stage panel of the path explorer.
 * The summary stays one compact row (icon, title, subtitle, plus/minus toggle);
 * the supplied detail is revealed on demand so every stage panel stays the same
 * height until a reader asks for more.
 */
export default function StageDisclosure({
  accent,
  icon,
  title,
  subtitle,
  children,
}: {
  accent: Accent;
  icon: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const s = STYLES[accent];
  return (
    <details className={`group mt-6 overflow-hidden rounded-2xl border ${s.wrap}`}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-3">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${s.iconBg}`}>
            <Icon name={icon} className="h-5 w-5" />
          </span>
          <span>
            <span className="font-display text-base font-bold text-slate-900">{title}</span>
            <span className="block text-sm text-slate-600">{subtitle}</span>
          </span>
        </span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${s.toggle}`}>
          <Icon name="plus" className="h-4 w-4 group-open:hidden" />
          <Icon name="minus" className="hidden h-4 w-4 group-open:block" />
        </span>
      </summary>
      <div className={`border-t bg-white p-5 sm:p-6 ${s.rule}`}>{children}</div>
    </details>
  );
}
