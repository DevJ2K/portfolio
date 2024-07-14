<template>
	<main class="relative flex size-full min-h-screen flex-col items-center">
		<NavigationBarAbout/>
		<div class=" h-32 w-full"></div>
		<main
			class=" container z-10 flex min-h-screen flex-col items-center gap-40 text-low-contrast-text dark:text-d-low-contrast-text ">

			<div class="flex flex-col items-center gap-9">
				<TabTitleComponent title="Experiences"/>
				<div class="relative flex w-full flex-col gap-8">
					<div class=" absolute left-1/2 -z-10 h-full w-1 -translate-x-1/2 bg-low-contrast-text dark:bg-d-low-contrast-text"></div>
					<ExperienceCard v-for="item in experiencesList" :key="item" :name="item.name" :date="item.date" :company="item.company" :exp-type="item.expType" :technos="item.technos" :description="item.description"/>
				</div>
			</div>

			<div class="flex w-full flex-col items-center gap-9">
				<TabTitleComponent title="Feedbacks"/>
				<div class="flex flex-wrap justify-center gap-8">
					<FeedbackCard v-for="item in feedbacksList" :key="item" :name="item.name" :job="item.job" :feedback="item.feedback"/>
				</div>
			</div>

			<div class="flex w-full flex-col items-center gap-9">
				<TabTitleComponent title="About Me"/>
				<div
					class="relative before:absolute before:inset-0 before:ml-6 before:h-full before:w-0.5 before:-translate-x-px before:rounded-lg before:bg-gradient-to-b before:from-low-contrast-text before:via-low-contrast-text  before:to-low-contrast-text dark:before:from-d-low-contrast-text dark:before:via-d-low-contrast-text dark:before:to-d-low-contrast-text md:before:mx-auto md:before:translate-x-0">

					<AboutCard v-for="item in aboutList" :key="item" :item-date="item.itemDate" :content="item.content"/>
				</div>
			</div>

			<div class="flex w-full flex-col items-center gap-9">
				<TabTitleComponent title="3D"/>
				<h3>In my free time, I enjoy creating 3D videos. Here are some of my works that I'd like to share with you.</h3>

				<div class=" flex grid-cols-2 flex-wrap justify-center gap-6 sm:grid">
					<div v-for="video in videosList" :key="video" data-aos="zoom-in" data-aos-offset="50" data-aos-delay="0" data-aos-duration="400">
						<fieldset class="flex w-full items-center justify-center rounded-lg border border-subtle-border bg-subtle-bg px-6 py-4 shadow-md transition-all hover:border-hover-ui-border hover:shadow-lg dark:border-d-subtle-border dark:bg-d-subtle-bg dark:hover:border-d-hover-ui-border">
							<legend class=" m-auto text-nowrap px-2 text-base font-semibold text-high-contrast-text dark:text-d-high-contrast-text md:text-xl">{{ video.title }}</legend>
							<video class="size-fit overflow-hidden rounded-xl border border-ui-border dark:border-d-subtle-border" v-if="video.url" controls :src="video.url" muted loop autoplay="true"></video>
						</fieldset>
					</div>
				</div>
			</div>


		</main>
		<div class=" h-28 w-full"></div>
		<CustomFooter />
	</main>

</template>

<script setup>
import AboutCard from '@/components/AboutCard.vue';
import TabTitleComponent from '@/components/TabTitleComponent.vue';
import NavigationBarAbout from '@/components/navbar/NavigationBarAbout.vue';
import { onMounted, ref } from 'vue';
import ExperienceCard from './about/ExperienceCard.vue';
import FeedbackCard from './about/FeedbackCard.vue';
import firebaseApp from '@/firebase/init';
import { getDownloadURL, getStorage, ref as StorageRef } from "firebase/storage";
import CustomFooter from './home/CustomFooter.vue';

const aboutList = ref([]);
const experiencesList = ref([]);
const feedbacksList = ref([]);
const videoUrl = ref("");

const videosList = ref([]);


aboutList.value = aboutData.about;
experiencesList.value = aboutData.experiences;
feedbacksList.value = aboutData.feedbacks;

const storage = getStorage(firebaseApp);
const useFirebase = true;

const getVideosUrl = async () => {
	for (let i = 0; i < aboutData.videos.length; i++) {
		const element = aboutData.videos[i];

		// console.log(element);
		try {
			if (useFirebase) {
				const videoRef = StorageRef(storage, element.name);
				const url = await getDownloadURL(videoRef);
				element.url = url;
				videosList.value.push(element);
			}
		} catch (error) {
			console.error('Erreur lors de la récupération de la vidéo:', error);
		}
	}
}

// const getVideoUrl = async () => {
// 	try {
//         // Créer une référence à la vidéo
//         const videoRef = StorageRef(storage, 'porsche.mp4');

//         // Obtenir l'URL de téléchargement
//         const url = await getDownloadURL(videoRef);
// 		console.log(url);
//         // Mettre à jour l'URL de la vidéo dans le data
//         videoUrl.value = url;
//       } catch (error) {
//         console.error('Erreur lors de la récupération de la vidéo:', error);
//       }

// }

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
	// getVideoUrl();
	getVideosUrl();
});

</script>
