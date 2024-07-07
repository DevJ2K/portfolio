<template>
	<div class="absolute left-0 top-0 size-full overflow-hidden">

    <div class="absolute left-1/2 top-1/2 h-2/5 w-3/6 -translate-x-1/2 -translate-y-1/2 rounded-[20vw] bg-active-ui-bg dark:bg-d-ui-bg dark:opacity-60"></div>

    <!-- <div class="absolute left-0 top-0 size-full bg-gradient-to-bl from-app-bg from-30% via-hover-ui-bg via-45% to-app-bg to-60% dark:from-d-app-bg dark:via-d-hover-ui-bg dark:to-d-app-bg"></div> -->

    <!-- <div class="absolute bottom-0 h-1/2 w-full bg-gradient-to-b from-transparent to-app-bg to-30% dark:to-d-app-bg"></div> -->

    <div class="absolute left-0 top-0 size-full backdrop-blur-3xl"></div>
	</div>
	<div class="hidden bg-app-bg dark:bg-d-app-bg"></div>
	<div class="hidden bg-subtle-bg dark:bg-d-subtle-bg"></div>
</template>

<script setup>
defineProps({
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
