<template>
	<!-- <a class="select-none" :href="projectLink" target="_blank"> -->
		<div class=" flex max-w-xs cursor-pointer flex-col items-start justify-start gap-4 rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-md transition-all hover:border-hover-ui-border hover:bg-hover-ui-bg hover:shadow-lg dark:border-d-ui-border dark:bg-d-ui-bg dark:hover:border-d-hover-ui-border dark:hover:bg-d-hover-ui-bg" v-on:click="openLink()">
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
				<!-- <a class="group flex flex-row items-center justify-center rounded-2xl bg-accent-color px-3 py-2 text-base font-bold transition-all hover:bg-accent-color/70"
					:href="projectLink" target="_blank">
					<p class=" mr-2 truncate transition-all group-hover:mr-2">View more</p>
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
				</a> -->
			</div>
		</div>
	<!-- </a> -->
</template>

<script setup>
const props = defineProps({
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

const openLink = () => {
	window.open(props.projectLink, 'blank');
}
</script>
