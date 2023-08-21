<template>
  <!-- Edit mode -->
  <v-container v-if="sectionData.editModeEnabled">

  </v-container>

  <!-- Preview mode -->
  <v-container v-else>
    <v-row>
      <v-col>
        <h2
          v-if="sectionData.title != ''"
          class="text-h2"
        >
          {{ sectionData.title }}
        </h2>

        <p
          v-if="sectionData.text != ''"
          class="text-body-1"
        >
          {{ sectionData.text }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import type { Section } from '@/types';

  defineProps<{
    sectionData: Section
  }>();
</script>

<style scoped>

</style>
