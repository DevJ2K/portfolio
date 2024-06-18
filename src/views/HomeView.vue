<template>
  <main class="flex w-full flex-col items-center">
    <!-- <NavigationBar/> -->
    <ProjectsView/>
    <PresentationView/>
    <AboutView/>
    <SkillView/>
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
</script>

