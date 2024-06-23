<template>
  <!-- <div :class="`absolute top-0 left-0 w-full h-screen -z-10 ${color}`"></div> -->
  <div
    class="absolute size-full overflow-hidden"
  >
    <div :class="`absolute top-0 left-0 w-full h-[100%] bg-${bgNb} dark:bg-d-${bgNb}`"></div>

    <!-- <div class=" absolute left-0 top-0 h-[450vh] w-36 origin-top-left rotate-[-30deg] bg-accent-color/60 dark:bg-accent-color-dark/60 md:rotate-[-35deg]  lg:rotate-[-50deg]"></div> -->

    <!-- <div :class="`absolute left-0 top-0 h-[${lineSize}] w-full ${rotate} from-bg from-40% via-accent-color via-50% to-bg to-60% dark:from-d-bg dark:from-40% dark:via-d-accent-color dark:via-50% dark:to-d-bg dark:to-60%`"></div> -->
    <!-- <div class="absolute left-0 top-0 h-[60%] w-full -rotate-45 bg-gradient-to-r from-bg from-40% via-accent-color via-50% to-bg to-60% dark:from-d-bg dark:from-40% dark:via-d-accent-color dark:via-50% dark:to-d-bg dark:to-60%"></div> -->

    <div class="relative flex size-full items-center justify-center">
      <div class="size-4/12 rounded-full bg-accent-color/40"></div>
    </div>
    <div class="absolute left-0 top-0 size-full backdrop-blur-3xl"></div>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "bg-blue-500",
  },
  bgNb: {
    type: String,
    default: "bg-1",
  },
  lineSize: {
    type: String,
    default: "100%",
  },
  rotate: {
    type: String,
    default: "bg-gradient-to-bl",
  },
});
</script>
