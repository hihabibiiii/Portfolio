import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { useState } from 'react';

export default function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0');
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30"
    >
      {/* Image */}
      <div className="overflow-hidden border-b border-border">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-52 items-center justify-center bg-elevated">
            <span className="font-display text-4xl font-bold text-border">
              {number}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="text-xs font-medium text-accent">{number}</span>
            <h3 className="heading-md mt-1">{project.title}</h3>
          </div>
          {project.category && (
            <span className="mt-1 whitespace-nowrap text-xs text-muted">
              {project.category}
            </span>
          )}
        </div>

        <p className="body-sm mt-3 line-clamp-3">{project.description}</p>

        {/* Tech */}
        <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
          {project.tech.slice(0, 5).map((item, i) => (
            <span key={item} className="text-xs text-muted">
              {item}{i < Math.min(project.tech.length, 5) - 1 && <span className="ml-2 text-border">·</span>}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !px-4 !py-2 !text-xs"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={14} />
            <span>Code</span>
          </a>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !px-4 !py-2 !text-xs group/link"
              aria-label={`View live demo of ${project.title}`}
            >
              <span>{project.liveLabel || 'Live Demo'}</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          ) : project.status ? (
            <span className="text-xs text-muted">{project.status}</span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
