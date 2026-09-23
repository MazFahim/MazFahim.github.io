function Highlights({ stats }) {
  return (
    <div>
      <ul className="flex gap-6">
        {stats.map((stat) => (
          <li key={stat.label}>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </li>
        ))}
      </ul>
      <p className="text-base mt-4">
        Currently building Inquestvet and a POS platform for small businesses — alongside ongoing{' '}
        <span className="text-blue-400 font-medium">research work</span>.
    </p>
    </div>
  )
}

export default Highlights