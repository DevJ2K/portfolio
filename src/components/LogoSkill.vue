<template>
	<div class="flex flex-col items-center justify-center gap-2 rounded-lg border border-subtle-border bg-ui-bg p-2 shadow-md transition-colors  dark:border-d-subtle-border dark:bg-d-ui-bg dark:hover:border-d-hover-ui-border">
		<logo size="w-14 h-8 md:w-16 sm:h-10" color=""/>
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
