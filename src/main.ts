/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// Tauri — This code slows down the website immensely
// import { invoke } from '@tauri-apps/api/tauri'

// document.addEventListener('DOMContentLoaded', () => {
//   // This will wait for the window to load, but you could
//   // run this function on whatever trigger you want
//   invoke('close_splashscreen')
// })

const app = createApp(App);

// Registers plugins, which includes the router
registerPlugins(app);

// Import global Components and register them
import Sheet from "./components/Sheet.vue";
app.component("Sheet", Sheet);

app.mount("#app");
