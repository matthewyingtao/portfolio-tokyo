/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", "calc(1em + 1ex)"],
      sm: ["0.875rem", "calc(1em + 1ex)"],
      base: ["1rem", "calc(1em + 1ex)"],
      lg: ["1.125rem", "calc(1em + 1ex)"],
      xl: ["1.25rem", "calc(1em + 1ex)"],
      "2xl": ["1.5rem", "calc(1em + 1ex)"],
      "3xl": ["1.875rem", "calc(1em + 1ex)"],
      "4xl": ["2.25rem", "calc(1em + 1ex)"],
      "5xl": ["3rem", "calc(1em + 1ex)"],
      "6xl": ["3.75rem", "calc(1em + 1ex)"],
      "7xl": ["4.5rem", "calc(1em + 1ex)"],
      "8xl": ["6rem", "calc(1em + 1ex)"],
      "9xl": ["8rem", "calc(1em + 1ex)"],
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
    },
  },
  plugins: [],
};
