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
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/__server.func",
      publicDir: ".vercel/output/static",
    },
  },
});
