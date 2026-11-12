import { motion } from 'motion/react'
import { GithubIcon, LinkedInIcon, WhatsAppIcon, DownloadIcon, SparklesIcon } from './Icons.jsx'

function Identity({ text, onNavigateToContact }) {
  const stack = ['Python · Django', '.NET Core · C#', 'React', 'Applied Data Science', 'FinTech']

  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border border-hairline/80 bg-surface/40 backdrop-blur-md p-6 sm:p-8 shadow-2xl overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
        {/* Profile Image with Cybernetic Frame */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-accent/50 to-emerald-500/30 rounded-xl blur-xs group-hover:blur-sm transition-all duration-300" />
          <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden border border-hairline bg-surface">
            <img
              src="/profile.JPG"
              alt="Ashiquzzaman Fahim"
              className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[105%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Status badge pinned to photo */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-ink/90 border border-emerald-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-[10px] font-mono text-emerald-300 font-medium">OPEN TO PROJECTS</span>
          </div>
        </div>

        {/* Info & Bio */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-medium flex items-center gap-1">
              <SparklesIcon className="w-3 h-3" /> Full-Stack Engineer & Builder
            </span>
            <span className="text-xs font-mono text-muted">Chattogram, Bangladesh</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-text font-heading">
            Ashiquzzaman <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-200 to-accent">Fahim</span>
          </h1>

          <p className="text-xs sm:text-sm text-muted mt-1.5 font-sans leading-relaxed">
            B.Sc. in CSE, CIU · Postgraduate Diploma in Business IT, BUET (ongoing)
          </p>

          <p className="text-base sm:text-lg text-ink-text/90 mt-3 font-sans leading-relaxed font-normal">
            {text}
          </p>

          {/* Core Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 mt-4">
            {stack.map((item) => (
              <span
                key={item}
                className="text-xs font-mono px-2.5 py-1 rounded bg-ink/70 border border-hairline text-ink-text/80 shadow-xs"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6 pt-5 border-t border-hairline/60">
            <button
              onClick={onNavigateToContact}
              className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-ink font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-200 shadow-md hover:shadow-accent/20 cursor-pointer"
            >
              <span>Start Project</span>
              <span className="text-xs">↓</span>
            </button>

            <a
              href="/CV_of_Ashiquzzaman_Fahim.pdf"
              download
              className="px-3.5 py-2 rounded-lg border border-hairline bg-surface/80 hover:bg-surface hover:border-muted/50 text-ink-text text-xs sm:text-sm font-medium flex items-center gap-2 transition-all duration-200"
            >
              <DownloadIcon className="w-3.5 h-3.5 text-accent" />
              Download CV
            </a>

            <div className="flex items-center gap-1.5 ml-0 sm:ml-2">
              <a
                href="https://github.com/mazfahim"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg border border-hairline bg-surface/60 hover:bg-surface hover:text-accent hover:border-accent/40 text-muted transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/ashiquzzaman-fahim-a401351a3"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg border border-hairline bg-surface/60 hover:bg-surface hover:text-accent hover:border-accent/40 text-muted transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801521400144"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg border border-hairline bg-surface/60 hover:bg-surface hover:text-emerald-400 hover:border-emerald-500/40 text-muted transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Identity
