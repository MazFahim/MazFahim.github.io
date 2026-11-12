import { motion } from 'motion/react'

function Nav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'work', shortLabel: 'Work', label: 'Experience & Work', count: '3' },
    { id: 'ventures', shortLabel: 'Ventures', label: 'Ventures', count: '2' },
    { id: 'projects', shortLabel: 'Projects', label: 'Projects', count: '3' },
    { id: 'research', shortLabel: 'Research', label: 'Research & Teaching', count: '2' },
    { id: 'contact', shortLabel: 'Contact', label: 'Contact & Hire' },
  ]

  return (
    <nav className="sticky top-4 z-30 w-full rounded-2xl border border-hairline/80 bg-ink/80 backdrop-blur-xl p-1.5 sm:p-2 shadow-xl">
      <div className="w-full grid grid-cols-5 gap-1.5 sm:gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative w-full py-2.5 px-1 sm:px-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-center text-center ${
                isActive
                  ? 'text-ink font-semibold'
                  : 'text-muted hover:text-ink-text hover:bg-surface/50'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-accent rounded-xl shadow-md"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-1.5 text-center leading-tight">
                <span className="sm:hidden truncate">{tab.shortLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                {tab.highlight && !isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                )}
                {tab.count && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full shrink-0 ${
                      isActive ? 'bg-ink/20 text-ink' : 'bg-surface text-muted'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav
