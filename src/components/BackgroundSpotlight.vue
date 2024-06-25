<template>
  <!-- <div :class="`absolute top-0 left-0 w-full h-screen -z-10 ${color}`"></div> -->
  <div
    class="absolute size-full overflow-hidden"
  >
    <div :class="`absolute top-0 left-0 w-full h-[100%] bg-bg-${bgNb} dark:bg-d-bg-${bgNb} `"></div>


    <!-- <div :class="`absolute left-0 top-0 h-[${lineSize}] w-full ${rotate} from-bg-${bgNb} from-40% via-accent-color via-50% to-bg-${bgNb} to-60% dark:from-d-bg-${bgNb} dark:from-40% dark:via-d-accent-color dark:via-50% dark:to-d-bg-${bgNb} dark:to-60%`"></div> -->

    <!-- <div :class="`absolute left-0 top-0 h-[${lineSize}] w-full ${rotate} from-bg-${bgNb} from-40% via-accent-color via-50% to-bg-${bgNb} to-60% dark:from-d-bg-${bgNb} dark:from-40% dark:via-d-accent-color dark:via-50% dark:to-d-bg-${bgNb} dark:to-60%`"></div> -->
    <!-- <div class="from-bg to-bg dark:from-d-bg dark:to-d-bg absolute left-0 top-0 h-3/5 w-full -rotate-45 bg-gradient-to-r from-40% via-accent-color via-50% to-60% dark:from-40% dark:via-d-accent-color dark:via-50% dark:to-60%"></div> -->

    <!-- <div class="relative flex size-full items-center justify-center">
      <div class="size-4/12 rounded-full bg-accent-color/40"></div>
    </div> -->
    <div class="absolute left-0 top-0 size-full backdrop-blur-3xl"></div>
  </div>
  <div class="hidden bg-bg-1 dark:bg-d-bg-1"></div>
  <div class="hidden bg-bg-2 dark:bg-d-bg-2"></div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "bg-blue-500",
  },
  bgNb: {
    type: String,
    default: "1",
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
