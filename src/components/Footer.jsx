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
    <footer className="relative z-10 border-t border-border">
      <div className="container-main py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-primary">
              {personal.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {personal.role}
            </p>
            <p className="mt-1 text-sm text-muted">{personal.location}</p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigation</p>
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-secondary transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              {personal.social.map((item) => {
                const Icon = icons[item.label];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="inline-flex items-center gap-2.5 text-sm text-secondary transition-colors hover:text-primary"
                  >
                    {Icon && <Icon size={14} />}
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {personal.name}
          </p>
          <p className="text-xs text-muted">{personal.footerText}</p>
        </div>
      </div>
    </footer>
  );
}
