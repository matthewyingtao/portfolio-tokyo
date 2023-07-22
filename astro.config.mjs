import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import themeRosePineDawn from "/src/rose-pine-dawn-color-theme.json";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
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
  experimental: {
    viewTransitions: true,
  },
});
