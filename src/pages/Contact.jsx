import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/UI/SectionHeading';
import SectionTransition from '../components/UI/SectionTransition';
import Seo from '../components/UI/Seo';
import { personal, seo } from '../data/personal';

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  'Twitter / X': Twitter,
  Instagram: Instagram,
};

export default function Contact() {
  return (
    <>
      <Seo title={seo.contact.title} description={seo.contact.description} />
      <Breadcrumbs />

      <section>
        <div className="container-main">
          {/* Big headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="eyebrow">Contact</span>
            <h1 className="heading-xl mt-4">Have a project<br />in mind?</h1>
            <p className="body-lg mt-6 max-w-lg">{personal.contactIntro}</p>
          </motion.div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
            {/* Contact details */}
            <SectionTransition>
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="card group flex items-center justify-between p-5 transition-colors hover:border-secondary/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Email</p>
                      <p className="mt-0.5 text-sm font-medium text-primary">{personal.email}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/hihabibiiii"
                  target="_blank"
                  rel="noreferrer"
                  className="card group flex items-center justify-between p-5 transition-colors hover:border-secondary/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated">
                      <Github size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">GitHub</p>
                      <p className="mt-0.5 text-sm font-medium text-primary">github.com/hihabibiiii</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </a>

                {/* Location */}
                <div className="card flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Location</p>
                    <p className="mt-0.5 text-sm font-medium text-primary">{personal.location}</p>
                  </div>
                </div>
              </div>
            </SectionTransition>

            {/* Social links */}
            <SectionTransition>
              <div>
                <h3 className="eyebrow mb-6">Social</h3>
                <div className="grid grid-cols-2 gap-3">
                  {personal.social
                    .filter((item) => socialIcons[item.label])
                    .map((item) => {
                      const Icon = socialIcons[item.label];
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="card group flex items-center gap-3 p-4 transition-colors hover:border-secondary/30"
                        >
                          <Icon size={16} className="text-muted group-hover:text-accent transition-colors" />
                          <span className="text-sm text-secondary group-hover:text-primary transition-colors">{item.label}</span>
                        </a>
                      );
                    })}
                </div>

                <div className="mt-8">
                  <a href={`mailto:${personal.email}`} className="btn-primary w-full justify-center">
                    <Mail size={16} />
                    Send Email
                  </a>
                </div>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>
    </>
  );
}
