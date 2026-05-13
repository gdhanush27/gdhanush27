/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  // Hero badge colors are configured dynamically via portfolio.config.ts.
  // Keep this in sync with HeroBadge.topColor values.
  safelist: [
    {
      pattern:
        /^text-(emerald|cyan|violet|fuchsia|pink|rose|amber|orange|lime|sky|blue|indigo|teal|red|yellow)-(300|400|500)$/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          950: "#070711",
          900: "#0b0b16",
          800: "#11111f",
          700: "#191929",
        },
        accent: {
          DEFAULT: "#7c5cff",
          cyan: "#22d3ee",
          pink: "#f472b6",
          lime: "#a3e635",
        },
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "blob": "blob 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};
