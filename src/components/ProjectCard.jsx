import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Code2, Github, Sparkles } from 'lucide-react';

const formatCategory = (cat) => {
  if (!cat) return 'Project';
  if (cat === 'Android App Development') return 'Android App';
  return cat;
};

export default function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0');
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
      className="group card card-hover relative flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Full-Bleed 16:9 Aspect Ratio Screenshot Housing (Clean, Unobstructed Image Area) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/80 bg-surface">
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="block h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            /* Fallback Graphic */
            <div className="flex h-full w-full flex-col items-center justify-center bg-card p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
                <Code2 size={24} />
              </div>
              <span className="mt-3 font-display text-xs font-semibold uppercase tracking-widest text-muted">
                {formatCategory(project.category)} Project
              </span>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6 sm:p-7">
          {/* Header Row: Category Pill, Featured Badge & Index Number */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {/* Small, Elegant Category Pill Badge */}
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-[#161616] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-champagne/90">
                {formatCategory(project.category)}
              </span>

              {/* Separate Small Featured Badge */}
              {project.featured && (
                <span className="inline-flex items-center gap-1 rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                  <Sparkles size={10} />
                  <span>Featured</span>
                </span>
              )}
            </div>

            {/* Index Number */}
            <span className="font-mono text-xs font-bold tracking-widest text-accent/80">
              /{number}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="heading-md mt-3 text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Tagline */}
          {project.tagline && (
            <p className="mt-1 text-xs uppercase tracking-wider text-muted font-medium">
              {project.tagline}
            </p>
          )}

          {/* Description */}
          <p className="body-sm mt-3 text-secondary line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-surface/80 px-2.5 py-1 text-[11px] font-medium text-secondary hover:border-accent/30 hover:text-primary transition-colors"
              >
                <span className="h-1 w-1 rounded-full bg-accent/60" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons Footer */}
      <div className="border-t border-border/80 bg-surface/30 p-6 sm:px-7 sm:py-5">
        <div className="flex items-center justify-between gap-3">
          {/* GitHub Repository Link */}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !px-4 !py-2.5 !text-xs gap-2"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={15} />
              <span>GitHub Code</span>
            </a>
          ) : (
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
              <span>Android Application</span>
            </div>
          )}

          {/* Live Demo, Play Store or Coming Soon Status */}
          {project.playStoreUrl || (project.live && project.live.length > 0) ? (
            <a
              href={project.playStoreUrl || project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !px-4 !py-2.5 !text-xs group/link gap-2"
              aria-label={`View live demo of ${project.title}`}
            >
              <span>{project.playStoreUrl ? 'Google Play' : (project.liveLabel || 'Live Demo')}</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-2 text-xs font-semibold text-accent cursor-not-allowed shadow-[0_0_12px_rgba(212,175,55,0.08)] opacity-95 transition-opacity"
              aria-label={`${project.title} - Coming Soon`}
              title="Coming Soon on Google Play Store"
            >
              <Clock size={13} className="text-accent" />
              <span>{project.status || 'Coming Soon'}</span>
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
