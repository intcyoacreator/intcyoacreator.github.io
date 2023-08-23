<template>
  <!-- <p>Page name: {{ pageData.pageName }}</p>

  <p>Page ID: {{ pageData.id }}</p>

  <p>Sections: {{ pageData.sections }}</p> -->
  <v-container>
    <v-col v-for="(item, index) in pageData.sections" :key="index">
      <!-- Section -->
      <v-row v-if="item.type == 'section'">
        <Section
          :section-data="item"
          @toggle-edit-mode="toggleSectionEditMode(item)"
        />
      </v-row>

      <!-- Divider -->
      <v-row v-if="item.type == 'divider'">
        <Divider :divider-data="item"/>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
  import { Page, Section as SectionType } from "@/types";
  import Section from "./Section.vue";
  import Divider from "./Divider.vue";

  function toggleSectionEditMode(section: SectionType) {
    if (section.editModeEnabled === undefined) {
      section.editModeEnabled = false;
    } else {
      section.editModeEnabled = !section.editModeEnabled;
    }
  }

  defineProps<{
    pageData: Page,
  }>();
</script>
