<template>
	<main class="relative flex size-full min-h-screen flex-col items-center">
		<NavigationBarAbout/>
		<div class=" h-32 w-full"></div>
		<main
			class=" container z-10 flex min-h-screen flex-col items-center gap-40 text-low-contrast-text dark:text-d-low-contrast-text ">

			<div class="flex flex-col items-center gap-9">
				<TabTitleComponent id="a_experiences" title="Experiences"/>
				<div class="relative flex w-full flex-col gap-8">
					<div class=" absolute left-1/2 -z-10 h-full w-1 -translate-x-1/2 bg-low-contrast-text dark:bg-d-low-contrast-text"  data-aos="zoom-in" data-aos-offset="100" data-aos-delay="400" data-aos-duration="400"></div>
					<ExperienceCard v-for="item in experiencesList" :key="item" :name="item.name" :date="item.date" :company="item.company" :exp-type="item.expType" :technos="item.technos" :description="item.description"/>
				</div>
			</div>

			<div class="flex w-full flex-col items-center gap-9">
				<TabTitleComponent id="a_feedbacks" title="Feedbacks"/>
				<div class="flex flex-wrap justify-center gap-8">
					<FeedbackCard v-for="item in feedbacksList" :key="item" :name="item.name" :job="item.job" :feedback="item.feedback"/>
				</div>
			</div>

			<div class="flex w-full flex-col items-center gap-9">
				<TabTitleComponent id="a_aboutme" title="About Me"/>
				<h1 class="paragraph-explain">Being quite young, it's natural to have questions about my skills. To clear any doubts, here is an overview of my journey, from my beginnings to today. I hope this helps to better understand who I am and, perhaps, inspire some.</h1>
				<div
					class="relative before:absolute before:inset-0 before:ml-6 before:h-full before:w-0.5 before:-translate-x-px before:rounded-lg before:bg-gradient-to-b before:from-low-contrast-text before:via-low-contrast-text  before:to-low-contrast-text dark:before:from-d-low-contrast-text dark:before:via-d-low-contrast-text dark:before:to-d-low-contrast-text md:before:mx-auto md:before:translate-x-0">

					<AboutCard v-for="item in aboutList" :key="item" :item-date="item.itemDate" :content="item.content" :link="item.link" :link-title="item.linkTitle" :highlighted="item.highlighted"/>
				</div>
			</div>

			<div class="flex w-full flex-col items-center gap-9">
				<TabTitleComponent id="a_3d" title="3D"/>
				<!-- <h1 class=" text-center">In my free time, I enjoy creating 3D videos. Here are some of my works that I'd like to share with you !</h1> -->

				<h1 class="paragraph-explain">Since 2021, in addition to coding, I have enjoyed creating 3D videos in my free time. This allows me to visually express my ideas and I love seeing the final renders. Here are some of my works that I’d like to share with you !</h1>

				<div class=" grid w-full grid-cols-1 flex-wrap justify-center gap-6 md:grid-cols-2">
					<div v-for="video in videosList" :key="video" data-aos="zoom-in" data-aos-offset="50" data-aos-delay="0" data-aos-duration="400">
						<fieldset class="flex size-full items-center justify-center rounded-lg border border-subtle-border bg-subtle-bg px-6 py-4 shadow-md transition-all hover:border-hover-ui-border hover:shadow-lg dark:border-d-subtle-border dark:bg-d-subtle-bg dark:hover:border-d-hover-ui-border">
							<legend class=" m-auto text-nowrap px-2 text-base font-semibold text-high-contrast-text dark:text-d-high-contrast-text md:text-xl">{{ video.title }}</legend>


							<video v-if="video.url && useFirebaseStorage"  class="size-fit overflow-hidden rounded-xl border border-ui-border dark:border-d-subtle-border" muted :src="video.url" autoplay="true" loop="true">
							</video>

							<div v-else class=" relative w-full overflow-hidden rounded-xl border-0 border-ui-border pt-[56.25%] shadow-md dark:border-d-subtle-border">
								<iframe :src="video.ytbLink" :title="video.title" class=" absolute left-0 top-0 size-full border-0"></iframe>
							</div>
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
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { getDownloadURL, getStorage, ref as StorageRef } from "firebase/storage";
import CustomFooter from './home/CustomFooter.vue';
import refreshBackground from '@/js/refreshBackground';

const aboutList = ref([]);
const experiencesList = ref([]);
const feedbacksList = ref([]);
const videosList = ref([]);

const useFirebaseFirestore = ref(false);
const useFirebaseStorage = ref(false);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

if (useFirebaseFirestore.value == false) {
	// eslint-disable-next-line no-undef
	aboutList.value = aboutData.about;
	// eslint-disable-next-line no-undef
	experiencesList.value = aboutData.experiences.toReversed();
	// eslint-disable-next-line no-undef
	feedbacksList.value = aboutData.feedbacks;
}

const getVideosUrl = async () => {
	for (let i = 0; i < aboutData.videos.length; i++) {
		const element = aboutData.videos[i];
		try {
			if (useFirebaseStorage.value) {
				const videoRef = StorageRef(storage, element.name);
				const url = await getDownloadURL(videoRef);
				element.url = url;
				videosList.value.push(element);
			} else {
				videosList.value = aboutData.videos;
			}
		} catch (error) {
			console.error('Erreur lors de la récupération de la vidéo:', error);
		}
	}
}

const getAbout = async () => {
	if (useFirebaseFirestore.value) {
		const aboutCol = collection(db, 'about');
		const experiencesCol = collection(db, 'experiences');
		const feedbacksCol = collection(db, 'feedbacks');

		const aboutSnapshot = await getDocs(aboutCol);
		const experiencesSnapshot = await getDocs(experiencesCol);
		const feedbacksSnapshot = await getDocs(feedbacksCol);
		aboutList.value = aboutSnapshot.docs.map(doc => doc.data()).sort((a, b) => { return a.dateFilter - b.dateFilter;});
		experiencesList.value = experiencesSnapshot.docs.map(doc => doc.data()).sort((a, b) => { return a.dateFilter - b.dateFilter;}).toReversed();
		feedbacksList.value = feedbacksSnapshot.docs.map(doc => doc.data()).sort((a, b) => { return a.dateFilter - b.dateFilter;});
	}
}

onMounted(() => {
	refreshBackground();
	getAbout();
	getVideosUrl();
});

</script>
