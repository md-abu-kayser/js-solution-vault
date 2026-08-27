import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// ES Module compatible __dirname resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  define: {
    // Paste your actual API key inside the quotes below
    "process.env.API_KEY": JSON.stringify("env.GEMINI_API_KEY"),
    "process.env.GEMINI_API_KEY": JSON.stringify("env.GEMINI_API_KEY"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
