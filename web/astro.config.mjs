import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  integrations: [
    sanity({
      projectId: 'jyv9xdem',
      dataset: 'production',
      apiVersion: '2026-03-01',
      useCdn: false,
    }),
  ],
  adapter: cloudflare(),
});