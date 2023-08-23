<template>
  <!-- The settings toolbar at the top -->
  <v-toolbar v-if="creatorMode === 'create'" border>
    <v-toolbar-title>{{ sectionData.title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      v-if="sectionData.editModeEnabled"
      icon
      @click="$emit('toggleEditMode')"
    >
      <v-icon>mdi-arrow-left</v-icon>
      <v-tooltip activator="parent" location="top">Preview Section</v-tooltip>
    </v-btn>

    <v-btn v-else icon @click="$emit('toggleEditMode')">
      <v-icon>mdi-wrench</v-icon>
      <v-tooltip activator="parent" location="top">Edit Section</v-tooltip>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-delete</v-icon>
      <v-tooltip activator="parent" location="top">Delete Section</v-tooltip>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-content-copy</v-icon>
      <v-tooltip activator="parent" location="top">
        Duplicate Section
      </v-tooltip>
    </v-btn>
  </v-toolbar>

  <!-- If the "Edit Section" has been pressed; Edit mode -->
  <div v-if="sectionData.editModeEnabled">
    Edit mode
  </div>

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
  import { useAppStore } from '@/store/app';
  import type { Section } from '@/types';
  import { storeToRefs } from 'pinia';

  const appStore = useAppStore();
  const { creatorMode } = storeToRefs(appStore);

  defineProps<{
    sectionData: Section,
    // toggleSectionEditMode: Function,
  }>();
  defineEmits(["toggleEditMode"]);
</script>

<style scoped>

</style>
