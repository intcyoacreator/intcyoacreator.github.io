<template>
  <v-app>
    <v-row
      v-if="currentComponent == 0"
    >
    <v-dialog
      v-model="dialog"
      persistent
      width="auto"
      style="text-align: center;"
    >
      <v-card>
        <v-card-item>
          <v-card-title
            class="text-h4 pa-5"
          >Interactive CYOA Creator 2</v-card-title>
          <v-card-subtitle>
            A spiritual successor to MeanDelay's Creator.
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-container>
            <v-row
              justify="center"
            >
              <!-- Buttons for the menu -->
              <v-col
                cols="12"
                v-for="button in menuButtons"
                :key="button.id"
              >
                <v-btn
                  variant="outlined"
                  block
                  @click="currentComponent = button.id"
                >
                  {{ button.text }}
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    </v-row>

    <keep-alive>
      <component
        :is="components[currentComponent]"
        @resetCurrentComponent="currentComponent = 0"
      />
    </keep-alive>
  </v-app>
</template>

<script setup lang="ts">
  import { onActivated, ref } from "vue";
  import Creator from "./views/Creator.vue";
  import Viewer from "./views/Viewer.vue";
  import About from "./views/About.vue";

  const components = [
    "Home", // Placeholder value
    Creator,
    Viewer,
    About,
  ];

  // Default value is Home
  const currentComponent = ref(0);
  const dialog = ref(true); // open dialog by default or not
  const menuButtons = {
    creator: {
      id: 1,
      text: "Open CYOA Creator",
    },
    viewer: {
      id: 2,
      text: "Open CYOA Viewer",
    },
    about: {
      id: 3,
      text: "About this Creator",
    },
  }

  // When the app is launched
  onActivated(() => {
    // called on initial mount
    // and every time it is re-inserted from the cache
    // currentComponent.value = 0; // Default view is Home
  });
</script>
<!--
<style lang="scss">
  @forward "vuetify/settings" with (
    $card-title-font-size: 32px
  );
</style> -->
