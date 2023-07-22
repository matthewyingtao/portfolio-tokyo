/** @type {import('tailwindcss').Config} */
const lineHeight = "calc(1.2em + 1ex)";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", lineHeight],
      sm: ["0.875rem", lineHeight],
      base: ["1rem", lineHeight],
      lg: ["1.125rem", lineHeight],
      xl: ["1.25rem", lineHeight],
      "2xl": ["1.5rem", lineHeight],
      "3xl": ["1.875rem", lineHeight],
      "4xl": ["2.25rem", lineHeight],
      "5xl": ["3rem", lineHeight],
      "6xl": ["3.75rem", lineHeight],
      "7xl": ["4.5rem", lineHeight],
      "8xl": ["6rem", lineHeight],
      "9xl": ["8rem", lineHeight],
    },
    extend: {
      colors: {
        "b-gray": "#8b8b8b",
        "b-light-gray-cloud": "#d4dcda",
        "b-minato": "#80989b",
        "b-white": "#f4f4f4",
        "b-willow-dark": "#213809",
        "b-willow": "#c8d5bb",
      },
      spacing: {
        gutter: "var(--gutter)",
      },
      gridTemplateColumns: {
        14: "var(--gutter) repeat(12, minmax(0, 1fr)) var(--gutter)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "0.5rem",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.15s ease-in-out",
      },
    },
  },
  plugins: [],
};
