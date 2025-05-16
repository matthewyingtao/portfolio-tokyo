import type { Collection } from "tinacms";

export const ProjectCollection: Collection = {
  name: "projects",
  label: "Projects",
  path: "src/data/projects",
  format: "json",
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
};
