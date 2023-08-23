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
    <v-card class="my-4 mx-2">
      <v-toolbar>
        <v-spacer></v-spacer>

        <!-- Icons for Section functionality -->
      </v-toolbar>

      <v-container>
        <v-row>
          <!-- Section Title -->
          <v-col>
            <v-textarea
              label="Section Title"
              auto-grow
              variant="outlined"
              rows="1"
              clearable
              :model-value="sectionData.title"
              @update:model-value="(text) =>
                changeSectionTitle(sectionData, text)"
            ></v-textarea>
          </v-col>

          <!-- Section Text -->
          <v-col>
            <v-textarea
              label="Section Text"
              auto-grow
              variant="outlined"
              rows="4"
              clearable
              :model-value="sectionData.text"
              @update:model-value="(text) =>
                changeSectionText(sectionData, text)"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
          <VueShowdown
            :markdown="sectionData.text"
          />
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

  function changeSectionTitle(section: Section, newTitle: string) {
    section.title = newTitle;
  }

  function changeSectionText(section: Section, newText: string) {
    section.text = newText;
  }

  defineProps<{
    sectionData: Section,
    // toggleSectionEditMode: Function,
  }>();

  defineEmits(["toggleEditMode"]);
</script>

<style scoped>

</style>