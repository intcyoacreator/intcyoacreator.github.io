// Utilities
import { defineStore } from "pinia";

// Imports
// import { defaultProjectV1 } from "@/constants"
// import { defaultProjectV2, sampleProjectV2 } from "@/constants"
import { sampleProjectV2 } from "@/constants";
import { ApplicationState } from "@/types";

export const useAppStore = defineStore("app", {
  state: (): ApplicationState => {
    // Functions

    // Return
    return {
      appVersion: "0.1.0",
      loadedProjectVersion: 2,
      showSaveLoadDialog: false,
      showPageSettingsDialog: false,
      creatorMode: "none",
      projectV2: sampleProjectV2
    };
  },
});
