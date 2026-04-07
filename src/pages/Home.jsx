import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/UI/SectionHeading";
import SectionTransition from "../components/UI/SectionTransition";
import Seo from "../components/UI/Seo";
import { personal, seo } from "../data/personal";
import { projects } from "../data/projects";
import { featuredSkills } from "../data/skills";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <Seo title={seo.home.title} description={seo.home.description} />

      <section className="relative">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="section-shell bg-hero-grid">
            <motion.span variants={heroItem} className="chip">
              {personal.heroKicker}
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              <span className="gradient-heading">{personal.heroTitle}</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              {personal.heroIntro}
            </motion.p>

            <motion.div variants={heroItem} className="mt-8 flex flex-wrap gap-3">
              {personal.heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-sm text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="primary-button">
                <span>View My All Projects</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="secondary-button">
                Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="section-shell flex flex-col justify-between"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles size={16} />
              <span>Open to opportunities</span>
            </div>

            <div className="mt-8 space-y-6">
              {personal.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{metric.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
                  {metric.badges ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {metric.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-cyan-300/20 bg-white/5 px-3 py-1.5 text-xs text-cyan-100"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-7 text-slate-300">{personal.heroNote}</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Skills Preview"
          title="Skills Overview"
        />
        <SectionTransition className="section-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5 text-center shadow-glow"
              >
                <div className="mx-auto mb-4 h-2 w-16 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400" />
                <p className="font-medium text-slate-100">{skill}</p>
              </motion.div>
            ))}
          </div>
        </SectionTransition>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Projects"
          description={personal.homeProjectsSubtitle}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
