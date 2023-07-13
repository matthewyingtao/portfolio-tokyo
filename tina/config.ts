import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
	token: process.env.TINA_TOKEN, // Get this from tina.io

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "uploads",
			publicFolder: "public",
		},
	},
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "content/posts",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "string",
						name: "slug",
						label: "Slug",
						required: true,
					},
					{
						type: "string",
						name: "description",
						label: "Description",
						required: true,
					},
					{
						type: "datetime",
						name: "pubDate",
						label: "Date",
						required: true,
					},
					{
						type: "datetime",
						name: "lastEdit",
						label: "Last Edited",
						required: true,
						indexed: true,
					},
					{
						type: "image",
						name: "hero_image",
						label: "Hero Image",
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			},
		],
	},
});
