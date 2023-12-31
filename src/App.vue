<template>
  <v-app>
    <v-row v-if="currentComponent == 0">
      <v-dialog
        v-model="showDialog"
        persistent
        width="auto"
        style="text-align: center;"
      >
        <v-card>
          <v-card-item>
            <v-card-title class="text-h4 pa-5">
              Interactive CYOA Creator 2
            </v-card-title>

            <v-card-subtitle>
              <div class="mb-2">
                A spiritual successor to MeanDelay's Creator.
              </div>

              <div>
                Version: {{ appVersion }}
              </div>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-container>
              <v-row justify="center">
                <!-- Buttons for the menu -->
                <v-col
                  cols="12"
                  v-for="button in menuButtons"
                  :key="button.id"
                >
                  <v-btn
                    variant="outlined"
                    block
                    @click="switchToComponent(button.id)"
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
  import { ref } from "vue";
  import { onMounted } from "vue";
  import { useAppStore } from "./store/app";
  import { storeToRefs } from "pinia";

  import Creator from "./views/Creator.vue";
  import Viewer from "./views/Viewer.vue";
  import About from "./views/about/About.vue";

  import { CreatorMode } from "./types";

  const appStore = useAppStore();
  const { appVersion, creatorMode } = storeToRefs(appStore);

  const components = [
    "Home", // Placeholder value
    Creator,
    Viewer,
    About,
  ];

  // Default value is Home
  const currentComponent = ref(0);
  const showDialog = ref(true);

  const menuButtons: Array<{
    id: number,
    text: string,
    creatorMode: CreatorMode,
  }> = [
    {
      id: 1,
      text: "Open CYOA Creator",
      creatorMode: "create",
    },
    {
      id: 2,
      text: "Open CYOA Viewer",
      creatorMode: "preview",
    },
    {
      id: 3,
      text: "About this Creator",
      creatorMode: "none",
    },
  ];

  function switchToComponent(buttonId: number) {
    creatorMode.value = menuButtons[buttonId - 1].creatorMode;
    currentComponent.value = buttonId;
  }

  onMounted(() => {
    const script = document.createElement("script");
    script.setAttribute(
      "data-goatcounter",
      "https://icc2.goatcounter.com/count"
    );
    script.setAttribute("async", "true");
    script.src = "//gc.zgo.at/count.js";
    document.head.appendChild(script);
  });
</script>
