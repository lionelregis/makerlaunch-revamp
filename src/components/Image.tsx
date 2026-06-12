import { useState } from 'react';

const WIDTHS = [480, 768, 1024, 1400, 1600];

/** For Unsplash URLs, build a srcset across widths by swapping the `w` param. */
function buildSrcSet(src?: string): string | undefined {
  if (!src || !src.includes('images.unsplash.com')) return undefined;
  try {
    return WIDTHS.map((w) => {
      const u = new URL(src);
      u.searchParams.set('w', String(w));
      u.searchParams.delete('h'); // let height follow the aspect crop
      return `${u.toString()} ${w}w`;
    }).join(', ');
  } catch {
    return undefined;
  }
}

/**
 * A photo with a graceful fallback. If the image is missing, blocked, or fails
 * to load, it degrades to a gradient block instead of a broken-image icon.
 * Hotlinked Unsplash photos are served responsively (srcset + sizes) so phones
 * download a smaller file; pass `priority` for above-the-fold images.
 */
export default function Image({
  src,
  alt = '',
  className = '',
  gradient = 'from-ember-700 to-ember-900',
  sizes = '100vw',
  priority = false,
}: {
  src?: string;
  alt?: string;
  className?: string;
  gradient?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const srcSet = buildSrcSet(src);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
      {src && !failed && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
