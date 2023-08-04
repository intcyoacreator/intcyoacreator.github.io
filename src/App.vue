<template>
  <v-app>
    <v-row
      v-if="currentComponent == 0"
      style="text-align: center;"
    >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="900px"
      style="text-align: center;"
    >
      <v-card>
        <v-card-item>
          <v-card-title>Interactive CYOA Creator 2</v-card-title>
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
                cols="auto"
                v-for="button in menuButtons"
                :key="button.id"
              >
                <v-btn
                  small
                  @click="currentComponent = button.id"
                  style=""
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
      <component :is="components[currentComponent]"/>
    </keep-alive>
  </v-app>
</template>

<script setup lang="ts">
  import { onActivated, ref } from "vue";
  import About from "./views/About.vue";

  const components = [
    "Home", // Placeholder value
    About,
  ];

  // Default value is Home
  const currentComponent = ref(0);
  const dialog = ref(true); // open dialog by default or not
  const menuButtons = {
    about: {
      id: 1,
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
