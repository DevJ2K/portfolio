<template>
	<main class="relative flex size-full min-h-screen flex-col items-center">
		<NavigationBarAbout/>
		<div class=" h-32 w-full"></div>
		<main
			class=" container z-10 flex min-h-screen flex-col items-center gap-9 text-low-contrast-text dark:text-d-low-contrast-text ">

			<TabTitleComponent title="Experiences"/>

			<TabTitleComponent title="Feedbacks"/>

			<TabTitleComponent title="About Me"/>
			<div
				class="relative before:absolute before:inset-0 before:ml-6 before:h-full before:w-0.5 before:-translate-x-px before:rounded-lg before:bg-gradient-to-b before:from-low-contrast-text before:via-low-contrast-text  before:to-low-contrast-text dark:before:from-d-low-contrast-text dark:before:via-d-low-contrast-text dark:before:to-d-low-contrast-text md:before:mx-auto md:before:translate-x-0">

				<AboutCard v-for="item in aboutList" :key="item" :item-date="item.itemDate" :content="item.content"/>
			</div>

			<TabTitleComponent title="3D"/>


		</main>
	</main>
	<div>

	</div>
</template>

<script setup>
import AboutCard from '@/components/AboutCard.vue';
import TabTitleComponent from '@/components/TabTitleComponent.vue';
import NavigationBarAbout from '@/components/navbar/NavigationBarAbout.vue';
import { onMounted, ref } from 'vue';

const aboutList = ref([]);

const refreshBackground = () => {
	// eslint-disable-next-line no-undef
	if (pJSDom != null && pJSDom != [] && pJSDom[0] != null && pJSDom[0].pJS != null) {
		// eslint-disable-next-line no-undef
		pJSDom[0].pJS.fn.particlesRefresh();
	}
}

onMounted(() => {
	aboutList.value = aboutData.about;
	refreshBackground();
});

</script>
