<!--
  The actual file of the Viewer
-->

<template>
  <v-container >
    <!-- Pagination buttons -->
    <v-row v-if="projectV2.settings.pagesOn">
      <v-col>
        <v-pagination
          :length="projectV2.pages.length"
          :model-value="projectV2.state.currentPage"
          @update:model-value="(page) => updateCurrentPage(page)"
        >
        </v-pagination>
      </v-col>
    </v-row>

    <!-- Pages' contents -->
    <v-row v-for="(page, index) in projectV2.pages" :key="index">
      <v-col v-if="index == projectV2.state.currentPage - 1">
        <Page :page-data="page"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useAppStore } from "@/store/app";
  import { storeToRefs } from "pinia";
  import { onMounted } from "vue";
  import Page from "@/components/common/Page.vue";

  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  function updateCurrentPage(pageNumber: number) {
    projectV2.value.state.currentPage = pageNumber;
  }

  onMounted(() => {
    // Maybe turn this on automatically if the length of pages is more than 1?
    projectV2.value.settings.pagesOn = true;
  });
</script>
