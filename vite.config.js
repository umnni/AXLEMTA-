import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages serves project sites from /<repository>/, while local builds
  // and user/organization sites are served from the domain root.
  base: process.env.GITHUB_ACTIONS === "true"
    ? process.env.GITHUB_REPOSITORY?.endsWith(".github.io")
      ? "/"
      : `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""}/`
    : "/",
  plugins: [react(), tailwindcss()],
});
