<template>
  <v-dialog
    v-model="showSaveLoadDialog"
    max-width="40%"
    overflow=""
  >
    <v-card>
      <v-card-title>Save/Load Project</v-card-title>

      <v-card-subtitle>
        <p>Here you can save and load your <tt>project.json</tt>.</p>
      </v-card-subtitle>

      <v-card-text>
        <p>There are three project formats to choose from:</p>
        <ul>
          <li>
            <strong>Project V1</strong> – The original format used by the first
            Interactive CYOA Creator. CYOAs built using this format are fully
            backward compatible with the MeanDelay's Creator.
          </li>
          <li>
            <strong>Project V1.1</strong> (WIP) – The original format + new
            features introduced only in this Creator. Should be backward
            compatible, but those new features won't show using the old
            Creator.
          </li>
          <li>
            <strong>Project V2</strong> (WIP) – An entirely new format native
            to this Creator only.
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store/app';
  import { storeToRefs } from 'pinia';

  const appStore = useAppStore();
  const { loadedProjectVersion, showSaveLoadDialog } = storeToRefs(appStore);
</script>
