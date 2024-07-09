<template>
	<main class="relative flex size-full min-h-screen flex-col items-center">
		<NavigationBarProjects/>
		<div class=" h-32 w-full"></div>
		<main class=" container z-10 flex min-h-screen flex-col items-center gap-9 text-low-contrast-text dark:text-d-low-contrast-text ">
			<div class="relative flex w-full">
				<input id="search-by-tag-field" v-model="searchText" @input="refreshBackground();" class="block w-full  rounded-3xl border-2 border-ui-border bg-ui-bg p-3 pr-9 text-high-contrast-text outline-none hover:border-hover-ui-border focus:border-accent-color focus:bg-active-ui-bg dark:border-d-ui-border  dark:bg-d-ui-bg dark:text-d-high-contrast-text dark:hover:border-d-hover-ui-border dark:focus:border-d-accent-color dark:focus:bg-d-active-ui-bg" placeholder="Search by tag" type="text">

				<svg @click="clearSearchField" class=" absolute right-0 top-1/2 ml-4 mr-2 size-6 -translate-y-1/2 cursor-pointer rounded-full border border-high-contrast-text bg-ui-bg text-high-contrast-text dark:border-d-high-contrast-text dark:bg-d-ui-bg dark:text-d-high-contrast-text" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
			</div>
			<!-- <h1 class="tab-title">Projects</h1> -->
			<div class="h-6 w-full"></div>
			<div v-if="searchText.length == 0" class="flex w-full flex-col items-center gap-40">
				<div class="flex w-full flex-col items-center gap-8">
					<TabTitleComponent id="p_featured" title="Featured"/>
					<div v-if="isFetchingProjects" class="flex w-full flex-col items-center gap-9">
						<ProjectCardSkeleton/>
						<ProjectCardSkeleton/>
						<ProjectCardSkeleton/>
					</div>
					<div v-else v-for="project in projectList" :key="project" class="flex w-full flex-col items-center gap-9">
						<ProjectCard :title="project.name" :description="project.description" :tags="project.tags" :github-link="project.github" :project-link="project.link"/>
					</div>
				</div>
				<div class="flex w-full flex-col items-center gap-9">
					<TabTitleComponent id="p_personal" title="Personal"/>
					<div v-if="isFetchingProjects" class="flex w-full flex-col items-center gap-9">
						<ProjectCardSkeleton/>
						<ProjectCardSkeleton/>
						<ProjectCardSkeleton/>
					</div>
					<div v-else v-for="project in projectList" :key="project" class="flex w-full flex-col items-center gap-9">
						<ProjectCard :title="project.name" :description="project.description" :tags="project.tags" :github-link="project.github" :project-link="project.link"/>
					</div>
				</div>
				<div class="flex w-full flex-col items-center gap-9">
					<TabTitleComponent id="p_42cursus" title="42Cursus"/>
					<div v-if="isFetchingProjects" class="flex w-full flex-col items-center gap-9">
						<ProjectCardSkeleton/>
						<ProjectCardSkeleton/>
						<ProjectCardSkeleton/>
					</div>
					<div v-else v-for="project in projectList" :key="project" class="flex w-full flex-col items-center gap-9">
						<ProjectCard :title="project.name" :description="project.description" :tags="project.tags" :github-link="project.github" :project-link="project.link"/>
					</div>
				</div>
				<div class="flex w-full flex-col items-center gap-9">
					<TabTitleComponent id="p_others" title="Others"/>
					<div v-if="isFetchingProjects" class="flex w-full flex-col items-center gap-9">
						<ProjectCardSkeleton/>
						<ProjectCardSkeleton/>
						<ProjectCardSkeleton/>
					</div>
					<div v-else v-for="project in projectList" :key="project" class="flex w-full flex-col items-center gap-9">
						<ProjectCard :title="project.name" :description="project.description" :tags="project.tags" :github-link="project.github" :project-link="project.link"/>
					</div>
				</div>
			</div>
			<div v-else v-for="project in projectList.filter((project) => containsSearch(project))" :key="project" class="flex w-full flex-col items-center gap-8">
				<ProjectCard :title="project.name" :description="project.description" :tags="project.tags" :github-link="project.github" :project-link="project.link"/>
			</div>
		</main>
		<div class=" h-28 w-full"></div>
		<CustomFooter/>
	</main>
</template>

<script setup>
import NavigationBarProjects from '@/components/NavigationBarProjects.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import TabTitleComponent from '@/components/TabTitleComponent.vue';
import ProjectCardSkeleton from '@/components/placeholder/ProjectCardSkeleton.vue';
import db from '@/firebase/init';
import { collection, getDocs } from 'firebase/firestore/lite';
import { onMounted, ref } from 'vue';
import CustomFooter from './home/CustomFooter.vue';

const projectList = ref([]);
const isFetchingProjects = ref(true);
const searchText = ref("");
const useFirebase = false;

const getProjects = async () => {
	if (useFirebase) {
		const projectsCol = collection(db, 'projects');
		const projectSnapshot = await getDocs(projectsCol);
		projectList.value = projectSnapshot.docs.map(doc => doc.data());
	} else {
		projectList.value = localData.projects;
	}
	await new Promise((resolve) => setTimeout(resolve, 1500));
	isFetchingProjects.value = false;

	// console.log(projectList.value);
}

const clearSearchField = () => {
	// document.getElementById("search-by-tag-field").value = null;
	if (searchText.value != "") {
		searchText.value = "";
	}
	refreshBackground();
}

const refreshBackground = () => {
// eslint-disable-next-line no-undef
	if (pJSDom != null && pJSDom != [] && pJSDom[0] != null && pJSDom[0].pJS != null) {
		// eslint-disable-next-line no-undef
		pJSDom[0].pJS.fn.particlesRefresh();
	}
}

const containsSearch = (project) => {
	let tags = [];
	for (let i = 0; i < project.tags.length; i++) {
		tags.push(project.tags[i].toLowerCase());
	}
	for (let i = 0; i < tags.length; i++) {
		if (tags[i] == searchText.value.toLowerCase()) {
			return (true)
		} else if (tags[i].startsWith(searchText.value.toLowerCase())) {
			return (true);
		}
	}
	return (false);
}

// console.log(db)
onMounted(() => {
	// console.log("ProjectsView is mounted !");
	refreshBackground();
	getProjects();
})

</script>
