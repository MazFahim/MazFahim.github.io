function Identity({ text }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/profile.JPG"
        alt="Ashiquzzaman Fahim"
        className="w-40 h-50 object-cover border border-hairline shrink-0"
      />
      <div>
        <h1 className="text-2xl font-bold text-ink-text">Ashiquzzaman Fahim</h1>
        <p className="text-sm text-muted mt-1">
          B.Sc. in Computer Science & Engineering, CIU · Postgraduate Diploma in Business IT, BUET (ongoing)
        </p>
        <p className="text-xl mt-3">{text}</p>
      </div>
    </div>
  )
}

export default Identity