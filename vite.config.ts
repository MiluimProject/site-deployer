// @lovable.dev/vite-tanstack-config already includes:
// - tanstackStart
// - viteReact
// - tailwindcss
// - tsConfigPaths
// - nitro
// - React/TanStack dedupe
// - VITE_* env injection
// - aliases and other defaults
//
// Do not add these plugins manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server"
    }
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
});
