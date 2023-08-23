<!--
  The actual file of the Viewer
-->

<template>
  <v-container>
    <!-- Pagination buttons -->
    <v-row v-if="projectV2.settings.pagesOn">
      <v-spacer/>

      <!-- Page settings button -->
      <v-col
        v-if="creatorMode === 'create'"
        cols="1"
        align-self="center"
      >
        <v-btn icon @click="showPageSettingsDialog = !showPageSettingsDialog">
          <v-icon>mdi-cog</v-icon>
          <v-tooltip activator="parent" location="bottom">
            Page Settings
          </v-tooltip>
        </v-btn>
      </v-col>

      <!-- Pagination component -->
      <v-col cols="5">
        <v-pagination
          :length="projectV2.pages.length"
          :model-value="projectV2.state.currentPage"
          @update:model-value="(page) => updateCurrentPage(page)"
        >
        </v-pagination>
      </v-col>

      <v-col
        v-if="creatorMode === 'create'"
        cols="1"
        align-self="center"
      >
        <v-btn icon @click="createPage">
          <v-icon>mdi-plus</v-icon>
          <v-tooltip activator="parent" location="bottom">
            Create New Page
          </v-tooltip>
        </v-btn>
      </v-col>

      <v-spacer/>
    </v-row>

    <!-- Pages' contents -->
    <v-row v-for="(page, index) in projectV2.pages" :key="index">
      <v-col v-if="index == projectV2.state.currentPage - 1">
        <Page :page-data="page"/>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="showPageSettingsDialog" width="auto">
    <v-card max-width="450">
      <v-card-item>
        <v-card-title>
          Page Settings for: {{ getCurrentPage.pageName }}
        </v-card-title>
      </v-card-item>

      <v-card-text>
        <v-text-field
          label="Page Name"
          :model-value="getCurrentPage.pageName"
          @update:model-value="(name) => getCurrentPage.pageName = name"
        />

        <v-text-field
          label="Page ID"
          :model-value="getCurrentPage.id"
          @update:model-value="(id) => getCurrentPage.id = id"
        />
      </v-card-text>

      <v-card-actions class="justify-center mx-3 mb-3">
        <v-btn
          block
          variant="outlined"
          @click="showPageSettingsDialog = !showPageSettingsDialog"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { useAppStore } from "@/store/app";
  import { storeToRefs } from "pinia";
  import { onMounted } from "vue";
  import Page from "@/components/common/Page.vue";
  import { computed } from "vue";
  import { createPage } from "@/functions";

  const appStore = useAppStore();
  const {
    projectV2,
    creatorMode,
    showPageSettingsDialog
  } = storeToRefs(appStore);

  function updateCurrentPage(pageNumber: number) {
    projectV2.value.state.currentPage = pageNumber;
  }

  const getCurrentPage = computed(() => {
    let currentPageIndex = projectV2.value.state.currentPage - 1;
    return projectV2.value.pages[currentPageIndex];
  });

  onMounted(() => {
    // Maybe turn this on automatically if the length of pages is more than 1?
    projectV2.value.settings.pagesOn = true;
  });
</script>
