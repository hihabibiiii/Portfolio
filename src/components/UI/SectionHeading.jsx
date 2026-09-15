import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={centered ? 'container-main mx-auto max-w-3xl text-center' : 'container-main max-w-3xl'}
    >
      {eyebrow && <span className="eyebrow mb-3 inline-block">{eyebrow}</span>}
      <h2 className="heading-lg">{title}</h2>
      {description && (
        <p className="body-lg mt-4 max-w-2xl">{description}</p>
      )}
    </motion.div>
  );
}
