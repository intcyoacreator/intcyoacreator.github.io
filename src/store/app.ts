// Utilities
import { defineStore } from "pinia"

// Imports
import { defaultProjectV1 } from "@/constants"

export const useAppStore = defineStore("app", {
  state: () => {
    // Functions
    return {
      // The version of this application
      appVersion: "0.1.0",

      /**
       * The project version of the currently loaded project
       *
       * Assume V1 by default
       */
      // loadedProjectVersion: ProjectVersion.V1,
      loadedProjectVersion: "Project v1",

      /**
       * Dialogues
       */
      showSaveLoadDialog: false,

      /**
       * Everything that is stored in the currently loaded project will be
       * stored in the object below
       */
      projectV1: defaultProjectV1,
    }
  },
})
