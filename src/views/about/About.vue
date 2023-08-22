<template>
  <v-navigation-drawer
    :permanent="true"
  >
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

<script setup lang="ts">
  import { computed, shallowRef } from "vue";

  import { NavigationItems } from "@/types";
  import Changelog from "./Changelog.vue";
  import Information from "./Information.vue";

  const navigationItems: NavigationItems = [
    {
      name: "Information",
      icon: "mdi-information-outline",
      component: Information
    },
    {
      name: "Changelog",
      icon: "mdi-format-list-bulleted",
      component: Changelog
    },
  ];
  const currentPage = shallowRef(navigationItems[0]);
  const aboutTitle = computed(() => {
    return ["About", currentPage.value.name];
  });

  defineEmits(["resetCurrentComponent"]);
</script>
