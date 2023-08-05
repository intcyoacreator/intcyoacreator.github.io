<template>
  <v-navigation-drawer
    :permanent="true"
  >
    <v-list>
      <v-list-item
        title="Return to Menu"
        prepend-icon="mdi-arrow-left"
        @click="$emit('resetCurrentComponent')"
      />

      <v-list-item
        v-for="(item, index) in navigationItems" :key="index"
        :title="item.name"
        :prepend-icon="item.icon"
        @click="currentPage = item"
      />
    </v-list>
  </v-navigation-drawer>

  <v-app-bar>
    <v-app-bar-title>
      <v-breadcrumbs :items="aboutTitle"/>
    </v-app-bar-title>
  </v-app-bar>

  <v-main>
    <v-container class="fill-height">
      <v-row>
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
  import { ref, computed } from "vue";
  import type { Component } from "vue";

  import Changelog from "./Changelog.vue";
  import DevInfo from "./DevInfo.vue";

  type NavigationItem = {
    name: string;
    icon: string,
    component: Component;
  }

  const navigationItems: Array<NavigationItem> = [
    {
      name: "Changelog",
      icon: "mdi-format-list-bulleted",
      component: Changelog
    },
    {
      name: "Development Info",
      icon: "mdi-code-json",
      component: DevInfo
    }

  ];
  const currentPage = ref(navigationItems[0]);
  const aboutTitle = computed(() => {
    return ["About", currentPage.value.name];
  });

  defineEmits(["resetCurrentComponent"]);
</script>
