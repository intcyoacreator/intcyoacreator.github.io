<template>
  <ViewerAppBar/>

  <!-- Save/Load Dialog -->
  <SaveLoad/>

  <Viewer></Viewer>
</template>

<script setup lang="ts">
  import ViewerAppBar from "@/components/viewer/ViewerAppBar.vue";
  import Viewer from '@/components/Viewer.vue';
  import SaveLoad from '@/components/common/SaveLoad.vue';

  defineEmits(["resetCurrentComponent"]);
</script>
