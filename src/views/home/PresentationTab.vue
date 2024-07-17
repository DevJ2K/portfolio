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
        <p class="text-center text-base font-normal text-high-contrast-text dark:text-d-high-contrast-text sm:text-lg md:text-xl" data-aos="zoom-in"  data-aos-delay="200" data-aos-duration="1200">Based in Paris and studying at <a href="https://42.fr/en/homepage/" target="_blank" class=" underline decoration-accent-color underline-offset-4 dark:decoration-d-accent-color">42</a>, I’m a 19 years old passionate about exploring cutting-edge technologies and mastering new skills. My goal is to drive impactful projects that challenge the mind and push boundaries.</p>

          <div  data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1200">
            <button class="open-resume-btn" @click="openCV">Open Resume</button>
          </div>

        <div class="flex w-full flex-row items-center justify-around sm:h-1/6" data-aos="zoom-in" data-aos-delay="400" data-aos-offset="0" data-aos-duration="1200">
           <SocialLogo :logo="GithubSvg" name="DevJ2K" size="presentation-view-logo" link="https://github.com/DevJ2K"/>
           <SocialLogo :logo="LinkedinSvg" name="Theo Ajavon" size="presentation-view-logo" link="https://www.linkedin.com/in/devj2k/"/>
           <SocialLogo :logo="EmailSvg" name="ajavontheopro@gmail.com" size="presentation-view-logo" link="mailto:ajavontheopro@gmail.com"/>

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
import firebaseApp from '@/firebase/init';
import { getDownloadURL, getStorage, ref as StorageRef } from "firebase/storage";

const storage = getStorage(firebaseApp);

const openCV = async () => {
      try {
        const pdfRef = StorageRef(storage, aboutData.cv);
        const pdfUrl = await getDownloadURL(pdfRef);
        window.open(pdfUrl, '_blank');
      } catch (error) {
        console.error('Erreur lors de la récupération du PDF :', error);
      }
    }
</script>
