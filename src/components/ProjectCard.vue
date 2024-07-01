<template>
	<!-- <a class="select-none" :href="projectLink" target="_blank"> -->


		<div class="flex max-w-xs flex-col justify-between overflow-hidden rounded-2xl border border-ui-border bg-ui-bg shadow-lg dark:border-d-ui-border dark:bg-d-ui-bg">
			<div>
				<div>
					<img :src="previewImage" alt="" class="cursor-pointer"  v-on:click="openLink()">
				</div>
				<div class="flex flex-col gap-4 p-6">
					<h1 class=" text-lg font-semibold text-high-contrast-text dark:text-d-high-contrast-text sm:text-xl">{{ title }}</h1>

					<div class="h-px w-3/4 bg-black/25 dark:bg-white/25"></div>

					<p class=" text-sm font-normal  text-high-contrast-text dark:text-d-high-contrast-text">{{ description }}</p>


					<div class="flex size-full flex-col items-start justify-start">
						<div class="flex flex-wrap justify-start gap-2">
							<div v-for="tag in tags" :key="tag"
								class="rounded-xl border border-ui-border bg-ui-bg px-4 py-2 text-xs font-semibold text-low-contrast-text shadow-lg transition-colors duration-75 hover:border-hover-ui-border dark:border-d-ui-border dark:bg-d-ui-bg dark:text-d-low-contrast-text dark:hover:border-d-hover-ui-border">{{ tag }}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-3 flex w-full flex-col items-center justify-center gap-2 px-6 md:flex-row">

				<div class="project-card-btn project-card-btn-outline group">
					<RedirectionSvg color="font-medium text-high-contrast-text group-hover:text-white dark:text-d-high-contrast-text h-4 w-4"/>
					<h3 class=" text-nowrap text-sm font-medium text-high-contrast-text group-hover:text-white dark:text-d-high-contrast-text">View Project</h3>
				</div>

				<div class="project-card-btn project-card-btn-fill">
						<GithubSvg color="text-white dark:text-white h-5 w-5"/>
						<h3 class="text-white dark:text-white">GitHub</h3>
				</div>
			</div>
		</div>



		<!-- <div class=" flex max-w-xs cursor-pointer flex-col items-start justify-start gap-4 rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-md transition-all hover:border-hover-ui-border hover:bg-hover-ui-bg hover:shadow-lg dark:border-d-ui-border dark:bg-d-ui-bg dark:hover:border-d-hover-ui-border dark:hover:bg-d-hover-ui-bg" v-on:click="openLink()">
			<div class="flex flex-row items-center justify-center gap-4">
				<div class="overflow-hidden rounded-2xl bg-white shadow">
					<img src="../assets/projectsPreview/WeatherApp.png" alt="" class=" size-full object-cover">
				</div>
			</div>
			<div>
				<h1 class=" text-lg font-semibold text-high-contrast-text dark:text-d-high-contrast-text sm:text-xl">{{ title }}</h1>
				<p class=" text-sm font-normal  text-high-contrast-text dark:text-d-high-contrast-text">{{ description }}</p>
				<div class="flex size-full flex-col items-center justify-center gap-4">
					<div class="flex flex-wrap justify-center gap-3">
						<div v-for="tag in tags" :key="tag"
							class="rounded-xl border border-ui-border bg-ui-bg px-4 py-2 text-xs font-semibold text-low-contrast-text shadow-lg transition-colors duration-75 hover:border-hover-ui-border dark:border-d-ui-border dark:bg-d-ui-bg dark:text-d-low-contrast-text dark:hover:border-d-hover-ui-border">{{ tag }}
						</div>
					</div>
				</div>
			</div>
		</div> -->

		<!-- WITH APP ICON -->
		<!-- <div class=" flex max-w-xs cursor-pointer flex-col items-start justify-start gap-4 rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-md transition-all hover:border-hover-ui-border hover:bg-hover-ui-bg hover:shadow-lg dark:border-d-ui-border dark:bg-d-ui-bg dark:hover:border-d-hover-ui-border dark:hover:bg-d-hover-ui-bg" v-on:click="openLink()">
			<div class="flex flex-row items-center justify-center gap-4">
				<div class="size-10 overflow-hidden rounded-2xl bg-white shadow sm:size-12">
					<img src="../assets/projectsIcon/tododev_logo.png" alt="" class=" size-full object-cover">
				</div>
				<h1 class=" text-lg font-semibold text-high-contrast-text dark:text-d-high-contrast-text sm:text-xl">{{ title }}</h1>
			</div>
			<p class=" text-sm font-normal  text-high-contrast-text dark:text-d-high-contrast-text">{{ description }}</p>
			<div class="flex size-full flex-col items-center justify-center gap-4">
				<div class="flex flex-wrap justify-center gap-3">
					<div v-for="tag in tags" :key="tag"
						class="rounded-xl border border-ui-border bg-ui-bg px-4 py-2 text-xs font-semibold text-low-contrast-text shadow-lg transition-colors duration-75 hover:border-hover-ui-border dark:border-d-ui-border dark:bg-d-ui-bg dark:text-d-low-contrast-text dark:hover:border-d-hover-ui-border">{{ tag }}
					</div>
				</div>
			</div>
		</div> -->
	<!-- </a> -->
</template>

<script setup>
import weatherAppImage from '../assets/projectsPreview/WeatherApp.png';
import RedirectionSvg from './customSvg/RedirectionSvg.vue';
import GithubSvg from './logos/GithubSvg.vue';

const props = defineProps({
	previewImage: {
		type: String,
		default: weatherAppImage
	},
	title: {
		type: String,
		default: "Project Title"
	},
	tags: {
		type: Array,
		default: () => ["Tag-1", "Tag-2", "Tag-3", "Tag-4", "Tag-5"]
	},
	description: {
		type: String,
		default: "Nisi adipisicing aliquip reprehenderit ad. Laborum cillum sunt voluptate ad excepteur dolor excepteur officia deserunt qui occaecat qui. Lorem cillum irure quis mollit deserunt."
	},
	projectLink: {
		type: String,
		default: "http://www.google.com"
	}
})

const openLink = () => {
	window.open(props.projectLink, 'blank');
}
</script>
