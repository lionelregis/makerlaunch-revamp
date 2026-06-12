import { useState } from 'react';

/**
 * An illustrative avatar "photo" for a (fictional) mentor.
 *
 * The portrait is a deterministic illustrated avatar generated from the name as
 * a seed. If the image can't load (offline, blocked, etc.), it degrades
 * gracefully to a coloured monogram, so the card never shows a broken image.
 */
export default function Avatar({
  name,
  className = 'h-14 w-14',
  textClassName = 'text-base',
}: {
  name: string;
  className?: string;
  textClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-display font-extrabold text-white ${className} ${textClassName}`}
      aria-hidden="true"
    >
      {initials(name)}
      {!failed && (
        <img
          src={avatarUrl(name)}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </span>
  );
}

/** Illustrated-avatar image URL, seeded by the mentor's name. */
function avatarUrl(seed: string): string {
  const bg = 'b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf,ffe7a8';
  return `https://api.dicebear.com/9.x/personas/svg?seed=${encodeURIComponent(
    seed,
  )}&radius=50&backgroundColor=${bg}`;
}

/** First letters of the first two name parts (skipping honorific prefixes). */
function initials(name: string): string {
  const parts = name
    .replace(/,.*$/, '')
    .split(' ')
    .filter((p) => !/^(dr|mr|mrs|ms|prof)\.?$/i.test(p));
  return parts.slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}
