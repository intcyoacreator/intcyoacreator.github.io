<template>
  <v-item-group :multiple="isMultipleChoice">

  </v-item-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

// This will change according to the choices
const isMultipleChoice = ref(true);
</script>
