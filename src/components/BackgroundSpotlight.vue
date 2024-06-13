<template>
	<div :class="`absolute top-0 left-0 w-full h-screen -z-10 ${color}`"></div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
	color: {
		type: String,
		default: 'bg-blue-500'
	}
})
</script>
