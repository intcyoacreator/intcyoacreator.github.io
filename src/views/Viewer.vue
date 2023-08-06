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
            <v-select
              label="Project Version"
              variant="solo-filled"
              density="compact"
              :items="projectVersions.map((p) => p.description)"
            >
            </v-select>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app-bar>

  <Viewer></Viewer>
</template>

<script setup lang="ts">
  import Viewer from '@/components/Viewer.vue';
  import { useAppStore } from '@/store/app';
  import { storeToRefs } from 'pinia';
  import { ProjectVersion } from "@/types";

  const appStore = useAppStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { current_project_version } = storeToRefs(appStore);

  const projectVersions = [
    {
      version: ProjectVersion.V1,
      description: "Project v1 – Used by the original Creator"
    },
    // {
    //   version: ProjectVersion.V1_1,
    //   description: "Project v1.1 – Backwards-compatible enhanced projects"
    // },
    // {
    //   version: ProjectVersion.V2,
    //   description: "Project v2 – File type only compatible with this creator"
    // },
  ]

  defineEmits(["resetCurrentComponent"]);
</script>
