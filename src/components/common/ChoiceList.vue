<template>
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
          <!-- Viewing the choices -->
          <v-item v-slot="{ isSelected, toggle }">
            <v-card
              v-if="sectionData.editModeEnabled === false"
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

            <!-- Editing the choices -->
            <div v-else>
              <v-card>
                <v-toolbar>
                  <v-item-group class="d-flex stretch justify-space-evenly">
                    <v-spacer></v-spacer>

                    <v-item>
                      <v-btn icon>
                        <v-icon>mdi-arrow-left</v-icon>
                        <v-tooltip
                          activator="parent"
                          location="top"
                        >
                          Move Choice Left
                        </v-tooltip>
                      </v-btn>
                    </v-item>

                    <v-spacer></v-spacer>

                    <v-item>
                      <v-btn icon>
                        <v-icon>mdi-delete</v-icon>
                        <v-tooltip
                          activator="parent"
                          location="top"
                        >
                          Delete Choice
                        </v-tooltip>
                      </v-btn>
                    </v-item>

                    <v-spacer></v-spacer>

                    <v-item>
                      <v-btn icon>
                        <v-icon>mdi-content-copy</v-icon>
                        <v-tooltip
                          activator="parent"
                          location="top"
                        >
                          Copy Choice
                        </v-tooltip>
                      </v-btn>
                    </v-item>

                    <v-spacer></v-spacer>

                    <v-item>
                      <v-btn icon>
                        <v-icon>mdi-arrow-right</v-icon>
                        <v-tooltip
                          activator="parent"
                          location="top"
                        >
                          Move Choice Right
                        </v-tooltip>
                      </v-btn>
                    </v-item>

                    <v-spacer></v-spacer>
                  </v-item-group>
                </v-toolbar>

                <v-card-text>
                  <p class="pt-2 pb-6">
                    (Change Image Placeholder)
                  </p>

                  <v-textarea
                    label="Choice Text"
                    variant="outlined"
                    rows="6"
                    :model-value="item.text"
                    @update:model-value="(text) => updateChoiceText(item, text)"
                  />
                </v-card-text>
              </v-card>
            </div>
          </v-item>
        </v-col>
      </v-row>
    </div>
  </v-item-group>

  <!-- Editing the choices -->

</template>

<script setup lang="ts">
import { computed } from "vue";

import { Choice, Section } from "@/types";
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

// Miscellaneous functions
function updateChoiceText(item: Choice, text: string) {
  item.text = text;
}
</script>
