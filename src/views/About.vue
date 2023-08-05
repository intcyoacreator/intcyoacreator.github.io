<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item
        title="Return to menu"
        @click="$emit('resetCurrentComponent')"
        prepend-icon="mdi-arrow-left"
        border="dotted"
      />

      <v-list-item
        v-for="(item, index) in navigationItems" :key="index"
        :title="item.name"
        :prepend-icon="item.icon"
        :active=true
        @click="currentPage = item"
      />
    </v-list>
  </v-navigation-drawer>

  <v-app-bar>
    <v-app-bar-title text="About – {{ currentPage.name }}"/>
  </v-app-bar>

  <v-main>
    <v-container class="fill-height">
      <v-row align="center">
        <v-col cols="12">
          <component
            :is="currentPage.component"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import Changelog from "./Changelog.vue";
  import type { Component, Ref } from "vue";

  type NavigationItem = {
    name: string;
    icon: string,
    component: Component;
  }

  const navigationItems: [NavigationItem] = [
    {
      name: "Changelog",
      icon: "mdi-format-list-bulleted",
      component: Changelog
    },
  ];
  const currentPage: Ref<NavigationItem> = ref(navigationItems[0]);
</script>
