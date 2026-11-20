import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation, personal } from '../data/personal';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/90 backdrop-blur-xl shadow-card dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container-main flex items-center justify-between py-4">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
          aria-label="Habibullah Salmani Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 font-display text-xs font-bold tracking-wider text-accent transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(212,175,55,0.25)]">
            HS
          </div>
          <span className="font-display text-xs font-bold tracking-[0.2em] text-primary transition-colors group-hover:text-accent">
            {personal.brand}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navigation
            .filter((n) => n.path !== '/contact')
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group relative py-1 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-secondary hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

          {/* Desktop Theme Toggle */}
          <ThemeToggle />

          <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-xs !tracking-wider uppercase">
            Contact
          </Link>
        </nav>

        {/* Mobile Controls: Theme Toggle & Hamburger Button */}
        <div className="flex items-center gap-2.5 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-primary transition hover:border-accent/40 hover:text-accent"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-t border-border bg-bg/98 backdrop-blur-2xl md:hidden"
          >
            <div className="container-main flex flex-col gap-1.5 py-5">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? 'border border-accent/30 bg-accent/10 text-accent font-semibold'
                        : 'text-secondary hover:bg-card hover:text-primary'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-accent/60">→</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}