import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "https://AleHernandezG.github.io/PracticaFinal-IPO",

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          leaflet: ["leaflet", "leaflet-routing-machine"],
          react: ["react", "react-dom"],
        },
        assetFileNames: "assets/[name].[ext]", // Mejor organización de assets
      },
    },
    chunkSizeWarningLimit: 1600, // Aumentado para proyectos con mapas
    target: "esnext",
    minify: "terser",
    sourcemap: true, // Útil para depuración en producción
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "leaflet",
      "leaflet-routing-machine", // Incluido para mejor precarga
    ],
    exclude: [], // Ya no necesitamos excluir
  },

  define: {
    "process.env": {},
    "process.platform": '"browser"',
    "process.stdout.isTTY": "false",
    global: "window", // Importante para algunas librerías
  },

  server: {
    host: true, // Permite acceso desde la red local
  },
});

// Hay que hacer -> npm install terser --save-dev
