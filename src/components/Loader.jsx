import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#080808]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center gap-5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/40 bg-card shadow-[0_0_30px_rgba(212,175,55,0.15)]">
          <span className="font-display text-xl font-bold tracking-widest gold-text">
            HS
          </span>
          <div className="absolute -inset-1.5 rounded-[18px] border border-accent/20" />
        </div>

        <div className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Habibullah Salmani
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="mx-auto mt-3 h-0.5 w-16 origin-center bg-accent"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
