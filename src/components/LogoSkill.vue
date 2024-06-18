<template>
	<div class="flex flex-col items-center justify-center gap-2 bg-slate-500/20 px-2">
		<logo size="w-20 h-14"/>
		<h3 class=" font-semibold">{{ techName }}</h3>
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
