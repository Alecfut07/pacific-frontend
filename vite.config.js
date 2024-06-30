import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Cargar variables de entorno según el entorno de desarrollo
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      util: "util",
      https: "agent-base",
      zlib: "browserify-zlib",
    },
  },
});
