import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Icon helpers ─────────────────────────────────────────────────────── */
const DI = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;
const SI = (name) =>
  `https://cdn.simpleicons.org/${name}/ffffff`;

/* ── Tech pyramid rows (wide → narrow) ───────────────────────────────── */
const ROWS = [
  /* Row 1 – 12: Core languages & frontend */
  [
    { name: "Python",         icon: DI("python") },
    { name: "JavaScript",     icon: DI("javascript") },
    { name: "TypeScript",     icon: DI("typescript") },
    { name: "React",          icon: DI("react") },
    { name: "Next.js",        icon: DI("nextjs", "original") },
    { name: "HTML5",          icon: DI("html5") },
    { name: "CSS3",           icon: DI("css3") },
    { name: "C",              icon: DI("c") },
    { name: "C++",            icon: DI("cplusplus") },
    { name: "Java",           icon: DI("java") },
    { name: "Tailwind",       icon: DI("tailwindcss", "original") },
    { name: "Bootstrap",      icon: DI("bootstrap") },
  ],
  /* Row 2 – 10: Backend & databases */
  [
    { name: "Django",         icon: DI("django", "plain") },
    { name: "FastAPI",        icon: DI("fastapi") },
    { name: "Node.js",        icon: DI("nodejs") },
    { name: "PostgreSQL",     icon: DI("postgresql") },
    { name: "MySQL",          icon: DI("mysql") },
    { name: "MongoDB",        icon: DI("mongodb") },
    { name: "Redis",          icon: DI("redis") },
    { name: "Elasticsearch",  icon: DI("elasticsearch") },
    { name: "Flask",          icon: DI("flask") },
    { name: "Celery",         icon: SI("celery") },
  ],
  /* Row 3 – 9: DevOps, cloud & mobile */
  [
    { name: "Docker",         icon: DI("docker") },
    { name: "Kubernetes",     icon: DI("kubernetes") },
    { name: "Nginx",          icon: DI("nginx") },
    { name: "Linux",          icon: DI("linux") },
    { name: "AWS",            icon: DI("amazonwebservices", "original") },
    { name: "Firebase",       icon: DI("firebase") },
    { name: "Flutter",        icon: DI("flutter") },
    { name: "Git",            icon: DI("git") },
    { name: "GitHub",         icon: DI("github") },
  ],
  /* Row 4 – 7: AI / ML / Data science */
  [
    { name: "PyTorch",        icon: DI("pytorch") },
    { name: "TensorFlow",     icon: DI("tensorflow") },
    { name: "Pandas",         icon: DI("pandas") },
    { name: "NumPy",          icon: DI("numpy") },
    { name: "Scikit-learn",   icon: SI("scikitlearn") },
    { name: "Hugging Face",   icon: SI("huggingface") },
    { name: "Jupyter",        icon: DI("jupyter") },
  ],
  /* Row 5 – 5: Tooling */
  [
    { name: "VS Code",        icon: DI("vscode") },
    { name: "Postman",        icon: SI("postman") },
    { name: "Figma",          icon: DI("figma") },
    { name: "Vercel",         icon: SI("vercel") },
    { name: "Bash",           icon: DI("bash") },
  ],
  /* Row 6 – 3: Extras */
  [
    { name: "OpenCV",         icon: DI("opencv") },
    { name: "GitHub Actions", icon: DI("githubactions") },
    { name: "Raspberry Pi",   icon: DI("raspberrypi") },
  ],
];

/* ── Single card ──────────────────────────────────────────────────────── */
const TechCard = ({ tech, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 18, scale: 0.92 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    whileHover={{ y: -6, scale: 1.1 }}
    style={{ willChange: "transform", width: "76px", flexShrink: 0 }}
    className="group relative flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.03] py-3 px-1 backdrop-blur-sm cursor-default"
  >
    {/* top-edge accent line draws in on hover */}
    <span className="absolute left-0 top-0 h-px w-0 rounded-full bg-gradient-to-r from-sky-400 to-transparent transition-all duration-500 group-hover:w-full" />

    {/* hover glow */}
    <div
      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background: "radial-gradient(circle at 50% 65%, rgba(56,189,248,0.13) 0%, transparent 70%)" }}
    />

    {/* icon — grayscale → colour on hover */}
    <img
      src={tech.icon}
      alt={tech.name}
      loading="lazy"
      draggable={false}
      className="relative z-10 h-7 w-7 object-contain grayscale brightness-[0.65] transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
      onError={(e) => { e.currentTarget.style.display = "none"; }}
    />

    {/* label */}
    <span className="relative z-10 w-full text-center text-[9px] font-semibold leading-tight text-white/35 transition-colors duration-300 group-hover:text-sky-300 truncate px-1">
      {tech.name}
    </span>
  </motion.div>
);

/* ── Section ──────────────────────────────────────────────────────────── */
const TechStackShowcase = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  let globalDelay = 0;

  return (
    <section id="tech" className="relative z-20 overflow-hidden px-4 py-28 lg:py-36">

      {/* Background ambient blobs */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.04] blur-[140px]" />
      <div className="pointer-events-none absolute left-[20%] top-[30%] h-96 w-96 rounded-full bg-violet-600/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute right-[15%] bottom-[20%] h-80 w-80 rounded-full bg-sky-400/[0.04] blur-[100px]" />

      {/* ── Header ── */}
      <div ref={headerRef} className="relative mx-auto mb-16 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block rounded-full bg-sky-400/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400 ring-1 ring-sky-400/20">
            Tech Stack
          </span>

          <h2 className="mt-5 font-display text-5xl font-black uppercase tracking-[0.1em] text-white sm:text-6xl lg:text-7xl">
            TECH STACK
          </h2>

          {/* animated underline */}
          <motion.div
            className="mx-auto mt-4 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />

          <p className="mt-5 text-sm leading-relaxed text-white/35">
            Every tool in my stack — languages, frameworks, databases, cloud, and AI.
          </p>
        </motion.div>
      </div>

      {/* ── Pyramid grid ── */}
      {/* Desktop: nowrap rows (76px cards, row 1 max = 1000px < max-w-5xl)
          Mobile:  wrap freely so cards reflow without overflowing               */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-2">
        {ROWS.map((row, ri) => {
          const rowDelay = ri * 0.06;
          return (
            <div key={ri} className="flex flex-wrap justify-center gap-2 md:flex-nowrap">
              {row.map((tech) => {
                const d = rowDelay + (globalDelay++ % row.length) * 0.025;
                return <TechCard key={tech.name} tech={tech} delay={d} />;
              })}
            </div>
          );
        })}
      </div>

      {/* ── Bottom count bar ── */}
      <motion.div
        className="mt-14 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white/35 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
          {ROWS.flat().length} technologies
        </div>
      </motion.div>
    </section>
  );
};

export default TechStackShowcase;
