/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        elevated: '#171717',
        primary: '#F5F5F0',
        secondary: '#A3A3A3',
        muted: '#737373',
        border: '#262626',
        accent: '#C7FF3D',
        'accent-dark': '#9BC52B',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
      },
    },
  },
  plugins: [],
};
