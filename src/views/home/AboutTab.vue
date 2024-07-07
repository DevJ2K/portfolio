<template>
	<div class="relative flex w-full flex-col">
		<!-- <BackgroundSpotlight rotate="bg-gradient-to-br" bg-color="subtle-bg" /> -->
		<!-- <BackgroundWithLights/> -->
		<BgTab/>
		<div class=" h-28 w-full"></div>
		<main class="container z-10 flex w-full flex-col items-center">
			<h1 id="viewMoreScrollIntoView" class="tab-title">About</h1>
			<div class="h-12 w-full"></div>
			<div
				:class="'relative before:absolute before:inset-0 before:ml-6 before:h-full before:w-0.5 before:-translate-x-px before:rounded-lg before:bg-gradient-to-b before:from-low-contrast-text before:via-low-contrast-text  dark:before:from-d-low-contrast-text dark:before:via-d-low-contrast-text md:before:mx-auto md:before:translate-x-0' + (!viewMoreAbout ? ' before:to-transparent' : ' before:to-low-contrast-text dark:before:to-d-low-contrast-text')">

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
			<button class="view-more-btn group" @click="toggleViewMoreAbout()">{{viewMoreAbout ? 'Hide' : 'View more'}}<svg  :class="viewMoreAbout ? 'group-hover:-rotate-90' : 'group-hover:rotate-90' " class=" transition-transform" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
			</button>
		</main>
		<div class=" h-28 w-full"></div>
	</div>
</template>

<script setup>
import AboutCard from '../../components/AboutCard.vue'
import { ref } from 'vue';
import BgTab from '@/components/background/BgTab.vue';

const viewMoreAbout = ref(null);

const toggleViewMoreAbout = () => {
	viewMoreAbout.value = !viewMoreAbout.value;
	if (viewMoreAbout.value == false) {
		document.getElementById("viewMoreScrollIntoView").scrollIntoView({
			// behavior: 'smooth'
		});
	}
};
</script>
