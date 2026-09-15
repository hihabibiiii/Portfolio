import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigation, personal } from '../data/personal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b border-border transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-xl' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container-main flex items-center justify-between py-4">
        <Link
          to="/"
          className="font-display text-sm font-bold tracking-[0.15em] text-primary transition-colors hover:text-accent"
        >
          {personal.brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.filter(n => n.path !== '/contact').map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary !py-2 !px-5 !text-xs">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-border p-2.5 text-primary transition hover:bg-elevated md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-t border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-main flex flex-col gap-1 py-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-elevated text-accent'
                        : 'text-secondary hover:bg-elevated hover:text-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
