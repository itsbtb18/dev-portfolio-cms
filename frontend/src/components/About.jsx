import { motion } from "framer-motion";

const About = ({ profile, imageUrl }) => {
  return (
    <section className="bg-[#070b16] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          className="flex justify-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative h-[420px] w-[300px] rounded-[2.4rem] border border-white/10 bg-white/5">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={profile?.fullName || "Profile"}
                className="h-full w-full rounded-[2.4rem] object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_40%)]" />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">About</p>
          <h2 className="mt-4 text-3xl font-semibold">Building premium software journeys</h2>
          <p className="mt-5 text-base text-white/70">
            {profile?.aboutMe}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
