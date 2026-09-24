const ventures = [
  {
    name: 'Inquestvet',
    role: 'Co-Founder',
    description:
      'E-commerce and knowledge platform for pet and veterinary products, built and run by a small team. I contribute as a developer and help oversee day-to-day progress, alongside partners handling clinic relationships and client acquisition.',
  },
  {
    name: 'Trynbit',
    role: 'Co-Founder',
    description:
      'A point-of-sale system for small businesses — inventory and sales management tooling to streamline daily operations. I work as a developer on the team, alongside managing day-to-day operations.',
  },
]

function VenturesTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ventures</h2>
      {ventures.map((venture) => (
        <div key={venture.name} className="mb-6">
          <h3 className="text-lg font-semibold">
            {venture.name}{' '}
            <span className="text-sm text-gray-400">({venture.role})</span>
          </h3>
          <p>{venture.description}</p>
        </div>
      ))}
    </div>
  )
}

export default VenturesTab