import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);
const ExpandIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
};

const ProjectGallery = ({ screenshots = [], title = "" }) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightbox, setLightbox] = useState(false);
  const count = screenshots.length;

  const go = useCallback((i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  }, [active]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((a) => (a - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setDirection(1);
    setActive((a) => (a + 1) % count);
  }, [count]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  if (!count) return null;

  return (
    <div className="space-y-3">
      {/* ── Main viewer ─────────────────────────────────────── */}
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b16]">
        {/* Image — natural aspect ratio, no black bars */}
        <div className="relative w-full">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={active}
              src={screenshots[active]}
              alt={`${title} ${active + 1}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="block w-full cursor-zoom-in select-none"
              draggable={false}
              onClick={() => setLightbox(true)}
            />
          </AnimatePresence>

          {/* Overlay controls */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Counter + expand */}
          <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
            <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold text-white/80 backdrop-blur-md">
              {active + 1} / {count}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white/75 backdrop-blur-md transition hover:bg-sky-400/20 hover:text-sky-300"
          >
            <ExpandIcon /> Fullscreen
          </button>

          {/* Arrows — visible on hover */}
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white/80 opacity-0 backdrop-blur-md transition-all duration-200 group-hover:opacity-100 hover:bg-sky-400/20 hover:text-sky-300"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white/80 opacity-0 backdrop-blur-md transition-all duration-200 group-hover:opacity-100 hover:bg-sky-400/20 hover:text-sky-300"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>
      </div>

      {/* ── Thumbnails ───────────────────────────────────────── */}
      {count > 1 && (
        <div className="flex gap-2 overflow-x-auto py-1 [scrollbar-width:thin] [scrollbar-color:rgba(56,189,248,0.3)_transparent]">
          {screenshots.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => go(i)}
              className={`relative shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${
                i === active
                  ? "border-sky-400/70 ring-2 ring-sky-400/25 opacity-100"
                  : "border-white/10 opacity-45 hover:opacity-80 hover:border-white/25"
              }`}
            >
              <img
                src={src}
                alt={`thumb ${i + 1}`}
                loading="lazy"
                className="h-14 w-24 object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}

      {/* ── Lightbox ──────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(false)}
          >
            {/* Top bar */}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
                {active + 1} / {count}
              </span>
              <button
                type="button"
                onClick={() => setLightbox(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-sky-400/20 hover:text-sky-300"
              >
                <CloseIcon />
              </button>
            </div>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-sky-400/20 hover:text-sky-300"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-sky-400/20 hover:text-sky-300"
                >
                  <ChevronRight />
                </button>
              </>
            )}

            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={active + "-lb"}
                src={screenshots[active]}
                alt={`${title} ${active + 1}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
                className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;
