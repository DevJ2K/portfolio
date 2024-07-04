<template>
	<div class="relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-subtle-border bg-ui-bg p-2 shadow-md transition-colors  dark:border-d-subtle-border dark:bg-d-ui-bg dark:hover:border-d-hover-ui-border" @mouseover="displayLogoParagraph" @mouseout="hideLogoParagraph">
		<logo size="w-14 h-8 md:w-16 sm:h-10" color=""/>
		<h3 class="text-xs font-semibold sm:text-sm">{{ techName }}</h3>
		<p :id="techName+'_tooltip'" class="absolute top-0 z-50 mt-2 rounded-md border border-subtle-border bg-subtle-bg p-2 text-xs font-medium shadow-lg transition-all dark:border-d-subtle-border dark:bg-d-subtle-bg sm:min-w-36" style="opacity: 0; visibility: hidden;">{{ description }}</p>
	</div>
</template>

<script setup>
const props = defineProps({
	logo: {
		type: Object,
		default: null
	},
	techName: {
		type: String,
		default: "none"
	},
	description: {
		type: String,
		default: "A language to build something, I don't know what but gamberge poto you know what I mean."
	}
});

const displayLogoParagraph = () => {
	// console.log("Display paragraph !");
	document.getElementById(props.techName + '_tooltip').style.visibility = 'visible';
	document.getElementById(props.techName + '_tooltip').style.opacity = 1;
}

const hideLogoParagraph = () => {
	// console.log("Hide paragraph !");
	document.getElementById(props.techName + '_tooltip').style.opacity = 0;
	document.getElementById(props.techName + '_tooltip').style.visibility = 'hidden';
}

</script>
