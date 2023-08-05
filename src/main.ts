/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue"

// Composables
import { createApp } from "vue"

// Plugins
import { registerPlugins } from "@/plugins"

const app = createApp(App)

// Registers plugins, which includes the router
registerPlugins(app)

// Import global Components and register them
import Sheet from "./components/Sheet.vue";
app.component("Sheet", Sheet);

app.mount("#app")
