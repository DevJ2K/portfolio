<template>
	<div class=" flex flex-col items-start justify-start gap-4 rounded-2xl bg-accent-color/35 px-10 py-8 shadow-md">
		<div class="flex flex-row items-center justify-center gap-4">
			<div class="size-16 overflow-hidden rounded-2xl border-2 bg-blue-400 max-sm:size-14">
				<img src="../assets/projectsIcon/tododev_logo.png" alt="" class=" size-full object-cover">
			</div>
			<h1 class=" text-3xl font-bold max-sm:text-2xl">{{ title }}</h1>
		</div>
		<p class=" text-base font-medium max-sm:text-sm">{{ description }}</p>
		<div class="flex w-full flex-col items-center justify-between max-sm:gap-4 sm:flex-row">
			<div class="flex flex-row gap-3">
				<div v-for="tag in tags" :key="tag" class=" rounded-2xl bg-accent-color px-4 py-3 font-bold dark:bg-accent-color-dark">{{ tag }}</div>
			</div>
			<a class=" flex flex-row items-center justify-center gap-2 text-xl font-bold text-accent-color" :href="projectLink" target="_blank"><p>View more</p><i class="fa-solid fa-chevron-right"></i></a>
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
		default: () => ["Tag-1", "Tag-2", "Tag-3"]
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
