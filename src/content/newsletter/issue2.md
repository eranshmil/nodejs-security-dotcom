---
title: Node.js security release, React Server Components authorization bypass, NodeConf EU and a collection of useful GitHub Actions
author: Liran Tal"
description: 
pubDate: 2024-07-14
slug: "nodejs-security-release-react-server-components-authorization-bypass"
image: ~/assets/images/blog/intro-to-prototype-pollution.png
---

​[How easy it is to introduce broken access control when using React Server Components?](https://www.nodejs-security.com/blog/how-to-protect-against-a-security-breach-in-react-server-components) In this RSC example, Sasha shared on Twitter how they inadvertently wrote a React Server Component code that would have resulted in a security breach, if not refactored in time to fix the issue. It is very apparent that this is a very confusing security issue to developers based on social chatter.  <sub>[nodejs-security.com]</sub>

![react server components authorization bypass](/images/newsletter/react-server-components-authorization-bypass.png)

🚨 [Node.js Security Release](https://nodejs.org/en/blog/vulnerability/july-2024-security-releases) — Expected to publish today on July 8th, fixing 5 security vulnerabilities in the Node.js runtime. Watch closely and upgrade as soon as you can. <sub>[github]</sub>

## Fancy some security GitHub Actions? Here you go

​[Edward Thomson published a new version of test-summary](https://github.com/test-summary/action) — Beautiful looking summaries for GitHub Action test output. <sub>[github]</sub>

​[Ulises Gascon, Node.js collaborator and Express maintainer, releases new version of OpenSSF Scorecard Monitor](https://github.com/marketplace/actions/openssf-scorecard-monitor) — The Scorecard project aims to quantify the security posture of open-source projects. This action help streamline that through PR workflows and reports. <sub>[github]</sub>

​[New dependencies advisor](https://github.com/marketplace/actions/new-dependencies-advisor) — A GitHub Action that integrates with the [Snyk Advisor](https://snyk.io/advisor/) to pull information about newly added dependencies in a Pull Request and add a comment with their package health score. <sub>[github]</sub>

![new dependencies advisor](/images/newsletter/new-dependencies-advisor.png)

<hr/>

Care to meet many Node.js collaborators and developers in a Ireland castle? Get tickets to [NodeConf EU](https://www.nodeconf.eu/) conference happening on November 4-6, 2024. FYI, the Call For Papers is also open, submit talks!

![nodeconf eu](/images/newsletter/nodeconf-eu.png)

## On npm

- ​[neostandard](https://github.com/neostandard/neostandard)​ - Pelle Wessman introduces the successor for StandardJS, the way we used to lint code. There is an open issue to track potential Biome support.

- ​[biome](https://biomejs.dev/)​ - Keeping with the same theme, Biome aims to be a one-stop-shop and fast JavaScript formatter and linter that replaces Prettier and ESLint. P.S. Biome celebrated 2 million monthly downloads 🎉

![biome](/images/newsletter/biome.png)

## New Security Vulnerabilities

- `@jmondi/url-to-png` found vulnerable to [Path Traversal](https://security.snyk.io/vuln/SNYK-JS-JMONDIURLTOPNG-7244621), 11 Jun 2024
- `undici found` vulnerable to [Memory Buffer Error](https://security.snyk.io/vuln/SNYK-JS-UNDICI-7361667), 25 Jun 2024
- `@fastly/js-compute` found vulnerable to ​[Use After Free](https://security.snyk.io/vuln/SNYK-JS-FASTLYJSCOMPUTE-7411091), 27 Jun 2024
- `colors-names` is a [malicious package](https://security.snyk.io/vuln/SNYK-JS-COLORSNAMES-7411396), careful what you install 😅

## Hiring

- Snyk hiring for [Associate Security Researcher - Hunter team](https://grnh.se/036da5652us) in 🇷🇴
- Snyk hiring for [Staff Software Engineer DX (TypeScript & Node.js)](https://grnh.se/15231ae52us) in 🇬🇧
- SentinelOne hiring for [Senior Threat Researcher](https://www.sentinelone.com/jobs/?gh_jid=6005050003) in 🇮🇱
- SentinelOne hiring for [Staff Software Engineer JS, React](https://www.sentinelone.com/jobs/?gh_jid=6027824003) in 🇮🇳
- Datadog hiring for [Library Software Engineer, Node.js](https://careers.datadoghq.com/detail/5863184/?gh_jid=5863184) in EMEA
- Datadog hiring for [Staff Software Engineer JS, React](https://careers.datadoghq.com/detail/5731186/?gh_jid=5731186) in 🇮🇳

<hr/>

> you should pin your actions usage to a SHA. Want the security but don't want the bother, [Frizbee](https://github.com/stacklok/frizbee-action) can take care of that for you 

— Edward Thomson, [June 26 2024](https://x.com/ethomson/status/1805922449726291971)​