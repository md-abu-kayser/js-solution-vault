import path from "path";

import { fileURLToPath } from "url";

import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default defineConfig({
  define: {
    "process.env.API_KEY": JSON.stringify("env.GEMINI_API_KEY"),

    "process.env.GEMINI_API_KEY": JSON.stringify("env.GEMINI_API_KEY"),
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
