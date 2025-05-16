import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import themeRosePineDawn from "/src/rose-pine-dawn-color-theme.json";

// https://astro.build/config
export default defineConfig({
  site: "https://www.matthewtao.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: themeRosePineDawn,
    },
  },
});
