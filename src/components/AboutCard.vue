<template>
	<div class="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse md:even:text-right">
		<!-- Icon -->
		<div class=" flex size-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
		</div>
		<!-- Card -->
		<div class="w-[calc(100%-4rem)] p-4 md:w-[calc(50%-2.5rem)]">

			<!-- Line with dot -->
			<div class="mb-3 flex flex-row items-center justify-center md:group-even:flex-row-reverse">
				<div class=" size-2 overflow-hidden rounded-full border-2 bg-primary"></div>
				<div class=" h-px w-full bg-accent-color"></div>
			</div>

			<!-- Content -->
			<h2 class="mb-1 text-xl font-bold text-primary">{{ itemDate }}</h2>
			<p v-if="gradientText" class="bg-gradient-to-b from-primary bg-clip-text text-transparent">{{ content }}</p>
			<p v-else class="text-primary">
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
