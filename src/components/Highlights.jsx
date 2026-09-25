import { motion } from 'motion/react'

function Highlights({ stats }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
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
    </motion.div>
  )
}

export default Highlights