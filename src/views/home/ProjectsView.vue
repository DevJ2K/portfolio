<template>
	<div class="relative flex min-h-screen w-full flex-col">
		<BackgroundSpotlight rotate="bg-gradient-to-br" bg-nb="bg-2"/>
		<div class=" h-28 w-full"></div>
		<main class=" container z-10 flex min-h-screen flex-col items-center gap-9 text-primary dark:text-d-primary">
			<h1 class="text-3xl underline decoration-accent-color underline-offset-8">Projects</h1>

			<div class="flex flex-col items-center justify-center">
				<h3 class=" mb-4 text-center text-xl font-medium sm:text-2xl">Latest Projects</h3>
				<!-- <div class="grid grid-cols-3 flex-row gap-3 sm:flex"> -->
				<div class="flex flex-wrap justify-center gap-4">
					<ProjectCard :tags="['Firebase', 'Real-time data', 'Community']"/>
					<ProjectCard :tags="['Firebase', 'Auth0', 'Message']"/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center">
				<h3 class=" mb-4 text-center text-xl font-medium sm:text-2xl">Highlighted Projects</h3>
				<!-- <div class="grid grid-cols-3 flex-row gap-3 sm:flex"> -->
				<div class="flex flex-wrap justify-center gap-4">
					<ProjectCard :tags="['3D', 'API']"/>
					<ProjectCard :tags="['TestFlight', 'Storage']"/>
					<ProjectCard :tags="['POO', 'Scrapping', 'Database']"/>
				</div>
			</div>

		</main>
	</div>
</template>

<script setup>
import BackgroundSpotlight from '@/components/BackgroundSpotlight.vue';
import ProjectCard from '@/components/ProjectCard.vue';


</script>
