import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/adagest/",
    component: () =>
      import(/* webpackChunkName: "about" */ "../ViewsFront/HomePage.vue"),
  },

  {
    path: "/adagest/subs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../ViewsFront/Subscriptions.vue"),
  },

  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "about" */ "../ViewsFront/HomePage.vue"),
  },
];

const router = createRouter({
  base: '/adagest',
  history: createWebHistory(),
  routes,
});
export default router;
