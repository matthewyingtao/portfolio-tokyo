import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Matthew Tao",
    description:
      "Matthew Tao is an Auckland based front-end developer who focuses on the little things that make a website delightful.",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/**/*.{md,mdx}"),
  });
