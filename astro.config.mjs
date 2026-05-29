// @ts-check
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
  },
  fonts: [
    {
      name: "DM Sans",
      provider: fontProviders.local(),
      cssVariable: "--font-dm-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/dm-sans-latin-400-normal.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/dm-sans-latin-400-italic.woff2"],
            weight: "400",
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/dm-sans-latin-600-normal.woff2"],
            weight: "600",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/dm-sans-latin-600-italic.woff2"],
            weight: "600",
            style: "italic",
          },
        ],
      },
      display: "swap",
    },
  ],
});
