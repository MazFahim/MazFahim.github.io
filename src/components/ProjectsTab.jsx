import { motion } from 'motion/react'
import NlpPlayground from './NlpPlayground.jsx'
import { GithubIcon, ExternalLinkIcon, SparklesIcon, CodeIcon } from './Icons.jsx'

const projects = [
  {
    name: 'Trynbit POS',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    category: 'Commercial Product',
    tech: ['Angular.js', 'ASP.NET Core', 'PostgreSQL', 'Tailwind CSS'],
    description:
      'A point-of-sale system for small businesses to manage sales, inventory, and expenses, with multi-user roles and sales reports.',
    metrics: 'Active venture with co-founding partners',
  },
  {
    name: 'Inquestvet',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    category: 'E-commerce & Knowledge Hub',
    tech: ['Django', 'PostgreSQL'],
    description:
      'Digital storefront and veterinary portal serving pet parents and animal healthcare clinics. Built and operated end-to-end with specialized logistics and clinic relationship integrations.',
    metrics: 'Built and operated by me',
  },
  {
    name: 'Certificate Generator',
    status: 'Live',
    statusColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    category: 'Automation Utility',
    tech: ['Python', 'HTML', 'Bootstrap', 'JavaScript'],
    description:
      'Generates personalized training certificates. Organizers enter a topic and date to create a time-limited link, and participants enter their name to download their certificate.',
    metrics: 'Used in live training sessions',
  },
]

const repoDetails = {
  name: 'pet-health-nlp',
  repoUrl: 'https://github.com/mazfahim/pet-health-nlp',
  tagline: 'Open-source NLP for classifying pet health text',
  highlights: [
    { label: 'Validation Accuracy', value: '~86%' },
    { label: 'Evaluation Dataset', value: '2,000+ rows' },
    { label: 'Species Coverage', value: '7 species' },
    { label: 'Target Venue', value: '5 condition categories' },
  ],
  features: [
    'Classifies short pet health text, from owner notes or vet clinical notes, into 5 condition categories.',
    'Extracts symptom keywords from the text.',
    'Works across 7 species, including cats, dogs, and rabbits.',
  ],
}

function ProjectsTab() {
  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-3 pb-3 border-b border-hairline">
        <div>
          <h2 className="text-2xl font-bold text-ink-text font-heading flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
            Featured Projects
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1">
            Products and tools I’ve built for real businesses and users.
          </p>
        </div>
        <span className="text-xs font-mono text-accent">Commercial &amp; Open Source</span>
      </div>

      {/* Featured Projects Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="rounded-xl border border-hairline/80 bg-surface/40 hover:bg-surface/80 p-5 flex flex-col justify-between transition-all duration-300 hover:border-accent/40 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${proj.statusColor}`}>
                    {proj.status}
                  </span>
                  <span className="text-[10px] font-mono text-muted">{proj.category}</span>
                </div>

                <h3 className="text-base font-bold text-ink-text font-heading mt-1">{proj.name}</h3>
                <p className="text-xs text-muted/90 mt-2 font-sans leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-hairline/50">
                <div className="flex flex-wrap gap-1 mb-2.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-ink/70 border border-hairline/70 text-ink-text/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] font-mono text-accent/90 flex items-center gap-1">
                  <span>★</span> {proj.metrics}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive NLP Simulator Playground */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-mono text-accent uppercase tracking-wider font-semibold flex items-center gap-2">
            <SparklesIcon className="w-4 h-4 text-accent" />
            Live Interactive Demo: Test the Model
          </h3>
          <span className="text-xs text-muted font-mono hidden sm:inline">Try selecting presets below ↓</span>
        </div>
        <NlpPlayground />
      </section>

      {/* GitHub Project Deep Dive Card */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="rounded-xl border border-hairline/80 bg-surface/40 p-6 sm:p-7 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-hairline/60">
          <div>
            <div className="flex items-center gap-2.5">
              <CodeIcon className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold text-ink-text font-heading">
                mazfahim / <span className="text-accent">pet-health-nlp</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted mt-1">{repoDetails.tagline}</p>
          </div>

          <a
            href={repoDetails.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-hairline hover:border-accent text-ink-text text-xs sm:text-sm font-semibold transition-all group"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View on GitHub</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
          {repoDetails.highlights.map((h) => (
            <div key={h.label} className="p-3 rounded-lg bg-ink/60 border border-hairline/70">
              <span className="text-xs text-muted font-mono block">{h.label}</span>
              <span className="text-base sm:text-lg font-bold font-mono text-accent mt-0.5 block">
                {h.value}
              </span>
            </div>
          ))}
        </div>

        {/* Core Features */}
        <div className="space-y-2 mt-4 pt-4 border-t border-hairline/40">
          <p className="text-xs font-mono text-muted mb-2">TECHNICAL ARCHITECTURE:</p>
          {repoDetails.features.map((f, i) => (
            <div key={i} className="text-xs sm:text-sm text-ink-text/85 flex items-start gap-2">
              <span className="text-accent text-xs font-mono shrink-0">▹</span>
              <span>{f}</span>
            </div>
          ))}
        </div>

        {/* Open for PRs */}
        <div className="mt-6 pt-4 border-t border-hairline/50 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <p>
            Open source · Issues and contributions welcome.
          </p>
          <a
            href="https://github.com/mazfahim/pet-health-nlp/issues"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline hover:opacity-80 font-mono"
          >
            Open an Issue or PR →
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectsTab