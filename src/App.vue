<template>
  <v-app>
    <!-- <router-view v-slot="{ Component }"> -->
    <router-view v-slot="currentComponent">
      <keep-alive>
        <component :is="currentComponent"/>
      </keep-alive>
    </router-view>
  </v-app>
</template>

<script lang="ts" setup>
  import { onActivated, ref } from 'vue';
  import { About } from './views/About.vue';

  const currentComponent = ref("");

  // When the app is launched
  onActivated(() => {
    currentComponent.value = "Home";
  });
</script>
