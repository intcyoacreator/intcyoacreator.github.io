<template>
  <v-container>
    <v-col v-for="(item, index) in pageData.pageItems" :key="index">
      <!-- Section -->
      <v-row v-if="item.type == 'section'">
        <Section
          :section-data="item"
          @toggle-edit-mode="togglePageItemEditMode(item)"
          @delete-section="deletePageItem(item)"
          @duplicate-section="duplicatePageItem(item)"
          @move-section-up="movePageItem(pageData, item.id, -1)"
          @move-section-down="movePageItem(pageData, item.id, 1)"
        />
      </v-row>

      <!-- Divider -->
      <v-row v-if="item.type == 'divider'">
        <Divider
          :divider-data="item"
          @edit-divider="togglePageItemEditMode(item)"
          @delete-divider="deletePageItem(item)"
          @duplicate-divider="duplicatePageItem(item)"
          @move-divider-up="movePageItem(pageData, item.id, -1)"
          @move-divider-down="movePageItem(pageData, item.id, 1)"
        />
      </v-row>
    </v-col>
  </v-container>

  <!-- <PointsBar/> -->
</template>

<script setup lang="ts">
import { Page } from "@/types";

import Section from "./Section.vue";
import Divider from "./Divider.vue";
import {
  togglePageItemEditMode,
  deletePageItem,
  duplicatePageItem,
  movePageItem,
} from "@/functions";

defineProps<{
  pageData: Page,
}>();
</script>
