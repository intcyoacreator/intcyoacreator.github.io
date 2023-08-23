<template>
  <v-navigation-drawer expand-on-hover :permanent="true">
    <v-list nav>
      <v-list-item
        title="Return to Menu"
        prepend-icon="mdi-arrow-left"
        @click="$emit('resetCurrentComponent')"
      />

      <v-divider />

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

      <v-divider />

      <v-list-item
        v-for="(item, index) in navigationItems"
        :key="index"
        :title="item.name"
        :prepend-icon="item.icon"
      />
      <!--
        Above ^^^
        @click="currentComponent = item"
       -->

      <v-list-item
        title="Save/Load Project"
        prepend-icon="mdi-content-save-outline"
        @click="showSaveLoadDialog = !showSaveLoadDialog"
      />
    </v-list>
  </v-navigation-drawer>

  <!-- <points-bar></points-bar> -->

  <!-- <component :is="currentPage" keep-alive /> -->

  <PointsBar />
  <SaveLoad />

  <v-main>
    <!-- <Viewer align="start"/> -->
    <Viewer align="start"/>

    <v-spacer />

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
import { createSection, createPage } from "@/functions";

const appStore = useAppStore();
const { showSaveLoadDialog } = storeToRefs(appStore);

// import type { Component } from "vue";
// let currentComponent: Component | null = null;



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
