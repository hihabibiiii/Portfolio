import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { navigation, personal } from "../data/personal";

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  "Twitter / X": Twitter,
  Instagram: Instagram,
  Email: Mail,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel overflow-hidden">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-violet-400" />
          <div className="grid gap-8 px-6 py-8 md:grid-cols-3 md:px-8">
            <div>
              <p className="font-display text-lg font-bold text-white">{personal.name}</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">{personal.footerText}</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Quick Links
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="transition hover:text-cyan-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Social Links
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {personal.social.map((item) => {
                  const Icon = icons[item.label];

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/30 hover:bg-white/10 hover:shadow-glow"
                    >
                      {Icon ? <Icon size={16} /> : null}
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 px-6 py-4 text-center text-sm text-slate-400 md:px-8">
            © {year} Habibullah Salmani · All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
