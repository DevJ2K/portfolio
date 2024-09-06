<template>
	<NavigationBar/>
	<main class="dark relative z-10 flex size-full min-h-screen w-screen flex-col items-center bg-computorv1-app-bg font-Roboto">
		<div class="h-24"></div>
		<HomeView v-if="$route.name === 'computorv1'"/>
		<LearnMathView v-if="$route.name === 'computorv1/learn-math'"/>
		<TestView v-if="$route.name === 'computorv1/playground'"/>
	</main>
</template>

<script setup>

import { onMounted, onUnmounted } from 'vue';
import NavigationBar from './components/navbar/NavigationBar.vue';
import HomeView from './views/HomeView.vue';
import LearnMathView from './views/LearnMathView.vue';
import TestView from './views/TestView.vue';

onMounted(() => {
	// console.log("Monter")
	const mainApp = document.getElementById("mainApp");
	// console.log(mainApp)
	mainApp.classList.remove("app-background");
	mainApp.classList.add("bg-computorv1-app-bg");
})

onUnmounted(() => {
	const mainApp = document.getElementById("mainApp");
	mainApp.classList.add("app-background");
	mainApp.classList.remove("bg-computorv1-app-bg");
	// console.log("Demonter")
})
</script>
