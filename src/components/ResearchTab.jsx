import { motion } from 'motion/react'

const research = [
  {
    title: 'Bangla Word Sense Disambiguation (WSD)',
    status: 'B.Sc. Thesis',
    statusColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    venue: '2022',
    metrics: 'Novel Annotated Bangla Dataset',
    models: ['SVM', 'Logistic Regression', 'Decision Trees', 'Feature Engineering'],
    description:
      'Built an annotated Bangla dataset from scratch and tuned classifiers to disambiguate words with multiple meanings.',
  },
]

const teaching = [
  {
    course: 'Python for Bioinformatics Beginners',
    period: 'Mar 2026',
    role: 'Instructor',
    organization: 'Inquest',
    topics: ['Python Data Structures', 'Biopython', 'Sequence Parsing', 'NumPy & Pandas basics'],
  },
  {
    course: 'Linux Commands & Shell Scripting',
    period: 'Feb 2026',
    role: 'Instructor',
    organization: 'Inquest',
    topics: ['Bash Scripting', 'Process Management', 'Pipes & Redirections', 'Server Automation'],
  },
]

function ResearchTab({ onNavigateToContact }) {
  return (
    <div className="space-y-10">
      {/* Research Section */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-3 pb-3 border-b border-hairline">
          <div>
            <h2 className="text-2xl font-bold text-ink-text font-heading flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
              Research
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-1">
              Exploring real-world problems through data science.
            </p>
          </div>
          <span className="text-xs font-mono text-accent">Applied Data Science</span>
        </div>

        <div className="space-y-6 mt-6">
          {research.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="rounded-xl border border-hairline/80 bg-surface/40 p-5 sm:p-6 shadow-sm hover:border-hairline-bright transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-hairline/50">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${item.statusColor}`}>
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-muted">{item.venue}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink-text font-heading mt-1.5">{item.title}</h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent/10 border border-accent/20 text-accent font-semibold self-start sm:self-center shrink-0">
                  {item.metrics}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-ink-text/85 mt-3 leading-relaxed font-sans">
                {item.description}
              </p>

              <div className="mt-4 pt-3 border-t border-hairline/40 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-muted mr-1">METHODS:</span>
                {item.models.map((m) => (
                  <span
                    key={m}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-ink/60 border border-hairline/70 text-ink-text/80"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teaching Section */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-3 pb-3 border-b border-hairline">
          <div>
            <h2 className="text-2xl font-bold text-ink-text font-heading flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
              Mentorship
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-1">
              Teaching technical skills to researchers and professionals.
            </p>
          </div>
          <span className="text-xs font-mono text-muted">Instructor</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {teaching.map((item, idx) => (
            <motion.div
              key={item.course}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="rounded-xl border border-hairline/80 bg-surface/40 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-accent font-medium">{item.role} · {item.organization}</span>
                <span className="text-xs font-mono text-muted">{item.period}</span>
              </div>
              <h3 className="text-base font-bold text-ink-text font-heading">{item.course}</h3>

              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-hairline/40">
                {item.topics.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-ink/70 border border-hairline text-ink-text/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research collaboration callout */}
      <div className="rounded-xl border border-hairline/80 bg-surface/30 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-ink-text font-heading">
            Interested in collaborating on research?
          </h4>
          <p className="text-xs sm:text-sm text-muted mt-0.5">
            Open to research collaborations and data science projects.
          </p>
        </div>
        <button
          onClick={onNavigateToContact}
          className="text-xs sm:text-sm font-semibold text-accent hover:underline shrink-0 font-mono"
        >
          Get in Touch →
        </button>
      </div>
    </div>
  )
}

export default ResearchTab
