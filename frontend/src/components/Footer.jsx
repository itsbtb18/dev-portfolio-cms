const Footer = ({ profile }) => {
  const email = profile?.contactEmail || "maimen.bettayeb@gmail.com";
  const cvUrl = profile?.cvUrl || "#";
  const mailto = `mailto:${email}?subject=Project%20Inquiry&body=Hello%20${encodeURIComponent(
    profile?.fullName || "there"
  )},%0D%0A%0D%0AI'd%20love%20to%20discuss%20a%20project%20with%20you.`;

  return (
    <footer className="relative overflow-hidden bg-[#04060f] px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px)] bg-[length:48px_48px] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[length:48px_48px] opacity-25" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">Let’s connect</p>
          <h2 className="mt-4 text-3xl font-semibold">Ready to build something bold?</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70">
            Open to product partnerships, engineering leadership, and ambitious software initiatives.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={mailto}
            className="rounded-full border border-sky-400/70 bg-sky-400/10 px-6 py-3 text-sm font-semibold text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.45)] transition hover:bg-sky-400/20"
          >
            Contact Me
          </a>
          <a
            href={cvUrl}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-sky-300/70 hover:text-sky-200"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
          <a
            href={profile?.github || "#"}
            className="flex items-center gap-2 transition hover:text-sky-300"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.1.66-.22.66-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.66-4.57 4.92.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.16.59.67.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
            GitHub
          </a>
          <a
            href={profile?.linkedin || "#"}
            className="flex items-center gap-2 transition hover:text-sky-300"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.66-1.26 2.28-2.58 4.7-2.58 5.02 0 5.95 3.3 5.95 7.6V24h-5v-7.3c0-1.74-.03-3.97-2.42-3.97-2.43 0-2.8 1.9-2.8 3.85V24h-5V8z" />
            </svg>
            LinkedIn
          </a>
          <a href={mailto} className="flex items-center gap-2 transition hover:text-sky-300">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18v12H3z" />
              <path d="M3 6l9 7 9-7" />
            </svg>
            Email
          </a>
        </div>

        <p className="text-xs text-white/50">© {new Date().getFullYear()} {profile?.fullName || "Portfolio"}</p>
      </div>
    </footer>
  );
};

export default Footer;
