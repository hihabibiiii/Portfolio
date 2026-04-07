import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-20 flex min-h-screen items-center justify-center overflow-hidden bg-night"
    >
      <div className="absolute h-64 w-64 animate-pulseGlow rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute h-72 w-72 rounded-full border border-cyan-300/20" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-panel relative flex flex-col items-center gap-4 px-8 py-7"
      >
        <div className="font-display text-3xl font-bold tracking-[0.28em] text-white">
          HS
        </div>
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <p className="text-xs uppercase tracking-[0.4em] text-sky-200">
          Loading Portfolio
        </p>
      </motion.div>
    </motion.div>
  );
}
