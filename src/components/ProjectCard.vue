<template>
	<div class="flex max-w-xs flex-col items-start justify-start gap-4 rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-md transition-all hover:border-hover-ui-border hover:shadow-lg dark:border-d-ui-border dark:bg-d-ui-bg dark:hover:border-d-hover-ui-border">
		<div class="flex flex-row items-center justify-center gap-4">
			<div class="size-12 overflow-hidden rounded-2xl bg-white shadow max-sm:size-14">
				<img src="../assets/projectsIcon/tododev_logo.png" alt="" class=" size-full object-cover">
			</div>
			<h1 class=" text-xl font-bold text-high-contrast-text dark:text-d-high-contrast-text max-sm:text-lg">{{ title }}</h1>
		</div>
		<p class=" text-sm font-medium  text-high-contrast-text dark:text-d-high-contrast-text">{{ description }}</p>
		<div class="flex size-full flex-col items-center justify-center gap-4">
			<div class="flex flex-wrap justify-center gap-3">
				<div v-for="tag in tags" :key="tag"
					class=" cursor-default rounded-xl border border-ui-border bg-ui-bg px-4 py-2 text-xs font-bold text-low-contrast-text shadow-lg transition-colors duration-75 hover:border-hover-ui-border dark:border-d-ui-border dark:bg-d-ui-bg dark:text-d-low-contrast-text dark:hover:border-d-hover-ui-border">{{ tag }}
				</div>
			</div>
			<a class="group flex flex-row items-center justify-center rounded-md bg-accent-color px-3 py-2 text-base font-bold text-primary transition-all hover:bg-accent-color/70"
				:href="projectLink" target="_blank">
				<p class=" mr-2 truncate transition-all group-hover:mr-2">View more</p><i class="fa-solid fa-arrow-right"></i>
			</a>
		</div>
	</div>
</template>

<script setup>
defineProps({
	icon: {
		type: String,
		default: "../assets/projectsIcon/tododev_logo.png"
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
</script>
