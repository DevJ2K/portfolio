<template>
	<div class="relative flex min-h-screen w-full flex-col">
		<BackgroundSpotlight rotate="bg-gradient-to-bl"  bg-nb="1"/>
		<div class=" h-28 w-full"></div>
		<main class=" container z-10 flex min-h-screen flex-col items-center gap-9 text-primary dark:text-d-primary">
			<h1 class="text-3xl underline decoration-accent-color underline-offset-8">Contact</h1>
			<!-- <h3 class=" mb-4 text-center text-xl font-medium sm:text-2xl">Find me on my social networks or send me an email.</h3> -->
			<fieldset class="flex w-3/4 flex-row items-center justify-around rounded-lg border bg-accent-color/15 px-6 py-4">
					<legend class=" m-auto px-1 text-lg font-semibold">Social Networks</legend>
			<!-- <div class="flex w-3/4 flex-row justify-between"> -->
				<SocialLogo :logo="GithubSvg" name="DevJ2K"/>
				<SocialLogo :logo="LinkedinSvg" name="Théo Ajavon"/>
				<SocialLogo :logo="InstagramSvg" name="devj2k"/>
				<SocialLogo :logo="MaltSvg" name="theoajavon"/>
				<SocialLogo :logo="EmailSvg" name="ajavontheopro@gmail.com"/>
			<!-- </div> -->
			</fieldset>

			<!-- <div class="w-1/2 border-t  opacity-30"></div> -->


			<fieldset class="flex w-3/4 flex-col items-center justify-center gap-6 rounded-lg border bg-accent-color/15 py-4">
					<legend class=" m-auto px-1 text-lg font-semibold">Your information</legend>

			<div class="flex w-3/4 flex-col items-end gap-6">
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class=" text-lg font-semibold">Name</h3>
					<input class="block w-full rounded-md border bg-bg-2 p-2 text-sm dark:bg-d-bg-2" type="text" maxlength="30">
				</div>
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class=" text-lg font-semibold">Email</h3>
					<input class="block w-full rounded-md border bg-bg-2 p-2 text-sm dark:bg-d-bg-2" type="text">
				</div>
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class=" text-lg font-semibold">Phone</h3>
					<input class="block w-full rounded-md border bg-bg-2 p-2 text-sm dark:bg-d-bg-2" type="text" maxlength="20">
				</div>
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class=" text-lg font-semibold">How can I help you ?</h3>
					<textarea class="block w-full rounded-md border bg-bg-2 p-1 text-sm dark:bg-d-bg-2" rows="4"></textarea>
				</div>

				<div class="flex w-fit cursor-pointer flex-row items-center justify-center gap-2 rounded-md border px-4 py-2 shadow-xl">
					<i class="fa-regular fa-paper-plane"></i>
					<h3>Send</h3>
				</div>
			</div>


			</fieldset>

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
