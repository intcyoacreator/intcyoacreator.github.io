<template>
  <!-- <v-container>
    <v-row>
      <v-col>
        <ViewerAppBar
          @reset-current-component="$emit('resetCurrentComponent')"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <SaveLoad/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Viewer></Viewer>
      </v-col>
    </v-row>
  </v-container>

  <PointsBar></PointsBar> -->


  <ViewerAppBar
    @reset-current-component="$emit('resetCurrentComponent')"
  />

  <SaveLoad/>

  <PointsBar></PointsBar>

  <v-main>
    <Viewer></Viewer>
  </v-main>

</template>

<script setup lang="ts">
  import ViewerAppBar from "@/components/viewer/ViewerAppBar.vue";
  import Viewer from "@/components/Viewer.vue";
  import SaveLoad from "@/components/common/SaveLoad.vue";
  import PointsBar from "@/components/common/PointsBar.vue";

  defineEmits(["resetCurrentComponent"]);
</script>
