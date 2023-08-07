<template>
  <v-dialog
    v-model="showSaveLoadDialog"
    max-width="700px"
  >
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <h2 class="text-h5">Save/Load Project</h2>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <p class="text-subtitle-1">
                Here you can save and load your project.
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-file-input
                clearable
                persistent-clear
                label="Load Project"
                variant="outlined"
                accept=".json, .json5"
                show-size
                counter
                :model-value="projectFile"
                @change="parseFile"
                validate-on="input lazy"
              />
              <!--
                @update:modelValue="parseFile" -->
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

          <v-row>
            <v-col>
              <v-btn
                block
                variant="tonal"
                @click="showSaveLoadDialog = !showSaveLoadDialog"
              >
                Close
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store/app';
  import { storeToRefs } from 'pinia';
import { Ref, ref } from 'vue';

  const appStore = useAppStore();
  const {
    loadedProjectVersion,
    showSaveLoadDialog,
    projectV1
  } = storeToRefs(appStore);
  let selectProjectVersion = "Project v1";
  const projectFile: Ref<Array<File> | undefined> = ref();

  function parseFile() {
    if (projectFile.value === undefined) {
      console.log("Error receiving file: undefined");
      return;
    }

    try {
      projectV1.value = JSON.parse(projectFile.value[0].toString());
    } catch(e) {
      console.log(`JSON Parse error: ${e}`);
    }
  }

  function updateProjectVersion() {
    loadedProjectVersion.value = selectProjectVersion;
  }
</script>
