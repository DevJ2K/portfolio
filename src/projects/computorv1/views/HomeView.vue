<template>
  <main class="container z-10 my-12 flex flex-col items-center justify-center gap-24 text-computorv1-high-contrast-text">
    <div class="flex w-full flex-col items-center justify-center gap-8">
      <!-- Titre Principal -->
      <h1 class="border-b-2 border-computorv1-accent-color pb-2 text-4xl font-extrabold text-computorv1-high-contrast-text">Computorv1</h1>

      <!-- Description -->
      <div class="w-4/5 text-center md:w-2/3 lg:w-1/2">
        <p class="mb-4 text-lg text-computorv1-low-contrast-text">
          Computorv1 is a project aimed at building a simple equation-solving program. It focuses on solving polynomial equations of the second degree or lower using only exponents.
        </p>
      </div>

      <!-- Image/Visualisation -->
      <div class=" group flex w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-computorv1-ui-border bg-gray-800 p-4 shadow-lg transition-transform duration-300 hover:scale-105 md:flex-row">
        <img src="../assets/images/overview.png" class="rounded-md shadow-md" alt="Overview">
      </div>

      <!-- Boutons d'action -->
      <div class="mt-6 flex flex-row items-center gap-4">
        <a href="#/computorv1/learn-math"
           class=" group flex flex-row items-center gap-1.5 rounded-full border-2 border-computorv1-accent-color bg-gray-900 px-8 py-4 font-semibold text-computorv1-high-contrast-text shadow-md transition-colors hover:bg-computorv1-accent-color hover:text-white">
          Learn the Math
        </a>
        <a href="#/computorv1/playground"
           class=" group flex flex-row items-center gap-1.5 rounded-full border-2 border-computorv1-accent-color bg-gray-900 px-8 py-4 font-semibold text-computorv1-high-contrast-text shadow-md transition-colors hover:bg-computorv1-accent-color hover:text-white">
          Try it yourself
        </a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>
