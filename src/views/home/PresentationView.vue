<template>
  <div class="relative flex min-h-screen w-full">
    <BackgroundSpotlight color="bg-gray-950" />
    <main class=" container z-10 flex min-h-screen flex-col items-center justify-center gap-8 sm:gap-12">
        <div class="flex flex-col items-center justify-center gap-2 text-center">
          <h1 class="text-3xl font-extrabold text-high-contrast-text dark:text-d-high-contrast-text sm:text-4xl md:text-5xl">Hello, I'm Theo Ajavon</h1>
          <h2 class="text-2xl font-bold text-accent-color dark:text-d-accent-color sm:text-3xl md:text-4xl">Software Engineer & Swift Developer</h2>
        </div>
        <p class="text-center text-base font-normal text-high-contrast-text dark:text-d-high-contrast-text sm:text-lg md:text-xl">Voluptate irure consectetur exercitation esse labore occaecat Lorem laborum
          occaecat nisi dolore sint ad ea. Quis voluptate sunt in ipsum eu est aute sunt sunt minim incididunt
          reprehenderit. Ipsum aliquip id nostrud duis cupidatat.</p>

          <button class="open-resume-btn">Open Resume</button>

        <div class="flex w-full flex-row justify-around">
           <SocialLogo :logo="GithubSvg" name="DevJ2K" size="w-7 h-7"/>
           <SocialLogo :logo="LinkedinSvg" name="Theo Ajavon" size="w-7 h-7"/>
           <SocialLogo :logo="EmailSvg" name="ajavontheopro@gmail.com" size="w-7 h-7"/>

        </div>
    </main>
  </div>
</template>

<script setup>
import BackgroundSpotlight from '../../components/BackgroundSpotlight.vue'
import GithubSvg from '../../components/logos/GithubSvg.vue'
import EmailSvg from '../../components/logos/EmailSvg.vue'
import LinkedinSvg from '../../components/logos/LinkedinSvg.vue'
import SocialLogo from '@/components/SocialLogo.vue';
</script>
