<template>
  <!-- <div :class="`absolute top-0 left-0 w-full h-screen -z-10 ${color}`"></div> -->
  <div
    class="absolute size-full overflow-hidden "
  >
    <!-- <div :class="`absolute top-0 left-0 w-full h-[100%] bg-${bgColor} dark:bg-d-${bgColor} `"></div> -->
    <div :class="`absolute top-0 left-0 w-full h-[100%] dark:bg-d-${bgColor} `"></div>

    <!-- <div v-if="bgColor == 'app-bg'" class="absolute left-0 top-0 size-full bg-gradient-to-b from-app-bg to-red-500 dark:from-d-app-bg dark:to-d-subtle-bg">

    </div>

    <div v-else class="absolute left-0 top-0 size-full bg-gradient-to-b from-red-500 to-app-bg dark:from-d-subtle-bg dark:to-d-app-bg">

    </div> -->


    <!-- <div :class="`absolute left-0 top-0 h-[${lineSize}] w-full ${rotate} from-bg-${bgNb} from-40% via-accent-color via-50% to-bg-${bgNb} to-60% dark:from-d-bg-${bgNb} dark:from-40% dark:via-d-accent-color dark:via-50% dark:to-d-bg-${bgNb} dark:to-60%`"></div> -->

    <!-- <div :class="`absolute left-0 top-0 h-[${lineSize}] w-full ${rotate} from-bg-${bgNb} from-40% via-accent-color via-50% to-bg-${bgNb} to-60% dark:from-d-bg-${bgNb} dark:from-40% dark:via-d-accent-color dark:via-50% dark:to-d-bg-${bgNb} dark:to-60%`"></div> -->
    <div class="absolute left-0 top-0 size-full bg-gradient-to-bl from-app-bg from-40% via-accent-color via-50% to-app-bg to-60% dark:from-d-app-bg dark:from-40% dark:via-d-accent-color dark:via-50% dark:to-d-app-bg dark:to-60%"></div>

    <!-- <div class="absolute left-0 top-0 size-full bg-red-500"></div> -->

    <!-- <div :class="`absolute left-0 top-0 h-[${lineSize}] w-full ${rotate} from-black from-40% via-accent-color via-50% to-black to-60%`">
		</div> -->
    <!-- <div class="relative flex size-full items-center justify-center">
      <div class="size-4/12 rounded-full bg-accent-color/40"></div>
    </div> -->
    <div class="absolute left-0 top-0 size-full backdrop-blur-3xl"></div>
  </div>
  <div class="hidden bg-app-bg dark:bg-d-app-bg"></div>
  <div class="hidden bg-subtle-bg dark:bg-d-subtle-bg"></div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "bg-blue-500",
  },
  bgColor: {
    type: String,
    default: "app-bg",
  },
  lineSize: {
    type: String,
    default: "100vh",
  },
  rotate: {
    type: String,
    default: "bg-gradient-to-bl",
  },
});

</script>
