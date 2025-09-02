// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://emibarrod.github.io',
	base: '/emibarrod.github.io',
	integrations: [mdx(), sitemap()],
});
