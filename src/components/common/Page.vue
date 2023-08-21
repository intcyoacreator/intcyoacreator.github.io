<template>
  <!-- <p>Page name: {{ pageData.pageName }}</p>

  <p>Page ID: {{ pageData.id }}</p>

  <p>Sections: {{ pageData.sections }}</p> -->
  <v-container>
    <v-col v-for="(item, index) in pageData.sections" :key="index">
      <v-row v-if="item.type == 'section'">
        <Section :section-data="item"/>
      </v-row>

      <v-row v-if="item.type == 'divider'">
        <Divider :divider-data="item"/>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
  import { Page } from "@/types";
  import Section from "./Section.vue";
  import Divider from "./Divider.vue";

  defineProps<{
    pageData: Page,
  }>();
</script>
