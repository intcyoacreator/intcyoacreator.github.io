<!--
  The actual file of the Viewer
-->

<template>
  <!-- <h2>Viewer!!!</h2> -->

  <v-container >
    <!-- Pagination -->
    <v-row v-if="projectV2.settings.pagesOn">
      <v-col>
        <v-pagination
          :length="projectV2.pages.length"
          :model-value="projectV2.state.currentPage"
          @update:model-value="(page) => {projectV2.state.currentPage = page}"
        >
        </v-pagination>
      </v-col>
    </v-row>

    <!-- Pages -->
    <!-- v-for -->
    <v-row v-for="(page, index) in projectV2.pages" :key="index">
      <v-col v-if="index == projectV2.state.currentPage - 1">
        {{ page }}
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
