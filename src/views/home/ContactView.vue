<template>
	<div class="relative flex min-h-screen w-full">
		<BackgroundSpotlight rotate="bg-gradient-to-bl"/>
		<main class=" container z-10 flex min-h-screen flex-col items-center justify-center gap-9 text-primary dark:text-d-primary">
			<h1 class="text-3xl underline decoration-accent-color underline-offset-8">Contact</h1>
			<h3 class=" mb-4 text-center text-xl font-medium sm:text-2xl">Find me on my social networks or send me an email.</h3>
			<div class="flex w-full flex-row justify-between">
				<SocialLogo :logo="GithubSvg" name="DevJ2K"/>
				<SocialLogo :logo="LinkedinSvg" name="Théo Ajavon"/>
				<SocialLogo :logo="InstagramSvg" name="devj2k"/>
				<SocialLogo :logo="MaltSvg" name="theoajavon"/>
				<SocialLogo :logo="EmailSvg" name="ajavontheopro@gmail.com"/>
			</div>
			<div class="w-1/2 border-t  opacity-30"></div>

			<div class="flex flex-col gap-6">
				<div class="flex flex-col items-center gap-1">
					<h3 class=" text-lg font-semibold">Name</h3>
					<input class="block w-full rounded-md border bg-black p-2 text-sm" type="text" maxlength="30">
				</div>
				<div class="flex flex-col items-center gap-1">
					<h3 class=" text-lg font-semibold">Email</h3>
					<input class="block w-full rounded-md border bg-black p-2 text-sm" type="text">
				</div>
				<div class="flex flex-col items-center gap-1">
					<h3 class=" text-lg font-semibold">Phone</h3>
					<input class="block w-full rounded-md border bg-black p-2 text-sm" type="text" maxlength="20">
				</div>
				<div class="flex flex-col items-center gap-1">
					<h3 class=" text-lg font-semibold">How can I help you ?</h3>
					<textarea class="block w-full rounded-md border bg-black p-1 text-sm" rows="4"></textarea>
				</div>
			</div>

			<div class="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-md border px-4 py-2 shadow-xl">
				<i class="fa-regular fa-paper-plane"></i>
				<h3>Send</h3>
			</div>

		</main>
	</div>
</template>

<script setup>
import BackgroundSpotlight from '@/components/BackgroundSpotlight.vue';
import GithubSvg from '@/components/logos/GithubSvg.vue';
import LinkedinSvg from '@/components/logos/LinkedinSvg.vue';
import InstagramSvg from '@/components/logos/InstagramSvg.vue'
import MaltSvg from '@/components/logos/MaltSvg.vue';
import EmailSvg from '@/components/logos/EmailSvg.vue';
import SocialLogo from '@/components/SocialLogo.vue';
</script>
