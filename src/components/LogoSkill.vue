<template>
	<div class="flex flex-col items-center justify-center gap-2">
		<logo/>
		{{ techName }}
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
