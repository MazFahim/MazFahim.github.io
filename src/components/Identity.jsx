function Identity({ text }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/profile.JPG"
        alt="Ashiquzzaman Fahim"
        className="w-40 h-50 object-cover border border-hairline shrink-0"
      />
      <p className="text-xl">
        {text}
      </p>
    </div>
  )
}

export default Identity