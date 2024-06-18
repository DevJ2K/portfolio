<template>
	<div class="relative flex min-h-screen w-full">
		<BackgroundSpotlight rotate="bg-gradient-to-br"/>
		<main class=" container z-10 flex min-h-screen flex-col items-center justify-center gap-9 text-primary dark:text-primary-dark">
			<h1 class="text-3xl underline decoration-accent-color underline-offset-8">Skills</h1>

			<div class="flex flex-col items-center justify-center">
				<h3 class=" mb-4 text-center text-sm font-medium sm:text-xl">Latest Projects</h3>
				<!-- <div class="grid grid-cols-3 flex-row gap-3 sm:flex"> -->
				<div class="flex flex-wrap justify-center gap-4 md:gap-10">
					<ProjectCard/>
				</div>
			</div>

		</main>
	</div>
</template>

<script setup>
import BackgroundSpotlight from '@/components/BackgroundSpotlight.vue';
import ProjectCard from '@/components/ProjectCard.vue';


</script>
