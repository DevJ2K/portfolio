<template>
	<main class="relative flex size-full min-h-screen flex-col items-center">
		<div id="line-height-for-resize-proj" class="absolute h-full w-px bg-transparent">

		</div>
		<NavigationBarProjects />
		<div class=" h-32 w-full"></div>
		<main
			class=" container z-10 flex min-h-screen flex-col items-center gap-9 text-low-contrast-text dark:text-d-low-contrast-text ">
			<div class="relative flex w-full">
				<input id="search-by-tag-field" v-model="searchText"
					class="block  w-full scroll-mt-28  rounded-3xl border-2 border-ui-border bg-ui-bg p-3 pr-9 text-high-contrast-text outline-none hover:border-hover-ui-border focus:border-accent-color focus:bg-active-ui-bg dark:border-d-ui-border  dark:bg-d-ui-bg dark:text-d-high-contrast-text dark:hover:border-d-hover-ui-border dark:focus:border-d-accent-color dark:focus:bg-d-active-ui-bg"
					placeholder="Search by tags..." type="text" maxlength="30">

				<svg @click="clearSearchField();"
					class=" absolute right-0 top-1/2 ml-4 mr-2 size-6 -translate-y-1/2 cursor-pointer rounded-full border border-hover-ui-border bg-ui-bg text-hover-ui-border dark:border-d-hover-ui-border dark:bg-d-ui-bg dark:text-d-hover-ui-border"
					width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
						fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
				</svg>
			</div>
			<!-- <h1 class="tab-title">Projects</h1> -->
			<div class="h-6 w-full"></div>
			<div v-if="searchText.length == 0" class="flex w-full flex-col items-center gap-40">
				<div class="flex w-full flex-col items-center justify-center gap-8">
					<TabTitleComponent id="p_featured" title="Featured" />
					<h1 class="paragraph-explain">The projects that have provided me with the most knowledge and have been the most relevant in my career as a developer.</h1>
					<div v-if="isFetchingProjects" class="flex w-full flex-wrap items-center justify-center gap-6">
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
					</div>
					<div v-else class="flex flex-wrap justify-center gap-6">

						<div v-for="project in projectList.filter((project) => containsCategory(project, 'Featured'))" :key="project">
							<ProjectCard :preview-image="project.url" :title="project.name" :description="project.description" :tags="project.tags"
								:github-link="project.github" :project-link="project.link" :date="project.date" />
						</div>
					</div>
				</div>
				<div class="flex w-full flex-col items-center gap-9">
					<TabTitleComponent id="p_personal" title="Personal" />
					<h1 class="paragraph-explain">Personal projects developed out of passion, aiming to apply my knowledge or to acquire new skills.</h1>
					<div v-if="isFetchingProjects" class="flex w-full flex-col items-center gap-9">
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
					</div>
					<div v-else v-for="project in projectList.filter((project) => containsCategory(project, 'Personal'))" :key="project"
						class="flex w-full flex-col items-center gap-9" data-aos-offset="200" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="250">
						<ProjectCard :preview-image="project.url" :title="project.name" :description="project.description" :tags="project.tags"
							:github-link="project.github" :project-link="project.link" :date="project.date" />
					</div>
				</div>
				<div class="flex w-full flex-col items-center gap-9">
					<TabTitleComponent id="p_42cursus" title="42Cursus" />
					<h1 class="paragraph-explain">Projects completed as part of my common core at 42.</h1>
					<div v-if="isFetchingProjects" class="flex w-full flex-col items-center gap-9">
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
					</div>
					<div v-else v-for="project in projectList.filter((project) => containsCategory(project, '42Cursus'))" :key="project"
						class="flex w-full flex-col items-center gap-9" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="250">
						<ProjectCard :preview-image="project.url" :title="project.name" :description="project.description" :tags="project.tags"
							:github-link="project.github" :project-link="project.link" :date="project.date" />
					</div>
				</div>
				<div class="flex w-full flex-col items-center gap-9">
					<TabTitleComponent id="p_others" title="Others" />
					<h1 class="paragraph-explain">Other projects I’ve completed for various reasons, all of which are worth mentioning.</h1>
					<div v-if="isFetchingProjects" class="flex w-full flex-col items-center gap-9">
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
					</div>
					<div v-else v-for="project in projectList.filter((project) => containsCategory(project, 'Others'))" :key="project"
						class="flex w-full flex-col items-center gap-9" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="250">
						<ProjectCard :preview-image="project.url" :title="project.name" :description="project.description" :tags="project.tags"
							:github-link="project.github" :project-link="project.link" :date="project.date" />
					</div>
				</div>
			</div>
			<div v-else-if="projectList.filter((project) => containsSearchTags(project)).length > 0"
				v-for="project in projectList.filter((project) => containsSearchTags(project))" :key="project"
				class="flex w-full flex-col items-center gap-8">
				<ProjectCard :preview-image="project.url" :title="project.name" :description="project.description" :tags="project.tags"
					:github-link="project.github" :project-link="project.link" :date="project.date" />

			</div>

			<div v-else
				class="flex size-full flex-col items-center justify-center gap-2 text-high-contrast-text dark:text-d-high-contrast-text">
				<svg class="size-14 md:size-20" width="15" height="15" viewBox="0 0 15 15" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
						fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
				</svg>
				<h1 class=" text-center text-xl font-medium md:text-2xl">No results for <span class=" capitalize">{{ searchText.toLowerCase() }}</span>.</h1>
			</div>
		</main>
		<div class=" h-28 w-full"></div>
		<CustomFooter />
	</main>
</template>

<script setup>
import NavigationBarProjects from '@/components/navbar/NavigationBarProjects.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import TabTitleComponent from '@/components/TabTitleComponent.vue';
import ProjectCardSkeleton from '@/components/placeholder/ProjectCardSkeleton.vue';
import firebaseApp from '@/firebase/init';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { getDownloadURL, getStorage, ref as StorageRef } from 'firebase/storage';
import { onMounted, onUnmounted, ref } from 'vue';
import CustomFooter from './home/CustomFooter.vue';
import { useRoute } from 'vue-router';
import refreshBackground from '@/js/refreshBackground';

const projectList = ref([]);
const isFetchingProjects = ref(true);
const searchText = ref("");
const useFirebaseFirestore = false;
const useFirebaseStorage = true;
const route = useRoute();
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

if (route.query.tag != null) {
	searchText.value = route.query.tag;
}

const getProjects = async () => {
	if (useFirebaseFirestore) {
		const projectsCol = collection(db, 'projects');
		const projectSnapshot = await getDocs(projectsCol);
		projectList.value = projectSnapshot.docs.map(doc => doc.data());
		console.log(projectList.value)
	} else {
		// eslint-disable-next-line no-undef
		projectList.value = localData.projects;
	}
	projectList.value = projectList.value.sort((a, b) => (a.dateFilter < b.dateFilter) ? 1 : (a.dateFilter > b.dateFilter) ? -1 : 0);
	for (let i = 0; i < projectList.value.length; i++) {
		const element = projectList.value[i];
		if (element.miniature) {
			if (useFirebaseStorage) {
				const videoRef = StorageRef(storage, element.miniature);
				const url = await getDownloadURL(videoRef);
				element.url = url;
			}
		}
	}
	await new Promise((resolve) => setTimeout(resolve, 1000));
	isFetchingProjects.value = false;
}

const clearSearchField = () => {
	if (searchText.value != "") {
		searchText.value = "";
	}
}

const containsSearchTag = (project, tag) => {
	if (!project.tags) {
		return (false);
	}
	let tags = [];
	for (let i = 0; i < project.tags.length; i++) {
		tags.push(project.tags[i].toLowerCase());
	}
	for (let i = 0; i < tags.length; i++) {
		if (tags[i] == tag.toLowerCase()) {
			return (true)
		} else if (tags[i].startsWith(tag.toLowerCase())) {
			return (true);
		}
		// Utiliser .includes || item.msg.toLowerCase().includes(this.query))
	}
	return (false);
}

const containsSearchTags = (project) => {
	if (!project.tags) {
		return (false);
	}
	let tags = searchText.value.split(' ');
	tags = tags.filter((value) => value.length > 0)
	// console.log(tags);
	for (let i = 0; i < tags.length; i++) {
		if (!containsSearchTag(project, tags[i])) {
			return (false)
		}
	}
	return (true);
}

const containsCategory = (project, category) => {
	if (!project.categories) {
		return (false);
	}
	for (let i = 0; i < project.categories.length; i++) {
		if (category.toLowerCase() == project.categories[i].toLowerCase()) {
			return (true);
		}
	}
	return (false);
}

let resizeObserver;

onMounted(() => {
	const projectContainer = document.getElementById("line-height-for-resize-proj");

	resizeObserver = new ResizeObserver(refreshBackground);
	resizeObserver.observe(projectContainer);

	refreshBackground();
	getProjects();
});

onUnmounted(() => {
	if (resizeObserver) {
		resizeObserver.disconnect();
	}
});
</script>
