// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./scripts/remark-reading-time.mjs";
import themeRosePineDawn from "./src/rose-pine-dawn-color-theme.json";

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
  experimental: {
    fonts: [
      {
        name: "PP Mori",
        provider: "local",
        cssVariable: "--font-ppmori",
        variants: [
          {
            src: ["./src/assets/fonts/PPMori-Regular.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PPMori-RegularItalic.woff2"],
            weight: "400",
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/PPMori-ExtraBold.woff2"],
            weight: "600",
            style: "normal",
          },
        ],
      },
    ],
  },
});
