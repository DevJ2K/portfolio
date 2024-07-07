<template>
	<main class="relative flex size-full min-h-screen flex-col items-center">
		<NavigationBarProjects/>
		<div class=" h-28 w-full"></div>
		<main class=" container z-10 flex min-h-screen flex-col items-center gap-9 text-low-contrast-text dark:text-d-low-contrast-text ">
			<h1 class="tab-title">Projects</h1>
			<ProjectCardSkeleton/>
			<ProjectCardSkeleton/>
			<ProjectCardSkeleton/>
			<ProjectCard/>
		</main>
	</main>
</template>

<script setup>
import NavigationBarProjects from '@/components/NavigationBarProjects.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectCardSkeleton from '@/components/placeholder/ProjectCardSkeleton.vue';
import db from '@/firebase/init';
import { collection, getDocs } from 'firebase/firestore/lite';
import { onMounted } from 'vue';

// console.log(db)
onMounted(() => {
	console.log("Project is mounted !");
	// eslint-disable-next-line no-undef
	if (pJSDom != null && pJSDom != [] && pJSDom[0] != null && pJSDom[0].pJS != null) {
		// eslint-disable-next-line no-undef
		pJSDom[0].pJS.fn.particlesRefresh();
	}
})

const getProjects = async () => {
	const projectsCol = collection(db, 'projects');
	const projectSnapshot = await getDocs(projectsCol);
	const projectList = projectSnapshot.docs.map(doc => doc.data());
	console.log(projectList);
}

getProjects();
</script>
