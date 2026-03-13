import { defineConfig } from "vite";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [cloudflare()],
  base: "./",
  build: {
    // three.js bundles are typically large; reduce warning noise for this project.
    chunkSizeWarningLimit: 700,
  },
});