import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

function buildSvgDataUrl(title, gradient) {
  const initials = title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${gradient[0]}" />
          <stop offset="50%" stop-color="${gradient[1]}" />
          <stop offset="100%" stop-color="${gradient[2]}" />
        </linearGradient>
      </defs>
      <rect width="800" height="480" rx="40" fill="#09111f" />
      <circle cx="170" cy="110" r="120" fill="url(#g)" opacity="0.55" />
      <circle cx="620" cy="340" r="180" fill="url(#g)" opacity="0.35" />
      <rect x="58" y="58" width="684" height="364" rx="28" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
      <text x="90" y="330" fill="#e2e8f0" font-family="Arial, sans-serif" font-size="132" font-weight="700">${initials}</text>
      <text x="94" y="392" fill="#7dd3fc" font-family="Arial, sans-serif" font-size="28" letter-spacing="8">PROJECT</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const gradients = {
  sky: ["#38bdf8", "#22d3ee", "#8b5cf6"],
  violet: ["#8b5cf6", "#ec4899", "#22d3ee"],
  cyan: ["#22d3ee", "#0f172a", "#38bdf8"],
  emerald: ["#34d399", "#22d3ee", "#8b5cf6"],
  warm: ["#fb923c", "#fbbf24", "#8b5cf6"],
  rose: ["#ec4899", "#fb7185", "#38bdf8"],
};

function gradientPalette(className) {
  if (className.includes("emerald")) return gradients.emerald;
  if (className.includes("orange") || className.includes("amber")) return gradients.warm;
  if (className.includes("rose") || className.includes("fuchsia")) return gradients.rose;
  if (className.includes("slate")) return gradients.cyan;
  if (className.includes("violet")) return gradients.violet;
  return gradients.sky;
}

export default function ProjectCard({ project, index }) {
  const palette = gradientPalette(project.gradient);
  const fallbackImage = buildSvgDataUrl(project.title, palette);
  const [imageSrc, setImageSrc] = useState(project.image || fallbackImage);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-glow backdrop-blur-xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition duration-500 group-hover:opacity-100`} />
      <div className="relative">
        <div className="overflow-hidden border-b border-white/10">
          <img
            src={imageSrc}
            alt={project.title}
            className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
            onError={() => setImageSrc(fallbackImage)}
          />
        </div>

        <div className="space-y-5 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">Project</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.tagline}</p>
          </div>

          <p className="text-sm leading-7 text-slate-200/90">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="secondary-button !px-4 !py-2.5"
            >
              <Github size={16} />
              <span>View Code (GitHub)</span>
            </a>

            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="primary-button !px-4 !py-2.5"
              >
                <span>{project.liveLabel || "Live Demo"}</span>
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="inline-flex items-center rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2.5 text-sm font-medium text-amber-100">
                {project.status}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
