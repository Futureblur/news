import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: "https://news.futureblur.com",
  integrations: [tailwind(), sitemap(), mdx(), pagefind(), critters()],
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    }
  }
});