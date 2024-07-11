<template>
	<div class="relative flex w-full flex-col">
		<!-- <BackgroundSpotlight rotate="bg-gradient-to-br" bg-color="subtle-bg" /> -->
		<!-- <BackgroundWithLights/> -->
		<BgTab/>
		<div class=" h-28 w-full"></div>
		<main class="container z-10 flex w-full flex-col items-center">
			<!-- <h1 id="viewMoreScrollIntoView" class="tab-title">About</h1> -->
			<TabTitleComponent id="viewMoreScrollIntoView" title="About"/>
			<div class="h-12 w-full"></div>
			<!-- <h3 class=" text-2xl text-high-contrast-text dark:text-d-high-contrast-text">Me</h3> -->
			<div
				:class="' transition-all relative before:absolute before:inset-0 before:ml-6 before:h-full before:w-0.5 before:-translate-x-px before:rounded-lg before:bg-gradient-to-b before:from-low-contrast-text before:via-low-contrast-text  dark:before:from-d-low-contrast-text dark:before:via-d-low-contrast-text md:before:mx-auto md:before:translate-x-0' + (!viewMoreAbout ? ' before:to-transparent' : ' before:to-low-contrast-text dark:before:to-d-low-contrast-text')">

				<AboutCard item-date="Now" content="Adipisicing excepteur fugiat proident et aliquip. Aute sunt ut cupidatat est in enim laborum laborum."/>

				<AboutCard item-date="2021" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="2022" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard :gradient-text="!viewMoreAbout" item-date="End 2022" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard v-show="viewMoreAbout" item-date="2023" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard v-show="viewMoreAbout" item-date="November 2023" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard v-show="viewMoreAbout" item-date="Mars 2024" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard v-show="viewMoreAbout" item-date="Now" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>
			</div>
			<div class="h-12 w-full"></div>
			<!-- <button class="view-more-btn group" @click="goToAboutView()">{{viewMoreAbout ? 'Hide' : 'View more'}}<svg  :class="viewMoreAbout ? 'group-hover:-rotate-90' : 'group-hover:rotate-90' " class=" transition-transform" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
			</button> -->


			<button @click="goToAboutView" class="view-more-project-btn group"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>Learn more</button>

		</main>
		<div class=" h-28 w-full"></div>
	</div>
</template>

<script setup>
import AboutCard from '../../components/AboutCard.vue'
import { ref } from 'vue';
import BgTab from '@/components/background/BgTab.vue';
import TabTitleComponent from '@/components/TabTitleComponent.vue';
import { useRouter } from 'vue-router';

const viewMoreAbout = ref(null);
const router = useRouter();

const toggleViewMoreAbout = () => {
	viewMoreAbout.value = !viewMoreAbout.value;
	if (viewMoreAbout.value == false) {
		document.getElementById("viewMoreScrollIntoView").scrollIntoView({
			// behavior: 'smooth'
		});
	}
};


function goToAboutView() {
	router.push({
		name: 'about',

	}).then(() => {
		window.scrollTo(0, 0);
	});
}
</script>
