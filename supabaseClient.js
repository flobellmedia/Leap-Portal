/**
 * ProgressRing — the portal's signature visual element.
 * A threshold arc rather than a generic progress bar: it reads as a
 * horizon being crossed, with a marker at the point already reached.
 */
export default function ProgressRing({ percent = 0, label, size = 160 }) {
  const stroke = 8
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const clamped = Math.min(100, Math.max(0, percent))
  const offset = circumference - (clamped / 100) * circumference

  const angle = (clamped / 100) * 360 - 90
  const markerX = size / 2 + radius * Math.cos((angle * Math.PI) / 180)
  const markerY = size / 2 + radius * Math.sin((angle * Math.PI) / 180)

  return (
    <div className="progress-ring">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e4d5d0"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--crimson)"
          strokeWidth={stroke}
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {clamped > 0 && (
          <circle cx={markerX} cy={markerY} r={stroke / 1.8} fill="var(--blush)" />
        )}
        <text x="50%" y="46%" textAnchor="middle" className="ring-number">
          {Math.round(clamped)}%
        </text>
        <text x="50%" y="63%" textAnchor="middle" className="ring-label">
          {label}
        </text>
      </svg>
      <style>{`
        .ring-number {
          font-family: var(--font-display);
          font-size: 1.4rem;
          fill: var(--ink);
          font-weight: 400;
        }
        .ring-label {
          font-family: var(--font-sans);
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          fill: var(--muted);
        }
      `}</style>
    </div>
  )
}
