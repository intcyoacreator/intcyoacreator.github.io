<template>
  <p>Page name: {{ pageData.pageName }}</p>

  <p>Page ID: {{ pageData.id }}</p>

  <p>Sections: {{ pageData.sections }}</p>
</template>

<script setup lang="ts">
  import { Page } from "@/types";

  defineProps<{
    pageData: Page,
  }>();
</script>
