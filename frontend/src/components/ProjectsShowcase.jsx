import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { createPortfolioSlug } from "../data/portfolioContent";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const getSlug = (project) => project?.slug || createPortfolioSlug(project?.title || "");

const ProjectColumn = ({ project, index }) => {
  const slug = getSlug(project);
  const cover = project.cover || project.screenshots?.[0];
  const shotCount = project.screenshots?.length || 0;

  return (
    <Link
      to={`/projects/${slug}`}
      className="group relative flex h-full w-[86vw] shrink-0 flex-col justify-center border-r border-white/[0.08] px-8 sm:w-[460px] sm:px-12"
    >
      {/* Top row: index + title/category */}
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-5xl font-black leading-none text-white/85 transition-colors duration-300 group-hover:text-white sm:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="pt-1 text-right">
          <h3 className="font-display text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-sky-300 sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 text-xs font-medium text-sky-400/80">{project.category}</p>
        </div>
      </div>

      {/* Tools and features */}
      <div className="mt-7">
        <p className="font-display text-sm font-bold text-white">Tools and features</p>
        <p className="mt-2 max-w-[22rem] text-sm leading-relaxed text-white/45">
          {project.stack}
        </p>
      </div>

      {/* Screenshot square */}
      <div className="mt-7">
        <div className="relative inline-block w-full max-w-[22rem] overflow-hidden rounded-xl border border-white/10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:border-sky-400/50 group-hover:shadow-[0_25px_60px_-20px_rgba(56,189,248,0.5)]">
          {/* sky glow ring on hover */}
          <div className="pointer-events-none absolute inset-0 z-10 rounded-xl ring-1 ring-inset ring-sky-400/0 transition duration-500 group-hover:ring-sky-400/30" />
          {cover ? (
            <img
              src={cover}
              alt={`${project.title} preview`}
              loading="lazy"
              className="block h-auto max-h-[300px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.18),transparent_40%)]" />
          )}
        </div>
      </div>

      {/* Footer: status + view */}
      <div className="mt-7 flex items-center gap-4">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 group-hover:text-sky-300">
          View case study <ArrowIcon />
        </span>
        {shotCount ? (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/30">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            {shotCount}
          </span>
        ) : null}
      </div>
    </Link>
  );
};

const SeeMorePanel = ({ githubUrl }) => (
  <div className="relative flex h-full w-[86vw] shrink-0 flex-col items-center justify-center px-10 text-center sm:w-[520px]">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-sky-500/20 to-purple-600/10 blur-[100px]" />
    <h3 className="relative font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Want to see more?
    </h3>
    <p className="relative mt-4 max-w-xs text-sm leading-relaxed text-white/50">
      Explore all of my projects, experiments, and open-source work.
    </p>
    <a
      href={githubUrl || "#"}
      target="_blank"
      rel="noreferrer"
      className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(56,189,248,0.65)]"
    >
      See All Works <ArrowIcon />
    </a>
  </div>
);

const ProjectsShowcase = ({ projects = [], githubUrl }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [maxX, setMaxX] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  useLayoutEffect(() => {
    const calc = () => {
      if (!trackRef.current || !containerRef.current) return;
      const distance = trackRef.current.scrollWidth - containerRef.current.clientWidth;
      setMaxX(Math.max(0, distance));
    };
    calc();
    window.addEventListener("resize", calc);
    // recalc once images/fonts settle
    const t = setTimeout(calc, 400);
    return () => {
      window.removeEventListener("resize", calc);
      clearTimeout(t);
    };
  }, [projects]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ height: `calc(100vh + ${maxX}px)` }}
      className="relative z-20"
    >
      <div ref={containerRef} className="sticky top-0 h-screen overflow-hidden">
        {/* Heading */}
        <div className="absolute left-4 top-6 z-20 sm:left-8 sm:top-8 lg:left-10 lg:top-12">
          <span className="rounded-full bg-sky-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
            Projects
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-6xl">
            My <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Work</span>
          </h2>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 lg:flex">
          Scroll to explore
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>

        {/* Horizontal track */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex h-full items-center pt-28 sm:pt-28 lg:pt-24 will-change-transform"
        >
          {projects.map((project, index) => (
            <ProjectColumn key={project.id || getSlug(project)} project={project} index={index} />
          ))}
          <SeeMorePanel githubUrl={githubUrl} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
