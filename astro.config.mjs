import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jasaarsitek.biz.id',
  trailingSlash: 'always',
  build: { format: 'directory' },
});

