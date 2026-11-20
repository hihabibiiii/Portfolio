import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function applyThemeToDOM(targetTheme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const body = document.body;

  if (targetTheme === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';
    root.style.backgroundColor = '#F6F4EF';
    if (body) {
      body.classList.remove('dark');
      body.classList.add('light');
      body.style.backgroundColor = '#F6F4EF';
    }
    const meta = document.getElementById('theme-color-meta') || document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', '#F6F4EF');
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
    root.style.colorScheme = 'dark';
    root.style.backgroundColor = '#080808';
    if (body) {
      body.classList.remove('light');
      body.classList.add('dark');
      body.style.backgroundColor = '#080808';
    }
    const meta = document.getElementById('theme-color-meta') || document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', '#080808');
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') return 'light';
      if (savedTheme === 'dark') return 'dark';
    }
    // Default theme must remain DARK to preserve existing experience
    return 'dark';
  });

  // Ensure DOM is in sync on mount and whenever theme changes
  useEffect(() => {
    applyThemeToDOM(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    // Immediately update DOM synchronously to eliminate any frame lag
    applyThemeToDOM(nextTheme);
    setTheme(nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {}
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
