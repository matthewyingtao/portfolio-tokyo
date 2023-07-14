/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
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
