import { OGImageRoute } from 'astro-og-canvas';

// Import all pages from the content directory
const rawPages = await import.meta.glob(`../../../data/blog/**/*.md`, { eager: true });

const pages = Object.entries(rawPages).reduce((acc, [path, page]) => {
	// @TBD we're consuming the frontmatter like this:
	// console.log(page.frontmatter);

	//@TBD if no slug then use the file path

	// resolve the `image` frontmatter field to the full path
	// because right now the convention is magic resolving path like this:
	// image: '~/assets/images/blog/nodejs-vulnerability-scanner-eol.jpeg',
	// so we need to resolve it to the full path
	const image = page.frontmatter.image;
	if (image && image.startsWith('~/')) {
		page.frontmatter.image = `./src${image.slice(1)}`;
	}
	return { ...acc, [page.frontmatter.slug]: page };
}, {});

const bgFile = './src/assets/images/og-background.jpg';

export const { getStaticPaths, GET } = OGImageRoute({
	// The name of your dynamic route segment.
	// In this case it’s `route`, because the file is named `[...route].ts`.
	param: 'route',

	// A collection of pages to generate images for.
	pages,

	// For each page, this callback will be used to customize the OG image.
	getImageOptions: async (_, page) => {
		return {
			title: page.frontmatter.title,
			// description: page.frontmatter.description,
			logo: {
				path: page.frontmatter.image,
				size: [250],
			},
			bgImage: {
				path: bgFile,
				fit: 'fill',
			},
			padding: 30,
			font: {
				title: {
					size: 62,
					lineHeight: 1.2,
					families: [
						'Work Sans',
						'Roboto',
						'Obviously',
						'Inter',
						'Noto Sans',
						'Noto Sans Arabic',
						'Noto Sans SC',
						'Noto Sans TC',
						'Noto Sans JP',
						'Noto Sans KR',
					],
					weight: 'ExtraBold',
					color: [255, 255, 255],
				},
				description: {
					size: 42,
					lineHeight: 1.2,
					families: ['Inter', 'Noto Sans', 'Noto Sans SC', 'Noto Sans JP'],
					weight: 'Normal',
					color: [255, 255, 255],
				},
			},
		};
	},
});
