<template>
  <v-toolbar
    v-if="creatorMode === 'create'"
    border
    title="Divider"
  >
    <template v-slot:prepend>
      <v-icon>mdi-minus</v-icon>
    </template>

    <v-spacer/>

    <v-btn icon>
      <v-icon>mdi-delete</v-icon>
      <v-tooltip activator="parent" location="top">
        Delete Divider
      </v-tooltip>
    </v-btn>
  </v-toolbar>

  <div v-if="dividerData.editModeEnabled">

  </div>

  <v-divider></v-divider>
</template>

<script setup lang="ts">
  import { useAppStore } from "@/store/app";
  import { Divider } from "@/types";
  import { storeToRefs } from "pinia";

  const appStore = useAppStore();
  const { creatorMode } = storeToRefs(appStore);

  defineProps<{
    dividerData: Divider
  }>();
</script>
