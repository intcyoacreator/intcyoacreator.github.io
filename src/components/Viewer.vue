<!--
  The actual file of the Viewer
-->

<template>
  <!-- <h2>Viewer!!!</h2> -->

  <v-container >
    <v-row v-if="projectV2.settings.pagesOn">
      <v-col>
        <v-pagination :length="6"></v-pagination>
      </v-col>
    </v-row>
  </v-container>

  <h1>TEST VIEWER</h1>

  <v-bottom-navigation>

  </v-bottom-navigation>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store/app';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';

  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  onMounted(() => {
    projectV2.value.settings.pagesOn = true;
  });
</script>
