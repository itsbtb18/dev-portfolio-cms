import { motion } from "framer-motion";

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M14 5h5v5" />
    <path d="M10 14L19 5" />
    <path d="M5 10v9h9" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.1.66-.22.66-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.66-4.57 4.92.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.16.59.67.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const Projects = ({ projects = [] }) => {
  return (
    <section className="bg-[#030712] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold">Selected portfolio</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {projects.map((project, index) => {
            const stackTags = project.stack
              ? project.stack.split(",").map((tag) => tag.trim()).filter(Boolean)
              : [];

            return (
            <motion.article
              key={project.id || index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
            >
              <div className="relative h-64 overflow-hidden">
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.4em] text-white/40">
                      Project Visual
                    </div>
                  )}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/30 p-3 text-white hover:border-white"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/30 p-3 text-white hover:border-white"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-white/70">{project.description}</p>
                {project.details?.length ? (
                  <ul className="grid gap-2 text-sm text-white/70">
                    {project.details.map((detail, detailIndex) => (
                      <li key={`${project.id}-${detailIndex}`}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {stackTags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
