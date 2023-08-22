<template>
  <v-layout>
    <v-navigation-drawer expand-on-hover>
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
  </v-layout>
</template>

<script lang="ts" setup>
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
