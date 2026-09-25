import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './App.css'
import Identity from './components/Identity.jsx'
import StatusLine from './components/StatusLine.jsx'
import Highlights from './components/Highlights.jsx'
import Nav from './components/Nav.jsx'
import WorkTab from './components/WorkTab.jsx'
import VenturesTab from './components/VenturesTab.jsx'
import ShowcaseTab from './components/ShowcaseTab.jsx'
import ResearchTab from './components/ResearchTab.jsx'
import ContactTab from './components/ContactTab.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('work')
  const tabComponents = {
    work: WorkTab,
    ventures: VenturesTab,
    showcase: ShowcaseTab,
    research: ResearchTab,
    contact: ContactTab,
  }

  const ActiveTabComponent = tabComponents[activeTab]
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-6">
      <Identity text="Full-stack developer and builder — Python/Django, .NET, and React — building the ventures I'm growing alongside them." />
      <StatusLine
        status="Open to contract work, part-time work, and collaborations."
        permanent="Always open to research involvement and venture collaboration, however small."
      />
      <Highlights
        stats={[
          { label: 'Years experience', value: '3+' },
          { label: 'Research projects', value: '2' },
          { label: 'Open-source project', value: '1' },
          { label: 'Ventures building', value: '2' },
        ]}
      />
      <a href="/CV_of_Ashiquzzaman_Fahim.pdf" download className="inline-block text-accent underline hover:opacity-80 transition-opacity">
        Download CV ↓
      </a>
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <ActiveTabComponent onNavigateToContact={() => setActiveTab('contact')} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
