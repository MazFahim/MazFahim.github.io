function StatusLine({ status, permanent }) {
  return (
    <div>
      <p className="text-base">{status}</p>
      <p className="text-sm text-gray-400">{permanent}</p>
    </div>
  )
}

export default StatusLine