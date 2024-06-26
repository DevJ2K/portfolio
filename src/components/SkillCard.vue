<template>
	<!-- <div> -->
		<div class="group flex  cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border bg-black/15 p-4 shadow-md" @mouseover="displayParagraph" @mouseout="hideParagraph">
			<div class="relative flex flex-row items-center justify-center gap-2">
				<i :class="icon" class="text-lg font-bold max-sm:text-lg"></i>
				<h1 class="text-sm font-bold">{{ skill }}</h1>
				<p :id="skill" class="absolute top-0 z-50 rounded-md border bg-black p-2 text-xs transition-all" style="opacity: 0; visibility: hidden;">{{ description }}</p>
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
		default: "ahetihbieihe. bitibtehibhthb. bieiebiebiheibebhi. betjewrghiwrhwrhgio. wrgihiwrghirwg",
	},
	icon: {
		type: String,
		default: "fa-solid fa-gear"
	}
});

const displayParagraph = () => {
	// console.log("Display paragraph !");
	document.getElementById(props.skill).style.visibility = 'visible';
	document.getElementById(props.skill).style.opacity = 1;
}

const hideParagraph = () => {
	// console.log("Hide paragraph !");
	document.getElementById(props.skill).style.opacity = 0;
	document.getElementById(props.skill).style.visibility = 'hidden';
}

// const myDiv = document.getElementById("myDiv");
// myDiv.addEventListener("mouseover", displayParagraph);
// myDiv.addEventListener("mouseleave", hideParagraph);
</script>

