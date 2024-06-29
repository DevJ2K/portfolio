<template>
	<div class="group relative mb-6 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse md:even:text-right">
		<!-- Icon -->
		<div class=" flex size-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
		</div>
		<!-- Card -->
		<!-- <div class="w-[calc(100%-4rem)] p-4 md:w-[calc(50%-2.5rem)]"> -->

		<div v-if="gradientText" class="w-[calc(100%-4rem)] rounded-xl border border-ui-border bg-gradient-to-b from-ui-bg to-transparent p-4 dark:border-d-ui-border dark:from-d-ui-bg md:w-[calc(50%-2.5rem)]">


			<!-- Line with dot -->
			<!-- <div class="mb-3 flex flex-row items-center justify-center md:group-even:flex-row-reverse">
				<div class=" size-2 overflow-hidden rounded-full border-2 bg-ui-bg"></div>
				<div class=" h-px w-full bg-accent-color"></div>
			</div> -->

			<!-- Content -->
			<h2 class=" mb-1 text-xl font-bold text-high-contrast-text dark:text-d-high-contrast-text">{{ itemDate }}</h2>
			<p class="bg-gradient-to-b from-low-contrast-text bg-clip-text text-transparent dark:from-d-low-contrast-text">{{ content }}</p>
		</div>
		<!-- <div v-if="gradientText" class="w-[calc(100%-4rem)] rounded-xl border border-ui-border bg-gradient-to-b from-ui-bg to-transparent p-4 dark:border-d-ui-border dark:from-d-ui-bg md:w-[calc(50%-2.5rem)]">
			<h2 class=" mb-1 text-xl font-bold text-high-contrast-text dark:text-d-high-contrast-text">{{ itemDate }}</h2>
			<p class="bg-gradient-to-b from-low-contrast-text bg-clip-text text-transparent dark:from-d-low-contrast-text">{{ content }}</p>
		</div> -->
		<div v-else class="w-[calc(100%-4rem)] rounded-xl border border-ui-border bg-ui-bg p-4 dark:border-d-ui-border dark:bg-d-ui-bg md:w-[calc(50%-2.5rem)]">
			<h2 class=" mb-1 text-xl font-bold text-high-contrast-text dark:text-d-high-contrast-text">{{ itemDate }}</h2>
			<p class="text-low-contrast-text dark:text-d-low-contrast-text">
				{{ content }}
			</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	itemDate: {
		type: String,
		default: 'Month YYYY'
	},
	content: {
		type: String,
		default: "Lorem mollit velit consequat ea commodo sunt cupidatat ipsum veniam qui elit. Ex eiusmod consequat sit proident officia elit et eiusmod officia reprehenderit proident. Culpa et ea et duis officia incididunt ut quis est. Ipsum fugiat nulla ea incididunt magna magna voluptate nostrud ullamco deserunt do cillum. Pariatur Lorem quis consequat ipsum."
	},
	gradientText: {
		type: Boolean,
		default: false
	}
})
</script>
