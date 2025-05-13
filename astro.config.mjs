// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://frcdesign.org",
  integrations: [starlight({
    title: 'FRCDesign.org',
})],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});