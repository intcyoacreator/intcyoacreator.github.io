<template>
  <!-- The settings toolbar at the top -->
  <v-toolbar v-if="creatorMode === 'create'" :elevation="2">
    <!-- That little icon that shows before the title -->
    <template v-slot:prepend>
      <v-icon>mdi-table</v-icon>
    </template>

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

    <v-btn icon @click="$emit('deleteSection')">
      <v-icon>mdi-delete</v-icon>
      <v-tooltip activator="parent" location="top">Delete Section</v-tooltip>
    </v-btn>

    <v-btn icon @click="$emit('duplicateSection')">
      <v-icon>mdi-content-copy</v-icon>
      <v-tooltip activator="parent" location="top">
        Duplicate Section
      </v-tooltip>
    </v-btn>

    <v-divider vertical class="mx-2"></v-divider>

    <v-btn icon @click="$emit('moveSectionUp')">
      <v-icon>mdi-arrow-up</v-icon>
      <v-tooltip activator="parent" location="top">
        Move Section Up
      </v-tooltip>
    </v-btn>

    <v-btn icon @click="$emit('moveSectionDown')">
      <v-icon>mdi-arrow-down</v-icon>
      <v-tooltip activator="parent" location="top">
        Move Section Down
      </v-tooltip>
    </v-btn>
  </v-toolbar>

  <!-- If the "Edit Section" has been pressed; Edit mode -->
  <div
    v-if="sectionData.editModeEnabled"
    class="d-flex flex-grow-1 flex-column"
  >
    <v-card class="my-4 mx-2 flex-grow-1 d-block">
      <v-toolbar border density="compact">
        <v-spacer></v-spacer>

        <!-- Icons for Section functionality -->
      </v-toolbar>

      <v-container>
        <v-row>
          <!-- Section Title -->
          <v-col cols="3">
            <v-text-field
              label="Section Title"
              auto-grow
              variant="outlined"
              rows="1"
              clearable
              :model-value="sectionData.title"
              @update:model-value="(title) =>
                changeSectionTitle(sectionData, title)"
            ></v-text-field>

            <!-- Section ID -->
            <v-text-field
              label="Section ID"
              auto-grow
              variant="outlined"
              rows="1"
              :model-value="sectionData.id"
              @update:model-value="(id) =>
                changeSectionId(sectionData, id)"
            />
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

          <!-- Markdown preview -->
          <v-col>
            <h2 class="mb-2">Preview</h2>

            <v-card>
              <v-card-text>
                <div v-html="markdownPreview" class="md-preview"></div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-card
      v-for="(item, index) in sectionData.choices"
      :key="index"
      class="my-4 mx-2 flex-row"
    >
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-text>
        {{ item.text }}
      </v-card-text>
    </v-card>
  </div>

  <!-- Preview mode -->
  <v-container v-else class="mb-5">
    <v-row>
      <v-col>
        <h2
          v-if="sectionData.title != ''"
          class="text-h2 mb-5"
        >
          {{ sectionData.title }}
        </h2>

        <div
          v-if="sectionData.text != ''"
          v-html="markdownPreview"
          class="md-preview"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import type { Section } from "@/types";
import { storeToRefs } from "pinia";
import { parse as mdParse } from "marked";
import { computed } from "vue";

const appStore = useAppStore();
const { creatorMode } = storeToRefs(appStore);

const props = defineProps<{
  sectionData: Section,
}>();

const markdownPreview = computed(() => mdParse(props.sectionData.text));

/**
 * These functions *have* to be here, since apparently directly mutating
 * props is considered an anti-pattern.
 *
 * This is, in essence, a hacky workaround. I should be doing this via an
 * emit.
 */
function changeSectionTitle(section: Section, newTitle: string) {
  section.title = newTitle;
}

function changeSectionText(section: Section, newText: string) {
  section.text = newText;
}

function changeSectionId(section: Section, newId: string) {
  section.id = newId;
}

defineEmits([
  "toggleEditMode",
  "deleteSection",
  "duplicateSection",
  "moveSectionUp",
  "moveSectionDown",
]);
</script>

<style scoped lang="css">
div.md-preview > p {
  margin-bottom: 32px !important;
  color: aqua !important;
}
</style>
