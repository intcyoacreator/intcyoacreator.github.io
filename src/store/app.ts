// Utilities
import { defineStore } from "pinia"
import { ProjectVersion } from "@/types";

export const useAppStore = defineStore("app", {
  state: () => {
    // Functions

    return {
      app_version: "0.1.0",
      // Assume v1 by default
      current_project_version: ProjectVersion.V1,
    }
  },
})
