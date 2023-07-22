<template>
  <v-app>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
