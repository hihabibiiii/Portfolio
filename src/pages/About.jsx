import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/UI/SectionHeading';
import SectionTransition from '../components/UI/SectionTransition';
import Seo from '../components/UI/Seo';
import { personal, seo } from '../data/personal';
import { skillGroups } from '../data/skills';

export default function About() {
  return (
    <>
      <Seo title={seo.about.title} description={seo.about.description} />
      <Breadcrumbs />

      {/* About intro */}
      <section>
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description={personal.aboutSubtitle}
        />

        <div className="container-main mt-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <SectionTransition>
              <div className="space-y-5">
                {personal.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="body-sm">
                    {paragraph}
                  </p>
                ))}
              </div>
            </SectionTransition>

            <SectionTransition>
              <div>
                <h3 className="eyebrow mb-6">Education</h3>
                <div className="space-y-4">
                  {personal.education.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="card p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                        <div>
                          <p className="font-medium text-primary">{item.title}</p>
                          {item.subtitle && (
                            <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-24">
        <SectionHeading eyebrow="Technical Skills" title="Skills & Expertise" />
        <div className="container-main mt-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.08 }}
                className="card p-6"
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  {group.title}
                </h3>
                <div className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span className="text-sm text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
