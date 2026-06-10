import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const currentDir = dirname(fileURLToPath(import.meta.url));
const rawPort = process.env.PORT ?? "21113";
const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: resolve(currentDir, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": resolve(currentDir, "src"),
      "@assets": resolve(currentDir, "..", "..", "attached_assets"),
      "use-sync-external-store/shim/index.js": "react",
      "use-sync-external-store/shim": "react",
    },
    dedupe: ["react", "react-dom"],
  },
  root: currentDir,
  build: {
    outDir: resolve(currentDir, "dist/public"),
    emptyOutDir: true,
  },
  // CHANGED: We now allow Vite to discover and bundle React properly
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});