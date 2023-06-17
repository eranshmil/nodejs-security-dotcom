export const STORE = {
	bookBuyLink: 'https://nodejs-security.lemonsqueezy.com/checkout/buy/6ee5f646-a6fc-4d6e-bda4-7ebbe26aea41',
	plan1BuyLink: 'https://nodejs-security.lemonsqueezy.com/checkout/buy/c8e9b3ec-c540-4723-bb18-5514a2c9f53f',
	plan2BuyLink: 'https://nodejs-security.lemonsqueezy.com/checkout/buy/5ba65e29-2a52-4e65-acc2-24dfedb1bd02',
	plan3BuyLink: 'https://nodejs-security.lemonsqueezy.com/checkout/buy/5f6f17a8-8bd9-41ad-85fa-03ebf0b77f46',
	discountCode: 'E4NJIWMQ',
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
					link: 'https://openjsf.org/announcement/2022/06/07/',
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
	name: 'Liran Tal',

	origin: 'https://www.nodejs-security.com',
	basePathname: '/',

	title: 'Node.js Security starts with Node.js Secure Coding',
	description: 'Node.js Security and Node.js Secure Coding: Defending Against Command Injection Vulnerabilities',
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
