<template>
	<div class="absolute left-0 top-0 size-full overflow-hidden">

    <!-- <div class="absolute left-1/2 top-0 h-3/4 w-full -translate-x-1/2 -translate-y-1/4 rounded-b-[20vw] bg-hover-ui-bg opacity-50 dark:bg-d-hover-ui-bg"></div> -->

    <!-- <div class="absolute left-1/2 top-1/2 h-2/5 w-5/6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hover-ui-bg opacity-50 dark:bg-d-hover-ui-bg"></div> -->

    <div class="absolute left-0 top-[33%] h-2/5 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ui-bg opacity-50 dark:bg-d-ui-bg"></div>

    <div class="absolute right-0 top-[66%] h-2/5 w-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-ui-bg opacity-50 dark:bg-d-ui-bg"></div>

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
