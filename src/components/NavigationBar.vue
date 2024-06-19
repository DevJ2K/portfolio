<template>
	<div class="fixed top-0 z-50 flex h-24 w-full bg-black/40 backdrop-blur-md">
		<div class="container flex items-center justify-between">
			<div class="flex flex-row items-center gap-4">
				<div class=" size-16 overflow-hidden rounded-full border-2 bg-blue-400">
					<img src="../assets/images/j2klogo.png" alt="" class=" size-full object-cover">
				</div>
				<h3 class=" font-bold text-primary">DevJ2K</h3>
			</div>
			<ul class=" flex flex-row gap-8 text-lg font-semibold text-primary max-md:hidden">
				<li><a href="#">About</a></li>
				<li><a href="#">Skills</a></li>
				<li><a href="#">Projects</a></li>
				<li><a href="#">Contact</a></li>
				<li><a href="#" @click="switchColorMode">
					<i v-if="darkMode" class="fa-regular fa-moon"></i>
					<i v-else class="fa-regular fa-sun"></i>
				</a></li>
			</ul>
			<div class=" cursor-pointer text-lg font-semibold text-primary md:hidden" @click="toggleMenu">
				<i class="fa-solid fa-bars"></i>
			</div>
		</div>
		<div v-if="displayMenu" class="md:hidden absolute top-0 mt-24 w-full">
			<ul class=" flex flex-col items-center justify-center gap-8 bg-blue-500 py-4 text-lg font-semibold text-primary">
				<li><a href="#">About</a></li>
				<li><a href="#">Skills</a></li>
				<li><a href="#">Projects</a></li>
				<li><a href="#">Contact</a></li>
				<li><a href="#" @click="switchColorMode">
					<i v-if="darkMode" class="fa-regular fa-moon"></i>
					<i v-else class="fa-regular fa-sun"></i>
				</a></li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const darkMode = ref(null);
const displayMenu = ref(null);

const initMode = () => {
	let savingMode = localStorage.getItem("dark-mode");
	let appPage = document.getElementById("mainApp");
	if (!savingMode) {
		console.log("Aucun mode par defaut !");
		localStorage.setItem("dark-mode", "true");
		darkMode.value = true;
	} else {
		if (savingMode == 'true') {
			darkMode.value = true;
			appPage.classList.add('dark');
		} else {
			darkMode.value = false;
			appPage.classList.remove('dark');
		}
	}
}

initMode();

const switchColorMode = () => {
	initMode();
	let appPage = document.getElementById("mainApp");
	// console.log("Current mode => " + darkMode.value);
	if (darkMode.value == true) {
		localStorage.setItem("dark-mode", "false");
		appPage.classList.remove('dark');
	} else {
		localStorage.setItem("dark-mode", "true");
		appPage.classList.add('dark');
	}
	darkMode.value = !darkMode.value;
}

const toggleMenu = () => {
	displayMenu.value = !displayMenu.value;
}

</script>
