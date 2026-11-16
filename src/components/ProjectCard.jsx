import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Code2, Github, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0');
  const [imgError, setImgError] = useState(false);
  const isContain = project.objectFit === 'contain' || project.category === 'Android App Development';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
      className="group card card-hover relative flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Consistent 16:10 Aspect Ratio Screenshot Housing */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/80 bg-[#0c0d10]">
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className={`h-full w-full ${
                isContain
                  ? 'object-contain object-center'
                  : 'object-cover object-top'
              } transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
            />
          ) : (
            /* Fallback Graphic */
            <div className="flex h-full w-full flex-col items-center justify-center bg-card p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
                <Code2 size={24} />
              </div>
              <span className="mt-3 font-display text-xs font-semibold uppercase tracking-widest text-muted">
                {project.category || 'Engineering'} Project
              </span>
            </div>
          )}

          {/* Subtle Ambient Bottom Gradient (omitted for contained artwork to preserve complete graphics) */}
          {!isContain && (
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />
          )}

          {/* Top Badges: Category & Featured */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
            <span className="rounded-full border border-border/80 bg-[#080808]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent backdrop-blur-md">
              {project.category || 'General'}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent backdrop-blur-md">
                <Sparkles size={11} />
                <span>Featured</span>
              </span>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 sm:p-7">
          {/* Header Row: Index Number & Tagline */}
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold tracking-widest text-accent">
              /{number}
            </span>
            {project.tagline && (
              <span className="text-[11px] uppercase tracking-wider text-muted font-medium truncate max-w-[70%]">
                {project.tagline}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="heading-md mt-2.5 text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>

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
