/** CEED wordmark mark — a garnet tile with a four-node pipeline motif. */
export default function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="url(#ceedGrad)" />
      <g stroke="white" strokeWidth="2" strokeLinecap="round">
        <path d="M9 26 L17 18 L23 24 L31 14" fill="none" opacity="0.95" />
      </g>
      <g fill="white">
        <circle cx="9" cy="26" r="2.4" opacity="0.65" />
        <circle cx="17" cy="18" r="2.4" opacity="0.78" />
        <circle cx="23" cy="24" r="2.4" opacity="0.9" />
        <circle cx="31" cy="14" r="3" />
      </g>
      <defs>
        <linearGradient id="ceedGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a82948" />
          <stop offset="1" stopColor="#64192c" />
        </linearGradient>
      </defs>
    </svg>
  );
}
