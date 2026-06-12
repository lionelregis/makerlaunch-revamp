export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <div
          className={`font-accent flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ember-700 ${
            centered ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-6 bg-ember-300" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 text-balance sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}
