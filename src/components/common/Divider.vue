<template>
  <v-divider></v-divider>
</template>

<script setup lang="ts">
  import { Divider } from '@/types';

  defineProps<{
    dividerData: Divider
  }>();
</script>
