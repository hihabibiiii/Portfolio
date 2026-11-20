import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition-colors duration-200 hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.6, rotate: isDark ? -90 : 90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.6, rotate: isDark ? 90 : -90, opacity: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun size={17} className="text-secondary transition-transform duration-300 group-hover:rotate-45 group-hover:text-accent" />
        ) : (
          <Moon size={17} className="text-secondary transition-transform duration-300 group-hover:-rotate-12 group-hover:text-accent" />
        )}
      </motion.div>
    </button>
  );
}
