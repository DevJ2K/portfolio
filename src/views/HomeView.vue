<template>
  <main class="flex w-full flex-col items-center">
    <NavigationBar/>

    <SkillView id="skills"/>
    <PresentationView/>
    <AboutView id="about"/>
    <ProjectsView id="projects"/>
    <ContactView id="contact"/>
    <CustomFooter/>
  </main>
  <!-- <div>
    <h1 class=" bg-blue-400">Portfolio</h1>
  </div> -->
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import PresentationView from './home/PresentationView.vue'
import AboutView from './home/AboutView.vue'
import SkillView from './home/SkillView.vue';
import ProjectsView from './home/ProjectsView.vue'
import ContactView from './home/ContactView.vue';
import CustomFooter from './home/CustomFooter.vue';
</script>

