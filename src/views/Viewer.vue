<template>
  <v-app-bar
    title="Viewer"
    rounded
  >
    <template v-slot:prepend="">
      <v-app-bar-nav-icon
        icon="mdi-arrow-left"
        @click="$emit('resetCurrentComponent')"
      />
    </template>
  </v-app-bar>

  <Viewer></Viewer>
</template>

<script setup lang="ts">
  import Viewer from '@/components/Viewer.vue';

  const emits = defineEmits(["resetCurrentComponent"]);
</script>
