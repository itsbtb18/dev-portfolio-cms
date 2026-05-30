import { motion } from "framer-motion";

const Experience = ({ experiences = [] }) => {
  return (
    <section className="bg-[#050813] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold">Career timeline</h2>

        <div className="mt-10 border-l border-white/10 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id || index}
              className="relative pb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border border-white/20 bg-[#0b1222]"
                initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
                whileInView={{ boxShadow: "0 0 20px rgba(0,180,216,0.9)" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
                style={{ backgroundColor: "#00B4D8" }}
              />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {exp.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm text-sky-300">{exp.company}</p>
                <ul className="mt-4 grid gap-2 text-sm text-white/70">
                  {exp.highlights?.map((item, highlightIndex) => (
                    <li key={`${exp.id}-${highlightIndex}`} className="leading-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
