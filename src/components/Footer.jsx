import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigation, personal } from '../data/personal';

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  'Twitter / X': Twitter,
  Instagram: Instagram,
  Email: Mail,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-bg">
      <div className="container-main py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand & Identity */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block font-display text-lg font-bold tracking-wider gold-text">
              {personal.name}
            </Link>
            <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-secondary">
              {personal.role} based in {personal.location}. Developing end-to-end intelligent systems, machine learning pipelines, and full-stack web products.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>Available for full-time roles & projects</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow mb-4">Navigation</p>
            <div className="flex flex-col gap-2.5">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-xs uppercase tracking-wider text-secondary transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect / Social */}
          <div>
            <p className="eyebrow mb-4">Connect</p>
            <div className="flex flex-col gap-2.5">
              {personal.social.map((item) => {
                const Icon = icons[item.label];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="inline-flex items-center gap-2.5 text-xs uppercase tracking-wider text-secondary transition-colors hover:text-accent"
                  >
                    {Icon && <Icon size={14} className="text-accent/70" />}
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {year} <span className="text-secondary">{personal.name}</span>. All rights reserved.
          </p>
          <p>{personal.footerText}</p>
        </div>
      </div>
    </footer>
  );
}
