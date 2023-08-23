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
        v-for="(item, index) in navigationItems" :key="index"
        :title="item.name"
        :prepend-icon="item.icon"
      />
      <!-- above
        @click="currentPage = item" -->
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <viewer align="start"></viewer>

    <v-divider></v-divider>

    <!-- Button to add more stuff -->
    <v-div>
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-div>

    <points-bar align="stretch"></points-bar>
  </v-main>
</template>

<script lang="ts" setup>
  import Viewer from '@/components/Viewer.vue';
  import PointsBar from '@/components/common/PointsBar.vue';
  import { NavigationItems } from '@/types';

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
  ];

  defineEmits(["resetCurrentComponent"]);
</script>
