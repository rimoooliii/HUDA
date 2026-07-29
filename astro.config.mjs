import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rimoooliii.github.io',
  base: '/HUDA',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      gfm: true,
      smartypants: true,
    }),
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
