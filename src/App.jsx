// Edit the two objects below to make this your own.
const profile = {
  name: 'Gram',
  bio: 'Product designer making small useful things. Based in Portland.',
  initials: 'OG',
}

const links = [
  { label: 'Portfolio', url: 'https://example.com' },
  { label: 'Github', url: 'https://github.com/Gram442' },
  { label: 'X / Twitter', url: 'https://x.com/timi_onchain' },
  { label: 'Email', url: 'gbolahan465@gmail.com' },
]

function LinkCard({ label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-xl border border-line bg-panel px-5 py-4
                 transition-all duration-200 ease-out
                 hover:border-amber/60 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(232,180,79,0.35)]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      <span className="font-body text-[15px] font-medium text-paper">{label}</span>
      <span
        aria-hidden="true"
        className="font-body text-muted transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-amber"
      >
        ↗
      </span>
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      {/* thin signature thread at the top, a quiet nod to a "link" */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-amber/70 to-transparent" />

      <main className="mx-auto flex min-h-screen max-w-[420px] flex-col items-center px-6 py-16">
        <section className="flex flex-col items-center text-center">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-panel
                       font-display text-lg font-medium text-amber"
            aria-hidden="true"
          >
            {profile.initials}
          </div>

          <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight text-paper">
            {profile.name}
          </h1>

          <p className="mt-2 max-w-[32ch] font-body text-sm leading-relaxed text-muted">
            {profile.bio}
          </p>
        </section>

        <nav className="mt-10 flex w-full flex-col gap-3" aria-label="Links">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} url={link.url} />
          ))}
        </nav>

        <footer className="mt-auto pt-16">
          <p className="font-body text-xs text-muted/70">{profile.name}</p>
        </footer>
      </main>
    </div>
  )
}
