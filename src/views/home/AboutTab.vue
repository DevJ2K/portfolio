<template>
	<div class="relative flex w-full flex-col">
		<!-- <BackgroundSpotlight rotate="bg-gradient-to-br" bg-color="subtle-bg" /> -->
		<!-- <BackgroundWithLights/> -->
		<BgTab />
		<div class=" h-28 w-full"></div>
		<main class="container z-10 flex w-full flex-col items-center">
			<!-- <h1 id="viewMoreScrollIntoView" class="tab-title">About</h1> -->
			<TabTitleComponent id="viewMoreScrollIntoView" title="About" />
			<div class="h-12 w-full"></div>
			<!-- <h3 class=" text-2xl text-high-contrast-text dark:text-d-high-contrast-text">Me</h3> -->

			<div class=" flex grid-cols-2 flex-col gap-4 md:grid">
				<div data-aos="zoom-in" data-aos-delay="0" data-aos-duration="350">
					<div class=" about-tab-div">
						<h1
							class="about-tab-div-title">
							Education</h1>

						<div class="flex flex-row items-center justify-center">
							<div class="h-px w-4 bg-accent-color dark:bg-d-accent-color"></div>
							<h2
								class=" text-nowrap px-2 text-lg font-bold text-high-contrast-text underline-offset-4 dark:text-d-high-contrast-text">
								42 Paris</h2>
							<div class="h-px w-full bg-accent-color dark:bg-d-accent-color"></div>
						</div>

						<p class="text-sm text-low-contrast-text opacity-100 dark:text-d-low-contrast-text">42 is a renowned institution in Paris, offering intensive training in programming and development. This school stands out for its innovative educational approach, without traditional classes, focusing on project-based learning and student collaboration.</p>
						<h3 class=" font-semibold text-high-contrast-text dark:text-d-high-contrast-text">Nov. 2023 - <span
								class=" underline decoration-accent-color decoration-2 underline-offset-[5px] dark:decoration-d-accent-color">Today</span>
						</h3>
					</div>
				</div>
				<div data-aos="zoom-in" data-aos-delay="0" data-aos-duration="350">
				<div class=" about-tab-div">
					<h1
						class="about-tab-div-title">
						Experience</h1>

					<div class=" flex h-full flex-col justify-between gap-3">
						<div class=" text-high-contrast-text dark:text-d-high-contrast-text">
							<h2 class=" text-xl font-bold">{{ lastExperience.name }}</h2>
							<h2 class=" text-base">{{ lastExperience.company }} - {{ lastExperience.expType }}</h2>
							<h2 class=" text-base">{{ lastExperience.date }}</h2>
						</div>

						<div class="flex flex-col gap-2">
							<div class="flex flex-row items-center justify-center">
								<div class="h-px w-8 bg-accent-color dark:bg-d-accent-color"></div>
								<h3
									class=" text-nowrap px-2 font-bold text-high-contrast-text underline-offset-4 dark:text-d-high-contrast-text">
									Used Technologies</h3>
								<div class="h-px w-full bg-accent-color dark:bg-d-accent-color"></div>
							</div>
							<div class="flex flex-wrap gap-2">

								<div v-for="tag in lastExperience.technos" :key="tag"
									class=" custom-shadow-sm w-fit cursor-default rounded-xl border-ui-border bg-ui-bg px-4 py-2 text-xs font-semibold capitalize text-low-contrast-text transition-colors duration-75 hover:border-hover-ui-border dark:border-d-ui-border dark:bg-d-hover-ui-bg dark:text-d-low-contrast-text dark:hover:border-d-hover-ui-border">
									{{ tag }}
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div data-aos="zoom-in" data-aos-delay="0" data-aos-duration="350">
				<div class=" about-tab-div">
					<h1
						class="about-tab-div-title">
						What's New</h1>

					<div class="lg:hidden" v-for="i in [0, 1]" :key="i">
						<div class="flex flex-row items-center justify-center">
							<div class="h-px w-4 bg-accent-color dark:bg-d-accent-color"></div>
							<h2
								class=" text-nowrap px-2 text-base font-bold text-high-contrast-text underline-offset-4 dark:text-d-high-contrast-text">
								{{ lastAboutme[i].itemDate }}</h2>
							<div class="h-px w-full bg-accent-color dark:bg-d-accent-color"></div>
						</div>

						<p class="text-sm text-low-contrast-text opacity-90 dark:text-d-low-contrast-text">{{ lastAboutme[i].content }}</p>
					</div>

					<div class="max-lg:hidden" v-for="i in [0, 1, 2]" :key="i">
						<div class="flex flex-row items-center justify-center">
							<div class="h-px w-4 bg-accent-color dark:bg-d-accent-color"></div>
							<h1
								class=" text-nowrap px-2 text-base font-bold text-high-contrast-text underline-offset-4 dark:text-d-high-contrast-text">
								{{ lastAboutme[i].itemDate }}</h1>
							<div class="h-px w-full bg-accent-color dark:bg-d-accent-color"></div>
						</div>

						<p class="text-sm text-low-contrast-text opacity-100 dark:text-d-low-contrast-text">{{ lastAboutme[i].content }}</p>
					</div>
				</div>
				</div>
				<div data-aos="zoom-in" data-aos-delay="0" data-aos-duration="350">
				<div class=" about-tab-div">
					<h1
						class="about-tab-div-title">
						Latest 3D Showcase</h1>

					<div class="flex flex-row items-center justify-center">
						<div class="h-px w-4 bg-accent-color dark:bg-d-accent-color"></div>
						<h2
							class=" text-nowrap px-2 text-lg font-bold text-high-contrast-text underline-offset-4 dark:text-d-high-contrast-text">{{ lastVideo.title }}</h2>
						<div class="h-px w-full bg-accent-color dark:bg-d-accent-color"></div>
					</div>
					<div class=" custom-shadow-sm size-full overflow-hidden rounded-2xl">
						<!-- <video v-if="lastVideo.url" muted :src="lastVideo.url" autoplay="true" loop="true">
						</video> -->
						<iframe src="https://www.youtube.com/embed/wGudTKlWI_0?si=29zRF1GuRPEAIZpa" title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
					</div>
				</div>
				</div>
			</div>


			<div class="h-12 w-full"></div>

			<button @click="goToAboutView" class="href-btn"><svg width="20" height="20"
					viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
						fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
				</svg>Learn more</button>
		</main>
		<div class=" h-28 w-full"></div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import BgTab from '@/components/background/BgTab.vue';
import TabTitleComponent from '@/components/TabTitleComponent.vue';
import { useRouter } from 'vue-router';
import firebaseApp from '@/firebase/init';
import { getDownloadURL, getStorage, ref as StorageRef } from "firebase/storage";

const storage = getStorage(firebaseApp);
const lastExperience = ref(null);
const lastAboutme = ref(null);
const lastVideo = ref(null);

lastExperience.value = aboutData.experiences.toReversed()[0];
lastAboutme.value = aboutData.about.toReversed();
lastVideo.value = aboutData.videos[0];
const router = useRouter();

const getLatestVideoUrl = async () => {
	try {
        const videoRef = StorageRef(storage, lastVideo.value.name);
        const url = await getDownloadURL(videoRef);
        lastVideo.value.url = url;
      } catch (error) {
        console.error('Erreur lors de la récupération de la vidéo:', error);
      }

}

function goToAboutView() {
	router.push({
		name: 'about',

	}).then(() => {
		window.scrollTo(0, 0);
	});
}
onMounted(() => {getLatestVideoUrl();});

</script>
