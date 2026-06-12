/**
 * MakerLaunch wordmark, recreated from the brand logo: a heavy uppercase
 * wordmark in charcoal (ink) with a vermillion (ember) rocket standing in for
 * the "A" in LAUNCH. Drop a final vector of the official logo into the repo and
 * this can be swapped for an exact image.
 */
function RocketMark({ className = '' }: { className?: string }) {
  const ember = '#e0512b';
  return (
    <svg viewBox="0 0 28 40" className={className} role="presentation" aria-hidden="true" fill="none">
      {/* nose + body */}
      <path d="M14 1.5c3.2 3 5 8.2 5 14.5v9.5h-10V16C9 9.7 10.8 4.5 14 1.5Z" fill={ember} />
      {/* fins */}
      <path d="M9 17.5 2.8 26.5v5.4L9 25.6Z" fill={ember} />
      <path d="M19 17.5 25.2 26.5v5.4L19 25.6Z" fill={ember} />
      {/* window slit */}
      <rect x="12.6" y="9" width="2.8" height="9" rx="1.4" fill="#fff" />
      {/* exhaust */}
      <g stroke={ember} strokeWidth="1.7" strokeLinecap="round">
        <line x1="10.5" y1="28.5" x2="10.5" y2="34.5" />
        <line x1="14" y1="29.5" x2="14" y2="38" />
        <line x1="17.5" y1="28.5" x2="17.5" y2="34.5" />
      </g>
    </svg>
  );
}

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  const text = inverted ? 'text-white' : 'text-ink-900';
  return (
    <span className="inline-flex items-center">
      <span className="sr-only">MakerLaunch</span>
      <span
        aria-hidden="true"
        className={`inline-flex items-center font-sans text-lg font-black uppercase leading-none tracking-tight sm:text-xl ${text}`}
      >
        MAKERL
        <RocketMark className="mx-px h-[1.05em] w-auto -translate-y-px" />
        UNCH
      </span>
    </span>
  );
}
