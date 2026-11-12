import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { TerminalIcon } from './Icons.jsx'

export default function QuickTerminal({ onNavigateToTab }) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState([
    {
      type: 'output',
      content:
        'Antigravity Terminal v1.2.0 [Fahim OS]\nType "help" to see available commands or click the quick pills below.',
    },
  ])
  const inputRef = useRef(null)
  const endRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150)
      endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isOpen, history])

  const runCommand = (cmdText) => {
    const raw = cmdText.trim()
    const clean = raw.toLowerCase()
    const newEntry = { type: 'input', content: `$ ${raw}` }

    let output = ''

    switch (clean) {
      case 'help':
        output = `Available Commands:
  • skills       - Technical stack breakdown & proficiency
  • experience   - Paronsoft & Genuine Tech production highlights
  • ventures     - Inquestvet & Trynbit POS details
  • nlp          - pet-health-nlp architecture & benchmark
  • cv           - Download official curriculum vitae
  • contact      - Open contact & hire inquiry tab
  • clear        - Clear the terminal screen
  • whoami       - Visitor session telemetry`
        break

      case 'skills':
        output = `CORE COMPETENCIES:
  [Backend]  Python (Django, Flask, Celery), C# (.NET Core, ASP.NET Core)
  [Frontend] React 19, Vite, Tailwind CSS, Motion/Framer
  [Database] PostgreSQL, SQL Server, Stored Procedures, Redis
  [DevOps]   Docker, Hangfire, GitHub Actions, Linux/Bash
  [AI / ML]  Veterinary NLP, BERT/PetBERT, Scikit-Learn, Text Extraction`
        break

      case 'experience':
        output = `PRODUCTION IMPACT:
  1. Paronsoft Solutions (Mar 2024 - Mar 2026)
     - Custom B2B template system for 800+ companies
     - QR-code cryptographic PDF delivery subsystem
     - Production SQL pagination under high concurrency
  2. Genuine Technology (Jul 2023 - Feb 2024)
     - 30+ ASP.NET APIs ingesting NYSE market data
     - Hangfire daily automated ETL jobs
     - Dockerized Python Fear & Greed scraper`
        break

      case 'ventures':
        output = `ACTIVE VENTURES:
  • Inquestvet (Co-Founder): Veterinary healthcare commerce & clinic ecosystem
  • Trynbit (Co-Founder): Small business POS & multi-tenant inventory SaaS`
        break

      case 'nlp':
        output = `pet-health-nlp:
  - Multi-species clinical symptom parser (Cats, Dogs, Rabbits)
  - ~86% validated accuracy on 2,000+ benchmark clinical records
  - Active submission toward Journal of Open Source Software (JOSS)`
        break

      case 'cv':
        output = 'Initiating CV download (/CV_of_Ashiquzzaman_Fahim.pdf)...'
        window.open('/CV_of_Ashiquzzaman_Fahim.pdf', '_blank')
        break

      case 'contact':
      case 'hire':
        output = 'Navigating to Contact & Hire inquiry form...'
        onNavigateToTab('contact')
        setIsOpen(false)
        break

      case 'whoami':
        output = 'guest@fahim-portfolio: ~ (Client / Recruiter looking for high-caliber developer)'
        break

      case 'clear':
        setHistory([])
        setInputVal('')
        return

      default:
        output = `Command not recognized: "${raw}". Type "help" for a list of commands.`
    }

    setHistory((prev) => [...prev, newEntry, { type: 'output', content: output }])
    setInputVal('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputVal.trim()) return
    runCommand(inputVal)
  }

  return (
    <>
      {/* Floating Trigger Pill */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group px-3.5 py-2 rounded-xl bg-ink/90 border border-hairline hover:border-accent shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs font-mono text-ink-text transition-all duration-200 cursor-pointer hover:shadow-accent/20"
        >
          <span className="p-1 rounded bg-accent/15 text-accent">
            <TerminalIcon className="w-3.5 h-3.5" />
          </span>
          <span className="hidden sm:inline font-semibold">Terminal</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-surface border border-hairline text-muted font-mono">
            {isOpen ? 'ESC' : 'CLI'}
          </span>
        </button>
      </div>

      {/* Terminal Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-16 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[480px] h-[380px] rounded-2xl border border-hairline-bright bg-ink/95 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden font-mono"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-surface/80 border-b border-hairline flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-muted ml-2 font-semibold">fahim@dev-box:~</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-muted hover:text-ink-text transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs leading-relaxed text-ink-text/90">
              {history.map((item, idx) => (
                <div key={idx}>
                  {item.type === 'input' ? (
                    <div className="text-accent font-semibold">{item.content}</div>
                  ) : (
                    <pre className="whitespace-pre-wrap font-mono text-muted/95 text-[11px] leading-relaxed">
                      {item.content}
                    </pre>
                  )}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Quick action buttons */}
            <div className="px-3 py-1.5 bg-surface/40 border-t border-hairline/60 flex items-center gap-1.5 overflow-x-auto text-[10px]">
              <span className="text-muted shrink-0">Try:</span>
              {['skills', 'experience', 'ventures', 'nlp', 'contact', 'clear'].map((c) => (
                <button
                  key={c}
                  onClick={() => runCommand(c)}
                  className="px-2 py-0.5 rounded bg-surface border border-hairline text-accent hover:border-accent shrink-0 transition-colors cursor-pointer"
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Prompt input */}
            <form onSubmit={handleSubmit} className="px-4 py-2.5 bg-ink border-t border-hairline flex items-center gap-2">
              <span className="text-accent font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. skills, contact)..."
                className="flex-1 bg-transparent text-xs text-ink-text placeholder:text-muted/40 focus:outline-none font-mono"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
