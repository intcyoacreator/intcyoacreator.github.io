<template>
  <v-navigation-drawer expand-on-hover :permanent="true">
    <v-list nav>
      <v-list-item
        title="Return to Menu"
        prepend-icon="mdi-arrow-left"
        @click="$emit('resetCurrentComponent')"
      />

      <v-divider/>

      <v-list-item
        title="Create New Page"
        prepend-icon="mdi-plus"
        @click="createPage"
      />

      <v-list-item
        title="Create New Section"
        prepend-icon="mdi-plus"
        @click="createSection"
      />

      <v-divider/>

      <v-list-item
        v-for="(item, index) in navigationItems" :key="index"
        :title="item.name"
        :prepend-icon="item.icon"
        @click="currentPage = item"
      >
      </v-list-item>

      <v-list-item
        title="Save/Load Project"
        prepend-icon="mdi-content-save-outline"
        @click="showSaveLoadDialog = !showSaveLoadDialog"
      />
      <!-- above
        @click="currentPage = item" -->
    </v-list>
  </v-navigation-drawer>

  <!-- <points-bar></points-bar> -->

  <component :is="currentPage" keep-alive/>

  <PointsBar/>
  <SaveLoad/>

  <v-main>
    <Viewer align="start"/>

    <v-spacer/>

    <!-- Button to add more stuff -->
    <!-- <div>
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div> -->

  </v-main>
</template>

<script lang="ts" setup>
  import Viewer from "@/components/Viewer.vue";
  import SaveLoad from "@/components/common/SaveLoad.vue";
  import PointsBar from "@/components/common/PointsBar.vue";

  import { useAppStore } from "@/store/app";
  import { storeToRefs } from "pinia";

  import { NavigationItems } from "@/types";
  import { defaultSection, defaultPage } from "@/constants";
  import { generateId } from "@/functions";

  import type { Component } from "vue";

  const appStore = useAppStore();
  const { projectV2, showSaveLoadDialog } = storeToRefs(appStore);

  let currentPage: Component | null = null;

  function createPage() {
    // let pageNumber;
    let newPage = { ...defaultPage };
  }

  function createSection() {
    // For readability
    let currentPage = projectV2.value.state.currentPage - 1;
    let defaults = projectV2.value.settings.defaults;

    let newSection = { ...defaultSection };
    newSection.title = defaults.sectionTitle;
    newSection.text = defaults.sectionText;
    newSection.id = generateId(projectV2.value);

    projectV2.value.pages[currentPage].sections.push(newSection);
  }

  const navigationItems: NavigationItems = [
    // {
    //   name: "Information",
    //   icon: "mdi-information-outline",
    //   component: Information
    // },
    // {
    //   name: "Changelog",
    //   icon: "mdi-format-list-bulleted",
    //   component: Changelog
    // },

    // {
    //   name: "Save/Load Project",
    //   icon: "mdi-content-save-outline",
    //   component: SaveLoad,
    // }
  ];

  defineEmits(["resetCurrentComponent"]);
</script>
