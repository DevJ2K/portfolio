<template>
  <div class="relative flex min-h-screen w-full">
    <BackgroundSpotlight color="bg-gray-950" bg-nb="1" />
    <main class=" container z-10 flex min-h-screen flex-col items-center justify-center gap-10">
        <div class="text-center">
          <h1 class="text-5xl font-extrabold text-primary dark:text-d-primary max-md:text-4xl">Hello, I'm Theo Ajavon</h1>
          <h2 class="text-4xl font-bold text-accent-color dark:text-d-accent-color max-md:text-3xl">Software Engineer & Swift Developer</h2>
        </div>
        <p class="text-center text-xl font-semibold text-primary dark:text-d-primary max-md:text-base">Voluptate irure consectetur exercitation esse labore occaecat Lorem laborum
          occaecat nisi dolore sint ad ea. Quis voluptate sunt in ipsum eu est aute sunt sunt minim incididunt
          reprehenderit. Ipsum aliquip id nostrud duis cupidatat.</p>

          <button class="rounded-lg border-2 border-accent-color bg-black/40 px-4 py-2 text-center text-base font-bold text-primary transition-colors hover:bg-black/60 active:bg-black/40 active:transition-none dark:border-d-accent-color dark:text-d-primary">Open Resume</button>

        <div class="flex w-full flex-row justify-around">
          <div class="cursor-pointer rounded-full border p-2 opacity-100 transition-colors hover:bg-black/40 hover:opacity-90">
            <GithubSvg color="text-white" size="w-6" />
          </div>
          <div class="cursor-pointer rounded-full border p-2 opacity-100 transition-colors hover:bg-black/40 hover:opacity-90">
            <LinkedinSvg color="text-white" size="w-6" />
          </div>
          <div class="cursor-pointer rounded-full border p-2 opacity-100 transition-colors hover:bg-black/40 hover:opacity-90">
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
