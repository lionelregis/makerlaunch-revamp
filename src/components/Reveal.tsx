import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Fades + lifts its children into view the first time they scroll into the
 * viewport. Degrades to immediately-visible if IntersectionObserver is missing
 * or the user prefers reduced motion (handled globally in CSS).
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section';
}) {
  const ref = useRef<HTMLElement | null>(null);
  // When IntersectionObserver is unavailable, show immediately (no animation
  // gating) rather than risk content staying hidden.
  const [shown, setShown] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`${shown ? 'animate-fade-up' : 'opacity-0'} ${className}`}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
