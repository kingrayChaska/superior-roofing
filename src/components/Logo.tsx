interface LogoProps {
  variant?: 'full' | 'icon' | 'mono'
  className?: string
}

/**
 * Temporary competition logo mark.
 * A geometric roofline that resolves into a hidden "S" at its ridge,
 * paired with a serif wordmark. Built as SVG so it scales cleanly
 * from favicon to navbar to print, and can be swapped for a
 * professionally produced asset later without touching layout code.
 */
export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  const mark = (
    <svg
      viewBox="0 0 48 48"
      className="h-9 w-9 shrink-0"
      aria-hidden="true"
      fill="none"
    >
      {/* roofline forming a stylized S at the ridge */}
      <path
        d="M6 34 C6 34 14 34 14 26 C14 18 24 18 24 24 C24 30 34 30 34 22 C34 14 42 14 42 14"
        stroke={variant === 'mono' ? 'currentColor' : '#6C1B25'}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20 L24 6 L44 20"
        stroke={variant === 'mono' ? 'currentColor' : '#F6F1E9'}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  if (variant === 'icon') return <div className={className}>{mark}</div>

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {mark}
      <div className="leading-none">
        <div
          className={`font-serif text-lg tracking-wide ${
            variant === 'mono' ? 'text-current' : 'text-cream-50'
          }`}
        >
          SUPERIOR
        </div>
        <div
          className={`mt-0.5 text-[9px] tracking-[0.18em] uppercase ${
            variant === 'mono' ? 'text-current opacity-70' : 'text-cream-100/70'
          }`}
        >
          Roofing Company of Georgia
        </div>
      </div>
    </div>
  )
}
