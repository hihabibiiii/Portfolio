import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  Send,
  Sparkles,
  Twitter,
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTransition from '../components/UI/SectionTransition';
import Seo from '../components/UI/Seo';
import { personal, seo } from '../data/personal';

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  'Twitter / X': Twitter,
  Instagram: Instagram,
};

const workingPreferences = [
  { label: 'Primary Location', value: personal.location },
  { label: 'Work Mode', value: 'Remote / Hybrid / Relocation' },
  { label: 'Timezone', value: 'IST (UTC +5:30)' },
  { label: 'Response Time', value: 'Within 24 Hours' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subjectTopic, setSubjectTopic] = useState('Full-Time Software / Data Science Role');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    const formattedSubject = `[Inquiry] ${subjectTopic}${senderName ? ` - from ${senderName}` : ''}`;
    const formattedBody = `Hello Habibullah,

${message}

---
Sender Details:
Name: ${senderName || 'Not specified'}
Email: ${senderEmail || 'Not specified'}`;

    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formattedSubject
    )}&body=${encodeURIComponent(formattedBody)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <>
      <Seo title={seo.contact.title} description={seo.contact.description} />
      <Breadcrumbs />

      {/* ─── MAIN CONTACT SECTION ─── */}
      <section>
        <div className="container-main">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-4 py-1.5 shadow-[0_0_20px_rgba(212,175,55,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Direct Communication Channel
              </span>
            </div>

            <h1 className="heading-xl mt-5">
              Have a role or project in mind?{' '}
              <span className="gold-text">Let's talk.</span>
            </h1>

            <p className="body-lg mt-5 text-secondary">
              {personal.contactIntro}
            </p>
          </motion.div>

          {/* Contact Layout Grid */}
          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* ─── LEFT: PROFESSIONAL CONTACT CARDS ─── */}
            <SectionTransition className="lg:col-span-6 space-y-5">
              {/* Primary Email Card with Quick Copy */}
              <div className="card group relative overflow-hidden p-6 sm:p-7 border-accent/30 shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-accent/60">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent/20">
                      <Mail size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                        Primary Email
                      </span>
                      <p className="mt-0.5 font-display text-base sm:text-lg font-bold text-primary group-hover:text-accent transition-colors break-all">
                        {personal.email}
                      </p>
                    </div>
                  </div>

                  {/* 1-Click Copy Button */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check size={18} className="text-accent" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border/80 pt-4 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-accent" />
                    Replies typically within 24 hours
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-semibold text-accent hover:underline flex items-center gap-1"
                  >
                    Send Email <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* LinkedIn Professional Network Card */}
              <a
                href="https://www.linkedin.com/in/habibullah-salmani-49385928b/"
                target="_blank"
                rel="noreferrer"
                className="card card-hover group flex items-center justify-between p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                      Professional Network
                    </span>
                    <h3 className="mt-0.5 font-display text-base font-bold text-primary group-hover:text-accent transition-colors">
                      LinkedIn Profile
                    </h3>
                    <p className="text-xs text-secondary/80">
                      habibullah-salmani-49385928b
                    </p>
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:text-accent">
                  <ArrowUpRight size={16} />
                </div>
              </a>

              {/* GitHub Code Repositories Card */}
              <a
                href="https://github.com/hihabibiiii"
                target="_blank"
                rel="noreferrer"
                className="card card-hover group flex items-center justify-between p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Github size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                      Code Repositories
                    </span>
                    <h3 className="mt-0.5 font-display text-base font-bold text-primary group-hover:text-accent transition-colors">
                      GitHub Profile
                    </h3>
                    <p className="text-xs text-secondary/80">
                      github.com/hihabibiiii
                    </p>
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:text-accent">
                  <ArrowUpRight size={16} />
                </div>
              </a>

              {/* Location & Availability Overview Card */}
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  <Globe2 size={18} className="text-accent" />
                  <span className="font-display text-sm font-bold text-primary">
                    Availability & Logistics
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {workingPreferences.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-border/80 bg-surface/60 p-3"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                        {item.label}
                      </span>
                      <p className="mt-1 text-xs font-semibold text-primary">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Social Channels */}
              <div className="pt-2">
                <p className="eyebrow mb-3">Additional Channels</p>
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
                          className="card group flex items-center justify-between p-3.5 transition-colors hover:border-accent/40"
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon size={16} className="text-muted group-hover:text-accent transition-colors" />
                            <span className="text-xs font-medium text-secondary group-hover:text-primary transition-colors">
                              {item.label}
                            </span>
                          </div>
                          <ArrowUpRight size={13} className="text-muted group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      );
                    })}
                </div>
              </div>
            </SectionTransition>

            {/* ─── RIGHT: INTERACTIVE QUICK MESSAGE COMPOSER ─── */}
            <SectionTransition className="lg:col-span-6">
              <div className="card relative overflow-hidden p-8 sm:p-9 border-accent/40 bg-card shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.08)]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border/80 pb-5">
                  <div className="flex items-center gap-2.5 text-accent">
                    <Sparkles size={18} />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                      Interactive Message Composer
                    </span>
                  </div>
                  <span className="rounded bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/30">
                    Direct Mailto
                  </span>
                </div>

                <h3 className="heading-md mt-5">Draft an Inquiry</h3>
                <p className="body-sm mt-2 text-secondary">
                  Complete this form to generate a structured message that opens automatically in your email client.
                </p>

                {/* Form */}
                <form onSubmit={handleMailSubmit} className="mt-6 space-y-4">
                  {/* Sender Name & Email Row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name-input" className="block text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                        Your Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        placeholder="e.g. Jane Doe"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-xs text-primary placeholder-muted focus:border-accent/60 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email-input" className="block text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                        Your Email
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        placeholder="e.g. jane@company.com"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-xs text-primary placeholder-muted focus:border-accent/60 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Inquiry Topic Dropdown */}
                  <div>
                    <label htmlFor="topic-select" className="block text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                      Inquiry Focus
                    </label>
                    <select
                      id="topic-select"
                      value={subjectTopic}
                      onChange={(e) => setSubjectTopic(e.target.value)}
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-xs text-primary focus:border-accent/60 focus:outline-none transition-colors"
                    >
                      <option value="Full-Time Software / Data Science Role">Full-Time Software / Data Science Opportunity</option>
                      <option value="Machine Learning Project Consultation">Machine Learning Solution / Pipeline</option>
                      <option value="Full-Stack Web Application Development">Full-Stack Web Application</option>
                      <option value="Contract / Freelance Collaboration">Contract Collaboration</option>
                      <option value="Technical Discussion & Networking">Technical Networking & Discussion</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message-input" className="block text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                      Message & Requirements <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message-input"
                      rows={5}
                      required
                      placeholder="Hi Habibullah, I came across your portfolio and would like to discuss..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-lg border border-border bg-surface p-4 text-xs text-primary placeholder-muted focus:border-accent/60 focus:outline-none transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full gap-2.5 !py-3.5 text-xs uppercase tracking-wider font-semibold"
                  >
                    <Send size={15} />
                    <span>Open Email Client & Send</span>
                  </button>

                  <p className="text-[11px] text-center text-muted">
                    Directly pre-fills your email client to address <span className="font-semibold text-accent">{personal.email}</span>.
                  </p>
                </form>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>
    </>
  );
}
