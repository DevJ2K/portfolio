<template>
	<div class=" fixed top-0 z-50 w-full">
		<div id="navBar" class="my-scroll-nav my-scroll-nav-active-computorv1">
			<div id="navMenu"
				class="absolute top-0 h-screen w-full -translate-x-full transition-transform duration-500 md:hidden">
				<ul
					class=" flex size-full flex-col items-center justify-center gap-14 bg-computorv1-app-bg py-4 text-xl font-semibold text-computorv1-high-contrast-text">

					<li class="group relative w-max">
						<p @click="routerTo('/computorv1')"
							class="cursor-pointer transition-all  group-hover:text-white">
							Home</p>
						<span class="animate-underline-computorv1"></span>

					</li>
					<li class="group relative w-max">
						<p @click="routerTo('/computorv1/learn-math')"
							class="cursor-pointer transition-all  group-hover:text-white">
							Learn the Math</p>
						<span class="animate-underline-computorv1"></span>

					</li>
					<li class="group relative w-max">
						<p @click="routerTo('/computorv1/playground')"
							class="cursor-pointer transition-all  group-hover:text-white">
							Try It Out</p>
						<span class="animate-underline-computorv1"></span>

					</li>
					<a :href="downloadLink" target="_blank"
						class="group flex flex-row items-center gap-1.5 rounded-full border-2 border-computorv1-accent-color px-6 py-2 text-computorv1-high-contrast-text transition-colors hover:bg-computorv1-accent-color hover:text-white  dark:text-d-high-contrast-text dark:hover:text-white">
						<DownloadSvg
							svg-class="text-computorv1-high-contrast-text size-5 group-hover:text-white group-hover:text-white transition-colors" />
						<span
							class="font-semibold transition-colors group-hover:text-white group-hover:text-white">Download</span>
					</a>

				</ul>
			</div>

			<div class=" container flex items-center justify-between md:justify-center">
				<div class="flex w-1/3 justify-start">
					<div @click="routerTo('/')" class=" flex cursor-pointer flex-row items-center gap-4">
						<div class=" size-16 overflow-hidden rounded-full border-2 bg-blue-50">
							<img src="../../assets/images/j2klogo.png" alt="" class=" size-full object-cover">
						</div>
						<h1 id="devj2kText" class="text-outline-computorv1 text-2xl font-black text-transparent">DevJ2K</h1>
					</div>
				</div>
				<ul
					class=" flex w-1/3 flex-row items-center justify-center gap-8 text-lg font-semibold text-computorv1-high-contrast-text max-md:hidden">
					<li class="group relative w-max">
						<p @click="routerTo('/computorv1')"
							class="cursor-pointer text-nowrap transition-all  group-hover:text-white">
							Home</p>
						<span class="animate-underline-computorv1"></span>

					</li>
					<li class="group relative w-max">
						<p @click="routerTo('/computorv1/learn-math')"
							class="cursor-pointer text-nowrap transition-all  group-hover:text-white">
							Learn the Math</p>
						<span class="animate-underline-computorv1"></span>

					</li>
					<li class="group relative w-max">
						<p @click="routerTo('/computorv1/playground')"
							class="cursor-pointer text-nowrap transition-all  group-hover:text-white">
							Try It Out</p>
						<span class="animate-underline-computorv1"></span>

					</li>
				</ul>
				<div class="flex w-1/3 justify-end max-md:hidden">
					<a :href="downloadLink" target="_blank"
						class="group flex flex-row items-center gap-1.5 rounded-full border-2 border-computorv1-accent-color px-6 py-2 text-white transition-colors hover:bg-computorv1-accent-color hover:text-white">
						<DownloadSvg
							svg-class="text-computorv1-high-contrast-text size-5 group-hover:text-white group-hover:text-white transition-colors" />
						<span
							class="font-semibold transition-colors group-hover:text-white group-hover:text-white">Download</span>
					</a>
				</div>


				<div class="z-[1] size-fit cursor-pointer md:hidden" @click="toggleMenu">
					<NavHamburger />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

import { ref } from 'vue';
import NavHamburger from '../NavHamburger.vue';
import { useRouter } from 'vue-router';
import DownloadSvg from '../svg/DownloadSvg.vue';

const displayMenu = ref(false);
const router = useRouter();
const downloadLink = downloadProject;

const toggleMenu = () => {

	const bar1 = document.getElementById('hamburger-bar-1');
	const bar2 = document.getElementById('hamburger-bar-2');
	const bar3 = document.getElementById('hamburger-bar-3');
	const navMenu = document.getElementById('navMenu');
	displayMenu.value = !displayMenu.value;

	if (bar1) {
		// Bar 1
		bar1.classList.toggle('rotate-45', displayMenu.value);
		bar1.classList.toggle('translate-y-2.5', displayMenu.value);
	}
	if (bar2) {
		// Bar 2
		bar2.classList.toggle('scale-x-0', displayMenu.value);
	}
	if (bar3) {
		// Bar 3
		bar3.classList.toggle('-rotate-45', displayMenu.value);
		bar3.classList.toggle('-translate-y-2.5', displayMenu.value);
	}
	if (navMenu) {
		navMenu.classList.toggle('-translate-x-full', !displayMenu.value);
	}
}

// const navigateTo = (id: string, hideMenu = true) => {
// 	if (hideMenu && displayMenu.value == true) {
// 		toggleMenu();
// 	}
// 	// console.log('Go to : ' + id);
// 	const view = document.getElementById(id);
// 	if (view != null) {
// 		view.scrollIntoView({
// 			behavior: 'smooth'
// 		});
// 	}
// }

const routerTo = (link, hideMenu = true) => {
	if (hideMenu && displayMenu.value == true) {
		toggleMenu();
	}
	router.push(`${link}`)
	.then(() => {
		window.scrollTo(0, 0);
	});
}

</script>
