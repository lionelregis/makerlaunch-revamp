import { useState } from 'react';

/**
 * A photo with a graceful fallback. If the image is missing, blocked, or fails
 * to load, it degrades to a gradient block instead of a broken-image icon.
 * Photo URLs are hotlinked from content, so this keeps the layout intact when a
 * URL is offline or swapped out.
 */
export default function Image({
  src,
  alt = '',
  className = '',
  gradient = 'from-garnet-700 to-garnet-900',
}: {
  src?: string;
  alt?: string;
  className?: string;
  gradient?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
      {src && !failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
