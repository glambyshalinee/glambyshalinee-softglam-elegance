import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Pass empty object to satisfy TypeScript
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});
