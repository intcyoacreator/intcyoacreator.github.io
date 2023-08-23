/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
import { VueShowdownPlugin } from "vue-showdown";

// Types
import type { App } from "vue";

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueShowdownPlugin, {
      // Set default flavour of showdown
      flavor: "github",
      // Set default options of showdown (will override the flavour options)
      // options: {
      //   emoji: false,
      // }
    })
}
