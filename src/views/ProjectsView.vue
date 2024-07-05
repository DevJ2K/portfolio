<template>
	<main class="relative flex min-h-screen size-full flex-col items-center">
		<h1>Salut</h1>
	</main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
	console.log("Project is mounted !");
	if (pJSDom != null && pJSDom != [] && pJSDom[0] != null && pJSDom[0].pJS != null) {
		pJSDom[0].pJS.fn.particlesRefresh();
	}
})
</script>
