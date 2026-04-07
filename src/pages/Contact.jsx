import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/UI/SectionHeading";
import SectionTransition from "../components/UI/SectionTransition";
import Seo from "../components/UI/Seo";
import { personal, seo } from "../data/personal";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  "Twitter / X": Twitter,
  Instagram: Instagram,
};

export default function Contact() {
  return (
    <>
      <Seo title={seo.contact.title} description={seo.contact.description} />
      <Breadcrumbs />

      <section className="space-y-6">
        <SectionHeading eyebrow="Contact" title="Contact" description={personal.contactSubtitle} />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTransition className="section-shell">
            <p className="text-sm leading-8 text-slate-200 sm:text-base">{personal.contactIntro}</p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                <div className="flex items-center gap-3 text-sky-200">
                  <Mail size={18} />
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Email</p>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="mt-3 block text-lg font-medium text-white transition hover:text-cyan-200"
                >
                  {personal.email}
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                <div className="flex items-center gap-3 text-sky-200">
                  <Github size={18} />
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">GitHub</p>
                </div>
                <a
                  href="https://github.com/hihabibiiii"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-lg font-medium text-white transition hover:text-cyan-200"
                >
                  github.com/hihabibiiii
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                <div className="flex items-center gap-3 text-sky-200">
                  <MapPin size={18} />
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Location</p>
                </div>
                <p className="mt-3 text-lg font-medium text-white">{personal.location}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
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
                      className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/30 hover:bg-white/10 hover:shadow-glow"
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
            </div>
          </SectionTransition>

          <SectionTransition className="section-shell">
            <motion.form
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              action={`mailto:${personal.email}`}
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Quick Message</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Send Email</h3>
              </div>

              <label className="block text-sm text-slate-200">
                <span className="mb-2 block">Name</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-glow"
                />
              </label>

              <label className="block text-sm text-slate-200">
                <span className="mb-2 block">Your Email</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-glow"
                />
              </label>

              <label className="block text-sm text-slate-200">
                <span className="mb-2 block">Message</span>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-glow"
                />
              </label>

              <button type="submit" className="primary-button">
                Send Email
              </button>
            </motion.form>
          </SectionTransition>
        </div>
      </section>
    </>
  );
}
