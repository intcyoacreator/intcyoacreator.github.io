<template>
  <!-- Viewing the choices

    v-if="sectionData.editModeEnabled === false"
  -->
  <v-item-group
    :multiple="isMultipleChoice"
  >
    <div class="ma-10">
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
              class="d-flex flex-column align-center"
              dark
              min-height="200"
              @click="toggle"
            >
              <v-card-title>
                {{ item.title }}
              </v-card-title>

              <v-card-text>
                <v-scroll-y-transition>
                  <div>
                    {{ item.text }}
                  </div>
                </v-scroll-y-transition>
              </v-card-text>
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

const isMultipleChoice = computed(() => {
  let allowedChoices = sectionSettings.value.sectionSettings?.allowedChoices;
  allowedChoices = allowedChoices ?? 0;
  return allowedChoices === 0 ? true : false;
});
</script>
