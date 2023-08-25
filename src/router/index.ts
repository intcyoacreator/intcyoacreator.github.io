// Composables
import { createRouter, createWebHistory } from "vue-router";

let entryPoint: Promise<typeof import("*.vue")>;

// If the standalone Viewer is being built
if (process.env.BUILD_ICCT_VIEWER == "true") {
  entryPoint = import("@/components/Viewer.vue");
} else {
  entryPoint = import("@/App.vue");
}

const routes = [
  // The Splashscreen for desktop apps
  {
    path: "/splashscreen",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Splashscreen",
        component: () => import("@/layouts/Splashscreen.vue"),
      }
    ]
  },
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      // Home is the menu that is starts with
      {
        path: "",
        name: "App",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => entryPoint,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(),
  routes,
});

export default router;
