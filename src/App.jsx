import { useState } from 'react'
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
    <>
      <Identity text="Full-stack developer and builder — Python/Django, .NET, and React — building the ventures I'm growing alongside them." />
      <StatusLine
        status="Open to contract work, part-time work, and collaborations."
        permanent="Always open to research involvement and venture collaboration, however small."
      />
      <Highlights
        stats={[
          { label: 'Years experience', value: '3+' },
          { label: 'Client companies', value: '800+' },
          { label: 'APIs built', value: '30+' },
          { label: 'Ventures building', value: '2' },
        ]}
      />
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <ActiveTabComponent onNavigateToContact={() => setActiveTab('contact')} />
    </>
  )
}

export default App
