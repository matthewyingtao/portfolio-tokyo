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
        path: "src/pages/blog/post",
        match: {
          exclude: "src/pages/blog",
        },
        defaultItem() {
          return {
            layout: "../../../layouts/BlogPost.astro",
          };
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
      },
      {
        name: "pages",
        label: "Pages",
        path: "src/pages",
        match: {
          exclude: "blog/**/**",
        },
        defaultItem() {
          return {
            layout: "../layouts/BlogPost.astro",
          };
        },
        fields: [
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
            options: ["../layouts/BlogPost.astro"],
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
      },
      {
        name: "projects",
        label: "Projects",
        path: "src/data/projects",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            label: "Projects",
            name: "projects",
            type: "object",
            list: true,
            ui: {
              itemProps: ({ title }) => {
                return { label: title || "" };
              },
            },
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
                name: "description",
                label: "Description",
                required: true,
              },
              {
                type: "datetime",
                name: "date",
                label: "Date",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Image",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
