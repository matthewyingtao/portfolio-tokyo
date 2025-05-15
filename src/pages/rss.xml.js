import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Matthew Tao",
    description:
      "Matthew Tao is an Auckland based front-end developer who focuses on the little things that make a website delightful.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/**/*.md")),
  });
}
