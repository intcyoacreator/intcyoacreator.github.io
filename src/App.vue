<template>
  <v-app>
    <keep-alive>
      <component :is="components[currentComponent]"/>
    </keep-alive>
  </v-app>
</template>

<script setup lang="ts">
  import { onActivated, ref } from "vue";
  import Home from "./views/Home.vue";
  import About from "./views/About.vue";

  const components = [
    Home,
    About,
  ];

  // Default value is Home
  const currentComponent = ref(0);

  // When the app is launched
  onActivated(() => {
    // called on initial mount
    // and every time it is re-inserted from the cache
    // currentComponent.value = 0; // Default view is Home
  });
</script>
