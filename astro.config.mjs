import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import themeRosePineDawn from "/src/rose-pine-dawn-color-theme.json";

import prefetch from "@astrojs/prefetch";

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
    prefetch(),
  ],
  markdown: {
    shikiConfig: {
      theme: themeRosePineDawn,
    },
  },
});
