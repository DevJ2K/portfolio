<template>
	<div class="relative flex min-h-screen w-full flex-col">
		<BackgroundSpotlight rotate="bg-gradient-to-br" bg-color="subtle-bg" />
		<div class=" h-28 w-full"></div>
		<main class=" container z-10 flex min-h-screen flex-col items-center gap-9 text-low-contrast-text dark:text-d-low-contrast-text ">
			<h1 class="tab-title">Projects</h1>

			<div class="flex flex-col items-center justify-center">
				<h3 class=" mb-4 text-center text-xl font-medium sm:text-2xl">Featured Projects</h3>
				<!-- <div class="grid grid-cols-3 flex-row gap-3 sm:flex"> -->
				<div class="flex flex-wrap justify-center gap-6">
					<ProjectCard :tags="['Firebase', 'Real-time data', 'Community']"/>
					<ProjectCard :tags="['Firebase', 'Auth0', 'Message']"/>
					<ProjectCard :tags="['Firebase', 'Auth0', 'Message']"/>
					<!-- <ProjectCard :tags="['3D', 'API']"/>
					<ProjectCard :tags="['TestFlight', 'Storage']"/>
					<ProjectCard :tags="['POO', 'Scrapping', 'Database']"/> -->
				</div>
			</div>

			<button class="view-more-project-btn group"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>View More Projects</button>

			<!-- <div class="flex flex-col items-center justify-center">
				<h3 class=" mb-4 text-center text-xl font-medium sm:text-2xl">Highlighted Projects</h3>
				<div class="flex flex-wrap justify-center gap-4">
					<ProjectCard :tags="['3D', 'API']"/>
					<ProjectCard :tags="['TestFlight', 'Storage']"/>
					<ProjectCard :tags="['POO', 'Scrapping', 'Database']"/>
				</div>
			</div> -->

		</main>
	</div>
</template>

<script setup>
import BackgroundSpotlight from '@/components/BackgroundSpotlight.vue';
import ProjectCard from '@/components/ProjectCard.vue';


</script>
