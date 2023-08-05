<template>
  <v-sheet
    elevation="0"
    rounded
    border
    class="pa-10"
  >
    <h1 class="text-h3">Changelog</h1>
    <div v-if="changelog.versions[0].version !== '0.1.0'">
      <div v-for="(version_note, index) in changelog.versions" :key="index">
        <h2 class="text-h5">v{{ version_note.version }}</h2>
        <ul>
          <li
            v-for="(patch_note, index) in version_note.patch_notes"
            :key="index"
          >
            {{ patch_note }}
          </li>
        </ul>
      </div>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
  import { Ref, onMounted, ref } from "vue";
  import JSON5 from "json5";

  type VersionNotes = {
    version: string,
    release_date: string,
    patch_notes: Array<string>,
  };

  type Changelog = {
    "versions": Array<VersionNotes>
  }

  const changelog: Ref<Changelog> = ref({
    "versions": [
      {
        version: "0.0.0",
        release_date: "",
        patch_notes: [""],
      }
    ]
  });
  defineEmits(["resetCurrentComponent"]);

  onMounted(() => {
    let changelog_file: string = "";

    try {
      fetch("./changelog.json5").then((result) => {
        changelog_file = result.toString();
      });

      console.log(changelog_file);

      try {
        JSON5.parse(changelog_file).then((result: Changelog) => {
          changelog.value = result;
        });
      } catch(e) {
        console.log(`JSON5 parser error: "${e}"`);
      }
    } catch(e) {
      console.log(`File fetch error: "${e}"`);
    }

  });
</script>
