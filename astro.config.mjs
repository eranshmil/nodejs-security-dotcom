import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import { SITE } from './src/config.mjs';
import mdx from '@astrojs/mdx';
import solid from '@astrojs/solid-js';
import remarkToc from 'remark-toc';
import { remarkReadingTime } from './src/utils/remark-frontmatter-extensions.mjs';
import compress from 'astro-compress';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	// Astro uses this full URL to generate your sitemap and canonical URLs in your final build
	site: SITE.origin,
	base: SITE.basePathname,
	output: 'static',
	trailingSlash: 'ignore',
	redirects: {
		'/business': '/security-training',
		'/enterprise': '/security-training',
	},
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		sitemap({
			changefreq: 'daily',
			lastmod: new Date(),
		}),
		/* Disable this integration if you don't use Google Analytics (or other external script). */
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
		mdx({
			remarkPlugins: [remarkReadingTime],
		}),
		solid(),
		compress(),
	],
	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
	},
	markdown: {
		remarkPlugins: [remarkToc, remarkReadingTime],
		extendDefaultPlugins: true,
	},
});
