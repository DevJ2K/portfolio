<template>
	<!-- <div> -->
		<div class="group flex cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border border-subtle-border bg-ui-bg p-4 shadow-md transition-colors hover:border-hover-ui-border dark:border-d-subtle-border dark:bg-d-ui-bg dark:hover:border-d-hover-ui-border" @mouseover="displaySkillParagraph" @mouseout="hideSkillParagraph">
			<div class="relative flex flex-row items-center justify-center gap-2">
				<i :class="icon" class="text-lg font-bold max-sm:text-lg"></i>
				<h1 class="text-xs font-bold sm:text-sm">{{ skill }}</h1>
				<p :id="skill+'_tooltip'" class="absolute top-0 z-50 rounded-md border border-subtle-border bg-subtle-bg p-2 text-xs font-medium shadow-lg transition-all dark:border-d-subtle-border dark:bg-d-subtle-bg sm:min-w-40 md:min-w-60 lg:min-w-72" style="opacity: 0; visibility: hidden;">{{ description }}</p>
			</div>
		</div>
	<!-- </div> -->
</template>

<script setup>
const props = defineProps({
	skill: {
		type: String,
		default: "Skills"
	},
	description: {
		type: String,
		// default: "Ea reprehenderit nisi nostrud in officia commodo Lorem aliquip cillum nisi do eiusmod consectetur Lorem. Culpa minim in reprehenderit magna quis nisi dolor. Nisi velit ex cillum eu."
		default: "Minim commodo cupidatat ipsum culpa adipisicing adipisicing proident ipsum ea duis duis id laboris incididunt. Officia proident dolore commodo aliquip ipsum. Minim anim pariatur qui do elit Lorem sit incididunt.",
	},
	icon: {
		type: String,
		default: "fa-solid fa-gear"
	}
});

const displaySkillParagraph = () => {
	document.getElementById(props.skill + '_tooltip').style.visibility = 'visible';
	document.getElementById(props.skill + '_tooltip').style.opacity = 1;
}

const hideSkillParagraph = () => {
	document.getElementById(props.skill + '_tooltip').style.opacity = 0;
	document.getElementById(props.skill + '_tooltip').style.visibility = 'hidden';
}

// const myDiv = document.getElementById("myDiv");
// myDiv.addEventListener("mouseover", displaySkillParagraph);
// myDiv.addEventListener("mouseleave", hideSkillParagraph);
</script>

