import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/UI/SectionHeading';
import Seo from '../components/UI/Seo';
import { personal, seo } from '../data/personal';
import { projects } from '../data/projects';

const categories = [
  'All',
  'Android App Development',
  'Machine Learning',
  'Full Stack',
  'NLP',
  'Other',
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by both category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some((t) => t.toLowerCase().includes(query)) ||
        (project.tagline && project.tagline.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleReset = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <>
      <Seo title={seo.projects.title} description={seo.projects.description} />
      <Breadcrumbs />

      {/* Main Page Header */}
      <section>
        <SectionHeading
          eyebrow="Portfolio Archive"
          title="Featured Works & Projects"
          description={personal.projectsSubtitle}
        />

        {/* Filter & Search Bar Container */}
        <div className="container-main mt-12">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => {
                  const isSelected = activeCategory === cat;
                  const count =
                    cat === 'All'
                      ? projects.length
                      : projects.filter((p) => p.category === cat).length;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`relative flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                        isSelected
                          ? 'border border-accent/50 bg-accent text-[#080808] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                          : 'border border-border/80 bg-surface text-secondary hover:border-accent/40 hover:text-primary'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                          isSelected
                            ? 'bg-[#080808]/20 text-[#080808]'
                            : 'bg-elevated text-muted'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Real-Time Keyword Search Bar */}
              <div className="relative w-full lg:w-72">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="text"
                  placeholder="Filter by tech or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface py-2.5 pl-10 pr-9 text-xs text-primary placeholder-muted focus:border-accent/60 focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-primary"
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Active Status Strip */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4 text-xs text-muted">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>
                  Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> of {projects.length} verified projects
                </span>
                {activeCategory !== 'All' && (
                  <span className="text-secondary">in <span className="text-accent">{activeCategory}</span></span>
                )}
                {searchQuery && (
                  <span className="text-secondary">matching "<span className="text-primary">{searchQuery}</span>"</span>
                )}
              </div>

              {(activeCategory !== 'All' || searchQuery) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold text-accent hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Projects Responsive Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="mt-16 rounded-2xl border border-border bg-card p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              <Layers className="mx-auto h-12 w-12 text-muted/60" />
              <h3 className="mt-4 font-display text-xl font-bold text-primary">
                No matching projects found
              </h3>
              <p className="body-sm mx-auto mt-2 max-w-md text-secondary">
                No projects matched your search criteria for "{searchQuery}". Try clearing your search or choosing another category.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary mt-6 !text-xs !py-2.5 !px-5"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Bottom Collaboration Callout */}
          <div className="mt-32 rounded-3xl border border-accent/40 bg-gradient-to-b from-card to-[#080808] p-8 sm:p-14 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.08)]">
            <div className="mx-auto max-w-xl">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
                <Sparkles size={20} />
              </div>

              <h3 className="heading-md mt-4 sm:text-3xl">
                Need a Custom Machine Learning Model or Web Product?
              </h3>

              <p className="body-sm mt-3 text-secondary">
                I am actively seeking software engineering, machine learning, and data science roles where I can architect, test, and ship reliable end-to-end applications.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  <span>Start a Conversation</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={`mailto:${personal.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                  className="btn-secondary"
                >
                  Direct Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
