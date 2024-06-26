<template>
	<div class="relative flex min-h-screen w-full flex-col">
		<BackgroundSpotlight rotate="bg-gradient-to-br" bg-nb="2" />
		<div class=" h-28 w-full"></div>
		<main class="container z-10 flex min-h-screen w-full flex-col items-center">
			<h1 class="text-3xl text-primary underline decoration-accent-color underline-offset-8 dark:text-d-primary">About</h1>
			<div class="h-6 w-full"></div>
			<div
				class="relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-slate-300 before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">

				<AboutCard item-date="September 2020" content="Adipisicing excepteur fugiat proident et aliquip. Aute sunt ut cupidatat est in enim laborum laborum."/>

				<AboutCard item-date="2021" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="2022" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard :gradient-text="!viewMoreAbout" item-date="End 2022" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard v-show="viewMoreAbout" item-date="2023" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard v-show="viewMoreAbout" item-date="November 2023" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard v-show="viewMoreAbout" item-date="Mars 2024" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard v-show="viewMoreAbout" item-date="Now" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>
			</div>
			<button class=" rounded-lg border px-4 py-2 text-primary" @click="toggleViewMoreAbout()">{{viewMoreAbout ? 'Hide' : 'View more'}}</button>
		</main>
	</div>
</template>

<script setup>
import BackgroundSpotlight from '../../components/BackgroundSpotlight.vue'
import AboutCard from '../../components/AboutCard.vue'
import { ref } from 'vue';

const viewMoreAbout = ref(null);

const toggleViewMoreAbout = () => {
	viewMoreAbout.value = !viewMoreAbout.value;
};
</script>
