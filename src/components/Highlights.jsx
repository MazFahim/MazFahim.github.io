function Highlights({ stats }) {
  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <li key={stat.label}>
            <p className="text-2xl font-mono text-accent">{stat.value}</p>
            <p className="text-sm text-muted">{stat.label}</p>
          </li>
        ))}
      </ul>
      <p className="text-base mt-4">
        Currently building Inquestvet and a POS platform for small businesses — alongside ongoing{' '}
        <span className="text-accent font-medium">research work</span>.
    </p>
    </div>
  )
}

export default Highlights