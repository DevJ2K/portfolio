<template>
	<div class="flex flex-col items-center justify-center gap-2 rounded-md border bg-black/15 p-2">
		<logo size="w-20 md:w-20 h-14"/>
		<h3 class="font-semibold">{{ techName }}</h3>
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
