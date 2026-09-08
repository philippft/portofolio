import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        "surface-dim": "var(--color-surface-dim)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        primary: "var(--color-primary)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "outline-variant": "var(--color-outline-variant)",
        "signal-orange": "#F37338",
        "secondary-container": "#F37338",
        tertiary: "var(--color-tertiary)",
        "tertiary-container": "var(--color-tertiary-container)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        // Explicit stone/charcoal color aliases for high-contrast presets
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "'Playfair Display'", "serif"],
        sans: ["var(--font-plus-jakarta)", "'Plus Jakarta Sans'", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        cta: "20px",
        card: "32px",
        container: "40px",
        pill: "9999px",
      },
      spacing: {
        gutter: "1.5rem",
        "max-width": "1340px",
        "margin-desktop": "2.5rem",
        "margin-mobile": "1.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4rem",
        "space-4xl": "6rem",
      },
      maxWidth: {
        "max-width": "1340px",
      },
    },
  },
  plugins: [],
};

export default config;
