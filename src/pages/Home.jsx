import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/UI/SectionHeading';
import SectionTransition from '../components/UI/SectionTransition';
import Seo from '../components/UI/Seo';
import { personal, seo } from '../data/personal';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';

const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

const domainIcons = {
  'Data Science & AI': Cpu,
  'Full Stack Development': Code2,
  'Backend & Database': Database,
  'Tools & Deployment': Wrench,
};

const techTicker = [
  'Python',
  'React.js',
  'Machine Learning',
  'FastAPI',
  'Scikit-Learn',
  'Pandas & NumPy',
  'Tailwind CSS',
  'MongoDB',
  'Flask',
  'Streamlit',
  'REST APIs',
  'NLP & TF-IDF',
];

const marqueeList = [...techTicker, ...techTicker];

const heroMetrics = [
  { value: '17+', label: 'Shipped Projects', sub: 'ML, NLP & Web' },
  { value: 'End-to-End', label: 'Architecture', sub: 'Data to Deployment' },
  { value: '2025', label: 'Certified', sub: 'CS & Data Science' },
  { value: '100%', label: 'Commitment', sub: 'Clean, Tested Code' },
];

const pillars = [
  {
    num: '01',
    title: 'Machine Learning Pipelines',
    desc: 'From exploratory data analysis and feature engineering to predictive modeling with Scikit-learn, Random Forest, and SMOTE for imbalanced data.',
  },
  {
    num: '02',
    title: 'Performant Backend APIs',
    desc: 'Structuring typed, production-ready REST services with FastAPI and Flask to serve model inference with low latency and clean endpoints.',
  },
  {
    num: '03',
    title: 'Intuitive User Interfaces',
    desc: 'Crafting responsive, component-driven client applications using React, Tailwind CSS, and Framer Motion with fluid micro-interactions.',
  },
];

// Motion Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const photoFrameReveal = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.25,
    },
  },
};

export default function Home() {
  const [imgError, setImgError] = useState(false);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  return (
    <>
      <Seo title={seo.home.title} description={seo.home.description} />

      {/* ─── 1. HERO SECTION ─── */}
      <section className="container-main relative min-h-[88vh] flex items-center pt-2 pb-16 lg:pt-6 lg:pb-24 overflow-x-clip">
        {/* Subtle decorative background watermark */}
        <div className="pointer-events-none absolute -left-10 top-1/4 select-none font-display text-[12rem] font-black tracking-tighter text-[#D4AF37]/[0.015] sm:text-[18rem] lg:text-[22rem]">
          HS
        </div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Column: Sophisticated Animated Typography & Intro */}
          <div className="lg:col-span-7 z-10">
            {/* Gold Status Capsule */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/5 px-4 py-1.5 shadow-[0_0_20px_rgba(212,175,55,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                {personal.heroEyebrow}
              </span>
            </motion.div>

            {/* Editorial Title with Masked Reveal */}
            <div className="mt-6 overflow-hidden">
              <motion.h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight text-primary sm:text-6xl lg:text-[4.5rem]">
                <div className="overflow-hidden">
                  <motion.span variants={wordReveal} className="inline-block">
                    Habibullah
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={wordReveal} className="inline-block gold-text">
                    Salmani
                  </motion.span>
                </div>
              </motion.h1>
            </div>

            {/* Role & Core Focus */}
            <motion.p
              variants={fadeUp}
              className="mt-4 font-display text-xl font-medium tracking-wide text-secondary sm:text-2xl"
            >
              {personal.heroRole}
            </motion.p>

            {/* Introduction Narrative */}
            <motion.p
              variants={fadeUp}
              className="body-lg mt-6 max-w-xl text-secondary/90 leading-relaxed font-light"
            >
              {personal.heroIntro}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link to="/projects" className="btn-primary group">
                <span>Explore Projects</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>

              <Link to="/contact" className="btn-secondary group">
                <span>Contact Me</span>
                <span className="text-accent/60 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </motion.div>

            {/* Social Connectivity & Availability Strip */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-6 border-t border-border/70 pt-6"
            >
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/hihabibiiii"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-secondary transition-all duration-300 hover:border-accent/60 hover:bg-elevated hover:text-accent hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/habibullah-salmani-49385928b/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-secondary transition-all duration-300 hover:border-accent/60 hover:bg-elevated hover:text-accent hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-secondary transition-all duration-300 hover:border-accent/60 hover:bg-elevated hover:text-accent hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                  aria-label="Direct Email"
                >
                  <Mail size={18} />
                </a>
              </div>

              <div className="hidden h-6 w-px bg-border sm:block" />

              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-medium text-secondary">{personal.heroNote}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Focus - Art-Directed Profile Photograph */}
          <motion.div
            variants={photoFrameReveal}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="relative group">
              {/* Outer Decorative Ambient Aura */}
              <div className="absolute -inset-4 rounded-3xl bg-accent/5 blur-xl transition-all duration-700 group-hover:bg-accent/10" />

              {/* Geometric Double Outer Borders with Registration Crosshairs */}
              <div className="absolute -inset-3.5 rounded-2xl border border-accent/25 transition-all duration-500 group-hover:border-accent/40" />
              <div className="absolute -inset-7 rounded-3xl border border-border/40 pointer-events-none hidden sm:block" />

              {/* Architectural Gold Corner Brackets */}
              <div className="absolute -top-2.5 -left-2.5 h-12 w-12 rounded-tl-lg border-t-2 border-l-2 border-accent shadow-[0_0_12px_rgba(212,175,55,0.4)]" />
              <div className="absolute -bottom-2.5 -right-2.5 h-12 w-12 rounded-br-lg border-b-2 border-r-2 border-accent shadow-[0_0_12px_rgba(212,175,55,0.4)]" />

              {/* Corner Registration Crosshair Accents */}
              <span className="absolute -top-7 -right-7 hidden text-[11px] font-mono text-accent/40 sm:block">+</span>
              <span className="absolute -bottom-7 -left-7 hidden text-[11px] font-mono text-accent/40 sm:block">+</span>

              {/* Main Photo Housing */}
              <div className="relative h-[390px] w-[260px] min-[380px]:h-[420px] min-[380px]:w-[280px] sm:h-[480px] sm:w-[320px] lg:h-[510px] lg:w-[340px] overflow-hidden rounded-2xl border-2 border-accent/40 bg-[#0c0f14] shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,55,0.12)]">
                {!imgError ? (
                  <img
                    src="/profie.png"
                    alt="Habibullah Salmani - Data Scientist and Full Stack Developer"
                    loading="eager"
                    fetchPriority="high"
                    className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Elegant Gold Monogram Fallback */
                  <div className="flex h-full w-full flex-col items-center justify-center bg-card p-6 text-center">
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-accent/40 bg-accent/10 shadow-[0_0_24px_rgba(212,175,55,0.25)]">
                      <span className="font-display text-4xl font-bold tracking-widest gold-text">
                        HS
                      </span>
                      <div className="absolute -inset-2 rounded-[20px] border border-accent/20" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold text-primary">
                      Habibullah Salmani
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-accent">
                      Data Scientist & Developer
                    </p>
                  </div>
                )}
              </div>

              {/* Floating Bottom Verified Badge (Positioned at frame base so photo remains 100% visible and uncropped) */}
              <div className="absolute -bottom-4 inset-x-2 min-[380px]:inset-x-3 sm:-bottom-5 sm:inset-x-5 z-20 rounded-xl border border-accent/30 bg-[#080808]/95 p-3 sm:p-3.5 backdrop-blur-md shadow-[0_12px_28px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.1)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                      <Sparkles size={12} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary leading-tight">
                        Habibullah Salmani
                      </p>
                      <p className="text-[10px] text-muted">
                        Data Science · ML · Full Stack
                      </p>
                    </div>
                  </div>
                  <span className="rounded bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/30">
                    India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── CONTINUOUS TECH TICKER MARQUEE ─── */}
      <section
        className="relative w-full border-y border-border/80 bg-card/60 py-4 overflow-hidden select-none"
        onMouseEnter={() => setIsMarqueePaused(true)}
        onMouseLeave={() => setIsMarqueePaused(false)}
        onTouchStart={() => setIsMarqueePaused(true)}
        onTouchEnd={() => setIsMarqueePaused(false)}
        aria-label="Core Technology Stack"
      >
        {/* Subtle Edge Vignettes for Seamless Luxury Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-bg to-transparent" />

        {/* Marquee Animation Track */}
        <div
          className="flex w-max animate-marquee"
          style={{
            animationPlayState: isMarqueePaused ? 'paused' : 'running',
          }}
        >
          {/* Primary Track Set */}
          <div className="flex items-center shrink-0">
            {marqueeList.map((item, idx) => (
              <div key={`track-a-${item}-${idx}`} className="flex items-center shrink-0">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary/80 transition-colors duration-200 hover:text-accent cursor-default">
                  {item}
                </span>
                <span className="mx-6 text-accent/50 font-mono text-xs select-none" aria-hidden="true">
                  /
                </span>
              </div>
            ))}
          </div>

          {/* Seamless Duplicate Track for Infinite Loop */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {marqueeList.map((item, idx) => (
              <div key={`track-b-${item}-${idx}`} className="flex items-center shrink-0">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary/80 transition-colors duration-200 hover:text-accent cursor-default">
                  {item}
                </span>
                <span className="mx-6 text-accent/50 font-mono text-xs select-none">
                  /
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. PREMIUM INTRODUCTION & PHILOSOPHY SECTION ─── */}
      <section className="mt-32">
        <div className="container-main">
          {/* Section Heading */}
          <SectionTransition>
            <span className="eyebrow">01 / Philosophy & Method</span>
            <h2 className="heading-lg mt-3 max-w-3xl">
              I connect clean, intuitive interfaces with <span className="gold-text">intelligent backend and predictive logic</span>.
            </h2>
            <p className="body-lg mt-4 max-w-2xl text-secondary">
              A comprehensive approach from raw dataset acquisition and cleaning to algorithm tuning, containerized REST API endpoints, and reactive web applications.
            </p>
          </SectionTransition>

          {/* 3 Architectural Pillars */}
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card card-hover relative p-8 group overflow-hidden"
              >
                {/* Subtle Top Accent Notch */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent group-hover:via-accent transition-all duration-500" />

                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-bold text-accent/35 group-hover:text-accent transition-colors">
                    {pillar.num}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>

                <p className="body-sm mt-3 text-secondary leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Metrics Counter Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-4 sm:p-8">
            {heroMetrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`text-center ${
                  i !== heroMetrics.length - 1 ? 'sm:border-r sm:border-border/80' : ''
                }`}
              >
                <p className="font-display text-3xl font-bold gold-text sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  {metric.label}
                </p>
                <p className="text-[11px] text-muted">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. ANIMATED SKILLS & TECHNOLOGIES SECTION ─── */}
      <section className="mt-36">
        <SectionHeading
          eyebrow="02 / Technical Competence"
          title="Skills & Technologies"
          description="Modular engineering stack covering machine learning algorithms, full-stack architectures, databases, and deployment services."
        />

        <div className="container-main mt-14">
          <SectionTransition>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group, gi) => {
                const Icon = domainIcons[group.title] || Code2;
                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: gi * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="card card-hover relative flex flex-col justify-between p-7 group"
                  >
                    <div>
                      {/* Domain Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent transition-colors group-hover:border-accent group-hover:bg-accent/20">
                          <Icon size={18} />
                        </div>
                        <span className="font-mono text-xs text-accent/50 font-semibold">
                          0{gi + 1}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-lg font-bold text-primary group-hover:text-accent transition-colors">
                        {group.title}
                      </h3>

                      {group.description && (
                        <p className="mt-2 text-xs text-muted leading-relaxed line-clamp-2">
                          {group.description}
                        </p>
                      )}

                      {/* Skill Items */}
                      <div className="mt-5 space-y-2">
                        {group.items.slice(0, 7).map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded border border-border/40 bg-surface/60 px-2.5 py-1.5 text-xs text-secondary transition-colors group-hover:border-accent/25 hover:text-primary"
                          >
                            <span>{item}</span>
                            <span className="h-1 w-1 rounded-full bg-accent/60" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-border/70 pt-4 text-right">
                      <span className="text-[11px] font-semibold text-accent/80 group-hover:text-accent transition-colors">
                        {group.items.length} Technologies →
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Direct Link to Full Skills Page */}
            <div className="mt-12 text-center">
              <Link to="/skills" className="btn-secondary !text-xs !py-3 !px-7">
                <span>Explore Full Technical Breakdown</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionTransition>
        </div>
      </section>

      {/* ─── 4. HOW I WORK (PROCESS TIMELINE) ─── */}
      {personal.process && (
        <section className="mt-36">
          <SectionHeading
            eyebrow="03 / Methodology"
            title="The Engineering Process"
            description="A disciplined workflow designed to move from problem framing to tested, production-grade applications."
          />
          <div className="container-main mt-14">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {personal.process.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card card-hover p-6 relative group"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-3xl font-bold text-accent/40 group-hover:text-accent transition-colors">
                      {item.step}
                    </span>
                    <span className="text-xs text-muted font-mono uppercase">Phase 0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="body-sm mt-2.5 text-secondary">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 5. ELEGANT FEATURED PROJECTS SECTION ─── */}
      <section className="mt-36">
        <SectionHeading
          eyebrow="04 / Selected Case Studies"
          title="Featured Projects"
          description={personal.homeProjectsSubtitle}
        />

        <div className="container-main mt-14">
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <Link to="/projects" className="btn-primary !px-8">
              <span>View All 17 Archive Projects</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 6. PREMIUM CALL TO ACTION SECTION ─── */}
      <section className="container-main mt-40">
        <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-b from-card via-[#111111] to-[#080808] p-8 sm:p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.08)]">
          {/* Subtle Ambient Gold Radiance */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-64 w-96 rounded-full bg-accent/10 blur-3xl" />

          {/* Architectural Frame Corners */}
          <div className="absolute top-3 left-3 h-8 w-8 rounded-tl-lg border-t-2 border-l-2 border-accent/60" />
          <div className="absolute top-3 right-3 h-8 w-8 rounded-tr-lg border-t-2 border-r-2 border-accent/60" />
          <div className="absolute bottom-3 left-3 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-accent/60" />
          <div className="absolute bottom-3 right-3 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-accent/60" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="eyebrow">Initiate Contact</span>

            <h2 className="heading-lg mt-4 sm:text-5xl">
              Have a project or engineering role in mind?{' '}
              <span className="gold-text">Let's build together.</span>
            </h2>

            <p className="body-lg mx-auto mt-5 text-secondary">
              I am open to full-time roles, contracts, and engineering collaborations across Data Science, Machine Learning, and Full Stack Development.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary !px-8 !py-4 text-xs tracking-wider uppercase">
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href={`mailto:${personal.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                className="btn-secondary !px-8 !py-4 text-xs tracking-wider uppercase"
              >
                <span>Direct Email</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Quick Availability Footer Note */}
            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Available for immediate employment & high-impact opportunities</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
