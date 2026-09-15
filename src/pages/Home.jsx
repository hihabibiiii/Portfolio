import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/UI/SectionHeading';
import SectionTransition from '../components/UI/SectionTransition';
import Seo from '../components/UI/Seo';
import { personal, seo } from '../data/personal';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';

const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <>
      <Seo title={seo.home.title} description={seo.home.description} />

      {/* ─── HERO ─── */}
      <section className="container-main">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        >
          {/* Left — Content */}
          <div className="max-w-2xl pt-8 lg:pt-16">
            <motion.span variants={fadeUp} className="eyebrow">
              {personal.heroEyebrow}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="heading-xl mt-6 whitespace-pre-line"
            >
              {personal.heroTitle}
            </motion.h1>

            <motion.p variants={fadeUp} className="body-lg mt-6 max-w-lg">
              {personal.heroIntro}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/projects" className="btn-primary">
                View Projects
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={fadeUp}
              className="mt-8 inline-flex items-center gap-2 text-sm text-secondary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {personal.heroNote}
            </motion.div>
          </div>

          {/* Right — Typographic composition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden select-none lg:block"
            aria-hidden="true"
          >
            <div className="relative mt-8 rounded-2xl border border-border bg-surface/50 p-8">
              <div className="space-y-3 font-display">
                <div className="text-5xl font-bold leading-none tracking-tight text-primary/10">
                  HABIBULLAH
                </div>
                <div className="text-4xl font-bold leading-none tracking-tight text-primary/8">
                  SALMANI
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-semibold text-accent/60">DEVELOPER</span>
                </div>
                <div className="flex gap-6">
                  <span className="text-2xl font-semibold text-primary/10">DATA</span>
                  <span className="text-2xl font-semibold text-primary/6">SCIENCE</span>
                </div>
                <div className="text-xl font-medium text-muted/40">MACHINE LEARNING</div>
                <div className="flex gap-6">
                  <span className="text-lg text-primary/8">AI</span>
                  <span className="text-lg text-primary/6">FULL STACK</span>
                  <span className="text-lg text-accent/30">PYTHON</span>
                </div>
                <div className="text-sm text-muted/30">REACT · FASTAPI · SCIKIT-LEARN</div>
              </div>
              {/* Subtle grid lines */}
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="mt-32">
        <SectionHeading eyebrow="Expertise" title="Skills & Technologies" />
        <div className="container-main mt-10">
          <SectionTransition>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group, gi) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.08 }}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {group.title}
                  </h3>
                  <div className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <p key={item} className="text-sm text-secondary">{item}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionTransition>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      {personal.process && (
        <section className="mt-32">
          <SectionHeading eyebrow="How I Work" title="Process" />
          <div className="container-main mt-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {personal.process.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="border-t border-border pt-6"
                >
                  <span className="font-display text-3xl font-bold text-accent/40">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="mt-32">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description={personal.homeProjectsSubtitle}
        />
        <div className="container-main mt-10">
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link to="/projects" className="btn-secondary">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
