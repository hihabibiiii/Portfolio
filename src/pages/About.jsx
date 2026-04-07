import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/UI/SectionHeading";
import SectionTransition from "../components/UI/SectionTransition";
import Seo from "../components/UI/Seo";
import { personal, seo } from "../data/personal";
import { skillGroups } from "../data/skills";

export default function About() {
  return (
    <>
      <Seo title={seo.about.title} description={seo.about.description} />
      <Breadcrumbs />

      <section className="space-y-6">
        <SectionHeading eyebrow="About Me" title="About Me" description={personal.aboutSubtitle} />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionTransition className="section-shell space-y-5">
            {personal.aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-8 text-slate-200 sm:text-base">
                {paragraph}
              </p>
            ))}
          </SectionTransition>

          <SectionTransition className="section-shell">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              Education
            </p>
            <div className="mt-6 space-y-5">
              {personal.education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative rounded-3xl border border-white/10 bg-slate-950/50 p-5"
                >
                  <div className="absolute left-5 top-5 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.75)]" />
                  <div className="pl-8">
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    {item.subtitle ? (
                      <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionTransition>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Skills Overview"
          title="Skills Overview"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass-panel p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-cyan-100">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-slate-400">{group.level}%</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{group.items}</p>
                <div className="mt-5 h-2 rounded-full bg-slate-900">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400"
                    style={{ width: `${group.level}%` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
