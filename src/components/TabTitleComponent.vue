<template>
	<div class="flex w-4/6 scroll-mt-28 flex-row items-center gap-3 text-nowrap sm:w-3/6">
				<div class="h-[2px] w-full rounded-full bg-accent-color dark:bg-d-accent-color"></div>
				<h1 class="tab-title no-underline">{{ title }}</h1>
				<div class="h-[2px] w-full rounded-full bg-accent-color dark:bg-d-accent-color"></div>
			</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: 'Title'
	}
})
</script>
