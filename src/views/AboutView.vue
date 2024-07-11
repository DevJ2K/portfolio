<template>
	<main class="relative flex size-full min-h-screen flex-col items-center">
		<NavigationBarAbout/>
		<div class=" h-32 w-full"></div>
		<main
			class=" container z-10 flex min-h-screen flex-col items-center gap-9 text-low-contrast-text dark:text-d-low-contrast-text ">

			<TabTitleComponent title="Experiences"/>
			<div class="relative flex flex-col gap-8 w-full">
				<div class=" absolute left-1/2 -z-10 h-full w-1 -translate-x-1/2 bg-low-contrast-text dark:bg-d-low-contrast-text"></div>
				<ExperienceCard v-for="item in experiencesList" :key="item" :name="item.name" :date="item.date" :company="item.company" :exp-type="item.expType" :technos="item.technos" :description="item.description"/>
			</div>
			<TabTitleComponent title="Feedbacks"/>
			<div class="flex flex-wrap justify-center gap-8">
				<FeedbackCard v-for="item in feedbacksList" :key="item" :name="item.name" :job="item.job" :feedback="item.feedback"/>
			</div>
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
import ExperienceCard from './about/ExperienceCard.vue';
import FeedbackCard from './about/FeedbackCard.vue';

const aboutList = ref([]);
const experiencesList = ref([]);
const feedbacksList = ref([]);

aboutList.value = aboutData.about;
experiencesList.value = aboutData.experiences;
feedbacksList.value = aboutData.feedbacks;


const refreshBackground = () => {
	// eslint-disable-next-line no-undef
	if (pJSDom != null && pJSDom != [] && pJSDom[0] != null && pJSDom[0].pJS != null) {
		// eslint-disable-next-line no-undef
		pJSDom[0].pJS.fn.particlesRefresh();
		// console.log("Background has been refreshed !")
	}
}


onMounted(() => {
	refreshBackground();
});

</script>
