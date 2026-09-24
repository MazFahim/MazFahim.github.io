function Nav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'work', label: 'Work' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'showcase', label: 'Open Source & Shop' },
    { id: 'research', label: 'Research & Teaching' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 bg-ink flex gap-6 border-b border-hairline py-3 z-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={
            activeTab === tab.id
              ? 'text-accent border-b-2 border-accent pb-1'
              : 'text-muted hover:text-ink-text pb-1 transition-colors'
          }
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

export default Nav