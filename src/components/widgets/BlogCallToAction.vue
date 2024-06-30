<template>
	<section class="relative">
		<div class="max-w-6xl mx-auto">
			<section>
				<div class="container py-14 mx-auto">
					<div
						class="grid grid-cols-1 text-center md:text-left md:grid-cols-2 justify-between mx-auto p-1 rounded-md dark:shadow-none"
					>
						<div class="pt-4 text-base text-gray-600 dark:text-slate-400">
							<p class="pt-4">👋 Just a quick break</p>
							<p class="">
								I'm Liran Tal and I'm the author of the newest series of expert Node.js Secure Coding books.
								<span class="block pt-2">
									<a class="text-purple-700 dark:text-purple-400" href="https://www.nodejs-security.com"
										>Check it out and level up your JavaScript</a
									>
								</span>
							</p>
						</div>
						<div class="flex flex-row gap-8 mx-auto">
							<div class="mt-2">
								<a href="/book/command-injection" target="_blank" rel="noopener">
									<img
										alt="Node.js Secure Coding: Defending Against Command Injection Vulnerabilities"
										class="mx-auto shadow-lg rounded-lg h-44 object-cover object-center mb-4"
										:src="'/images/book/book-command-injection-cover-light.png'"
									/>
								</a>
							</div>

							<div class="mt-2">
								<a href="/book/path-traversal" target="_blank" rel="noopener">
									<img
										alt="Node.js Secure Coding: Prevention and Exploitation of Path Traversal Vulnerabilities"
										class="mx-auto shadow-lg rounded-lg h-44 object-cover object-center mb-4"
										:src="'/images/book/book-path-traversal-cover-light.png'"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
</template>

<script>
</script>