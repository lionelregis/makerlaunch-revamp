import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Fades + lifts its children into view the first time they enter the viewport.
 * `delay` staggers entrance (in ms). Degrades gracefully to visible.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: As = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}) {
  const ref = useRef<HTMLElement | null>(null);
  // Start visible when there's no observer to drive us (e.g. SSR / old browsers).
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <As
      ref={ref as never}
      className={`${className} ${visible ? 'animate-fade-up' : 'opacity-0'}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </As>
  );
}
