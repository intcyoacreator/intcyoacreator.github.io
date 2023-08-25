<template>
  <div class="d-flex flex-column flex-grow-1 mb-5">
    <v-toolbar
      v-if="creatorMode === 'create'"
      elevation="2"
      title="Divider"
    >
      <template v-slot:prepend>
        <v-icon>mdi-minus</v-icon>
      </template>

      <v-spacer/>

      <v-btn icon @click="$emit('editDivider')">
        <div v-if="dividerData.editModeEnabled">
          <v-icon>mdi-arrow-left</v-icon>
          <v-tooltip activator="parent" location="top">
            Back to Preview
          </v-tooltip>
        </div>

        <div v-if="!dividerData.editModeEnabled">
          <v-icon>mdi-wrench</v-icon>
          <v-tooltip activator="parent" location="top">
            Edit Divider
          </v-tooltip>
        </div>
      </v-btn>

      <v-btn icon @click="$emit('deleteDivider')">
        <v-icon>mdi-delete</v-icon>
        <v-tooltip activator="parent" location="top">
          Delete Divider
        </v-tooltip>
      </v-btn>

      <v-btn icon @click="$emit('duplicateDivider')">
        <v-icon>mdi-content-copy</v-icon>
        <v-tooltip activator="parent" location="top">
          Duplicate Divider
        </v-tooltip>
      </v-btn>

      <v-divider vertical class="mx-2"></v-divider>

      <v-btn icon @click="$emit('moveDividerUp')">
        <v-icon>mdi-arrow-up</v-icon>
        <v-tooltip activator="parent" location="top">
          Move Divider Up
        </v-tooltip>
      </v-btn>

      <v-btn icon @click="$emit('moveDividerDown')">
        <v-icon>mdi-arrow-down</v-icon>
        <v-tooltip activator="parent" location="top">
          Move Divider Down
        </v-tooltip>
      </v-btn>
    </v-toolbar>

    <div
      v-if="dividerData.editModeEnabled && creatorMode === 'create'"
      class="flex-grow-1"
    >
      <v-card class="mt-4">
        <v-card-text>
          <v-text-field
            label="Divider ID"
            variant="outlined"
            class="mt-4"
            :model-value="dividerData.id"
            @update:model-value="(id) => changeDividerId(dividerData, id)"
          />
        </v-card-text>
      </v-card>
    </div>
  </div>

  <v-divider
  v-if="!dividerData.editModeEnabled
    || creatorMode === 'preview'
    || creatorMode === 'view'"
  />
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { Divider, Id } from "@/types";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { creatorMode } = storeToRefs(appStore);

function changeDividerId(divider: Divider, id: Id) {
  divider.id = id;
}

defineProps<{
  dividerData: Divider
}>();

defineEmits([
  "editDivider",
  "deleteDivider",
  "duplicateDivider",
  "moveDividerUp",
  "moveDividerDown",
]);
</script>
