<template>
  <main class="relative flex size-full flex-col items-center">
    <NavigationBar/>


    <PresentationView/>
    <AboutView id="about"/>
    <SkillView id="skills"/>
    <ProjectsView id="projects"/>
    <ContactView id="contact"/>
    <CustomFooter/>
    <BgStars/>
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
import BgStars from '@/components/background/BgStars.vue';
</script>

