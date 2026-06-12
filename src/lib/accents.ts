// Stage accent → static Tailwind class strings.
// These are written out in full (not interpolated) so Tailwind's JIT compiler
// can see every class at build time.
import type { Accent } from '../data/content';

export interface AccentClasses {
  /** Solid background (stage chips, active states). */
  solid: string;
  /** Soft tinted background. */
  soft: string;
  /** Text in the accent colour. */
  text: string;
  /** Border in the accent colour. */
  border: string;
  /** Small dot / marker background. */
  dot: string;
  /** Gradient used on stage headers. */
  gradient: string;
  /** Ring used on the active/selected state. */
  ring: string;
}

export const accents: Record<Accent, AccentClasses> = {
  amber: {
    solid: 'bg-amber-500 text-white',
    soft: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    gradient: 'from-amber-500 to-orange-600',
    ring: 'ring-amber-400',
  },
  emerald: {
    solid: 'bg-emerald-500 text-white',
    soft: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    dot: 'bg-emerald-500',
    gradient: 'from-emerald-500 to-teal-600',
    ring: 'ring-emerald-400',
  },
  ember: {
    solid: 'bg-ember-700 text-white',
    soft: 'bg-ember-50',
    text: 'text-ember-700',
    border: 'border-ember-200',
    dot: 'bg-ember-700',
    gradient: 'from-ember-600 to-ember-800',
    ring: 'ring-ember-400',
  },
  indigo: {
    solid: 'bg-indigo-500 text-white',
    soft: 'bg-indigo-50',
    text: 'text-indigo-700',
    border: 'border-indigo-200',
    dot: 'bg-indigo-500',
    gradient: 'from-indigo-500 to-violet-600',
    ring: 'ring-indigo-400',
  },
};
