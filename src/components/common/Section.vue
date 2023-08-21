<template>
  <!-- Edit mode -->
  <v-container v-if="typeof sectionData == Section">
    <div v-if="sectionData.editModeEnabled">

    </div>
  </v-container>

  <!-- Preview mode -->
  <v-container v-else>
    <v-row>
      <v-col>
        <h2 class="text-h2">{{ sectionData.title }}</h2>
        <p class="text-body-1">{{ sectionData.text }}</p>
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
