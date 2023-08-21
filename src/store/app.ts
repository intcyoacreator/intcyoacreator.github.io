// Utilities
import { defineStore } from "pinia"

// Imports
// import { defaultProjectV1 } from "@/constants"
import { defaultProjectV2, sampleProjectV2 } from "@/constants"

export const useAppStore = defineStore("app", {
  state: () => {
    // Functions
    return {
      // The version of this application
      // is this needed?
      appVersion: "0.1.0",

      /**
       * The project version of the currently loaded project
       *
       * Assume V1 by default
       */
      // loadedProjectVersion: ProjectVersion.V1,
      loadedProjectVersion: 2,

      /**
       * Dialogues
       */
      showSaveLoadDialog: false,

      /**
       * Everything that is stored in the currently loaded project will be
       * stored in the object below
       */
      // projectV1: defaultProjectV1,
      // projectV2: defaultProjectV2
      projectV2: sampleProjectV2
    }
  },
})
