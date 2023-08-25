<template>
  <!-- Viewing the choices

    v-if="sectionData.editModeEnabled === false"
  -->
  <v-item-group
    :multiple="isMultipleChoice"
    class="ma-4"
  >
    <div>
      <v-row>
        <v-col
          v-for="(item, index) in sectionData.choices"
          :key="index"
          cols="12"
          md="4"
        >
          <v-item v-slot="{ isSelected, toggle }">
            <v-card
              :color="isSelected ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
              <v-card-title>
                {{ item.title }}
              </v-card-title>
              <v-scroll-y-transition>
                <div
                  class="text-h3 flex-grow-1 text-center"
                >
                  {{ isSelected ? "Selected" : "Click me!" }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </div>
  </v-item-group>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { Section } from "@/types";
import { getSettingsOfObject } from "@/functions";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { projectV2 } = storeToRefs(appStore);

const props = defineProps<{
  sectionData: Section,
}>();

const sectionSettings = computed(() => {
  return getSettingsOfObject(projectV2.value, props.sectionData.id);
});

// This will change according to the choices
const isMultipleChoice = computed(() => {
  return sectionSettings.value.sectionSettings?.isMultipleChoice;
});

</script>
