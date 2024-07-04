<!-- LOGOS : https://www.radix-ui.com/icons -->

<template>
	<!-- <div id="navBar" class="fixed top-0 z-50 flex w-full transition duration-1000 ease-in-out"> -->



	<div id="navBar" class="my-scroll-nav">

		<div id="navMenu" class="absolute top-0 h-screen w-full -translate-x-full transition-transform duration-500 md:hidden">
			<ul
				class=" flex size-full flex-col items-center justify-center gap-16 bg-app-bg py-4 text-xl font-semibold text-high-contrast-text dark:bg-d-app-bg dark:text-d-high-contrast-text">

				<li class="group relative w-max">
					<a class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white" @click="navigateTo('about')">About</a>
					<span
						class="animate-underline"></span>

				</li>

				<li class="group relative w-max">
					<a class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white" @click="navigateTo('skills')">Skills</a>
					<span
						class="animate-underline"></span>

				</li>

				<li class="group relative w-max">
					<a class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white" @click="navigateTo('projects')">Projects</a>
					<span
						class="animate-underline"></span>

				</li>

				<li class="group relative w-max">
					<a class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white" @click="navigateTo('contact')">Contact</a>
					<span
						class="animate-underline"></span>

				</li>

				<li class="flex size-8 items-center justify-center">
					<a @click="switchColorMode">
					<SunIcon v-if="darkMode" class="size-6 cursor-pointer fill-current transition-all duration-75 ease-linear hover:size-7 "/>
					<MoonIcon v-else class="size-6 cursor-pointer fill-current transition-all duration-75 ease-linear  hover:size-7"/>
				</a>
			</li>
			</ul>
		</div>

		<div class="container flex items-center justify-between">
			<a class=" flex cursor-pointer flex-row items-center gap-4" @click="navigateTo('mainApp', false)">
				<div class=" size-16 overflow-hidden rounded-full border-2 bg-blue-400">
					<img src="../assets/images/j2klogo.png" alt="" class=" size-full object-cover">
				</div>
				<h3 id="devj2kText" class="text-outline text-2xl font-black text-transparent">DevJ2K</h3>
			</a>
			<ul class=" flex flex-row items-center justify-center gap-8 text-lg font-semibold text-high-contrast-text dark:text-d-high-contrast-text max-md:hidden">
				<li class="group relative w-max">
					<a class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white" @click="navigateTo('about')">About</a>
					<span
						class="animate-underline"></span>

				</li>
				<li class="group relative w-max">
					<a class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white" @click="navigateTo('skills')">Skills</a>
					<span
						class="animate-underline"></span>

				</li>
				<li class="group relative w-max">
					<a class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white" @click="navigateTo('projects')">Projects</a>
					<span
						class="animate-underline"></span>

				</li>
				<li class="group relative w-max">
					<a class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white" @click="navigateTo('contact')">Contact</a>
					<span
						class="animate-underline"></span>

				</li>
				<li  class="flex size-6 items-center justify-center">
					<a @click="switchColorMode">
						<!-- <i v-if="darkMode" class="fa-regular fa-sun cursor-pointer"></i>
						<i v-else class="fa-regular fa-moon cursor-pointer"></i> -->
						<SunIcon v-if="darkMode" class="size-4 cursor-pointer fill-current transition-all duration-75 ease-linear  hover:size-5"/>
						<MoonIcon v-else class="size-4 cursor-pointer fill-current transition-all duration-75 ease-linear hover:size-5"/>
					</a>
				</li>
			</ul>
			<!-- <div class=" cursor-pointer text-2xl font-semibold text-high-contrast-text dark:text-d-high-contrast-text md:hidden" @click="toggleMenu"> -->
			<div class="z-[1] size-fit cursor-pointer md:hidden" @click="toggleMenu">
				<NavHamburger/>
			</div>
			<!-- </div> -->
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
	const mainApp = document.getElementById('mainApp');

	const bar1 = document.getElementById('hamburger-bar-1');
	const bar2 = document.getElementById('hamburger-bar-2');
	const bar3 = document.getElementById('hamburger-bar-3');
	const navMenu = document.getElementById('navMenu');
	displayMenu.value = !displayMenu.value;

	// mainApp.classList.toggle('overflow-hidden', displayMenu.value);
	// Bar 1
	bar1.classList.toggle('rotate-45', displayMenu.value);
	bar1.classList.toggle('translate-y-2.5', displayMenu.value);
	// Bar 2
	bar2.classList.toggle('scale-x-0', displayMenu.value);
	// Bar 3
	bar3.classList.toggle('-rotate-45', displayMenu.value);
	bar3.classList.toggle('-translate-y-2.5', displayMenu.value);

	navMenu.classList.toggle('-translate-x-full', !displayMenu.value);

}

const updateNavbar = () => {
	// console.log("HEREEEEE");
	var navBar = document.getElementById("navBar");
	// console.log(navBar);
	navBar.classList.toggle("my-scroll-nav-active", window.scrollY > 0);
	// navBar.classList.toggle("my-scroll-nav", window.scrollY <= 0);
}

const navigateTo = (id, hideMenu = true) => {
	if (hideMenu) {
		toggleMenu();
	}
	console.log('Go to : ' + id);
	const view = document.getElementById(id);
	if (view != null) {
		view.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

window.addEventListener("scroll", updateNavbar);

// updateNavbar();

</script>
