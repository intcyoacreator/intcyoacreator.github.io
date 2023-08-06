<template>
  <v-dialog
    v-model="showSaveLoadDialog"
    max-width="700px"
  >
    <v-card>
      <!-- <v-container>
        <v-row>
            <v-col>
              <v-card-title>Save/Load Project</v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card-subtitle>
                <p>Here you can save and load your project.</p>
              </v-card-subtitle>
            </v-col>
          </v-row>
      </v-container> -->

      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <h2 class="text-h5">Save/Load Project</h2>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <p>Here you can save and load your project.</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn block>
                Save Project
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn block>
                Load Project
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn block>
                Export Project as HTML
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-select
                label="Project Version"
                variant="solo-filled"
                :items="['Project v1', 'Project v1.1', 'Project v2']"
                :model-value="selectProjectVersion"
                @update:model-value="updateProjectVersion"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <p>There are three project formats to choose from:</p>

              <ul>
                <li>
                  <strong>Project v1</strong> – The original format used by the
                  first Interactive CYOA Creator. CYOAs built using this format
                  are fully backward compatible with the MeanDelay's Creator.
                </li>
                <li>
                  <strong>Project v1.1</strong> (WIP) – The original format +
                  new features introduced only in this Creator. Should be
                  backward compatible, but those new features won't show using
                  the old Creator.
                </li>
                <li>
                  <strong>Project v2</strong> (WIP) – An entirely new format
                  native to this Creator only.
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store/app';
  // import { ProjectVersion } from '@/types';
  import { storeToRefs } from 'pinia';
  // import { computed } from 'vue';

  const appStore = useAppStore();
  const { loadedProjectVersion, showSaveLoadDialog } = storeToRefs(appStore);
  let selectProjectVersion = "Project v1";

  function updateProjectVersion() {
    loadedProjectVersion.value = selectProjectVersion;
  }
</script>
