<!-- LOGOS : https://www.radix-ui.com/icons -->

<template>
	<!-- <div id="navBar" class="fixed top-0 z-50 flex w-full transition duration-1000 ease-in-out"> -->
	<div id="navBar" class="my-scroll-nav">
		<div class="container flex items-center justify-between">
			<a class="flex flex-row items-center gap-4" href="#">
				<div class=" size-16 overflow-hidden rounded-full border-2 bg-blue-400">
					<img src="../assets/images/j2klogo.png" alt="" class=" size-full object-cover">
				</div>
				<h3 id="devj2kText" class="text-outline text-2xl font-black text-transparent">DevJ2K</h3>
			</a>
			<ul class=" flex flex-row items-center justify-center gap-8 text-lg font-semibold text-high-contrast-text dark:text-d-high-contrast-text max-md:hidden">
				<li class="group relative w-max">
					<a href="#about" class="transition-all group-hover:text-black dark:group-hover:text-white">About</a>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-color transition-all group-hover:w-full dark:bg-d-accent-color"></span>

				</li>
				<li class="group relative w-max">
					<a href="#skills" class="transition-all group-hover:text-black dark:group-hover:text-white">Skills</a>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-color transition-all group-hover:w-full dark:bg-d-accent-color"></span>

				</li>
				<li class="group relative w-max">
					<a href="#projects" class="transition-all group-hover:text-black dark:group-hover:text-white">Projects</a>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-color transition-all group-hover:w-full dark:bg-d-accent-color"></span>

				</li>
				<li class="group relative w-max">
					<a href="#contact" class="transition-all group-hover:text-black dark:group-hover:text-white">Contact</a>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-color transition-all group-hover:w-full dark:bg-d-accent-color"></span>

				</li>
				<li>
					<a @click="switchColorMode">
						<!-- <i v-if="darkMode" class="fa-regular fa-sun cursor-pointer"></i>
						<i v-else class="fa-regular fa-moon cursor-pointer"></i> -->
						<SunIcon v-if="darkMode" class="size-4 cursor-pointer fill-current"/>
						<MoonIcon v-else class="size-4 cursor-pointer"/>
					</a>
				</li>
			</ul>
			<!-- <div class=" cursor-pointer text-2xl font-semibold text-high-contrast-text dark:text-d-high-contrast-text md:hidden" @click="toggleMenu"> -->
			<div class="cursor-pointer md:hidden" @click="toggleMenu">
				<NavHamburger/>
			</div>
			<!-- </div> -->
		</div>
		<div v-if="displayMenu" class="absolute top-0 mt-24 w-full md:hidden">
			<ul
				class=" flex flex-col items-center justify-center gap-8 bg-blue-500 py-4 text-lg font-semibold text-high-contrast-text dark:text-d-high-contrast-text">
				<li><a href="#">About</a></li>
				<li><a href="#">Skills</a></li>
				<li><a href="#">Projects</a></li>
				<li><a href="#">Contact</a></li>
				<li><a @click="switchColorMode">
					<!-- <SunIcon/>
					<MoonIcon/> -->
					<SunIcon v-if="darkMode" class="size-4 cursor-pointer"/>
					<MoonIcon v-else class="size-4 cursor-pointer"/>
				</a></li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { MoonIcon, SunIcon } from '@radix-icons/vue';
import { ref } from 'vue';
import NavHamburger from './NavHamburger.vue';

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

// window.addEventListener("load", function() {
// 	updateOutlineText();
// })

// const updateOutlineText = () => {
// 	initMode();
// 	console.log('Displaying DevJ2K !');
// 	let devj2kText = document.getElementById("devj2kText");
// 	if (devj2kText == null) {
// 		return ;
// 	}
// 	if (darkMode.value == true) {
// 		devj2kText.classList.add('text-outline-dark');
// 		devj2kText.classList.remove('text-outline-light');
// 	} else {
// 		devj2kText.classList.add('text-outline-light');
// 		devj2kText.classList.remove('text-outline-dark');
// 	}
// }

const switchColorMode = () => {
	initMode();
	let appPage = document.getElementById("mainApp");
	if (darkMode.value == true) {
		localStorage.setItem("dark-mode", "false");
		appPage.classList.remove('dark');
	} else {
		localStorage.setItem("dark-mode", "true");
		appPage.classList.add('dark');
	}
	darkMode.value = !darkMode.value;
	// updateOutlineText();
	console.log("Current mode => " + darkMode.value);
}

const toggleMenu = () => {
	const bar1 = document.getElementById('hamburger-bar-1');
	const bar2 = document.getElementById('hamburger-bar-2');
	const bar3 = document.getElementById('hamburger-bar-3');
	displayMenu.value = !displayMenu.value;
	// Bar 1
	bar1.classList.toggle('rotate-45', displayMenu.value);
	bar1.classList.toggle('translate-y-2.5', displayMenu.value);
	// Bar 2
	bar2.classList.toggle('scale-x-0', displayMenu.value);
	// Bar 3
	bar3.classList.toggle('-rotate-45', displayMenu.value);
	bar3.classList.toggle('-translate-y-2.5', displayMenu.value);
}

const updateNavbar = () => {
	// console.log("HEREEEEE");
	var navBar = document.getElementById("navBar");
	// console.log(navBar);
	navBar.classList.toggle("my-scroll-nav-active", window.scrollY > 0);
	// navBar.classList.toggle("my-scroll-nav", window.scrollY <= 0);
}

window.addEventListener("scroll", updateNavbar);

// updateNavbar();

</script>
