import type { Collection } from "tinacms";

export const PostCollection: Collection = {
  name: "post",
  label: "Posts",
  path: "src/pages/blog/post",
  defaultItem: {
    layout: "../../../layouts/BlogPost.astro",
  },
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
      options: ["../../../layouts/BlogPost.astro"],
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
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
      name: "heroImage",
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
};
