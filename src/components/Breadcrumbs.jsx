import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const labels = {
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  contact: 'Contact',
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="container-main mb-8 flex items-center gap-2 text-sm text-muted"
    >
      <Link
        to="/"
        className="transition-colors hover:text-primary"
      >
        Home
      </Link>
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`;
        const isLast = index === segments.length - 1;

        return (
          <div key={href} className="inline-flex items-center gap-2">
            <ChevronRight size={12} className="text-border" />
            {isLast ? (
              <span className="font-medium text-accent">{labels[segment] || segment}</span>
            ) : (
              <Link to={href} className="transition-colors hover:text-primary">
                {labels[segment] || segment}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
