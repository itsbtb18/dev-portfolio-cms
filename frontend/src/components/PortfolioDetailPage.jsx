import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioLayout from "./PortfolioLayout";
import ProjectGallery from "./ProjectGallery";
import { createPortfolioSlug, findBySlugOrId } from "../data/portfolioContent";
import { usePortfolioDataContext } from "../context/PortfolioDataContext";

/* ── Icons ─────────────────────────────────────────────────── */
const BackIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 16 16" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" fill="currentColor">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
  </svg>
);

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Main component ─────────────────────────────────────────── */
const PortfolioDetailPage = ({ kind }) => {
  const { id } = useParams();
  const data = usePortfolioDataContext();
  const { profile, experiences, projects } = data;

  // Always start at top of page
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [id]);

  const config = {
    project: {
      items: projects,
      eyebrow: "Case Study",
      getLabel: (item) => item.title,
      getSubtitle: (item) => item.description,
      backLabel: "Back to projects",
      backHref: "/#projects",
    },
    experience: {
      items: experiences,
      eyebrow: "Experience",
      getLabel: (item) => item.role,
      getSubtitle: (item) => `${item.company} · ${item.duration}`,
      backLabel: "Back to experience",
      backHref: "/#experience",
    },
  }[kind];

  const item =
    findBySlugOrId(config.items, id) ||
    config.items.find((e) => createPortfolioSlug(config.getLabel(e)) === id);

  /* ── 404 ── */
  if (!item) {
    return (
      <PortfolioLayout profile={profile}>
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
            <h1 className="font-display text-3xl font-bold text-white">Not found</h1>
            <p className="mt-3 text-sm text-white/50">This item doesn't exist in the portfolio data.</p>
            <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300">
              <BackIcon /> Home
            </Link>
          </div>
        </div>
      </PortfolioLayout>
    );
  }

  const stackBadges = item.stack
    ? item.stack.split(",").map((s) => s.trim()).filter(Boolean)
    : [];
  const highlights = item.highlights || [];

  /* ── PROJECT detail ── */
  if (kind === "project") {
    const meta = [item.category, item.status, item.year].filter(Boolean);

    return (
      <PortfolioLayout profile={profile}>
        <div className="min-h-screen px-4 pb-24 pt-8 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">

            {/* Back link */}
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Link
                to={config.backHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 backdrop-blur-md transition hover:border-sky-400/40 hover:bg-sky-400/5 hover:text-sky-300"
              >
                <BackIcon /> {config.backLabel}
              </Link>
            </motion.div>

            {/* Hero header */}
            <motion.div
              className="mt-8"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {/* Meta chips */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
                {meta.map((m, i) => (
                  <span
                    key={m}
                    className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${
                      i === 0
                        ? "border border-sky-400/30 bg-sky-400/10 text-sky-300"
                        : i === 1
                        ? "border border-white/10 bg-white/5 text-white/50"
                        : "border border-white/10 bg-white/5 text-white/35"
                    }`}
                  >
                    {m}
                  </span>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                className="mt-5 font-display text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                {item.title}
              </motion.h1>

              {/* Tagline */}
              {item.tagline && (
                <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-lg leading-relaxed text-white/55">
                  {item.tagline}
                </motion.p>
              )}
            </motion.div>

            {/* Divider */}
            <motion.div
              className="my-10 h-px bg-gradient-to-r from-sky-400/30 via-white/10 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Gallery */}
            {item.screenshots?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectGallery screenshots={item.screenshots} title={item.title} />
              </motion.div>
            )}

            {/* Body — 2-col grid */}
            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_340px]">

              {/* Left: overview + features */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-6"
              >
                {/* Overview card */}
                <motion.div
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md"
                >
                  <h2 className="font-display text-xs font-black uppercase tracking-[0.25em] text-sky-400">
                    Overview
                  </h2>
                  <p className="mt-4 text-[15px] leading-8 text-white/65">
                    {item.overview || item.description}
                  </p>
                </motion.div>

                {/* Key features card */}
                {highlights.length > 0 && (
                  <motion.div
                    variants={fadeUp}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md"
                  >
                    <h2 className="font-display text-xs font-black uppercase tracking-[0.25em] text-sky-400">
                      Key Features
                    </h2>
                    <ul className="mt-5 space-y-3">
                      {highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          variants={fadeUp}
                          className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3.5 text-[13px] leading-relaxed text-white/65 transition hover:border-sky-400/20 hover:text-white/80"
                        >
                          <CheckIcon />
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>

              {/* Right sidebar */}
              <motion.aside
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-4"
              >
                {/* At a glance */}
                <motion.div
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/[0.07] to-purple-600/[0.04] p-6 backdrop-blur-md"
                >
                  <h2 className="font-display text-xs font-black uppercase tracking-[0.25em] text-sky-400">
                    At a glance
                  </h2>
                  <dl className="mt-5 space-y-3.5">
                    {[
                      { label: "Type", value: item.category },
                      { label: "Status", value: item.status, highlight: true },
                      { label: "Year", value: item.year },
                      { label: "Screenshots", value: item.screenshots?.length },
                    ]
                      .filter((r) => r.value)
                      .map((row) => (
                        <div key={row.label} className="flex items-center justify-between gap-4 border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
                          <dt className="text-xs font-medium text-white/35">{row.label}</dt>
                          <dd className={`text-right text-xs font-bold ${row.highlight ? "text-emerald-300" : "text-white/75"}`}>
                            {row.value}
                          </dd>
                        </div>
                      ))}
                  </dl>
                </motion.div>

                {/* Tech stack */}
                <motion.div
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
                >
                  <h2 className="font-display text-xs font-black uppercase tracking-[0.25em] text-sky-400">
                    Tech Stack
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {stackBadges.length > 0 ? (
                      stackBadges.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-black/25 px-3 py-1.5 text-[11px] font-medium text-white/65 transition hover:border-sky-400/30 hover:text-sky-200"
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-white/35">—</span>
                    )}
                  </div>
                </motion.div>
              </motion.aside>
            </div>

            {/* Bottom back link */}
            <motion.div
              className="mt-16 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={config.backHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50 backdrop-blur-md transition hover:border-sky-400/40 hover:text-sky-300"
              >
                <BackIcon /> {config.backLabel}
              </Link>
            </motion.div>
          </div>
        </div>
      </PortfolioLayout>
    );
  }

  /* ── EXPERIENCE detail ── */
  return (
    <PortfolioLayout profile={profile}>
      <div className="min-h-screen px-4 pb-24 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link
              to={config.backHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <BackIcon /> {config.backLabel}
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mt-8"
          >
            <motion.p variants={fadeUp} className="text-xs font-black uppercase tracking-[0.3em] text-sky-400">
              {config.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 font-display text-5xl font-black text-white">
              {config.getLabel(item)}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-sm uppercase tracking-[0.25em] text-white/40">
              {config.getSubtitle(item)}
            </motion.p>
            {item.description && (
              <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-[15px] leading-8 text-white/60">
                {item.description}
              </motion.p>
            )}
          </motion.div>

          {highlights.length > 0 && (
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 space-y-3"
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 text-sm leading-relaxed text-white/65 transition hover:border-sky-400/20"
                >
                  <CheckIcon />
                  {h}
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to={config.backHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <BackIcon /> {config.backLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default PortfolioDetailPage;
