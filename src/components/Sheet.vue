<template>
  <v-container :fill-height="true">
    <v-row>
      <v-col align="center">
        <v-sheet
          elevation="0"
          rounded
          border
          class="pa-10"
          max-width="700px"
        >
          <h1 class="text-h3 pb-6">{{ props.title }}</h1>
          <div style="text-align: left; ">
            <slot></slot>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: String,
  });
</script>
