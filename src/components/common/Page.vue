<template>
  <!-- <p>Page name: {{ pageData.pageName }}</p>

  <p>Page ID: {{ pageData.id }}</p>

  <p>Sections: {{ pageData.sections }}</p> -->
  <v-container>
    <v-col v-for="(section, index) in pageData.sections" :key="index">
      <v-row>
        <Section :section-data="section"/>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
  import { Page } from "@/types";
  import Section from "./Section.vue";

  defineProps<{
    pageData: Page,
  }>();
</script>
