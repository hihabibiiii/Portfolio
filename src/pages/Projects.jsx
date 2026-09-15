import Breadcrumbs from '../components/Breadcrumbs';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/UI/SectionHeading';
import Seo from '../components/UI/Seo';
import { personal, seo } from '../data/personal';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <>
      <Seo title={seo.projects.title} description={seo.projects.description} />
      <Breadcrumbs />

      <section>
        <SectionHeading
          eyebrow="All Projects"
          title="Projects"
          description={personal.projectsSubtitle}
        />
        <div className="container-main mt-10">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
