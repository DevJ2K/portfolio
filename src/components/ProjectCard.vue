<template>
	<!-- <a class="select-none" :href="projectLink" target="_blank"> -->


		<div class="custom-shadow-lg flex h-full max-w-xs flex-col justify-between overflow-hidden rounded-2xl border-ui-border bg-subtle-bg dark:border-d-ui-border dark:bg-d-ui-bg  b_project_card:hidden">
			<div>
				<div class="bg-black/10 dark:bg-white/10">
					<img :src="previewImage" :alt="title + '_img'" class=" size-full object-cover" :class="projectLink != null ? 'cursor-pointer' : 'cursor-default'" @click="if (projectLink != null){openProjectLink()};">
				</div>
				<div class="flex flex-col gap-4 p-6">
					<div class="flex flex-col gap-1">
						<h1 class=" text-lg font-semibold text-high-contrast-text underline decoration-accent-color decoration-2 underline-offset-4 dark:text-d-high-contrast-text sm:text-xl">{{ title }}</h1>
						<h2 class=" text-sm font-semibold text-high-contrast-text dark:text-d-high-contrast-text ">{{ date }}</h2>
					</div>
					<div class="h-px w-[150%] -translate-x-6 bg-ui-border/50 dark:bg-d-ui-border/30"></div>
					<p class=" text-sm font-normal  text-high-contrast-text dark:text-d-high-contrast-text">{{ description }}</p>


					<div class="flex size-full flex-col items-start justify-start">
						<div class="flex flex-wrap justify-start gap-2">
							<div v-for="tag in tags" :key="tag"
								class=" custom-shadow-sm cursor-default rounded-xl border-ui-border bg-ui-bg px-4 py-2 text-xs font-semibold text-low-contrast-text transition-colors duration-75 hover:border-hover-ui-border dark:border-d-ui-border dark:bg-d-hover-ui-bg dark:text-d-low-contrast-text dark:hover:border-d-hover-ui-border">{{ tag }}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="githubLink || projectLink">
				<div class="h-px w-full bg-ui-border/50 dark:bg-d-ui-border/50"></div>
				<div class="flex w-full flex-col items-center justify-center gap-2 p-3 md:flex-row">
					<div v-if="githubLink" @click="openOnGithub" class="project-card-btn project-card-btn-outline group size-full rounded-xl">
						<GithubSvg color="font-medium text-high-contrast-text dark:text-d-high-contrast-text h-4 w-4"/>
						<h1 class=" text-nowrap text-sm font-medium text-high-contrast-text dark:text-d-high-contrast-text">Github</h1>
					</div>

					<div v-if="projectLink" @click="openProjectLink" class="project-card-btn project-card-btn-fill size-full rounded-xl">
							<RedirectionSvg color="text-white dark:text-black/80 h-4 w-4"/>
							<h1 class="text-sm font-medium text-white dark:text-black/80">View Project</h1>
					</div>
				</div>
			</div>
		</div>

	<div class="custom-shadow-lg hidden w-full flex-row overflow-hidden rounded-2xl border-subtle-border bg-subtle-bg dark:border-d-subtle-border dark:bg-d-ui-bg b_project_card:flex">
		<div class="w-full max-w-xs lg:max-w-sm">
			<img :src="previewImage" :alt="title + '_img'" class=" size-full object-cover" :class="projectLink != null ? 'cursor-pointer' : 'cursor-default'" @click="if (projectLink != null){openProjectLink()};">
		</div>
		<div class="flex flex-col items-start gap-4 p-4 w-3/4">
			<div class="flex flex-col gap-4">


				<div class="flex flex-col gap-1">
					<h1 class=" text-lg font-semibold text-high-contrast-text underline decoration-accent-color  decoration-2 underline-offset-4 dark:text-d-high-contrast-text sm:text-2xl">{{ title }}</h1>
					<h2 class=" text-sm font-semibold text-high-contrast-text dark:text-d-high-contrast-text ">{{ date }}</h2>
				</div>
				<div class="h-px w-[150%] -translate-x-4 bg-ui-border/50 dark:bg-d-ui-border/30"></div>
				<p class=" text-sm font-normal  text-high-contrast-text dark:text-d-high-contrast-text">{{ description }}</p>




				<div class="flex size-full flex-col items-start justify-start">
						<div class="flex flex-wrap justify-start gap-2">
							<div v-for="tag in tags" :key="tag"
								class=" custom-shadow-sm cursor-default rounded-xl border-ui-border bg-ui-bg px-4 py-2 text-xs font-semibold text-low-contrast-text transition-colors duration-75 hover:border-hover-ui-border dark:border-d-ui-border dark:bg-d-hover-ui-bg dark:text-d-low-contrast-text dark:hover:border-d-hover-ui-border">{{ tag }}
							</div>
						</div>
				</div>
			</div>

			<div>

				<div class="flex flex-col items-center justify-center gap-2 pt-2 md:flex-row">

					<div v-if="githubLink" @click="openOnGithub" class="project-card-btn project-card-btn-outline group h-full">
						<GithubSvg color="font-medium text-high-contrast-text dark:text-d-high-contrast-text h-4 w-4"/>
						<h1 class=" text-nowrap text-sm font-medium text-high-contrast-text dark:text-d-high-contrast-text">Github</h1>
					</div>

					<div v-if="projectLink" @click="openProjectLink" class="project-card-btn project-card-btn-fill h-full">
							<RedirectionSvg color="text-white dark:text-black/80 h-4 w-4"/>
							<h1 class="text-sm font-medium text-white dark:text-black/80">View Project</h1>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>
import noPictureImage from '/projects/no_picture.png';
import RedirectionSvg from './customSvg/RedirectionSvg.vue';
import GithubSvg from './logos/GithubSvg.vue';

const props = defineProps({
	previewImage: {
		type: String,
		default: noPictureImage
	},
	title: {
		type: String,
		default: "Project Title"
	},
	tags: {
		type: Array,
		default: () => ["Tag-1", "Tag-2", "Tag-3", "Tag-4", "Tag-5"]
	},
	date: {
		type: String,
		default: "September 2020 - September 2021"
	},
	description: {
		type: String,
		default: "Nisi adipisicing aliquip reprehenderit ad. Laborum cillum sunt voluptate ad excepteur dolor excepteur officia deserunt qui occaecat qui. Lorem cillum irure quis mollit deserunt."
	},
	githubLink: {
		type: String,
		default: null
	},
	projectLink: {
		type: String,
		default: null
	}
})

const openProjectLink = () => {
	if (props.projectLink != null) {
		window.open(props.projectLink, 'blank');
	}
}

const openOnGithub = () => {
	if (props.githubLink != null) {
		window.open(props.githubLink, 'blank');
	}
}

</script>
