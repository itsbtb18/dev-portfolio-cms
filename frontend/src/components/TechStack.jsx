import { motion } from "framer-motion";

const TechStack = ({ skills = [] }) => {
  return (
    <section className="bg-[#040913] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">Tech Stack</p>
        <h2 className="mt-4 text-3xl font-semibold">Tools I trust</h2>

        <div className="mt-10 grid gap-6">
          {skills.map((group, index) => (
            <motion.div
              key={group.id || group.category}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-white/80">{group.category}</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((skill) => (
                  <div
                    key={`${group.category}-${skill}`}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm uppercase text-white/60">
                      {skill.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{skill}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
