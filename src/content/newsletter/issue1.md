---
title: Popular JavaScript polyfill library delivers malware, Node.js core performance boosts and more
author: Liran Tal"
description: 
pubDate: 2024-06-27
slug: "popular-javascript-polyfill-library-delivers-malware-nodejs-core-performance-boosts"
image: ~/assets/images/blog/intro-to-prototype-pollution.png
---

![malware code found in polyfill.js library from cdn.polyfill.io](/images/newsletter/polyfill.png)

**[Polyfill supply chain attack embeds malware in JavaScript CDN assets](https://snyk.io/blog/polyfill-supply-chain-attack-js-cdn-assets/)** — What started as a polyfill JavaScript library sell-off in which maintainer Andrew Betts transferred GitHub repository rights to a third-party company ended up as a malware distribution vehicle for a Chinese malicious actor, now putting in danger as much as 4% of the web. <sub>[snyk]</sub>

## **Headlines**

​[**Rafael Gonzaga tee up upcoming UDP support in Node.js permission model**](https://github.com/nodejs/node/pull/53398) <sub>[github]</sub>

​[**Yagiz Nizipli continues the performance speed-up quest for gains in fs.existsSync() on Windows**](https://github.com/nodejs/node/pull/53537) <sub>[github]</sub>

​
​[**Electron got tricked to solve Math issues ended up with Remote Code Execution**](https://0reg.dev/blog/electron-math) — Electron has been well recognized for bloat and performance issues, as well as the once-in-a-while security vulnerability and this time it's all about Cross-site Scripting due to a vulnerable Preload API surface and up to code execution <sub>[0reg.dev]</sub>

[**The security vulnerability of serving images via a route as opposed to static middleware in Node.js**](https://www.nodejs-security.com/blog/security-vulnerability-serving-images-via-route-nodejs) <sub>[nodejs-security.com]</sub>

<hr/>

In other news, a tutorial on the devto website wants to teach developers about building Node.js servers and completely fails to provide security disclaimers or follow secure coding practices. Surely, there are other issues at play but I'll give the author the benefit of the doubt they wanted to teach the basics. Hopefully you can find the security issues here:

![Insecure coding conventions leading to path traversal vulnerabilities and arbitrary file read and arguably no rate limits](/images/newsletter/login-route-error.png)

--

> ICYMI - node:test now supports experimental ESM+CJS module mocking it will remain experimental at least until the folks maintaining node figure out how they want module hooks to work, June 19, 2024​
— Colin Ihrig (@cjihrig) [June 19, 2024](https://x.com/cjihrig/status/1803436863937511830)

On the same note, Colin also added support for test plans in Node.js built-in test runner, available in Node.js 20.15.0.

## **On npm** 

- ​[**my-ua-parser**](https://github.com/mcollina/my-ua-parser)​ - by Matteo Collina is a fork of the popular ua-parser-js package that you should switch to due to [recent license changes](https://adventures.nodeland.dev/archive/what-happens-when-a-major-npm-library-goes/)​.

- ​[**kysely-ctl**](https://github.com/kysely-org/kysely-ctl)​ - by Igal Klebanov, this npm package is a handy command-line tool for Kysely, if you're into strongly typed query builders.

## **New Security Vulnerabilities**

- **strapi** found vulnerable to [Server-Side Request Forgery](https://security.snyk.io/package/npm/strapi), 13 Jun 2024
- **ws** found vulnerable to [Denial of Service (DoS)](https://security.snyk.io/vuln/SNYK-JS-WS-7266574), 17 Jun 2024
- **jquery-ui-dist** found vulnerable to [Cross-site Scripting (XSS)](https://security.snyk.io/vuln/SNYK-JS-JQUERYUIDIST-7266555), 17 Jun 2024
- **nodem0m** is a [malicious package](https://security.snyk.io/package/npm/nodem0m), hopefully you didn't typo that in the terminal 😅

## **Hiring**

- **Snyk** hiring for [Associate Security Researcher - Hunter team](https://grnh.se/036da5652us) in 🇷🇴
- **Snyk** hiring for [Staff Software Engineer DX (TypeScript & Node.js)](https://grnh.se/15231ae52us) in 🇬🇧
- **SentinelOne** hiring for [Senior Threat Researcher](https://www.sentinelone.com/jobs/?gh_jid=6005050003) in 🇮🇱
- **SentinelOne** hiring for [Staff Software Engineer JS, React](https://www.sentinelone.com/jobs/?gh_jid=6027824003) in 🇮🇳
- **Datadog** hiring for [Library Software Engineer, Node.js](https://careers.datadoghq.com/detail/5863184/?gh_jid=5863184) in EMEA
- **Datadog** hiring for [Software Engineer, Web Browser SDK](https://careers.datadoghq.com/detail/5731186/?gh_jid=5731186) in 🇵🇹