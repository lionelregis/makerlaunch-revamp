// Maps a stage accent token to fully-spelled Tailwind class strings.
// Spelling the classes out (rather than interpolating) keeps them in
// Tailwind's static scan so the utilities are actually generated.

export type Accent = 'amber' | 'emerald' | 'garnet' | 'indigo';

export interface AccentClasses {
  text: string;
  bgSoft: string;
  border: string;
  borderStrong: string;
  ring: string;
  solid: string;
  solidHover: string;
  gradient: string;
  chip: string;
  dot: string;
  softGlow: string;
}

export const ACCENTS: Record<Accent, AccentClasses> = {
  amber: {
    text: 'text-amber-600',
    bgSoft: 'bg-amber-50',
    border: 'border-amber-200',
    borderStrong: 'border-amber-400',
    ring: 'ring-amber-300',
    solid: 'bg-amber-500',
    solidHover: 'hover:bg-amber-600',
    gradient: 'from-amber-400 to-orange-500',
    chip: 'bg-amber-100 text-amber-800',
    dot: 'bg-amber-500',
    softGlow: 'shadow-amber-500/20',
  },
  emerald: {
    text: 'text-emerald-600',
    bgSoft: 'bg-emerald-50',
    border: 'border-emerald-200',
    borderStrong: 'border-emerald-400',
    ring: 'ring-emerald-300',
    solid: 'bg-emerald-500',
    solidHover: 'hover:bg-emerald-600',
    gradient: 'from-emerald-400 to-teal-500',
    chip: 'bg-emerald-100 text-emerald-800',
    dot: 'bg-emerald-500',
    softGlow: 'shadow-emerald-500/20',
  },
  garnet: {
    text: 'text-garnet-700',
    bgSoft: 'bg-garnet-50',
    border: 'border-garnet-200',
    borderStrong: 'border-garnet-400',
    ring: 'ring-garnet-300',
    solid: 'bg-garnet-700',
    solidHover: 'hover:bg-garnet-800',
    gradient: 'from-garnet-500 to-garnet-800',
    chip: 'bg-garnet-100 text-garnet-800',
    dot: 'bg-garnet-600',
    softGlow: 'shadow-garnet-500/20',
  },
  indigo: {
    text: 'text-indigo-600',
    bgSoft: 'bg-indigo-50',
    border: 'border-indigo-200',
    borderStrong: 'border-indigo-400',
    ring: 'ring-indigo-300',
    solid: 'bg-indigo-500',
    solidHover: 'hover:bg-indigo-600',
    gradient: 'from-indigo-400 to-violet-600',
    chip: 'bg-indigo-100 text-indigo-800',
    dot: 'bg-indigo-500',
    softGlow: 'shadow-indigo-500/20',
  },
};
