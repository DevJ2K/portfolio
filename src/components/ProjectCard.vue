<template>
	<div class="flex max-w-xs flex-col items-start justify-start gap-4 rounded-2xl bg-accent-color/35 p-6 shadow-md">
		<div class="flex flex-row items-center justify-center gap-4">
			<div class="size-12 overflow-hidden rounded-2xl border-2 bg-blue-400 max-sm:size-14">
				<img src="../assets/projectsIcon/tododev_logo.png" alt="" class=" size-full object-cover">
			</div>
			<h1 class=" text-xl font-bold max-sm:text-lg">{{ title }}</h1>
		</div>
		<p class=" text-sm font-medium">{{ description }}</p>
		<div class="flex size-full flex-col items-center justify-between gap-4">
			<div class="flex flex-wrap gap-3">
				<div v-for="tag in tags" :key="tag"
					class=" rounded-xl bg-accent-color px-4 py-2 text-xs font-bold dark:bg-accent-color-dark/40 border ">{{ tag }}
				</div>
			</div>
			<a class=" flex flex-row items-center justify-center gap-2 rounded-md bg-accent-color px-3 py-2 text-base font-bold text-primary"
				:href="projectLink" target="_blank">
				<p class=" truncate">View more</p><i class="fa-solid fa-arrow-right"></i>
			</a>

			<!--
			<a href="#" class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="ms-2 size-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a> -->

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
