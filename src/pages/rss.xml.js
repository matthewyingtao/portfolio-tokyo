import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function get(context) {
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("../posts/*.{md,mdx}")),
	});
}
