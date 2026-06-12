import { useState } from 'react';

/**
 * MakerLaunch logo. If the official artwork is present at
 * /makerlaunch-logo.png (or .svg — adjust the src), it is used; otherwise we
 * fall back to a recreation: a heavy uppercase wordmark in charcoal (ink) with
 * a vermillion (ember) rocket standing in for the "A" in LAUNCH.
 */
const EMBER = '#e0512b';

function RocketMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 46" className={className} role="presentation" aria-hidden="true" fill="none">
      {/* nose + body */}
      <path d="M15 2c2.6 3 4 7.4 4 12.4V29h-8V14.4C11 9.4 12.4 5 15 2Z" fill={EMBER} />
      {/* fins */}
      <path d="M11 21.5 3.6 33.8H7.4L11 27Z" fill={EMBER} />
      <path d="M19 21.5 26.4 33.8H22.6L19 27Z" fill={EMBER} />
      {/* center seam */}
      <line x1="15" y1="9" x2="15" y2="27" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" />
      {/* exhaust */}
      <g stroke={EMBER} strokeWidth="1.8" strokeLinecap="round">
        <line x1="10.5" y1="31" x2="10.5" y2="36" />
        <line x1="12.7" y1="31" x2="12.7" y2="39" />
        <line x1="15" y1="32" x2="15" y2="42" />
        <line x1="17.3" y1="31" x2="17.3" y2="39" />
        <line x1="19.5" y1="31" x2="19.5" y2="36" />
      </g>
    </svg>
  );
}

function Wordmark({ inverted }: { inverted: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center font-sans text-lg font-black uppercase leading-none tracking-[-0.04em] sm:text-xl ${
        inverted ? 'text-white' : 'text-ink-900'
      }`}
    >
      MAKERL
      <RocketMark className="mx-px h-[1.08em] w-auto -translate-y-px" />
      UNCH
    </span>
  );
}

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <span className="inline-flex items-center">
      <span className="sr-only">MakerLaunch</span>
      {imgFailed ? (
        <Wordmark inverted={inverted} />
      ) : (
        <img
          src="./makerlaunch-logo.png"
          alt=""
          aria-hidden="true"
          onError={() => setImgFailed(true)}
          className="h-6 w-auto sm:h-7"
        />
      )}
    </span>
  );
}
