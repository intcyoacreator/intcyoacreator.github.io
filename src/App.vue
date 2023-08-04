<template>
  <v-app>
    <!-- <router-view v-slot="{ Component }"> -->
    <router-view v-slot="{ currentComponent }">
      <keep-alive>
        <component :is="components[currentComponent]"/>
      </keep-alive>
    </router-view>
  </v-app>
</template>

<script lang="ts" setup>
  import { onActivated, ref } from 'vue';
  import About from './views/About.vue';

  const components = {
    "About": About,
  };

  const currentComponent = ref("About");

  // When the app is launched
  onActivated(() => {
    // currentComponent = "Home";
  });
</script>
