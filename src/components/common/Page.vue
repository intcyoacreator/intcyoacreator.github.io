<template>
  <v-container>
    <v-col v-for="(item, index) in pageData.sections" :key="index">
      <!-- Section -->
      <v-row v-if="item.type == 'section'">
        <Section
          :section-data="item"
          @toggle-edit-mode="toggleSectionEditMode(item)"
          @delete-row="deletePageItem(item)"
        />
      </v-row>

      <!-- Divider -->
      <v-row v-if="item.type == 'divider'">
        <Divider
          :divider-data="item"
          @delete-divider="deletePageItem(item)"
        />
      </v-row>
    </v-col>
  </v-container>

  <!-- <PointsBar/> -->
</template>

<script setup lang="ts">
import {
  Page,
  Section as SectionType
} from "@/types";
import Section from "./Section.vue";
import Divider from "./Divider.vue";
import { deletePageItem } from "@/functions";

function toggleSectionEditMode(section: SectionType) {
  section.editModeEnabled === undefined
    ? section.editModeEnabled = false
    : section.editModeEnabled = !section.editModeEnabled;
}

// function deleteDivider(item: DividerType) {

// }

defineProps<{
  pageData: Page,
}>();
</script>
