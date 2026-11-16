import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/UI/SectionHeading';
import SectionTransition from '../components/UI/SectionTransition';
import Seo from '../components/UI/Seo';
import { personal, seo } from '../data/personal';
import { skillGroups } from '../data/skills';

const groupIcons = {
  'Data Science & AI': Cpu,
  'Full Stack Development': Code2,
  'Backend & Database': Database,
  'Tools & Deployment': Wrench,
};

const competencies = [
  {
    title: 'End-to-End Machine Learning',
    description: 'From exploratory data analysis and feature engineering to model training, hyperparameter tuning, and production inference.',
  },
  {
    title: 'High-Performance REST APIs',
    description: 'Constructing performant, typed backend endpoints with FastAPI and Flask to serve predictive model outputs in real time.',
  },
  {
    title: 'Modern Frontend Engineering',
    description: 'Designing intuitive, highly responsive user interfaces with React, Tailwind CSS, and Framer Motion with attention to micro-interactions.',
  },
  {
    title: 'Production Deployment',
    description: 'Deploying machine learning applications and full-stack services across cloud platforms like Streamlit Community Cloud, Render, and Netlify.',
  },
];

export default function Skills() {
  return (
    <>
      <Seo title={seo.skills.title} description={seo.skills.description} />
      <Breadcrumbs />

      {/* Main Header */}
      <section>
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills & Competencies"
          description={personal.skillsSubtitle}
        />

        {/* Skill Category Cards */}
        <div className="container-main mt-12">
          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((group, gi) => {
              const Icon = groupIcons[group.title] || Code2;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: gi * 0.08 }}
                  className="card card-hover flex flex-col justify-between p-8"
                >
                  <div>
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          Domain {String(gi + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-display text-xl font-bold text-primary">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    {group.description && (
                      <p className="body-sm mt-4 text-secondary">
                        {group.description}
                      </p>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-secondary transition-colors hover:border-accent/40 hover:text-primary"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Competencies Highlight */}
      <section className="mt-32">
        <SectionHeading
          eyebrow="Capabilities"
          title="Core Competencies"
          description="How I combine statistical rigor with modern engineering standards to build reliable digital systems."
        />

        <div className="container-main mt-12">
          <SectionTransition>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {competencies.map((comp, idx) => (
                <motion.div
                  key={comp.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle2 size={16} />
                  </div>
                  <h4 className="mt-4 font-display text-base font-semibold text-primary">
                    {comp.title}
                  </h4>
                  <p className="body-sm mt-2.5 text-xs leading-relaxed text-secondary">
                    {comp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </SectionTransition>

          {/* Action Link to Projects */}
          <div className="mt-16 text-center">
            <Link to="/projects" className="btn-primary">
              See Skills Applied in Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
