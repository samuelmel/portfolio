/** Tailwind só fornece reset e utilitários; os tokens do design vivem em src/index.css. */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        ink: "var(--color-ink)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
