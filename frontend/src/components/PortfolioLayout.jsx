import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SocialIcon = ({ type }) => {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.1.66-.22.66-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.66-4.57 4.92.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.16.59.67.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.66-1.26 2.28-2.58 4.7-2.58 5.02 0 5.95 3.3 5.95 7.6V24h-5v-7.3c0-1.74-.03-3.97-2.42-3.97-2.43 0-2.8 1.9-2.8 3.85V24h-5V8z" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.402.002 9.761-4.394 9.764-9.813.001-2.624-1.012-5.092-2.856-6.937C16.338 1.993 13.91 1.01 11.99 1.01 6.586 1.01 2.193 5.412 2.19 10.834c0 1.562.477 3.093 1.38 4.402l-.994 3.63 3.471-.912zm11.365-5.118c-.28-.14-1.657-.818-1.913-.91-.256-.093-.443-.14-.63.14-.187.28-.724.91-.887 1.096-.164.186-.328.21-.608.07-.28-.14-1.182-.435-2.251-1.39-1.012-.9-1.694-2.012-1.89-2.35-.198-.337-.021-.519.146-.685.15-.15.328-.383.49-.574.165-.192.22-.32.329-.533.109-.21.054-.396-.027-.537-.08-.14-.63-1.522-.863-2.08-.228-.547-.46-.473-.63-.482-.163-.008-.35-.01-.537-.01-.186 0-.49.07-.747.348-.256.28-.98.957-.98 2.333 0 1.376 1.003 2.701 1.142 2.89.14.186 1.975 3.016 4.785 4.226.668.287 1.19.458 1.597.587.67.213 1.28.183 1.762.11.537-.08 1.657-.677 1.89-1.332.233-.655.233-1.218.163-1.332-.07-.113-.256-.186-.537-.327z"/>
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    );
  }

  if (type === "reddit") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.29-1.72l1.37-4.31 4.5 1c.06 1.05.95 1.88 2.01 1.88 1.1 0 2-1 2-2s-.9-2-2-2c-.88 0-1.63.58-1.9 1.38l-4.96-1.1c-.24-.06-.49.09-.56.33L10.94 8C8.47 8.07 6.23 8.72 4.57 9.73 4 8.97 3.1 8.5 2.1 8.5c-1.65 0-3 1.35-3 3 0 1.21.73 2.25 1.77 2.71-.05.26-.07.53-.07.79 0 3.69 4.45 6.7 9.94 6.7s9.94-3 9.94-6.7c0-.26-.02-.53-.07-.79 1.04-.46 1.77-1.5 1.77-2.71zm-18 2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11 2.3c-1.32 1.32-3.83 1.32-5.15 0-.15-.15-.15-.38 0-.53.15-.15.38-.15.53 0 .99.99 2.89.99 3.88 0 .15-.15.38-.15.53 0 .16.15.16.39.01.53zm-.23-3.8c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    );
  }

  if (type === "stackoverflow") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M18.986 21.865v-6.404h2.24v8.644H2.425v-8.644h2.24v6.404h14.321zm-10.942-5.462l8.808 1.84 0.384-2.128-8.807-1.84-0.385 2.128zm0.982-4.103l7.986 4.148 0.981-1.928-7.987-4.148-0.98 1.928zm1.996-3.712l6.51 6.16 1.488-1.576-6.51-6.16-1.488 1.576zm3.037-3.003l4.57 7.712 1.916-1.127-4.57-7.711-1.916 1.126zm4.135-2.072l2.3 8.61 2.167-0.58-2.3-8.61-2.167 0.58zM8.026 19.385h9.12v-2.204h-9.12v2.204z"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 6h18v12H3z" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  );
};

const BG_VIDEO_URL = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dw3fctzln"}/video/upload/q_auto/bg-video_uhd2sq.mp4`;

const NAV_LINKS = [
  { href: "/#about",      label: "About Me" },
  { href: "/#services",   label: "What I Do" },
  { href: "/#projects",   label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#tech",       label: "Tech Stack" },
  { href: "/#contact",    label: "Contact" },
];

const PortfolioLayout = ({ profile, children, noPt = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-sky-400/30 selection:text-white">
      {/* Fixed video background layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover opacity-45"
      >
        <source src={BG_VIDEO_URL} type="video/mp4" />
      </video>
      {/* Dark overlay on top of video */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[#030712]/55" />

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="mx-auto flex max-w-full items-center justify-between px-5 py-5">
          <Link to="/" className="text-2xl font-black tracking-[0.25em] font-display text-white">
            BTB
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.2em] text-white md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="relative py-1 transition hover:text-sky-300">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex flex-col items-center justify-center gap-[5px] md:hidden p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/10 bg-[#070b16]/95 backdrop-blur-xl"
            >
              <nav className="flex flex-col px-5 py-4 gap-1">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70 transition hover:bg-sky-400/10 hover:text-sky-300"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating social links fixed on left side */}
      <aside className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-6 text-white/70 lg:flex items-center">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/10 mb-2" />
        <a href={profile?.github || "https://github.com/Aymen-btb"} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition duration-300 hover:text-white hover:scale-110">
          <SocialIcon type="github" />
        </a>
        <a href={profile?.linkedin || "https://linkedin.com/in/Aymen-btb"} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition duration-300 hover:text-white hover:scale-110">
          <SocialIcon type="linkedin" />
        </a>
        <a href={profile?.whatsapp || "#"} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition duration-300 hover:text-white hover:scale-110">
          <SocialIcon type="whatsapp" />
        </a>
        <a href={profile?.instagram || "#"} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition duration-300 hover:text-white hover:scale-110">
          <SocialIcon type="instagram" />
        </a>
        <a href={profile?.reddit || "#"} target="_blank" rel="noreferrer" aria-label="Reddit" className="transition duration-300 hover:text-white hover:scale-110">
          <SocialIcon type="reddit" />
        </a>
        <a href={profile?.stackoverflow || "#"} target="_blank" rel="noreferrer" aria-label="Stack Overflow" className="transition duration-300 hover:text-white hover:scale-110">
          <SocialIcon type="stackoverflow" />
        </a>
        <a href={`mailto:${profile?.contactEmail || "maimen.bettayeb@gmail.com"}`} aria-label="Email" className="transition duration-300 hover:text-white hover:scale-110">
          <SocialIcon type="email" />
        </a>
        <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-white/10 mt-2" />
      </aside>

      <main className={`relative z-10 ${noPt ? "pt-0" : "pt-12 lg:pt-14"} lg:pl-28 lg:pr-8`}>{children}</main>
    </div>
  );
};

export default PortfolioLayout;
