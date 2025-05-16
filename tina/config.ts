import { defineConfig } from "tinacms";
import { PageCollection } from "./collections/page";
import { PostCollection } from "./collections/post";
import { ProjectCollection } from "./collections/project";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  client: {
    skip: true,
  },
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
    collections: [PageCollection, PostCollection, ProjectCollection],
  },
});
