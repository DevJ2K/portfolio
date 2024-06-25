<template>
	<div class="flex flex-col items-center justify-center gap-2 rounded-lg border bg-black/15 p-2">
		<logo size="w-14 h-10 md:w-16 md:h-10"/>
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
