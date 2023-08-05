<template>
  <v-app-bar order="0">
    <v-app-bar-nav-icon
      icon="mdi-arrow-left"
      @click="$emit('resetCurrentComponent')"
    />

    <v-app-bar-title text="About"/>
  </v-app-bar>

  <v-navigation-drawer>
    <div v-for="(item, index) in navigationItems" :key="index">
      <v-list-item
        :title="item.name"
        @click="currentPage.value = item.component"
      />
    </div>
  </v-navigation-drawer>

  <v-main>
    <v-container class="fill-height">
      <v-row align="center">
        <v-col cols="12">
          <component
            :is="currentPage"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Changelog from './Changelog.vue';
  import type { Component } from 'vue';

  const currentPage = ref(Changelog);

  type NavigationItem = {
    name: string;
    component: Component;
  }

  const navigationItems: [NavigationItem] = [
    { name: "Changelog", component: Changelog },
  ];
</script>
