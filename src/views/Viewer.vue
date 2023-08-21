<template>
  <v-container>
    <v-row>
      <v-col>
        <ViewerAppBar
          @reset-current-component="$emit('resetCurrentComponent')"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <!-- Save/Load Dialog -->
        <SaveLoad/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Viewer></Viewer>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup lang="ts">
  import ViewerAppBar from "@/components/viewer/ViewerAppBar.vue";
  import Viewer from '@/components/Viewer.vue';
  import SaveLoad from '@/components/common/SaveLoad.vue';

  defineEmits(["resetCurrentComponent"]);
</script>
