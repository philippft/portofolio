import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "24px",
      // Full width below 1180px, capped at 1180px above it.
      screens: { xl: "1180px" },
    },
    extend: {
      colors: {
        navy: "#1f2d6b",
        "navy-deep": "#16215a",
        "navy-line": "#2a3772",
        gold: "#c8a24a",
        "gold-ink": "#7d5c12",
        ink: "#121a3d",
        body: "#3a4260",
        muted: "#4d5674",
        mist: "#eef1f8",
        line: "#dfe3ee",
        "card-line": "#d8ddea",
        "on-navy": "#c5cce6",
        "fill-bg": "#fff1bf",
        "fill-fg": "#5a4300",
        live: "#2f9e57",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
