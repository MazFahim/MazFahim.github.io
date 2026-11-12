import { motion } from 'motion/react'

function Highlights({ stats }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="group relative rounded-xl border border-hairline/80 bg-surface/40 hover:bg-surface/80 p-4 transition-all duration-300 hover:border-accent/40 shadow-sm"
          >
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200 group-hover:scale-105 transition-transform duration-200 inline-block">
                {stat.value}
              </span>
              <span className="text-[10px] font-mono text-muted/60">0{idx + 1}</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-ink-text/80 tracking-wide font-sans">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-hairline/60 bg-gradient-to-r from-surface/60 via-surface/40 to-surface/60 p-4 flex items-center gap-2.5 text-xs sm:text-sm text-ink-text/80">
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <span>
          Active ventures: founder at <strong className="text-ink-text font-semibold">Inquestvet</strong> &amp; co-founder at <strong className="text-ink-text font-semibold">Trynbit</strong> — coupled with active applied AI research.
        </span>
      </div>
    </motion.div>
  )
}

export default Highlights
