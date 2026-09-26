/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dce8ff",
          200: "#b9d0ff",
          300: "#8db0ff",
          400: "#5d8bff",
          500: "#3366ff",
          600: "#224be0",
          700: "#1c3bb3",
          800: "#1a3389",
          900: "#182c6b",
          950: "#0f1a40",
        },
        accent: {
          400: "#ffb648",
          500: "#ff9f1c",
          600: "#e8850a",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        display: ["'Sora'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(15, 26, 64, 0.12)",
        card: "0 10px 30px -10px rgba(15, 26, 64, 0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.97)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        float: "float 5s ease-in-out infinite",
        blob: "blob 12s infinite ease-in-out",
      },
    },
  },
  plugins: [],
}
