import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://videot4pe.github.io',
  base: '/videot4pe',
  markdown: {
    syntaxHighlight: 'prism',
    // remarkPlugins: [remarkToc]
  },
  integrations: [
    image({serviceEntryPoint: "@astrojs/image/sharp"}), mdx(), sitemap()
  ]
});