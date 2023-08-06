<template>
  <v-app-bar
    title="Viewer"
    rounded
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        icon="mdi-arrow-left"
        @click="$emit('resetCurrentComponent')"
      />
    </template>

    <template v-slot:append>
      <v-container>
        <v-row>
          <v-col>
            <v-btn
              prepend-icon="mdi-download"
              variant="tonal"
            >
              Download as Image
            </v-btn>
          </v-col>

          <v-col>
            <!-- <v-select
              label="Project Version"
              variant="solo-filled"
              density="compact"
              :items="projectVersions.map((p) => p.description)"
            >
            </v-select> -->

            <v-btn
              prepend-icon="mdi-content-save-outline"
              variant="tonal"
              @click="showSaveLoadDialog = !showSaveLoadDialog"
            >
              Save/Load
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app-bar>

  <!-- Save/Load Dialog -->
  <SaveLoad/>

  <Viewer></Viewer>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store/app';
  import { storeToRefs } from 'pinia';
  import { ProjectVersion } from "@/types";

  import Viewer from '@/components/Viewer.vue';
  import SaveLoad from '@/components/common/SaveLoad.vue';

  const appStore = useAppStore();
  const { showSaveLoadDialog } = storeToRefs(appStore);

  defineEmits(["resetCurrentComponent"]);
</script>
