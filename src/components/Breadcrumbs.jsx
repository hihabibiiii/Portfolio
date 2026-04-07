import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const labels = {
  about: "About",
  projects: "Projects",
  contact: "Contact",
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-sky-300/30 hover:text-white"
      >
        <Home size={14} />
        <span>Home</span>
      </Link>
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;

        return (
          <div key={href} className="inline-flex items-center gap-2">
            <ChevronRight size={14} />
            {isLast ? (
              <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-sky-200">
                {labels[segment]}
              </span>
            ) : (
              <Link
                to={href}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-sky-300/30 hover:text-white"
              >
                {labels[segment]}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
