<template>
	<div class="flex flex-col items-center justify-center gap-2 rounded-lg border bg-black/15 p-2">
		<logo size="w-16 h-10 md:w-20 md:h-14"/>
		<h3 class="text-xs font-semibold sm:text-sm">{{ techName }}</h3>
	</div>
</template>

<script setup>
defineProps({
	logo: {
		type: Object,
		default: null
	},
	techName: {
		type: String,
		default: "none"
	}
});
</script>
