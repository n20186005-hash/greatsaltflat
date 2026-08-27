import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Mapa de Sal: the sole domain configuration point. Deployment may override SITE_URL.
const configuredSite = process.env.SITE_URL?.trim() || "https://greatsaltflat.com";
export default defineConfig({
  site: configuredSite || undefined,
  output: "server",
  session: false,
  adapter: cloudflare({ imageService: "passthrough" }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  },
});
