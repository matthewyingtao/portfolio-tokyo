// @ts-check
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import { remarkReadingTime } from "./config/remark-reading-time.mjs";
import themeRosePineDawn from "./src/shared/config/rose-pine-dawn-color-theme.json";

export default defineConfig({
  site: "https://www.matthewtao.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      // @ts-expect-error
      theme: themeRosePineDawn,
    },
    processor: unified({
      rehypePlugins: [
        [
          "rehype-external-links",
          {
            rel: ["nofollow", "noopener", "noreferrer"],
            content: {
              type: "element",
              tagName: "img",
              properties: {
                src: "/icons/externalArrow.svg",
                alt: "External link icon",
              },
              children: [],
            },
            contentProperties: { className: ["external-link-icon"] },
          },
        ],
      ],
      remarkPlugins: [remarkReadingTime],
    }),
  },
  fonts: [
    {
      name: "DM Sans",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-dm-sans",
      weights: [400, 600],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      formats: ["woff2", "woff"],
    },
  ],
});
