import type { ReactNode } from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-garnet-700">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-bold text-slate-900 text-balance sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-slate-600">{subtitle}</p>}
    </div>
  );
}
