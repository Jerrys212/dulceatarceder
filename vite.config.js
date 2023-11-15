import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    host: true,
    https: true,
  },
  build: {
    outDir: "dulceatardecer",
  },
  rollupOptions: {
    external: ["react", "react-router", "react-router-dom"],
    output: {
      globals: {
        react: "React",
      },
    },
  },
});
