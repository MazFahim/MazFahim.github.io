function Nav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'work', label: 'Work' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'showcase', label: 'Open Source & Shop' },
    { id: 'research', label: 'Research & Teaching' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="flex gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={
            activeTab === tab.id
              ? 'font-bold text-blue-400'
              : 'text-gray-400'
          }
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

export default Nav