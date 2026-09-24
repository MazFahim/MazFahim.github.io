function ContactTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Contact</h2>
      <p className="mb-6">
        Open to contract work, part-time work, collaborations, research involvement, and venture partnerships — reach out for any of it.
      </p>

      <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4 max-w-md">
        <input type="hidden" name="access_key" value="06b7ad4e-135d-4693-9de2-854cf5f9252b" />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="bg-surface border border-hairline px-3 py-2 text-ink-text placeholder:text-muted focus:outline-none focus:border-accent"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="bg-surface border border-hairline px-3 py-2 text-ink-text placeholder:text-muted focus:outline-none focus:border-accent"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows="4"
          className="bg-surface border border-hairline px-3 py-2 text-ink-text placeholder:text-muted focus:outline-none focus:border-accent"
        ></textarea>

        <button
          type="submit"
          className="bg-accent text-ink font-medium px-4 py-2 hover:opacity-90 transition-opacity"
        >
          Send
        </button>
      </form>

      <div className="mt-6 text-sm text-muted">
        <p>Or reach me directly: <a href="mailto:mazfahim0@gmail.com" className="underline text-accent hover:opacity-80">mazfahim0@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/8801521400144" target="_blank" className="underline text-accent hover:opacity-80">Chat on WhatsApp</a></p>
      </div>
    </div>
  )
}

export default ContactTab