import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bytecture.web.id',
  trailingSlash: 'always',
  build: { format: 'directory' },
});

