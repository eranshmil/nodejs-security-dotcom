import { forEachChild } from 'typescript';

export function buildBookPricing({ discountCode, bookId }) {
	let appliedDiscountCode = '';
	let pricingInformation = 'default';
	if (!discountCode || !STORE[discountCode]) {
		appliedDiscountCode = STORE.pricing.default.discountCode;
	} else {
		appliedDiscountCode = discountCode;
		pricingInformation = discountCode;
	}

	let storeLinkToBuy = `${STORE[bookId].linkBuy}?checkout%5Bdiscount_code%5D=${appliedDiscountCode}`;

	// The books bundle is already priced at a discount, so no need to apply a discount code
	if (bookId === 'bundle') {
		storeLinkToBuy = STORE[bookId].linkBuy;
		appliedDiscountCode = 'bundle';
	}

	return {
		discountCode: appliedDiscountCode,
		discountPercentage: STORE.pricing[appliedDiscountCode].discountPercentage,
		priceBeforeDiscount: STORE.pricing[appliedDiscountCode].priceBeforeDiscount,
		priceAfterDiscount: STORE.pricing[appliedDiscountCode].priceAfterDiscount,
		linkBuy: storeLinkToBuy,
	};
}

export const STORE = {
	pricing: {
		default: {
			discountCode: 'U5MZE4OA',
			discountPercentage: 45,
			priceBeforeDiscount: '$57.60',
			priceAfterDiscount: '$31.68',
		},
		E3MZY0OA: {
			discountCode: 'E3MZY0OA',
			discountPercentage: 30,
			priceBeforeDiscount: '$57.60',
			priceAfterDiscount: '$40.32',
		},
		U5MZE4OA: {
			discountCode: 'U5MZE4OA',
			discountPercentage: 45,
			priceBeforeDiscount: '$57.60',
			priceAfterDiscount: '$31.68',
		},
		bundle: {
			discountCode: '',
			discountPercentage: 62,
			priceBeforeDiscount: '$115.20',
			priceAfterDiscount: '$43.77',
		},
		EssentialNodejsSecurity: {
			discountCode: 'E0MDYZMW',
			discountPercentage: 100,
			priceBeforeDiscount: '$29.99',
			priceAfterDiscount: '$0.00',
		},
		// not yet in effect:
		// bundleWithEssentialNodejsSecurity: {
		// 	discountCode: '',
		// 	discountPercentage: 62,
		// 	priceBeforeDiscount: '$115.20',
		// 	priceAfterDiscount: '$43.77',
		// },
	},

	bundle: {
		linkBuy: 'https://nodejs-secure-coding.lirantal.com/checkout/buy/8eca5d4c-87fb-41d2-859a-c9d2fa81ffd9',
	},

	CommandInjection: {
		// buyLink:
		// 	'https://nodejs-secure-coding.lirantal.com/checkout/buy/6ee5f646-a6fc-4d6e-bda4-7ebbe26aea41?checkout%5Bdiscount_code%5D=E3MZY0OA',
		sampleBookLink: 'https://nodejs-security.lemonsqueezy.com/checkout/buy/a327f061-56fe-48c7-96cd-eb6728b48f2a',
		linkBuy: 'https://nodejs-secure-coding.lirantal.com/checkout/buy/eb07c29f-8b67-42b7-a604-4289026c7265',
	},

	PathTraversal: {
		linkBuy: 'https://nodejs-secure-coding.lirantal.com/checkout/buy/4e558207-a427-4a64-ac23-f67a2cdce5d0',
	},

	EssentialNodejsSecurity: {
		linkBuy: 'https://nodejs-secure-coding.lirantal.com/checkout/buy/5d5975e1-4481-40a5-b180-de154cc865b0',
	},

	plan1BuyLink: 'https://nodejs-security.lemonsqueezy.com/checkout/buy/c8e9b3ec-c540-4723-bb18-5514a2c9f53f',
	plan2BuyLink: 'https://nodejs-security.lemonsqueezy.com/checkout/buy/5ba65e29-2a52-4e65-acc2-24dfedb1bd02',
	plan3BuyLink: 'https://nodejs-security.lemonsqueezy.com/checkout/buy/5f6f17a8-8bd9-41ad-85fa-03ebf0b77f46',
	//discountCode: 'E3MZY0OA',
};

export const PROFILE = {
	githubURL: 'https://github.com/lirantal',
	twitterURL: 'https://twitter.com/liran_tal',
	twitterHandle: 'liran_tal',
	linkedinURL: 'https://www.linkedin.com/in/talliran',
	mastodonURL: 'https://infosec.exchange/@lirantal',
};

export const FOOTER = {
	columns: [
		{
			title: 'Open Source Projects',
			items: [
				{
					title: 'dockly',
					link: 'https://github.com/lirantal/dockly',
				},
				{
					title: 'lockfile-lint',
					link: 'https://github.com/lirantal/lockfile-lint',
				},
				{
					title: 'is-website-vulnerable',
					link: 'https://github.com/lirantal/is-website-vulnerable',
				},
				{
					title: 'npq',
					link: 'https://github.com/lirantal/npq',
				},
				{
					title: 'Node.js CLI apps best practices',
					link: 'https://github.com/lirantal/nodejs-cli-apps-best-practices',
				},
				{
					title: 'awesome-nodejs-security',
					link: 'https://github.com/lirantal/awesome-nodejs-security',
				},
			],
		},
		{
			title: 'Published Author',
			items: [
				{
					title: 'Essential Node.js Security',
					link: 'https://leanpub.com/nodejssecurity',
				},
				{
					title: "O'Reilly Serverless Security",
					link: 'https://www.oreilly.com/library/view/serverless-security/9781492082538/',
				},
				// {
				// 	// @TODO update data
				// 	title: 'HTTP Security Headers',
				// 	link: ''
				// }
			],
		},
		{
			title: 'Awards',
			items: [
				{
					title: 'GitHub Star 2023',
					link: 'https://stars.github.com/profiles/lirantal/',
					icon: 'emojione:glowing-star',
				},
				{
					title: 'Pathfinder Award for Security',
					link: 'https://openjsf.org/blog/openjs-world-2022-heres-what-you-missed',
					icon: 'logos:openjs-foundation-icon',
				},
				{
					title: 'GitHub Star 2022',
					link: 'https://stars.github.com/profiles/lirantal/',
					icon: 'emojione:glowing-star',
				},
				{
					title: 'GitHub Star 2021',
					link: 'https://stars.github.com/profiles/lirantal/',
					icon: 'emojione:glowing-star',
				},
			],
		},
	],
};

export const SITE = {
	name: 'Node.js Secure Coding',
	author: 'Liran Tal',

	origin: 'https://www.nodejs-security.com',
	basePathname: '/',

	title: 'Node.js Security starts with Node.js Secure Coding',
	description:
		'Master hands-on Node.js security with Node.js Secure Coding education and learn how to defend against command injection vulnerabilities and gain backend development skills to exploit and prevent path traversal attacks by reviewing real-world vulnerable npm packages and insecure code.',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 10,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: 'blog', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
