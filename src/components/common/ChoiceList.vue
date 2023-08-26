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
                  <v-item-group class="d-flex flex-grow-1">
                    <v-spacer></v-spacer>

                    <v-item>
                      <v-btn
                        icon
                        @click="moveChoice(sectionData, item.id, -1)"
                      >
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
                      <v-btn icon @click="deleteChoice(sectionData, item)">
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
                        <v-icon>mdi-cog</v-icon>
                        <v-tooltip
                          activator="parent"
                          location="top"
                        >
                          Choice Settings
                        </v-tooltip>
                      </v-btn>
                    </v-item>

                    <v-spacer></v-spacer>

                    <v-item>
                      <v-btn icon @click="duplicateChoice(sectionData, item)">
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
                      <v-btn icon @click="moveChoice(sectionData, item.id, 1)">
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

                  <v-container class="pa-0">
                    <v-row dense>
                      <v-col>
                        <v-textarea
                          label="Choice Text"
                          variant="outlined"
                          rows="6"
                          :model-value="item.text"
                          @update:model-value="(text) =>
                            updateChoiceText(item, text)"
                        />
                      </v-col>
                    </v-row>

                    <v-row dense>
                      <v-col>
                        <v-text-field
                          label="Choice Title"
                          variant="outlined"
                          :model-value="item.title"
                          @update:model-value="(title) =>
                            updateChoiceTitle(item, title)"
                        />
                      </v-col>

                      <v-col>
                        <v-text-field
                          label="Choice ID"
                          variant="outlined"
                          :model-value="item.id"
                          @update:model-value="(id) =>
                            updateChoiceId(item, id)"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
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
import {
  getSettingsOfObject,
  deleteChoice,
  duplicateChoice,
  moveChoice
} from "@/functions";
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

function updateChoiceTitle(item: Choice, title: string) {
  item.title = title;
}

function updateChoiceId(item: Choice, id: string) {
  item.id = id;
}
</script>
