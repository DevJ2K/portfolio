<template>
	<div class="relative flex min-h-screen w-full">
		<BackgroundSpotlight color="bg-blue-500" rotate="bg-gradient-to-br" />
		<main class="container z-10 flex min-h-screen w-full flex-col items-center justify-center">
			<h1 class=" text-2xl text-primary">About</h1>
			<div
				class="relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">

				<AboutCard item-date="September 2020" content="Adipisicing excepteur fugiat proident et aliquip. Aute sunt ut cupidatat est in enim laborum laborum."/>

				<AboutCard item-date="2021" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="2022" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="End 2022" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="2023" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="November 2023" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="Mars 2024" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="Now" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>
			</div>
		</main>
	</div>
</template>

<script setup>
import BackgroundSpotlight from '../../components/BackgroundSpotlight.vue'
import AboutCard from '../../components/AboutCard.vue'
</script>
