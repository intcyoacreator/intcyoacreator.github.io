<template>
  <v-sheet
    elevation="0"
    rounded
    border
    class="pa-10"
  >
    <h1 class="text-h3">Changelog</h1>
    <div v-for="(version_note, index) in changelog" :key="index">
      <h2 class="text-h4">v{{ version_note.version }}</h2>
      <ul>
        <li
          v-for="(patch_note, index) in version_note.patch_notes"
          :key="index"
        >
          {{ patch_note }}
        </li>
      </ul>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
  import { onMounted, shallowRef } from "vue";
  import JSON5 from "json5";

  const changelog = shallowRef();
  defineEmits(["resetCurrentComponent"]);

  onMounted(async () => {
    let changelog_file;

    try {
      changelog_file = await fetch("./changelog.json5").toString();

      try {
        changelog.value = await JSON5.parse(changelog_file);
      } catch(e) {
        console.log(`JSON5 parser error: "${e}"`);
      }
    } catch(e) {
      console.log(`File fetch error: "${e}"`);
    }

  });
</script>
