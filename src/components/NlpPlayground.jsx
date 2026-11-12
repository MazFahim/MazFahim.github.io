import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// Illustrative examples of the tool's output format.
// The real tool returns only: { condition, keywords }.
const PRESETS = [
  {
    label: 'Cat · Ear',
    text: 'Persistent head shaking and scratching right ear, dark brown waxy discharge with mild odor.',
    category: 'Ear Infections',
    keywords: ['head shaking', 'scratching', 'right ear', 'brown waxy discharge', 'odor'],
  },
  {
    label: 'Dog · Mobility',
    text: 'Limping on the left hind leg after jumping off the couch, reluctant to climb stairs.',
    category: 'Mobility Problems',
    keywords: ['limping', 'left hind leg', 'reluctant to climb stairs'],
  },
  {
    label: 'Rabbit · Digestive',
    text: 'Complete anorexia for 16 hours, absent fecal pellets, hunched posture and painful tooth grinding.',
    category: 'Digestive Issues',
    keywords: ['anorexia', 'absent fecal pellets', 'hunched posture', 'tooth grinding'],
  },
]

export default function NlpPlayground() {
  const [selectedPreset, setSelectedPreset] = useState(0)
  const result = PRESETS[selectedPreset]

  return (
    <div className="rounded-xl border border-hairline/80 bg-surface/50 backdrop-blur-md p-5 sm:p-6 shadow-xl relative overflow-hidden">
      {/* Glow orb in corner */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-hairline">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(232,168,76,0.6)]" />
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
              Example Output
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-sans">
                Illustrative
              </span>
            </h4>
            <p className="text-xs text-muted">
              Based on <code className="text-ink-text font-mono">pet-health-nlp</code> · 86.4% on a synthetic 2,000-row dataset
            </p>
          </div>
        </div>
        <a
          href="https://github.com/mazfahim/pet-health-nlp"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-mono text-accent hover:text-accent/80 transition-colors flex items-center gap-1 group"
        >
          <span>View on GitHub</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </a>
      </div>

      {/* Presets */}
      <div className="mt-4">
        <p className="text-xs font-mono text-muted mb-2">SAMPLE NOTES:</p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset, idx) => (
            <button
              key={preset.label}
              onClick={() => setSelectedPreset(idx)}
              className={`text-xs px-3 py-1.5 rounded-md border font-medium transition-all duration-200 ${
                selectedPreset === idx
                  ? 'bg-accent/20 border-accent text-accent shadow-sm'
                  : 'bg-surface/80 border-hairline text-muted hover:text-ink-text hover:border-muted/50'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input (read-only) */}
      <div className="mt-4">
        <textarea
          value={result.text}
          readOnly
          rows={3}
          className="w-full bg-ink/70 border border-hairline rounded-lg p-3 text-sm text-ink-text focus:outline-none font-sans resize-none cursor-default"
        />
      </div>

      {/* Output */}
      <div className="mt-4 bg-ink/60 border border-hairline/60 rounded-lg p-4 font-mono">
        <div className="flex items-center gap-2 text-xs text-muted pb-3 border-b border-hairline/40">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>EXTRACTED CONDITION & KEYWORDS</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={result.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-3 space-y-3"
          >
            <div>
              <span className="text-xs text-muted block">CONDITION CATEGORY</span>
              <span className="text-base font-bold text-ink-text font-heading">{result.category}</span>
            </div>

            <div className="pt-2">
              <span className="text-xs text-muted block mb-1.5">SYMPTOM KEYWORDS:</span>
              <div className="flex flex-wrap gap-1.5">
                {result.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-2.5 py-0.5 rounded bg-surface border border-hairline text-ink-text/90"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-3 text-[11px] text-muted">
        Illustrative examples of the tool's output format. To run it on your own text, see the GitHub repo.
      </p>
    </div>
  )
}