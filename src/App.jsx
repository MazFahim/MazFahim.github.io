import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './App.css'
import Identity from './components/Identity.jsx'
import StatusLine from './components/StatusLine.jsx'
import Highlights from './components/Highlights.jsx'
import Nav from './components/Nav.jsx'
import WorkTab from './components/WorkTab.jsx'
import VenturesTab from './components/VenturesTab.jsx'
import ProjectsTab from './components/ProjectsTab.jsx'
import ResearchTab from './components/ResearchTab.jsx'
import ContactTab from './components/ContactTab.jsx'
import QuickTerminal from './components/QuickTerminal.jsx'
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from './components/Icons.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('work')
  const tabComponents = {
    work: WorkTab,
    ventures: VenturesTab,
    projects: ProjectsTab,
    showcase: ProjectsTab,
    research: ResearchTab,
    contact: ContactTab,
  }

  const navigateToContact = () => {
    setActiveTab('contact')
    setTimeout(() => {
      const el = document.getElementById('tab-content')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        const input = el.querySelector('input[name="name"]')
        input?.focus({ preventScroll: true })
      }
    }, 80)
  }

  const ActiveTabComponent = tabComponents[activeTab]

  return (
    <div className="min-h-screen text-ink-text selection:bg-accent/30 selection:text-white">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-14 space-y-6 sm:space-y-8">
        {/* Hero Identity */}
        <Identity
          text="I turn business problems into working software: web apps, APIs, automation, and data-driven tools across fintech, bioinformatics, and AI, built end to end."
          onNavigateToContact={navigateToContact}
        />

        {/* Operational Status */}
        <StatusLine
          status="Actively open for contract engineering, high-impact freelance projects, and venture collaborations."
          permanent="Flexible overlap with US & European timezones · Fast turnaround on MVPs and Business APIs."
        />

        {/* Bento Highlights */}
        <Highlights
          stats={[
            { label: 'Years Experience', value: '3+' },
            { label: 'Clients Served', value: '7' },
            { label: 'Research Projects', value: '3' },
            { label: 'Active Ventures', value: '2' },
          ]}
        />

        {/* Tab Navigation */}
        <div id="nav-tabs">
          <Nav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Dynamic Tab Body */}
        <div id="tab-content" className="pt-2 scroll-mt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <ActiveTabComponent onNavigateToContact={navigateToContact} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sleek Developer Footer */}
        <footer className="pt-12 pb-6 border-t border-hairline/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Ashiquzzaman Fahim</span>
            <span>·</span>
            <span className="text-accent/90">Built with React 19 &amp; Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mazfahim"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/ashiquzzaman-fahim-a401351a3"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://wa.me/8801521400144"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </footer>
      </main>

      {/* Interactive Developer Terminal */}
      <QuickTerminal onNavigateToTab={setActiveTab} />
    </div>
  )
}

export default App
