import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioLayout from "../components/PortfolioLayout";
import ProjectsShowcase from "../components/ProjectsShowcase";
import TechStackShowcase from "../components/TechStackShowcase";
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

const EmailButton = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    // Try mailto first
    window.location.href = `mailto:${email}`;
    // Also copy to clipboard as fallback
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_0_35px_rgba(56,189,248,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(56,189,248,0.65)]"
    >
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Email Copied!
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Send an Email
        </>
      )}
    </button>
  );
};

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
        <div className="mx-auto max-w-7xl relative">
          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display text-glow-cyan">
              About Me
            </h2>
          </motion.div>

          {/* Two-column layout: description on the left, 3D character on the right at the same level */}
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            {/* Left: description text */}
            <div>
              <motion.div
                className="space-y-6 text-left"
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
            </div>

            {/* Right: Massive Character PNG btb2_veheiq, centered with the description */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative">
                {/* Soft backdrop glow behind character */}
                <div className="absolute inset-0 m-auto h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-sky-500/20 to-purple-600/10 blur-[100px] pointer-events-none z-0" />

                <motion.img
                  src="https://res.cloudinary.com/dw3fctzln/image/upload/f_auto,q_auto/btb2_veheiq"
                  alt="About Bettayeb Mohamed Aimen character"
                  className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px] object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)] select-none pointer-events-auto cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    filter: "drop-shadow(0 0 45px rgba(56, 189, 248, 0.65))",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                />
              </div>
            </motion.div>
          </div>
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

      {/* Projects Section — pinned horizontal scroll */}
      <ProjectsShowcase projects={projects} githubUrl={profile.github} />

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

      <TechStackShowcase />

      {/* Contact Section */}
      <section id="contact" className="px-6 pt-24 lg:pt-28 pb-24 lg:pb-36 relative z-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/5 bg-white/5 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden">
          {/* Glows */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-sky-500/10 blur-[80px]" />
          <div className="pointer-events-none absolute -left-12 -bottom-12 h-56 w-56 rounded-full bg-violet-600/8 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full">Get In Touch</span>
              <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight text-white font-display">
                Let’s build something <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">serious.</span>
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed text-white/45">
                Have a project in mind or want to collaborate? Reach out directly — I respond fast.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {/* Email — opens mail client; also copies address as fallback */}
              <EmailButton email={profile.contactEmail} />

              {/* WhatsApp */}
              <a
                href={profile.whatsapp || "https://wa.me/213"}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white/80 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-[#25D366] hover:shadow-[0_0_35px_rgba(37,211,102,0.25)]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Email address displayed */}
            <p className="text-xs text-white/25 tracking-widest font-mono">{profile.contactEmail}</p>
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
