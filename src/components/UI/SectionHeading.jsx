import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow ? <span className="chip mb-4">{eyebrow}</span> : null}
      <h2 className="gradient-heading text-3xl font-bold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
      ) : null}
    </motion.div>
  );
}
