// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    //
    return {
      app_version: "0.1.0",
    }
  },
})
