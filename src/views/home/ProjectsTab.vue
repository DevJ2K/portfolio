<template>
	<div class="relative flex w-full flex-col">
		<!-- <BackgroundSpotlight rotate="bg-gradient-to-br" bg-color="subtle-bg" /> -->
		<BgTab/>
		<div class=" h-28 w-full"></div>
		<main class=" container z-10 flex flex-col items-center gap-9 text-low-contrast-text dark:text-d-low-contrast-text ">
			<TabTitleComponent title="Projects"/>

			<div class="flex w-full flex-col items-center justify-center">
				<!-- <h3 class=" mb-4 text-center text-xl font-medium sm:text-2xl">Featured Projects</h3> -->
				<!-- <div class="grid grid-cols-3 flex-row gap-3 sm:flex"> -->

				<div v-if="isFetchingProjects" class="flex w-full flex-wrap justify-center gap-6">
					<div class="b_project_card:w-full" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="350">
						<ProjectCardSkeleton/>
					</div>
					<div class="b_project_card:w-full" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="350">
						<ProjectCardSkeleton/>
					</div>
					<div class="b_project_card:w-full" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="350">
						<ProjectCardSkeleton/>
					</div>
				</div>

				<div v-else class="flex flex-wrap justify-center gap-6">
					<div v-for="project in highlightedProjects" :key="project" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="350">
						<ProjectCard :preview-image="project.url" :title="project.name" :description="project.description" :tags="project.tags" :github-link="project.github" :project-link="project.link"/>
					</div>
				</div>
			</div>

			<button @click="viewProjects" class="href-btn"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>View More Projects</button>
		</main>
		<div class=" h-28 w-full"></div>
	</div>
</template>

<script setup>
import BgTab from '@/components/background/BgTab.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { useRouter } from 'vue-router';
import firebaseApp from '@/firebase/init';
import { collection, query, getDocs, where, getFirestore } from 'firebase/firestore/lite';
import { onMounted, ref } from 'vue';
import ProjectCardSkeleton from '@/components/placeholder/ProjectCardSkeleton.vue';
import TabTitleComponent from '@/components/TabTitleComponent.vue';
import { getDownloadURL, getStorage, ref as StorageRef } from 'firebase/storage';

const router = useRouter();
const highlightedProjects = ref([]);
const isFetchingProjects = ref(true);
const useFirebaseFirestore = false;
const useFirebaseStorage = true;
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

function viewProjects() {
	router.push({
		name: 'projects',

	}).then(() => {
		window.scrollTo(0, 0);
	});
}

const getHighlightedProjects = async () => {
	if (useFirebaseFirestore) {
		const projectsCol = query(collection(db, 'projects'), where("highlighted", "==", true));
		const projectSnapshot = await getDocs(projectsCol);
		highlightedProjects.value = projectSnapshot.docs.map(doc => doc.data());
	} else {
		// eslint-disable-next-line no-undef
		highlightedProjects.value = localData.projects.filter((project) => project.highlighted == true);
	}
	for (let i = 0; i < highlightedProjects.value.length; i++) {
		const element = highlightedProjects.value[i];
		if (element.miniature) {
			if (useFirebaseStorage) {
				const videoRef = StorageRef(storage, element.miniature);
				const url = await getDownloadURL(videoRef);
				element.url = url;
			}
		}
		// console.log(element);
	}
	await new Promise((resolve) => setTimeout(resolve, 1000));
	isFetchingProjects.value = false;
	// console.log(highlightedProjects.value);
}

onMounted(() => {
	// console.log("ProjectsTab is mounted !");
	getHighlightedProjects();
})


</script>
