import { defineConfig } from "orval";

export default defineConfig({
  kargo: {
    input: {
      target: "./openapi.yaml",
    },
    output: {
      mode: "tags-split",
      client: "react-query",
      httpClient: "fetch",
      target: "./src/shared/api/generated/endpoints",
      schemas: "./src/shared/api/generated/models",
      baseUrl: "/api",
    },
  },
  kargoZod: {
    input: {
      target: "./openapi.yaml",
    },
    output: {
      mode: "tags-split",
      client: "zod",
      target: "./src/shared/api/generated/endpoints",
      fileExtension: ".zod.ts",
    },
  },
});
