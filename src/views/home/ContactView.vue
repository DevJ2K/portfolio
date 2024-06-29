<template>
	<div class="relative flex min-h-screen w-full flex-col">
		<BackgroundSpotlight rotate="bg-gradient-to-bl"/>
		<div class=" h-28 w-full"></div>
		<main class=" container z-10 flex min-h-screen flex-col items-center gap-9">
			<h1 class="tab-title">Contact</h1>
			<!-- <h3 class=" mb-4 text-center text-xl font-medium sm:text-2xl">Find me on my social networks or send me an email.</h3> -->
			<fieldset class="flex w-3/4 flex-row items-center justify-around rounded-lg border border-subtle-border bg-subtle-bg px-6 py-4 shadow-md transition-all hover:border-hover-ui-border hover:shadow-lg dark:border-d-subtle-border dark:bg-d-subtle-bg dark:hover:border-d-hover-ui-border">
					<legend class=" m-auto px-1 text-lg font-semibold text-high-contrast-text dark:text-d-high-contrast-text">Social Networks</legend>
			<!-- <div class="flex w-3/4 flex-row justify-between"> -->
				<SocialLogo :logo="GithubSvg" name="DevJ2K"/>
				<SocialLogo :logo="LinkedinSvg" name="Théo Ajavon"/>
				<SocialLogo :logo="InstagramSvg" name="devj2k"/>
				<SocialLogo :logo="MaltSvg" name="theoajavon"/>
				<SocialLogo :logo="EmailSvg" name="ajavontheopro@gmail.com"/>
			<!-- </div> -->
			</fieldset>

			<!-- <div class="w-1/2 border-t  opacity-30"></div> -->


			<fieldset class="flex w-3/4 flex-col items-center justify-center gap-6 rounded-lg border border-subtle-border bg-subtle-bg py-4 shadow-md transition-all hover:border-hover-ui-border hover:shadow-lg dark:border-d-subtle-border dark:bg-d-subtle-bg dark:hover:border-d-hover-ui-border">
					<legend class=" m-auto px-1 text-lg font-semibold text-high-contrast-text dark:text-d-high-contrast-text">Your information</legend>

			<div class="flex w-3/4 flex-col items-end gap-6">
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class="form-input-name">Name*</h3>
					<input class="form-input" type="text" maxlength="30">
				</div>
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class="form-input-name">Email*</h3>
					<input  class="form-input" type="text">
				</div>
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class="form-input-name">Phone</h3>
					<input class="form-input" type="text" maxlength="20">
				</div>
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class="form-input-name">How can I help you ?*</h3>
					<textarea class="form-input" rows="4" minlength="50" maxlength="2000"></textarea>
				</div>

				<button class="flex w-fit cursor-pointer flex-row items-center justify-center gap-2 rounded-md border border-ui-border px-4 py-2 text-high-contrast-text shadow-lg transition-all hover:border-transparent hover:bg-accent-color hover:text-d-high-contrast-text hover:shadow-xl focus:border-high-contrast-text dark:border-d-ui-border dark:text-d-high-contrast-text hover:dark:border-transparent dark:focus:border-d-high-contrast-text">
					<i class="fa-regular fa-paper-plane"></i>
					<h3>Send</h3>
				</button>
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
