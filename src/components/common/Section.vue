<template>
  <!-- Edit mode -->
  <v-container v-if="sectionData.editModeEnabled">

  </v-container>

  <!-- Preview mode -->
  <v-container v-else>
    <v-row>
      <v-col>
        <h1>{{ sectionData.title }}</h1>
        <p>{{ sectionData.text }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { Section } from '@/types';

  defineProps<{
    sectionData: Section
  }>();
</script>

<style scoped>

</style>
