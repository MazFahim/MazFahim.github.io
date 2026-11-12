export default function StatusLine({ status, permanent }) {
  const now = new Date()
  const quarter = `Q${Math.floor(now.getMonth() / 3) + 1} ${now.getFullYear()}`

  return (
    <div className="rounded-xl border border-hairline/70 bg-surface/30 backdrop-blur-sm p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <div className="flex items-start gap-3">
        <div className="mt-1 w-2.5 h-2.5 rounded-full bg-accent animate-ping opacity-75 shrink-0" />
        <div>
          <p className="text-sm sm:text-base font-medium text-ink-text leading-snug">
            {status}
          </p>
          <p className="text-xs text-muted mt-0.5 leading-relaxed">
            {permanent}
          </p>
        </div>
      </div>
      <div className="shrink-0 self-end sm:self-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent/10 border border-accent/25 text-accent font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {quarter} Bandwidth Open
        </span>
      </div>
    </div>
  )
}
