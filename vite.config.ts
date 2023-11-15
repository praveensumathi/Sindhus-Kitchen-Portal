import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Sindhus-Kitchen-Portal/",
  server: {
    port: 5174,
  },
});
