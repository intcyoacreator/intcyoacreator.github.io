<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="950px"
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
            <v-col
              cols="auto"
              v-for="button in homeButtons"
              :key="button.id"
            >
              <v-btn
                block
              >
                {{ button.text }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import About from './About.vue';

  const dialog = ref(true); // open dialog by default or not
  const homeButtons = {
    about: {
      id: 0,
      text: "About this Creator",
      component: About
    },
  }

</script>
