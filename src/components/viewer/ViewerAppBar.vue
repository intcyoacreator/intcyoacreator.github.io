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
            <v-btn
              prepend-icon="mdi-content-save-outline"
              variant="tonal"
              @click="dialog.showSaveLoad = !dialog.showSaveLoad"
            >
              Save/Load
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { useAppStore } from "@/store/app";
  import { storeToRefs } from "pinia";

  const appStore = useAppStore();
  const { dialog } = storeToRefs(appStore);

  // const emit = defineEmits(["resetCurrentComponent"]);
  defineEmits(["resetCurrentComponent"]);
</script>
