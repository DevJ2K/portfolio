<template>
  <main class="relative flex size-full flex-col items-center">
    <NavigationBar/>
    <PresentationView/>
    <SkillView id="skills"/>
    <ProjectsView id="projects"/>
    <AboutView id="about"/>
    <ContactView id="contact"/>
    <CustomFooter/>
  </main>
  <!-- <div>
    <h1 class=" bg-blue-400">Portfolio</h1>
  </div> -->
</template>

<script setup>
import NavigationBar from '@/components/navbar/NavigationBar.vue';
import PresentationView from './home/PresentationTab.vue'
import AboutView from './home/AboutTab.vue'
import SkillView from './home/SkillTab.vue';
import ProjectsView from './home/ProjectsTab.vue'
import ContactView from './home/ContactTab.vue';
import CustomFooter from './home/CustomFooter.vue';
import refreshBackground from '@/js/refreshBackground';

import { onMounted } from 'vue';




onMounted(() => {
  const mainApp = document.getElementById("mainApp");
  mainApp.classList.add("app-background");
	mainApp.classList.remove("bg-computorv1-app-bg");
  refreshBackground();});
</script>

