<template>
  <div>
    <RouterView/>
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import AOS from 'aos';

  try {
    AOS.init({
      offset: 70,
      delay: 0,
    });
      console.log("%c[Success] : " + "%cAOS is init !", 'color: #1CFE25;', 'color: #FFEBC8;')
    } catch (error) {
      console.log("%c[Error] : " + "%c"+error, 'color: #FF0000;', 'color: #FFA100;')
    }
</script>
