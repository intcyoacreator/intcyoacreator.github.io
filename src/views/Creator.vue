<template>
  <v-navigation-drawer expand-on-hover :permanent="true">
    <v-list nav>
      <v-list-item
        title="Return to Menu"
        prepend-icon="mdi-arrow-left"
        @click="$emit('resetCurrentComponent')"
      />

      <v-divider/>

      <v-list-item title="Create New Page"/>
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
      >
      </v-list-item>
      <!-- above
        @click="currentPage = item" -->
    </v-list>
  </v-navigation-drawer>

  <!-- <points-bar></points-bar> -->

  <v-main>
    <Viewer align="start"></Viewer>

    <v-spacer></v-spacer>

    <!-- Button to add more stuff -->
    <div>
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

  </v-main>
</template>

<script lang="ts" setup>
  import Viewer from '@/components/Viewer.vue';
  import { useAppStore } from '@/store/app';
  import { NavigationItems } from '@/types';
  import { storeToRefs } from 'pinia';
  import { defaultSection } from "@/constants";
  import { generateId } from "@/functions";

  const appStore = useAppStore();
  const { projectV2 } = storeToRefs(appStore);

  function createPage() {

  }

  function createSection() {
    let currentPage = projectV2.value.state.currentPage - 1;
    let newSection = { ...defaultSection };
    // if defaultTitle != "" defaultSection.title = defaultTitle;
    // if defaultText != "" defaultSection.text = defaultText;
    newSection.id = generateId(projectV2.value);

    console.log(newSection);

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
  ];

  defineEmits(["resetCurrentComponent"]);
</script>
