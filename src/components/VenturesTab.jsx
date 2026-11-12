import { motion } from 'motion/react'
import { SparklesIcon } from './Icons.jsx'

const ventures = [
  {
    name: 'Inquestvet',
    tagline: 'Veterinary products & services',
    role: 'Founder & Lead Developer',
    status: 'Live & Operational',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    description:
      'Website and online store selling pet products to pet owners and clinical products to veterinary clinics.',
    responsibilities: [
      'Built and maintain the website and online store, including the product catalog and ordering.',
      'Oversee day-to-day operations across the business.',
      'Work with partners and clinics to expand into new veterinary services.',
    ],
    tech: ['Pet Products', 'Veterinary Products', 'Veterinary Knowledge Center'],
  },
  {
    name: 'Trynbit',
    tagline: 'Software & digital products',
    role: 'Co-Founder & Developer',
    status: 'Live & Operational',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    description:
      'An IT firm building digital products and custom software for businesses, from idea to launch.',
    responsibilities: [
      'Co-founded the firm.',
      'Design and build its products and client solutions end to end.',
      'Work directly with clients and partners to turn business needs into working software.',
    ],
    tech: ['Enterprise Products', 'Digitalization', 'SAAS'],
  },
]

function VenturesTab({ onNavigateToContact }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-3 pb-3 border-b border-hairline">
        <div>
          <h2 className="text-2xl font-bold text-ink-text font-heading flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
            Ventures & Products
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1">
            Businesses I am part of.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ventures.map((venture, idx) => (
          <motion.div
            key={venture.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.1 }}
            className="rounded-xl border border-hairline/80 bg-surface/40 hover:bg-surface/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-accent/40 shadow-sm relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${venture.statusColor}`}>
                  {venture.status}
                </span>
                <span className="text-xs font-mono text-accent font-semibold">{venture.role}</span>
              </div>

              <h3 className="text-xl font-bold text-ink-text font-heading">{venture.name}</h3>
              <p className="text-xs text-accent/90 font-mono mt-0.5">{venture.tagline}</p>

              <p className="text-xs sm:text-sm text-ink-text/80 mt-3 font-sans leading-relaxed">
                {venture.description}
              </p>

              <div className="mt-4 pt-4 border-t border-hairline/50">
                <p className="text-xs font-mono text-muted mb-2">MY ROLE & CONTRIBUTIONS:</p>
                <ul className="space-y-2">
                  {venture.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-xs text-ink-text/85 flex items-start gap-2">
                      <span className="text-accent text-xs font-mono shrink-0">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-hairline/50 flex flex-wrap items-center gap-1.5">
              {venture.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-ink/70 border border-hairline text-ink-text/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Collaboration Callout */}
      <div className="rounded-xl border border-accent/30 bg-gradient-to-r from-accent/10 via-surface/60 to-surface/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-ink-text font-heading flex items-center gap-2">
            <SparklesIcon className="w-4 h-4 text-accent" />
            Looking for a Technical Partner?
          </h4>
          <p className="text-xs sm:text-sm text-muted mt-1 max-w-xl">
            Whether you need software built, a partner for your venture, or help running and growing a business, let’s talk.
          </p>
        </div>
        <button
          onClick={onNavigateToContact}
          className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-ink font-semibold text-xs sm:text-sm shrink-0 transition-all cursor-pointer shadow-md"
        >
          Discuss Venture Collaboration →
        </button>
      </div>
    </div>
  )
}

export default VenturesTab
