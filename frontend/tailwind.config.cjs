/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-surface": "#0b0f1a",
        "bg-panel": "#12192b",
        "accent-cyan": "#20f0ff",
        "accent-lime": "#a3ff12",
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        display: ["'Outfit'", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 25px rgba(32, 240, 255, 0.35)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        scan: "scan 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
