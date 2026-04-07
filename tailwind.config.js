/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#050816",
        ink: "#09111f",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, 0.3), 0 18px 60px rgba(14, 165, 233, 0.15)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(56, 189, 248, 0.14), transparent 30%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.18), transparent 25%), linear-gradient(180deg, rgba(9, 17, 31, 0.8), rgba(5, 8, 22, 0.96))",
      },
      animation: {
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};
