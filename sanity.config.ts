import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./schemas";

export default defineConfig({
  name: "default",
  title: "2024 portfolio",

  projectId: "68gl2vf8",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
});
