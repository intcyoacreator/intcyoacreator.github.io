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
  import { onActivated, ref } from "vue";
  import Home from "./views/Home.vue";
  import About from "./views/About.vue";

  const components = [
    Home,
    About,
  ];

  const currentComponent = ref();

  // When the app is launched
  onActivated(() => {
    currentComponent.value = 0; // Default view is Home
  });
</script>
