// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // SCSS configurations
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `reset.css`, // Customizing the output path if needed
      },
    },
    cssCodeSplit: false, // Keeping CSS in one file
    outDir: "dist", // Confirming output directory
  },
});
