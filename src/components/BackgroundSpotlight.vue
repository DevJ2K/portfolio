<template>
	<!-- <div :class="`absolute top-0 left-0 w-full h-screen -z-10 ${color}`"></div> -->
	<div class="absolute flex size-full items-center justify-center overflow-hidden">
		<div :class="`absolute top-0 left-0 w-full h-[100%] bg-black`"></div>

		<!-- <div class=" absolute left-0 top-0 h-[450vh] w-36 origin-top-left rotate-[-30deg] bg-accent-color/60 dark:bg-accent-color-dark/60 md:rotate-[-35deg]  lg:rotate-[-50deg]"></div> -->

		<div :class="`absolute left-0 top-0 h-[${lineSize}] w-full ${rotate} from-bg from-40% via-accent-color via-50% to-bg to-60% dark:from-bg-dark dark:from-40% dark:via-accent-color-dark dark:via-50% dark:to-bg-dark dark:to-60%`">
		</div>
		<div class=" absolute left-0 top-0 size-full backdrop-blur-2xl"></div>
	</div>
</template>

<script setup>
defineProps({
	color: {
		type: String,
		default: 'bg-blue-500'
	},
	lineSize: {
		type: String,
		default: '100%'
	},
	rotate: {
		type: String,
		default: "bg-gradient-to-bl"
	}
})
</script>
