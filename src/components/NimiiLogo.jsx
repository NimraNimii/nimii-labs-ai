export default function NimiiLogo({ size = 56 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <defs>
        <linearGradient id="nimiiGradient" x1="0" y1="0" x2="100" y2="100">

        <stop offset="0%" stopColor="#7C3AED" />
<stop offset="100%" stopColor="#5B21B6" />

        </linearGradient>
      </defs>

      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        rx="24"
        fill="url(#nimiiGradient)"
      />

      {/* Nimii N + Growth Arrow */}
      <path
        d="
        M25 72
        L40 35
        L57 72
        "
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="
        M57 72
        L75 35
        "
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <path
        d="
        M67 35
        L75 35
        L75 43
        "
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Green Status Dot */}
      <circle
        cx="78"
        cy="22"
        r="6"
        fill="#22E55E"
      />
    </svg>
  );
}