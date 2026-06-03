import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Pass empty object to satisfy TypeScript
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    vercel: {
      functions: {
        runtime: "nodejs22.x",
      },
    },
    output: {
      serverDir: "dist/functions/__server.func",
      publicDir: "dist/static",
    },
  },
});
