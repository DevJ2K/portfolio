<template>
	<div class="group cursor-pointer rounded-full border border-ui-border p-3 shadow-lg transition-all hover:border-transparent hover:bg-hover-accent-color hover:shadow-xl dark:border-d-ui-border dark:hover:border-transparent dark:hover:bg-d-hover-accent-color">
		<a :href="link" target="_blank" :aria-label="name">
			<logo :size="size" color="text-high-contrast-text dark:text-d-high-contrast-text group-hover:text-white"/>
		</a>
	</div>
</template>

<script setup>
defineProps({
	logo: {
		type: Object,
		default: null
	},
	name: {
		type: String,
		default: "none"
	},
	size: {
		type: String,
		default: "w-6 h-6"
	},
	link: {
		type: String,
		default: null
	}
});
</script>
