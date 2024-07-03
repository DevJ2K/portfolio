<template>
	<i class="fa-solid fa-bars"></i>

	<div class="flex size-6 flex-col gap-12" @click="toggleMenu">

		<div class="grid size-6 justify-items-center gap-1.5">
			<div id="hamburger-bar-1" class="hamburger-bar"></div>
			<div id="hamburger-bar-2" class="hamburger-bar"></div>
			<div id="hamburger-bar-3" class="hamburger-bar"></div>
		</div>
<!--
		<button class="group size-20 rounded-lg border-2 border-white">
	<div class="grid justify-items-center gap-1.5">
    <span class="h-1 w-8 rounded-full bg-white transition group-hover:translate-y-2.5 group-hover:rotate-45"></span>
    <span class="h-1 w-8 rounded-full bg-white transition group-hover:scale-x-0"></span>
    <span class="h-1 w-8 rounded-full bg-white group-hover:-translate-y-2.5 group-hover:-rotate-45"></span>
  </div>
</button> -->

	</div>


</template>

<script setup>
import { ref } from 'vue';

const displayMenu = ref(null);


const toggleMenu = () => {
	const bar1 = document.getElementById('hamburger-bar-1');
	const bar2 = document.getElementById('hamburger-bar-2');
	const bar3 = document.getElementById('hamburger-bar-3');
	displayMenu.value = !displayMenu.value;
	if (displayMenu.value) {
		console.log("Is showing menu");
		// Bar 1
		bar1.classList.add('rotate-45');
		bar1.classList.add('translate-y-2.5');
		// Bar 2
		bar2.classList.add('scale-x-0');
		// Bar 3
		bar3.classList.add('-rotate-45');
		bar3.classList.add('-translate-y-2.5');
	} else {
		console.log("Is showing menu");
		// Bar 1
		bar1.classList.remove('rotate-45');
		bar1.classList.remove('translate-y-2.5');
		// Bar 2
		bar2.classList.remove('scale-x-0');
		// Bar 3
		bar3.classList.remove('-rotate-45');
		bar3.classList.remove('-translate-y-2.5');
	}
}
</script>
