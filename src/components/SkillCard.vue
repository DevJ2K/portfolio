<template>
	<div class="group flex max-w-xs flex-col items-start justify-start gap-4 rounded-lg border bg-black/15 p-4 shadow-md">
		<div class="relative flex flex-row items-center justify-center gap-2">
			<i :class="icon" class="text-lg font-bold max-sm:text-lg"></i>
			<h1 class="text-sm font-bold">{{ skill }}</h1>
			<!-- <p class="absolute top-0 z-50 w-32 rounded-md border bg-black p-2 text-xs opacity-0 transition-all group-hover:opacity-100">{{ description }}</p> -->
		</div>
	</div>
</template>

<script setup>
defineProps({
	skill: {
		type: String,
		default: "Skills"
	},
	description: {
		type: String,
		default: "Ea reprehenderit nisi nostrud in officia commodo Lorem aliquip cillum nisi do eiusmod consectetur Lorem. Culpa minim in reprehenderit magna quis nisi dolor. Nisi velit ex cillum eu. Sit pariatur officia laborum eiusmod consequat pariatur dolor nisi aute ut qui nostrud commodo dolore."
	},
	icon: {
		type: String,
		default: "fa-solid fa-gear"
	}
})
</script>

