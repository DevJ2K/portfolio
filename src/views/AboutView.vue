<template>
	<main class="relative flex size-full min-h-screen flex-col items-center">
		<NavigationBarAbout/>
		<div class=" h-32 w-full"></div>
		<main
			class=" container z-10 flex min-h-screen flex-col items-center gap-9 text-low-contrast-text dark:text-d-low-contrast-text ">



			<div
				class="relative before:absolute before:inset-0 before:ml-6 before:h-full before:w-0.5 before:-translate-x-px before:rounded-lg before:bg-gradient-to-b before:from-low-contrast-text before:via-low-contrast-text  before:to-low-contrast-text dark:before:from-d-low-contrast-text dark:before:via-d-low-contrast-text dark:before:to-d-low-contrast-text md:before:mx-auto md:before:translate-x-0">

				<AboutCard item-date="Now" content="Adipisicing excepteur fugiat proident et aliquip. Aute sunt ut cupidatat est in enim laborum laborum."/>

				<AboutCard item-date="2021" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="2022" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="End 2022" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="2023" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="November 2023" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="Mars 2024" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>

				<AboutCard item-date="Now" content="Elit aute laboris proident deserunt culpa amet occaecat fugiat qui dolor. Exercitation ut consectetur excepteur duis duis. Officia sit qui irure ut eiusmod."/>
			</div>




		</main>
	</main>
	<div>

	</div>
</template>

<script setup>
import AboutCard from '@/components/AboutCard.vue';
import NavigationBarAbout from '@/components/navbar/NavigationBarAbout.vue';
import { onMounted } from 'vue';

const refreshBackground = () => {
	// eslint-disable-next-line no-undef
	if (pJSDom != null && pJSDom != [] && pJSDom[0] != null && pJSDom[0].pJS != null) {
		// eslint-disable-next-line no-undef
		pJSDom[0].pJS.fn.particlesRefresh();
	}
}

onMounted(() => {
	refreshBackground();
});

</script>
