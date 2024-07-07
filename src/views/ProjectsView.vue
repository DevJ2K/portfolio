<template>
	<main class="relative flex size-full min-h-screen flex-col items-center">
		<NavigationBarProjects/>
		<div class=" h-28 w-full"></div>
		<main class=" container z-10 flex min-h-screen flex-col items-center gap-9 text-low-contrast-text dark:text-d-low-contrast-text ">
			<h1 class="tab-title">Projects</h1>
			<div v-if="isFetchingProjects" class="flex w-full flex-col items-center gap-9">
				<ProjectCardSkeleton/>
				<ProjectCardSkeleton/>
				<ProjectCardSkeleton/>
			</div>
			<div v-else v-for="project in projectList" :key="project" class="flex w-full flex-col items-center gap-9">
				<ProjectCard :title="project.name" :description="project.description" :tags="project.tags" :github-link="project.github" :project-link="project.link"/>
			</div>
		</main>
		<div class=" h-28 w-full"></div>
	</main>
</template>

<script setup>
import NavigationBarProjects from '@/components/NavigationBarProjects.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectCardSkeleton from '@/components/placeholder/ProjectCardSkeleton.vue';
import db from '@/firebase/init';
import { collection, getDocs } from 'firebase/firestore/lite';
import { onMounted, ref } from 'vue';

const projectList = ref([]);
const isFetchingProjects = ref(true);
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

	console.log(projectList.value);
}

// console.log(db)
onMounted(() => {
	// console.log("ProjectsView is mounted !");
	// eslint-disable-next-line no-undef
	if (pJSDom != null && pJSDom != [] && pJSDom[0] != null && pJSDom[0].pJS != null) {
		// eslint-disable-next-line no-undef
		pJSDom[0].pJS.fn.particlesRefresh();
	}
	getProjects();
})

</script>
