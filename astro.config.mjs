// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://emibarrod.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// Both themes are emitted as CSS variables; global.css picks the
			// dark one under prefers-color-scheme, so code blocks follow the
			// site theme with no runtime re-highlighting.
			themes: {
				light: 'github-light',
				dark: 'github-dark-dimmed',
			},
			wrap: false,
		},
	},
});
