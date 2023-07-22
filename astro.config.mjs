import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import themeRosePineDawn from "/src/rose-pine-dawn-color-theme.json";

// https://astro.build/config
export default defineConfig({
  site: "https://www.matthewtao.com",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
    }),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: themeRosePineDawn,
    },
  },
});
