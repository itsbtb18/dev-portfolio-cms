import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioLayout from "./PortfolioLayout";
import { createPortfolioSlug, findBySlugOrId } from "../data/portfolioContent";
import { usePortfolioDataContext } from "../context/PortfolioDataContext";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 19L19 5" />
    <path d="M8 5h11v11" />
  </svg>
);

const PortfolioDetailPage = ({ kind }) => {
  const { id } = useParams();
  const data = usePortfolioDataContext();
  const { profile, experiences, projects } = data;

  const config = {
    project: {
      items: projects,
      basePath: "/projects",
      eyebrow: "Selected Work",
      getLabel: (item) => item.title,
      getSubtitle: (item) => item.description,
      backLabel: "Back to projects",
    },
    experience: {
      items: experiences,
      basePath: "/experience",
      eyebrow: "Professional Experience",
      getLabel: (item) => item.role,
      getSubtitle: (item) => `${item.company} · ${item.duration}`,
      backLabel: "Back to experience",
    },
  }[kind];

  const item = findBySlugOrId(config.items, id) || config.items.find((entry) => createPortfolioSlug(config.getLabel(entry)) === id);

  if (!item) {
    return (
      <PortfolioLayout profile={profile}>
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">
            <h1 className="text-3xl font-semibold text-white">Content not found</h1>
            <p className="mt-3 text-sm text-white/65">The item you opened does not exist in the current portfolio data.</p>
            <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950">
              Return Home <ArrowIcon />
            </Link>
          </div>
        </section>
      </PortfolioLayout>
    );
  }

  const highlights = item.highlights || [];
    const stackBadges = item.stack ? item.stack.split(",").map((entry) => entry.trim()).filter(Boolean) : [];

  return (
      <PortfolioLayout profile={profile}>
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <Link to={config.basePath === "/experience" ? "/#experience" : config.basePath === "/academics" ? "/#academics" : "/#projects"} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/55 transition hover:text-sky-300">
            <ArrowIcon /> {config.backLabel}
          </Link>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 grid gap-8 rounded-[2.4rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-sky-300">{config.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-6xl">{config.getLabel(item)}</h1>
              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-white/50">{config.getSubtitle(item)}</p>
              <p className="mt-6 max-w-3xl text-sm leading-8 text-white/70">{item.description}</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-5">
              <div className="flex flex-wrap gap-2">
                {stackBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
            >
              <h2 className="text-xl font-semibold text-white">Overview</h2>
              <p className="mt-4 text-sm leading-8 text-white/70">{item.description}</p>
              {highlights.length > 0 ? (
                <div className="mt-6 grid gap-3">
                  {highlights.map((highlight) => (
                    <div key={highlight} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white/75">
                      {highlight}
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
            >
              <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {stackBadges.length > 0 ? stackBadges.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">{tech}</span>) : <span className="text-sm text-white/50">No stack data available.</span>}
              </div>
            </motion.div>
          </div>

          {item.details?.length ? (
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <h2 className="text-xl font-semibold text-white">Details</h2>
              <div className="mt-5 grid gap-3">
                {item.details.map((detail) => (
                  <div key={detail} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white/75">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default PortfolioDetailPage;
