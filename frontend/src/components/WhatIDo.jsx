import { motion } from "framer-motion";

const WhatIDo = ({ services = [], imageUrl }) => {
  return (
    <section className="bg-[#04060f] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">What I Do</p>
          <h2 className="mt-4 text-3xl font-semibold">Services crafted for scale</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.id || service.title || index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-white/70">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative h-[420px] w-[280px] rounded-[2.5rem] border border-white/10 bg-white/5">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Developer cutout"
                className="h-full w-full rounded-[2.5rem] object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.4em] text-white/40">
                PNG Cutout
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;
