// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
        component: () => import(
          /* webpackChunkName: "home" */
          "@/App.vue"
        ),
      },
    ],
  },
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(),
  routes,
});

export default router;
