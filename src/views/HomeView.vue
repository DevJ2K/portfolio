<template>
  <main class="relative flex size-full flex-col items-center">
    <NavigationBar/>
    <PresentationView/>
    <SkillView id="skills"/>
    <ProjectsView id="projects"/>
    <AboutView id="about"/>
    <ContactView id="contact"/>
    <CustomFooter/>
    <BgStars/>
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
import BgStars from '@/components/background/BgStars.vue';
import refreshBackground from '@/js/utils';

import { onMounted } from 'vue';

onMounted(() => {refreshBackground();});
</script>

