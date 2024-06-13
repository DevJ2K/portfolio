<template>
  <div class="relative h-screen w-full flex">
    <BackgroundSpotlight color="bg-gray-950" />
    <main class=" container z-10 flex h-screen flex-col items-center justify-center gap-10">
        <div class="text-center">
          <h1 class="text-5xl font-extrabold text-primary dark:text-primary-dark">Hello, I'm Theo Ajavon</h1>
          <h2 class="text-4xl font-bold text-accent-color dark:text-accent-color-dark">Software Engineer & Swift Developer</h2>
        </div>
        <p class="text-center text-base font-semibold text-primary dark:text-primary-dark">Voluptate irure consectetur exercitation esse labore occaecat Lorem laborum
          occaecat nisi dolore sint ad ea. Quis voluptate sunt in ipsum eu est aute sunt sunt minim incididunt
          reprehenderit. Ipsum aliquip id nostrud duis cupidatat.</p>

          <button class="rounded-lg border-2 border-accent-color px-4 py-2 text-center text-base font-bold text-primary transition-colors hover:bg-black/40 dark:border-accent-color-dark dark:text-primary-dark">Open Resume</button>

        <div class="flex w-full flex-row justify-around">
          <div class=" rounded-full border p-2">
            <GithubSvg color="text-white" size="w-6" />
          </div>
          <div class=" rounded-full border p-2">
            <LinkedinSvg color="text-white" size="w-6" />
          </div>
          <div class=" rounded-full border p-2">
            <EmailSvg color="text-white" size="w-6" />
          </div>
        </div>
    </main>
  </div>
</template>

<script setup>
import BackgroundSpotlight from '../../components/BackgroundSpotlight.vue'
import GithubSvg from '../../components/logos/GithubSvg.vue'
import EmailSvg from '../../components/logos/EmailSvg.vue'
import LinkedinSvg from '../../components/logos/LinkedinSvg.vue'
</script>
