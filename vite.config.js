import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Cargar variables de entorno según el entorno de desarrollo
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

if (process.env.NODE_ENV === "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
