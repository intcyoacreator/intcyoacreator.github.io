<template>
  <v-dialog
    v-model="dialog"
    persistent
    width="auto"
    style="text-align: center;"
  >
    <v-card
      title="Interactive CYOA Creator 2"
    >
      <v-card-text>
        a
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const dialog = ref(false);
</script>
