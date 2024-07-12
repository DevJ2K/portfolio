<template>
  <div class="relative flex min-h-screen w-full">
    <!-- <BackgroundSpotlight/> -->
    <BgPresentation/>
    <main class=" container z-10 flex h-screen min-h-[740px] flex-col items-center justify-center gap-8 sm:gap-12">

        <div class="h-1/6 w-full max-sm:hidden"></div>
        <div class="flex flex-col items-center justify-center gap-2 text-center">
          <h1 class="text-3xl font-extrabold text-high-contrast-text dark:text-d-high-contrast-text sm:text-4xl md:text-5xl" data-aos="zoom-in" data-aos-duration="1200">Hello, I'm Theo Ajavon</h1>
          <h2 class="text-2xl font-bold text-accent-color dark:text-d-accent-color sm:text-3xl md:text-4xl" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1200">Software Engineer & Student</h2>
        </div>
        <p class="text-center text-base font-normal text-high-contrast-text dark:text-d-high-contrast-text sm:text-lg md:text-xl" data-aos="zoom-in"  data-aos-delay="200" data-aos-duration="1200">Voluptate irure consectetur exercitation esse labore occaecat Lorem laborum
          occaecat nisi dolore sint ad ea. Quis voluptate sunt in ipsum eu est aute sunt sunt minim incididunt
          reprehenderit. Ipsum aliquip id nostrud duis cupidatat.</p>

          <div  data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1200">
            <button class="open-resume-btn">Open Resume</button>
          </div>

        <div class="flex w-full flex-row items-center justify-around sm:h-1/6" data-aos="zoom-in" data-aos-delay="400" data-aos-offset="0" data-aos-duration="1200">
           <SocialLogo :logo="GithubSvg" name="DevJ2K" size="presentation-view-logo"/>
           <SocialLogo :logo="LinkedinSvg" name="Theo Ajavon" size="presentation-view-logo"/>
           <SocialLogo :logo="EmailSvg" name="ajavontheopro@gmail.com" size="presentation-view-logo"/>

        </div>
    </main>
  </div>
</template>

<script setup>
import GithubSvg from '../../components/logos/GithubSvg.vue'
import EmailSvg from '../../components/logos/EmailSvg.vue'
import LinkedinSvg from '../../components/logos/LinkedinSvg.vue'
import SocialLogo from '@/components/SocialLogo.vue';
import BgPresentation from '@/components/background/BgPresentation.vue';
</script>
