<template>
	<div class="flex flex-col items-center justify-center gap-2 rounded-lg border border-subtle-border bg-ui-bg p-2 transition-colors hover:border-hover-ui-border dark:border-d-subtle-border dark:bg-d-ui-bg dark:hover:border-d-hover-ui-border">
		<logo size="w-14 h-10 md:w-16 md:h-10" color=""/>
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
