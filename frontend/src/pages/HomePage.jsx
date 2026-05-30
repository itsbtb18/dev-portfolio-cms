import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioLayout from "../components/PortfolioLayout";
import { createPortfolioSlug } from "../data/portfolioContent";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 19L19 5" />
    <path d="M8 5h11v11" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 5h5v5" />
    <path d="M10 14L19 5" />
    <path d="M5 10v9h9" />
  </svg>
);

const getSlug = (item, fieldNames = []) =>
  item?.slug || createPortfolioSlug(fieldNames.map((field) => item?.[field]).filter(Boolean).join("-"));

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mb-6 max-w-3xl">
    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full">{eyebrow}</span>
    <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl font-display">{title}</h2>
    {description ? <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/50">{description}</p> : null}
  </div>
);

const Pill = ({ children }) => (
  <span className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/70 transition duration-300 hover:bg-sky-400/10 hover:border-sky-400/20 hover:text-sky-300">
    {children}
  </span>
);

const HomePage = ({ data }) => {
  const { profile, experiences, projects, skills, academicYears = [] } = data;

  return (
    <PortfolioLayout profile={profile} noPt={true}>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pb-0 pt-0">
        <div className="mx-auto grid min-h-screen max-w-7xl items-end gap-10 lg:grid-cols-[1fr_1.4fr_1fr]">
          
          <motion.div
            className="max-w-xl text-left self-center z-20"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span 
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-sky-400 drop-shadow-[0_2px_8px_rgba(56,189,248,0.25)] block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {profile.greeting}
            </motion.span>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-display leading-[1.05] text-glow-cyan drop-shadow-[0_4px_12px_rgba(0,0,0,0.65)]">
              {profile.fullName}
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.contactEmail}`}
                className="rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 px-8 py-3.5 text-sm font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.45)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 px-8 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:text-sky-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                Download CV
                <ArrowIcon />
              </a>
            </div>
          </motion.div>

          {/* Center Avatar Column — feet glued to hero bottom */}
          <motion.div
            className="relative flex items-end justify-center self-end z-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Ambient Purple Backdrop Glow (Static to prevent layout color shifting) */}
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-600/30 to-sky-500/10 blur-[120px] pointer-events-none" />
            
            <motion.img
              src="https://res.cloudinary.com/dw3fctzln/image/upload/f_auto,q_auto/btb_ibrblj"
              alt={profile.fullName}
              className="relative z-10 h-[92vh] max-h-[950px] w-auto object-contain object-bottom filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] select-none pointer-events-auto cursor-pointer"
              whileHover={{ 
                scale: 1.05, 
                filter: "drop-shadow(0 0 50px rgba(56, 189, 248, 0.75))",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            />
          </motion.div>

          {/* Right Hero Column */}
          <motion.div
            className="flex flex-col gap-6 lg:items-end text-left lg:text-right self-center z-20"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div>
              <p className="text-xs uppercase font-extrabold tracking-[0.3em] text-white/50">Role</p>
              <div className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tight bg-gradient-to-r lg:bg-gradient-to-l from-sky-400 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent font-display drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <span className="block whitespace-nowrap">Full Stack</span>
                <span className="block whitespace-nowrap">Developer</span>
                <span className="block text-sky-300 whitespace-nowrap">& AI Engineer</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 pt-24 lg:pt-28 pb-24 lg:pb-36 relative z-20">
        <div className="mx-auto max-w-4xl text-center relative">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display text-glow-cyan">
              About Me
            </h2>
          </motion.div>
          
          <motion.div
            className="mt-10 space-y-6 text-left"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-base sm:text-lg leading-relaxed text-white/75 font-sans">
              Hi, I'm Bettayeb Mohamed Aimen. I am a Full Stack Developer, AI Engineer, and a tech builder driven by the challenge of transforming complex data structures into elegant, scalable software products. My work exists at the intersection of robust backend architectures and intelligent processing systems. I specialize in building highly scalable web applications, designing multi-tenant SaaS ecosystems, and deploying practical applied AI solutions from scratch.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-white/75 font-sans">
              With a solid background in engineering and active freelance experience automating digital workflows for clients, I approach software with a single goal: turning complex, technical challenges into smooth, interactive user experiences.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-white/75 font-sans">
              Currently pushing the boundaries of my tech stack and pursuing advanced studies in Information and Communication Engineering at UESTC in China, I am constantly exploring what's next in systems design, intelligent systems, and automated infrastructure.
            </p>
          </motion.div>
          
          <motion.p
            className="mt-8 text-sm sm:text-base text-sky-400/80 font-medium tracking-wide text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Scroll down to explore my career timeline, the stack I deploy, and the projects I've brought to life.
          </motion.p>

          {/* Massive Character PNG btb2_veheiq placed under the text at the bottom right */}
          <motion.div
            className="mt-12 flex justify-end"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              {/* Soft backdrop glow behind character */}
              <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-sky-500/20 to-purple-600/10 blur-[100px] pointer-events-none z-0" />
              
              <motion.img
                src="https://res.cloudinary.com/dw3fctzln/image/upload/f_auto,q_auto/btb2_veheiq"
                alt="About Bettayeb Mohamed Aimen character"
                className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] object-contain object-bottom filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)] select-none pointer-events-auto cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  filter: "drop-shadow(0 0 45px rgba(56, 189, 248, 0.65))",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services/What I Do Section */}
      <section id="services" className="px-6 pt-24 lg:pt-28 pb-24 lg:pb-36 relative z-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What I Do"
            title="Core services engineered for modern product teams"
            description="I write maintainable backend code, design modular deployment architectures, and integrate applied AI tools directly to streamline operational logic."
          />
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            {[
              {
                id: "01",
                title: "Web Development",
                description: "I engineer high-performance, scalable web ecosystems built around an API-first philosophy. I architect secure, multi-tenant SaaS platforms, custom business software, and complex database infrastructures utilizing Django and FastAPI backends, linking them directly to fluid, high-converting React frontends. My development cycle emphasizes speed, cloud containerization with Docker, and bulletproof security.",
                icon: (
                  <svg className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5" />
                    <path d="M6 20h12M12 17v3M6 7h1M9 7h1" strokeLinecap="round" />
                    <path d="M12 10l2 2-2 2M10 12H7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                color: "from-sky-500/10 to-sky-400/0",
                glowColor: "rgba(56,189,248,0.15)"
              },
              {
                id: "02",
                title: "Applied AI & Automation",
                description: "From architecting custom Retrieval-Augmented Generation (RAG) knowledge bases and intelligent conversational agents to implementing autonomous web-scraping pipelines and semantic data filtering, I turn manual business bottlenecks into streamlined digital assets that automate systems and unlock real data utility.",
                icon: (
                  <svg className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="5" r="2.5" />
                    <circle cx="5" cy="12" r="2.5" />
                    <circle cx="19" cy="12" r="2.5" />
                    <circle cx="12" cy="19" r="2.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <path d="M12 7.5v2M12 14.5v2M7.5 12h2M14.5 12h2" strokeLinecap="round" />
                    <path d="M6.77 10.23l3.46-3.46M13.77 17.23l3.46-3.46M6.77 13.77l3.46 3.46M13.77 6.77l3.46 3.46" strokeLinecap="round" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                ),
                color: "from-purple-500/10 to-purple-400/0",
                glowColor: "rgba(168,85,247,0.15)"
              }
            ].map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5 p-8 sm:p-10 backdrop-blur-md transition-all duration-500 group flex flex-col justify-between min-h-[320px]"
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${service.glowColor}` }}
              >
                {/* Subtle gradient background sweep on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <span className="text-4xl font-extrabold font-display bg-gradient-to-br from-white/20 to-white/5 bg-clip-text text-transparent group-hover:from-white/40 group-hover:to-white/10 transition-all duration-300">
                      {service.id}
                    </span>
                  </div>
                  
                  <h3 className="mt-8 text-2xl font-bold text-white font-display tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70 font-sans">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 pt-24 lg:pt-28 pb-24 lg:pb-36 relative z-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Experience"
            title="Professional journey & roles"
            description="A record of internship roles, research teams, and freelance client work."
          />
          <div className="relative border-l border-white/10 pl-6 ml-4 space-y-8">
            {experiences.map((experience, index) => {
              const slug = getSlug(experience, ["role", "company"]);
              return (
                <motion.div
                  key={experience.id || slug}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                  className="group relative rounded-[1.8rem] border border-white/5 bg-white/5 p-6 backdrop-blur-md hover:border-sky-400/20 transition-all duration-300"
                >
                  <div className="absolute -left-[1.95rem] top-7 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)] group-hover:scale-110 transition duration-300" />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400 bg-sky-400/10 px-2.5 py-1 rounded-full">{experience.duration}</span>
                      <h3 className="mt-3 text-xl font-bold text-white font-display">{experience.role}</h3>
                      <p className="mt-1 text-xs text-white/50">{experience.company}</p>
                    </div>
                    <Link
                      to={`/experience/${slug}`}
                      className="group inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 transition duration-300 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-sky-300"
                    >
                      View Role Details <ArrowIcon />
                    </Link>
                  </div>
                  <div className="mt-4 space-y-2 max-w-3xl text-xs sm:text-sm text-white/60 font-sans">
                    {experience.highlights?.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80 mt-1.5 shrink-0" />
                        <p>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studies & Academic/Founder Milestones Section */}
      <section id="studies" className="px-6 pt-24 lg:pt-28 pb-24 lg:pb-36 relative z-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Studies & Milestones"
            title="Academic & founder milestones"
            description="My core computer science education at USTHB and my co-founding journey building platforms at ILMI."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {academicYears.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/5 bg-white/5 p-6 backdrop-blur-md hover:border-sky-400/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold tracking-widest text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full uppercase">
                    {item.year}
                  </span>
                  <div className="h-8 w-8 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-sky-400 group-hover:bg-sky-400/10 transition-colors duration-300">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-bold text-white font-display">{item.title}</h3>
                <p className="mt-1 text-xs text-white/40 font-medium">{item.institution}</p>
                <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-white/60">{item.description}</p>
                <div className="mt-4 pt-4 border-t border-white/5 grid gap-2">
                  {item.highlights?.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/55">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 pt-24 lg:pt-28 pb-24 lg:pb-36 relative z-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects"
            title="Select projects from my portfolio"
            description="Polished software products featuring detailed technology stacks and performance highlights."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => {
              const slug = getSlug(project, ["title"]);
              const stackBadges = project.stack.split(",").map((entry) => entry.trim()).filter(Boolean);
              return (
                <motion.article
                  key={project.id || slug}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 hover:border-sky-400/20 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
                >
                  <Link to={`/projects/${slug}`} className="block h-full">
                    <div className="relative p-6 flex flex-col h-full justify-between gap-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[10px] font-bold text-white/40 font-display">0{project.id}</span>
                          <h3 className="mt-2 text-xl font-bold text-white font-display group-hover:text-sky-300 transition duration-300">{project.title}</h3>
                        </div>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition group-hover:border-sky-400/50 group-hover:text-sky-300">
                          <ExternalIcon />
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm leading-relaxed text-white/60">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                        {stackBadges.slice(0, 5).map((badge) => (
                          <span key={badge} className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/50 hover:text-sky-300 transition duration-300">
                            {badge}
                          </span>
                        ))}
                        {stackBadges.length > 5 ? (
                          <span className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/40">
                            +{stackBadges.length - 5} more
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="px-6 pt-24 lg:pt-28 pb-24 lg:pb-36 relative z-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Backend, frontend, and infrastructure"
            description="My core technical toolkit, refined through school, professional, and product builds."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {skills.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="rounded-[2rem] border border-white/5 bg-white/5 p-6 backdrop-blur-md hover:border-sky-400/20 transition-all duration-300"
              >
                <h3 className="text-xs uppercase font-bold tracking-[0.2em] text-sky-400">{group.category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:bg-sky-400/5 hover:text-sky-300 hover:border-sky-400/10 transition duration-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 pt-24 lg:pt-28 pb-24 lg:pb-36 relative z-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/5 bg-white/5 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden">
          {/* Ambient Glow in Contact */}
          <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-sky-500/5 blur-[50px] pointer-events-none" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full">Get In Touch</span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-glow-cyan text-white font-display">Let’s build something serious.</h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/50">
                If you want a product that feels premium, fast, and deliberate, reach out and I’ll help shape and ship it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href={`mailto:${profile.contactEmail}`} className="rounded-full bg-sky-400 px-6 py-3 text-xs font-bold text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.3)] transition duration-300 hover:scale-[1.03] hover:bg-sky-300">
                Email Me
              </a>
              <a href="#" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold text-white/80 transition duration-300 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-sky-300">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pb-12 pt-4">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between gap-4 items-center border-t border-white/5 pt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 font-display">
          <div>© {new Date().getFullYear()} BETTAYEB MOHAMED AIMEN</div>
          <div className="lowercase tracking-wider text-white/20">crafted with premium components</div>
        </div>
      </footer>
    </PortfolioLayout>
  );
};

export default HomePage;
