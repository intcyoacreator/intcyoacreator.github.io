<template>
  <v-container :fill-height="true">
    <v-row>
      <v-col align="center">
        <v-sheet
          elevation="0"
          rounded
          border
          class="pa-10"
          max-width="700px"
        >
          <h1 class="text-h3">Changelog</h1>
          <div
            v-for="(version_note, index) in changelog.versions"
            :key="index"
          >
            <h2 class="text-h5 my-2" align="left">
              v{{ version_note.version }} – {{ version_note.release_date }}
            </h2>
            <ul style="text-align: left;">
              <li
                v-for="(patch_note, index) in version_note.patch_notes"
                :key="index"
              >
                {{ patch_note }}
              </li>
            </ul>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
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

  onMounted(async () => {
    try {
      let file_response = await fetch("./changelog.json5");
      let file_data = await file_response.text();

      // console.log(file_data);

      try {
        let json_value = await JSON5.parse(file_data);
        changelog.value = json_value;
      } catch(e) {
        console.log(`JSON5 parser error: "${e}"`);
      }
    } catch(e) {
      console.log(`File fetch error: "${e}"`);
    }

  });
</script>
