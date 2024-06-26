<template>
	<div class="flex flex-col items-center justify-center gap-2">
		<div class="rounded-full border p-2 bg-black/15">
			<logo size="w-6 h-6"/>
		</div>
		<!-- <h3 class="absolute text-xs font-semibold sm:text-sm">{{ name }}</h3> -->
	</div>
</template>

<script setup>
defineProps({
	logo: {
		type: Object,
		default: null
	},
	name: {
		type: String,
		default: "none"
	}
});
</script>
