import { motion } from 'motion/react'

const experience = [
  {
    role: 'Software Engineer',
    company: 'Paronsoft Solutions Ltd',
    period: 'Mar 2024 – Mar 2026',
    type: 'Full-time',
    impactBadge: '1000+ Client Companies',
    tech: ['ASP.NET', 'C#', 'SQL Server', 'jQuery', 'AJAX'],
    bullets: [
      'Built a custom template generation system with drag-and-drop form controls for a B2B platform used by 1000+ client companies.',
      'Implemented QR-code-based PDF sharing for document distribution across the same client base.',
      'Added pagination to high-traffic modules to prevent performance degradation on production datasets.',
      'Wrote SQL stored procedures for data manipulation and reporting.',
    ],
  },
  {
    role: 'Junior Programmer',
    company: 'Genuine Technology & Research Ltd',
    period: 'Jul 2023 – Feb 2024',
    type: 'Full-time',
    impactBadge: 'NYSE Fintech Pipeline',
    tech: ['ASP.NET Core', 'Hangfire', 'Docker', 'Python', 'Flask', 'Financial APIs'],
    bullets: [
      'Built 30+ ASP.NET APIs to ingest fundamental company data from third-party vendors, powering a fintech platform covering 800+ tickers.',
      'Introduced Hangfire background job scheduling to automate daily vendor data imports, eliminating manual data entry.',
      'Wrote SQL stored procedures that transform and calculate trading data for real-time screener tables.',
      'Built a Dockerized Python scraper for daily Fear & Greed Index data, integrated with Hangfire.',
      'Developed Python/Flask report visualization tools for internal analytics.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Genuine Technology & Research Ltd',
    period: 'Apr 2023 – Jun 2023',
    type: 'Internship',
    impactBadge: 'Process Automation',
    tech: ['Python', 'ASP.NET', 'SQL'],
    bullets: [
      'Automated 4 repetitive manual workflows with Python scripts, reducing manual effort.',
      'Practiced SQL queries and stored procedures, and learned ASP.NET for backend development.',
    ],
  },
]

function WorkTab() {
  return (
    <div className="space-y-10">
      {/* Experience Section */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-2 mb-6 pb-3 border-b border-hairline">
          <div>
            <h2 className="text-2xl font-bold text-ink-text font-heading flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
              Engineering Experience
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-1">
              Proven track record across enterprise B2B platforms, fintech data pipelines, and web applications.
            </p>
          </div>
          <span className="text-xs font-mono text-accent">3+ Years Building Production Systems</span>
        </div>

        <div className="space-y-6">
          {experience.map((job, idx) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="rounded-xl border border-hairline/80 bg-surface/40 hover:bg-surface/70 transition-all duration-300 p-5 sm:p-6 shadow-sm hover:border-hairline-bright"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-hairline/50">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-ink-text font-heading">{job.role}</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-surface border border-hairline text-muted font-mono">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-0.5">
                    {job.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent/10 border border-accent/20 text-accent font-semibold">
                    {job.impactBadge}
                  </span>
                  <span className="text-xs font-mono text-muted bg-ink/60 px-2 py-1 rounded border border-hairline/50">
                    {job.period}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs sm:text-sm text-ink-text/85 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-accent mt-1 text-xs shrink-0 font-mono">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="mt-4 pt-3 border-t border-hairline/40 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-muted mr-1">STACK:</span>
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-ink/50 border border-hairline/70 text-ink-text/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default WorkTab
