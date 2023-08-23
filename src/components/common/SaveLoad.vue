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
                hint="Select this info box to upload your project file"
                :persistent-hint="true"
                :model-value="projectFile"
                @update:model-value="(files: Array<File>) => parseFile(files)"
              />
              <!--
                :model-value="projectFile"
                @update:model-value="(files: Array<File>) => parseFile(files)"
                @update:modelValue="parseFile"
                validate-on="input lazy"-->
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn block @click="saveProject">
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

          <!-- <v-row>
            <v-col>
              <v-select
                label="Project Version"
                variant="solo-filled"
                :items="projectVersionOptions"
                :model-value="selectProjectVersion"
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
          </v-row> -->

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
  import { useAppStore } from "@/store/app";
  import { storeToRefs } from "pinia";
  import { Ref, ref } from "vue";
  import { saveAs } from "file-saver";

  const appStore = useAppStore();
  const {
    // loadedProjectVersion,
    showSaveLoadDialog,
    // projectV1,
    projectV2,
  } = storeToRefs(appStore);

  // const projectVersionOptions = ["Project v1", "Project v1.1", "Project v2"];
  // const selectProjectVersion = ref("Project v1");
  const projectFile: Ref<Array<File> | undefined> = ref();

  function saveProject() {
    let project = JSON.stringify(projectV2.value);
    let projectFile = new File(
      [project],
      "project.json",
      { type: "application/json;charset=utf-8" }
    );
    saveAs(projectFile);
  }

  function parseFile(files: Array<File>) {
    // console.log(`parseFile called!\nfile: ${files}`);

    if (files === undefined) {
      console.log("Error receiving file: undefined");
      return;
    } else if (files.length <= 0) {
      console.log("Error receiving file: files.length <= 0");
      return;
    }

    try {
      const reader = new FileReader();

      for (const file of files) {
        // console.log("Parsing file…");

        reader.readAsText(file);
        reader.onload = () => {
          switch (typeof reader.result) {
            case "string": {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let parsedProject = JSON.parse(reader.result);
              // console.log(`parsedProject:`);
              // console.log(parsedProject);

              // Uncomment the below when necessary
              // projectV1.value = parsedProject;
              projectV2.value = parsedProject;
              break;
            }
            default:
              console.log("File is of type null, ArrayBuffer, or other");
          }
        };
      }
    } catch(e) {
      console.log(`JSON Parse error: ${e}`);
    }
  }

  // function updateProjectVersion() {
  //   loadedProjectVersion.value = selectProjectVersion;
  // }
</script>
