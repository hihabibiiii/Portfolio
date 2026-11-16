/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        surface: '#111111',
        card: '#191919',
        elevated: '#191919',
        primary: '#FAFAF7',
        secondary: '#B7B7B2',
        muted: '#737373',
        border: '#2A2925',
        accent: '#D4AF37',
        'accent-light': '#F1D78A',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F1D78A',
          dark: '#AA8822',
        },
        champagne: '#F1D78A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.1)',
        'gold-md': '0 8px 30px rgba(212, 175, 55, 0.12)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 12px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(212, 175, 55, 0.08)',
      },
    },
  },
  plugins: [],
};
