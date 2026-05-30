import { motion } from "framer-motion";

const Hero = ({ profile }) => {
  const name = profile?.fullName || "BETTAYEB MOHAMED AIMEN";
  const greeting = profile?.greeting || "Hello I'm";
  const roleTitle = profile?.roleTitle || "Full Stack Developer & AI Engineer";

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#030712] px-6 py-16 text-white">
      <motion.div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#1e3a8a]/40 blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-10 top-20 h-80 w-80 rounded-full bg-[#1e3a8a]/30 blur-3xl"
        animate={{ opacity: [0.25, 0.6, 0.25], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[#1e3a8a]/30 blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
        <motion.div
          className="text-center lg:text-left"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">{greeting}</p>
          <h1 className="mt-4 text-4xl font-semibold uppercase tracking-tight sm:text-5xl lg:text-6xl">
            {name}
          </h1>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="relative h-[420px] w-[280px] rounded-[2.5rem] border border-white/15 bg-white/5 shadow-[0_0_60px_rgba(30,58,138,0.35)] overflow-hidden"
            style={{ clipPath: "polygon(12% 0%, 88% 0%, 100% 20%, 100% 88%, 85% 100%, 15% 100%, 0% 85%, 0% 18%)" }}
            animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* hero background video, with the cutout image layered on top when available */}
            {profile?.heroVideoUrl ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-55"
              >
                <source src={profile.heroVideoUrl} type="video/mp4" />
              </video>
            ) : null}

            {profile?.heroImageUrl ? (
              <img
                src={profile.heroImageUrl}
                alt="Hero cutout"
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.4em] text-white/40">
                PNG Cutout
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div
            className="text-sm font-semibold uppercase tracking-[0.5em] text-white/70"
            style={{ writingMode: "vertical-rl" }}
          >
            {roleTitle}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
