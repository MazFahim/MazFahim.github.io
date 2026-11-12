import { useState } from 'react'
import { MailIcon, WhatsAppIcon, LinkedInIcon, GithubIcon, CheckIcon, SparklesIcon } from './Icons.jsx'

const PROJECT_TYPES = [
  'Full-Stack Web Application',
  'Backend & APIs (.NET / Python)',
  'Automation / Scraping Pipeline',
  'Applied AI / NLP Integration',
  'Venture Co-Founding / Equity',
]

function ContactTab() {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0])
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mazfahim0@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-3 border-b border-hairline flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-ink-text font-heading flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
            Let's Build Something Together
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1">
            Open to contract work, projects, and collaborations.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Response time: &lt; 12 hours</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 rounded-xl border border-hairline/80 bg-surface/40 p-6 sm:p-7 shadow-xl">
          <h3 className="text-base font-bold text-ink-text font-heading mb-1 flex items-center gap-2">
            <SparklesIcon className="w-4 h-4 text-accent" /> Send Direct Inquiry
          </h3>
          <p className="text-xs text-muted mb-5">
            Tell me about your project and I’ll get back to you.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="06b7ad4e-135d-4693-9de2-854cf5f9252b" />
            <input type="hidden" name="project_type" value={selectedType} />

            {/* Scope Chips */}
            

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-mono text-muted mb-1">YOUR NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  required
                  className="w-full bg-ink/70 border border-hairline rounded-lg px-3 py-2 text-sm text-ink-text placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-muted mb-1">YOUR EMAIL</label>
                <input
                  type="email"
                  name="email"
                  placeholder="alex@company.com"
                  required
                  className="w-full bg-ink/70 border border-hairline rounded-lg px-3 py-2 text-sm text-ink-text placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-muted mb-1">PROJECT DETAILS / GOALS</label>
              <textarea
                name="message"
                placeholder={`What are you working on, and how can I help?`}
                required
                rows={4}
                className="w-full bg-ink/70 border border-hairline rounded-lg px-3 py-2 text-sm text-ink-text placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-ink font-bold text-sm transition-all duration-200 cursor-pointer shadow-lg hover:shadow-accent/25"
            >
              Send Project Inquiry →
            </button>
          </form>
        </div>

        {/* Right: Direct Reach Channels & Credibility */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div className="rounded-xl border border-hairline/80 bg-surface/40 p-6 space-y-4">
            <h3 className="text-base font-bold text-ink-text font-heading">Direct Channels</h3>
            
            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/8801521400144?text=Hi%20Fahim,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg bg-ink/60 border border-emerald-500/30 hover:border-emerald-500 text-ink-text transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-emerald-400 font-semibold">WHATSAPP INSTANT</p>
                  <p className="text-sm font-medium">+880 1521 400144</p>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                Chat Now →
              </span>
            </a>

            {/* Email Copy */}
            <div className="flex items-center justify-between p-3.5 rounded-lg bg-ink/60 border border-hairline hover:border-accent/50 text-ink-text transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-accent/10 text-accent">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted">PRIMARY EMAIL</p>
                  <p className="text-xs sm:text-sm font-mono font-medium">mazfahim0@gmail.com</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1 text-xs font-mono rounded bg-surface border border-hairline hover:border-accent text-accent font-medium transition-colors cursor-pointer"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ashiquzzaman-fahim-a401351a3"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg bg-ink/60 border border-hairline hover:border-accent/50 text-ink-text transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-blue-500/10 text-blue-400">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted">LINKEDIN</p>
                  <p className="text-sm font-medium">Ashiquzzaman Fahim</p>
                </div>
              </div>
              <span className="text-xs font-mono text-muted group-hover:text-accent group-hover:translate-x-1 transition-transform">
                Connect →
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mazfahim"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg bg-ink/60 border border-hairline hover:border-accent/50 text-ink-text transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-surface text-ink-text">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted">GITHUB</p>
                  <p className="text-sm font-medium">@mazfahim</p>
                </div>
              </div>
              <span className="text-xs font-mono text-muted group-hover:text-accent group-hover:translate-x-1 transition-transform">
                Repositories →
              </span>
            </a>
          </div>

          {/* Value Proposition Box */}
          <div className="rounded-xl border border-hairline/80 bg-gradient-to-br from-surface/40 to-ink/60 p-5 text-xs text-muted space-y-2 font-mono">
            <div className="flex items-center gap-2 text-ink-text font-bold">
              <CheckIcon className="w-4 h-4 text-accent" />
              <span>ENGAGEMENT GUARANTEES</span>
            </div>
            <p>✓ Clean, modular code</p>
            <p>✓ Clear, regular communication</p>
            <p>✓ Flexible timezone overlap with US, EU, and APAC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactTab
