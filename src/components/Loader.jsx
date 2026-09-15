import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-bg"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4"
      >
        <div className="font-display text-2xl font-bold tracking-[0.2em] text-primary">
          HS
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className="h-px w-12 origin-left bg-accent"
        />
      </motion.div>
    </motion.div>
  );
}
