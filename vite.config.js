import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  base: "./",
  build: {
    // three.js bundles are typically large; reduce warning noise for this project.
    chunkSizeWarningLimit: 700,
  },
});
