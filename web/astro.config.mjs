import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'jyv9xdem', // Your Sanity Project ID
      dataset: 'production',
      apiVersion: '2026-03-01',
      useCdn: false, // Fetch fresh data during builds
    }),
  ],

  adapter: cloudflare(),
});