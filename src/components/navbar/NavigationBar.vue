<!-- LOGOS : https://www.radix-ui.com/icons -->

<template>
<div class="w-full fixed top-0 z-50"  data-aos="fade-down" data-aos-delay="0" data-aos-duration="350">

	<div id="navBar" class="my-scroll-nav">

		<div id="navMenu"
			class="absolute top-0 h-screen w-full -translate-x-full transition-transform duration-500 md:hidden">
			<ul
				class=" flex size-full flex-col items-center justify-center gap-14 bg-app-bg py-4 text-xl font-semibold text-high-contrast-text dark:bg-d-app-bg dark:text-d-high-contrast-text">

				<li class="group relative w-max">
					<p class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white"
						@click="navigateTo('skills')">Skills</p>
					<span class="animate-underline"></span>

				</li>

				<li class="group relative w-max">
					<p class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white"
						@click="navigateTo('projects')">Projects</p>
					<span class="animate-underline"></span>

				</li>

				<li class="group relative w-max">
					<p class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white"
						@click="navigateTo('about')">About</p>
					<span class="animate-underline"></span>

				</li>

				<li class="group relative w-max">
					<p class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white"
						@click="navigateTo('contact')">Contact</p>
					<span class="animate-underline"></span>

				</li>

				<li class="flex size-8 items-center justify-center">
					<p @click="switchColorMode">
						<SunIcon v-if="darkMode"
							class="size-6 cursor-pointer fill-current transition-all duration-75 ease-linear hover:size-7 " />
						<MoonIcon v-else
							class="size-6 cursor-pointer fill-current transition-all duration-75 ease-linear  hover:size-7" />
					</p>
				</li>
			</ul>
		</div>

		<div class="container flex items-center justify-between">
			<div class=" flex cursor-pointer flex-row items-center gap-4" @click="navigateTo('mainApp', false)">
				<div class=" size-16 overflow-hidden rounded-full border-2 bg-blue-400">
					<img src="../../assets/images/j2klogo.png" alt="" class=" size-full object-cover">
				</div>
				<h1 id="devj2kText" class="text-outline text-2xl font-black text-transparent">DevJ2K</h1>
			</div>
			<ul
				class=" flex flex-row items-center justify-center gap-8 text-lg font-semibold text-high-contrast-text dark:text-d-high-contrast-text max-md:hidden">
				<li class="group relative w-max">
					<p class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white"
						@click="navigateTo('skills', false)">Skills</p>
					<span class="animate-underline"></span>

				</li>
				<li class="group relative w-max">
					<p class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white"
						@click="navigateTo('projects', false)">Projects</p>
					<span class="animate-underline"></span>

				</li>
				<li class="group relative w-max">
					<p class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white"
						@click="navigateTo('about', false)">About</p>
					<span class="animate-underline"></span>

				</li>
				<li class="group relative w-max">
					<p class="cursor-pointer transition-all group-hover:text-black dark:group-hover:text-white"
						@click="navigateTo('contact', false)">Contact</p>
					<span class="animate-underline"></span>

				</li>
				<li class="flex size-6 items-center justify-center">
					<p @click="switchColorMode">
						<!-- <i v-if="darkMode" class="fa-regular fa-sun cursor-pointer"></i>
						<i v-else class="fa-regular fa-moon cursor-pointer"></i> -->
						<SunIcon v-if="darkMode"
							class="size-4 cursor-pointer fill-current transition-all duration-75 ease-linear  hover:size-5" />
						<MoonIcon v-else
							class="size-4 cursor-pointer fill-current transition-all duration-75 ease-linear hover:size-5" />
					</p>
				</li>
			</ul>
			<!-- <div class=" cursor-pointer text-2xl font-semibold text-high-contrast-text dark:text-d-high-contrast-text md:hidden" @click="toggleMenu"> -->
			<div class="z-[1] size-fit cursor-pointer md:hidden" @click="toggleMenu">
				<NavHamburger />
			</div>
			<!-- </div> -->
		</div>
	</div>
</div>
</template>

<script setup>
import SunIcon from '@/assets/radixIcons/SunIcon.vue';
import MoonIcon from '@/assets/radixIcons/MoonIcon.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import NavHamburger from '../NavHamburger.vue';

const darkMode = ref(null);
const displayMenu = ref(null);

const initMode = () => {
	let savingMode = localStorage.getItem("dark-mode");
	let appPage = document.getElementById("mainApp");

	if (!savingMode) {
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

onMounted(() => {
	initMode();
	window.addEventListener("scroll", updateNavbar);
});

onUnmounted(() => {
	window.removeEventListener("scroll", updateNavbar);
})

const replaceParticlesColor = (newHex) => {
	// eslint-disable-next-line no-undef
	pJSDom[0].pJS.particles.color.value = newHex;
	// eslint-disable-next-line no-undef
	pJSDom[0].pJS.fn.particlesRefresh();
}

const switchColorMode = () => {
	initMode();
	let appPage = document.getElementById("mainApp");
	if (darkMode.value == true) {
		localStorage.setItem("dark-mode", "false");
		appPage.classList.remove('dark');
		replaceParticlesColor('#EC00FF');
	} else {
		localStorage.setItem("dark-mode", "true");
		appPage.classList.add('dark');
		replaceParticlesColor('#ffffff');
	}
	darkMode.value = !darkMode.value;
	if (darkMode.value) {
		console.log("%c[Info] : "+"%cSwitching color theme to "+"%c[DARK]", 'color: #9097FF;', 'color: #FFEBC8;', 'color: #0B032D;');
	} else {
		console.log("%c[Info] : "+"%cSwitching color theme to "+"%c[LIGHT]", 'color: #9097FF;', 'color: #FFEBC8;', 'color: #FEECFF;');
	}
}

const toggleMenu = () => {

	const bar1 = document.getElementById('hamburger-bar-1');
	const bar2 = document.getElementById('hamburger-bar-2');
	const bar3 = document.getElementById('hamburger-bar-3');
	const navMenu = document.getElementById('navMenu');
	displayMenu.value = !displayMenu.value;

	// const mainApp = document.getElementById('mainApp');
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
	var navBar = document.getElementById("navBar");
	if (navBar == null) {
		return;
	}
	navBar.classList.toggle("my-scroll-nav-active", window.scrollY > 0);
	// navBar.classList.toggle("my-scroll-nav", window.scrollY <= 0);
}

const navigateTo = (id, hideMenu = true) => {
	if (hideMenu) {
		toggleMenu();
	}
	// console.log('Go to : ' + id);
	const view = document.getElementById(id);
	if (view != null) {
		view.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

// updateNavbar();

</script>
