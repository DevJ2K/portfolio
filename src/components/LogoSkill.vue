<template>
	<div class="relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-subtle-border bg-ui-bg p-2 shadow-md transition-colors  hover:border-hover-ui-border dark:border-d-subtle-border dark:bg-d-ui-bg dark:hover:border-d-hover-ui-border" @click="searchByTags">
	<!-- @mouseover="displayLogoParagraph" @mouseout="hideLogoParagraph" -->
		<logo size="w-14 h-8 md:w-16 sm:h-10" color=""/>
		<h1 class="text-xs font-semibold sm:text-sm">{{ techName }}</h1>
		<p :id="techName+'_tooltip'" class="absolute top-0 z-50 mt-2 rounded-md border border-subtle-border bg-subtle-bg p-2 text-xs font-medium shadow-lg transition-all dark:border-d-subtle-border dark:bg-d-subtle-bg sm:min-w-36" style="opacity: 0; visibility: hidden;">{{ description }}</p>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

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
const router = useRouter();
function searchByTags() {
	router.push({
		name: 'projects',
		query: {
			tag: props.techName.toLowerCase()
		}

	}).then(() => {
		window.scrollTo(0, 0);
	});
}
// const displayLogoParagraph = () => {
// 	document.getElementById(props.techName + '_tooltip').style.visibility = 'visible';
// 	document.getElementById(props.techName + '_tooltip').style.opacity = 1;
// }
// const hideLogoParagraph = () => {
// 	document.getElementById(props.techName + '_tooltip').style.opacity = 0;
// 	document.getElementById(props.techName + '_tooltip').style.visibility = 'hidden';
// }


</script>
