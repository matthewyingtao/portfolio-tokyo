import rss from "@astrojs/rss";
import slugify from "slugify";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function get(context) {
	const posts = await Astro.glob("../posts/*.{md,mdx}");

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${slugify(post.file.replace(/\.md(x)?/, ""))}/`,
		})),
	});
}
