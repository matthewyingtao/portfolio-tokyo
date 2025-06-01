// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import frontmatter from "front-matter";
import fs from "node:fs";
import path from "node:path";
import { remarkReadingTime } from "./scripts/remark-reading-time.mjs";
import themeRosePineDawn from "./src/rose-pine-dawn-color-theme.json";

const blogDir = path.resolve("./src/content/blog");

// https://astro.build/config
export default defineConfig({
  site: "https://www.matthewtao.com",
  integrations: [
    sitemap({
      serialize: (item) => {
        // Remove the trailing slash from the URL
        const url = item.url.endsWith("/") ? item.url.slice(0, -1) : item.url;
        // get the slug from url
        // e.g. https://www.matthewtao.com/blog/hello-world
        if (url.startsWith("https://www.matthewtao.com/blog/post")) {
          const slug = url.replace("https://www.matthewtao.com/blog/post/", "");

          const postPath = path.join(blogDir, `${slug}.md`);
          const post = fs.readFileSync(postPath, "utf-8");

          const { attributes } = frontmatter(post);

          try {
            // e.g. "2023-10-01"
            item.lastmod = new Date(attributes.updatedDate)
              .toISOString()
              .split("T")[0];
          } catch (error) {
            console.error(`Error parsing date for post: ${slug}`);
          }

          return item;
        }
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ["**/*.md"],
  },
  markdown: {
    shikiConfig: {
      // @ts-expect-error
      theme: themeRosePineDawn,
    },
    remarkPlugins: [remarkReadingTime],
  },
});
