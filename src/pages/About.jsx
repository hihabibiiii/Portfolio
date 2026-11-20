import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Bot,
  Brain,
  Code2,
  Database,
  GraduationCap,
  Layers,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/UI/SectionHeading';
import SectionTransition from '../components/UI/SectionTransition';
import Seo from '../components/UI/Seo';
import { personal, seo } from '../data/personal';
import { skillGroups } from '../data/skills';

const technicalInterests = [
  {
    icon: Brain,
    title: 'Machine Learning & Predictive Systems',
    description:
      'Designing, evaluating, and deploying classification and regression models using Scikit-Learn, Random Forest, and SMOTE for imbalanced real-world datasets.',
  },
  {
    icon: Database,
    title: 'Recommendation Systems & NLP',
    description:
      'Applying TF-IDF vectorization, cosine similarity, and content-based recommendation logic for intelligent information discovery and text classification.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Web Engineering',
    description:
      'Architecting reactive, component-driven client applications with React, Tailwind CSS, and Framer Motion linked to modular Python backends.',
  },
  {
    icon: Bot,
    title: 'Process Automation & Bots',
    description:
      'Creating end-to-end automated tools, Telegram bots, and background pipelines that solve workflow friction and notify stakeholders instantly.',
  },
];

const journeyMilestones = [
  {
    period: '2022 — 2025',
    tag: 'Academic Foundation',
    title: 'Diploma in Computer Science',
    institution: 'J S University, Sikohabad, Uttar Pradesh',
    details:
      'Built a strong foundation in computer science principles, object-oriented programming with C++, data structures, algorithms, and core web fundamentals.',
    icon: GraduationCap,
  },
  {
    period: '2024 — 2025',
    tag: 'Specialization',
    title: 'Data Science Course Completion',
    institution: 'Professional Data Science Certification',
    details:
      'Deepened expertise across exploratory data analysis, Pandas, NumPy, statistical modeling, machine learning workflows, and data preprocessing for production.',
    icon: Award,
  },
  {
    period: '2025 — Present',
    tag: 'Applied Engineering',
    title: '19 End-to-End Shipped Projects',
    institution: 'Applied Machine Learning & Web Architecture',
    details:
      'Architected and shipped a diverse portfolio of 19 projects spanning disease prediction, financial fraud detection, house valuation, NLP fake news classification, and full-stack applications.',
    icon: Layers,
  },
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <Seo title={seo.about.title} description={seo.about.description} />
      <Breadcrumbs />

      {/* ─── 1. ABOUT HERO & INTRO WITH PROFILE PHOTO ─── */}
      <section>
        <SectionHeading
          eyebrow="Profile Overview"
          title="About Habibullah Salmani"
          description={personal.aboutSubtitle}
        />

        <div className="container-main mt-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Art-Directed Profile Photograph */}
            <SectionTransition className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative group w-[260px] min-[380px]:w-[280px] sm:w-[320px] lg:w-[340px]">
                {/* Ambient Glow */}
                <div className="absolute -inset-4 rounded-3xl bg-accent/5 blur-xl transition-all duration-700 group-hover:bg-accent/10" />

                {/* Double Geometric Borders */}
                <div className="absolute -inset-3.5 rounded-2xl border border-accent/30 transition-all duration-500 group-hover:border-accent/50" />
                <div className="absolute -inset-7 rounded-3xl border border-border/40 pointer-events-none hidden sm:block" />

                {/* Corner Gold Brackets */}
                <div className="absolute -top-2.5 -left-2.5 h-10 w-10 rounded-tl-lg border-t-2 border-l-2 border-accent" />
                <div className="absolute -bottom-2.5 -right-2.5 h-10 w-10 rounded-br-lg border-b-2 border-r-2 border-accent" />

                {/* Profile Image Frame */}
                <div className="relative h-[390px] w-[260px] min-[380px]:h-[420px] min-[380px]:w-[280px] sm:h-[480px] sm:w-[320px] lg:h-[510px] lg:w-[340px] overflow-hidden rounded-2xl border-2 border-accent/40 bg-surface dark:bg-[#0c0f14] shadow-card-hover dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  {!imgError ? (
                    <img
                      src="/profie.png"
                      alt="Habibullah Salmani - Data Scientist and Full Stack Developer"
                      loading="eager"
                      className="h-full w-full object-contain object-center transition-transform duration-700 hover:scale-[1.02]"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-card p-6 text-center">
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-accent/40 bg-accent/10 shadow-[0_0_24px_rgba(212,175,55,0.2)]">
                        <span className="font-display text-4xl font-bold tracking-widest gold-text">
                          HS
                        </span>
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

                {/* Bottom info strip positioned cleanly outside frame */}
                <div className="absolute -bottom-4 inset-x-3 sm:-bottom-5 sm:inset-x-5 z-20 rounded-xl border border-accent/30 bg-bg/95 p-3 sm:p-3.5 backdrop-blur-md shadow-card dark:shadow-[0_12px_28px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-accent" />
                      <span className="text-xs font-medium text-primary">
                        {personal.location}
                      </span>
                    </div>
                    <span className="rounded bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase text-accent border border-accent/30">
                        Open for Roles
                      </span>
                    </div>
                  </div>
                </div>
            </SectionTransition>

            {/* Right Column: Professional Narrative */}
            <SectionTransition className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <Sparkles size={14} />
                <span>The Story & Perspective</span>
              </div>

              <h3 className="heading-md text-primary">
                Connecting clean, responsive user interfaces with <span className="gold-text">robust backend and predictive ML logic</span>.
              </h3>

              <div className="space-y-5 text-secondary leading-relaxed font-light">
                {personal.aboutParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="body-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Engineering Philosophy Quote Callout */}
              <div className="rounded-2xl border border-accent/30 bg-card p-6 shadow-card dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
                    <Terminal size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                      End-to-End Building Mindset
                    </h4>
                    <p className="body-sm mt-1.5 text-secondary/90">
                      "I structure projects comprehensively: starting with rigorous data cleaning and model validation, through performant REST endpoints, to a responsive, human-centered frontend."
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/projects" className="btn-primary">
                  <span>Explore All 19 Projects</span>
                  <ArrowRight size={16} />
                </Link>

                <Link to="/contact" className="btn-secondary">
                  <span>Get in Touch</span>
                </Link>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* ─── 2. DEVELOPER JOURNEY & EDUCATION TIMELINE ─── */}
      <section className="mt-36">
        <SectionHeading
          eyebrow="Chronology"
          title="Developer Journey & Education"
          description="A verifiable record of academic training, specialized credentials, and hands-on software development."
        />

        <div className="container-main mt-14">
          <div className="relative mx-auto max-w-4xl">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent/50 via-accent/25 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-12">
              {journeyMilestones.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Center Node / Dot */}
                    <div className="absolute left-4 -translate-x-1/2 sm:left-1/2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-bg text-accent shadow-gold-sm dark:shadow-[0_0_15px_rgba(212,175,55,0.4)] z-10">
                      <Icon size={14} />
                    </div>

                    {/* Content Card Container */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                        isEven ? 'sm:text-left sm:mr-auto' : 'sm:text-left sm:ml-auto'
                      }`}
                    >
                      <div className="card card-hover p-6 sm:p-7 relative group">
                        {/* Period & Tag */}
                        <div className="flex items-center justify-between gap-3 border-b border-border/80 pb-3">
                          <span className="font-display text-xs font-bold uppercase tracking-wider text-accent">
                            {item.period}
                          </span>
                          <span className="rounded bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted border border-border">
                            {item.tag}
                          </span>
                        </div>

                        {/* Title & Institution */}
                        <h4 className="mt-4 font-display text-lg font-bold text-primary group-hover:text-accent transition-colors">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs font-medium text-secondary">
                          {item.institution}
                        </p>

                        {/* Description */}
                        <p className="body-sm mt-3 text-secondary/90 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. TECHNICAL INTERESTS & SPECIALIZATIONS ─── */}
      <section className="mt-36">
        <SectionHeading
          eyebrow="Domains of Focus"
          title="Technical Interests & Expertise"
          description="Areas where I bring deep curiosity, hands-on implementation experience, and strong problem-solving skills."
        />

        <div className="container-main mt-14">
          <SectionTransition>
            <div className="grid gap-6 sm:grid-cols-2">
              {technicalInterests.map((interest, idx) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="card card-hover p-8 relative group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent/20">
                        <Icon size={22} />
                      </div>
                      <div className="flex-1">
                        <span className="font-mono text-xs font-semibold text-accent/50">
                          0{idx + 1}
                        </span>
                        <h4 className="font-display text-lg font-bold text-primary group-hover:text-accent transition-colors">
                          {interest.title}
                        </h4>
                      </div>
                    </div>

                    <p className="body-sm mt-4 text-secondary leading-relaxed">
                      {interest.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </SectionTransition>
        </div>
      </section>

      {/* ─── 4. SKILLS OVERVIEW MATRIX ─── */}
      <section className="mt-36">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills Overview"
          description="The frameworks, languages, and toolsets utilized across projects."
        />

        <div className="container-main mt-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.08 }}
                className="card card-hover p-6"
              >
                <div className="flex items-center justify-between border-b border-border/80 pb-3">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {group.title}
                  </h4>
                  <span className="text-[10px] font-mono text-muted">{group.items.length} items</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-surface px-2.5 py-1 text-xs text-secondary hover:border-accent/40 hover:text-primary transition-colors"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent/60" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/skills" className="btn-secondary !text-xs !py-3 !px-7">
              <span>View In-Depth Technical Breakdown</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 5. COLLABORATION CTA ─── */}
      <section className="container-main mt-36">
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-b from-card to-bg p-8 sm:p-14 text-center shadow-card-hover dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.08)]">
          <div className="mx-auto max-w-xl">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Sparkles size={18} />
            </div>
            <h3 className="heading-md mt-4">
              Looking for an End-to-End Developer?
            </h3>
            <p className="body-sm mt-3 text-secondary">
              I am open to opportunities in Data Science, Machine Learning, and Full Stack Development. Let's discuss how my skills align with your objectives.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn-secondary">
                <span>View Portfolio Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
