<template>
  <v-app>
    <!-- <router-view v-slot="{ Component }"> -->
    <!-- <router-view v-slot="{ components[currentComponent] }"> -->
      <keep-alive>
        <component :is="components[currentComponent]"/>
      </keep-alive>
    <!-- </router-view> -->
  </v-app>
</template>

<script setup lang="ts">
  import { onActivated, ref } from 'vue';
  import About from './views/About.vue';

  const components = [
    About,
  ];

  const currentComponent = ref(0);

  // When the app is launched
  onActivated(() => {
    // currentComponent = "Home";
  });
</script>
