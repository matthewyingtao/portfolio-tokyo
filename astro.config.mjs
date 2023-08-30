import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import themeRosePineDawn from "/src/rose-pine-dawn-color-theme.json";

// https://astro.build/config
export default defineConfig({
  site: "https://www.matthewtao.com",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    robotsTxt(),
  ],
  markdown: {
    shikiConfig: {
      theme: themeRosePineDawn,
    },
  },
});
