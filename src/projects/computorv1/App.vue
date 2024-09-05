<template>
	<NavigationBar/>
	<main class="dark relative z-10 flex size-full min-h-screen flex-col items-center bg-computorv1-app-bg">
		<div class="h-24"></div>
		<HomeView v-if="$route.name === 'computorv1'"/>
		<LearnMathView v-if="$route.name === 'computorv1/learn-math'"/>
		<TestView v-if="$route.name === 'computorv1/playground'"/>
	</main>
</template>

<script setup>

import NavigationBar from './components/navbar/NavigationBar.vue';
import HomeView from './views/HomeView.vue';
import LearnMathView from './views/LearnMathView.vue';
import TestView from './views/TestView.vue';

</script>
