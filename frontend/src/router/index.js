import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/adagest/",
    component: () => import("../ViewsFront/HomePage.vue"),
  },

  {
    path: "/adagest/subs",
    component: () => import("../ViewsFront/Subscriptions.vue"),
  },

  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    component: () => import("../ViewsFront/HomePage.vue"),
  },

  {
    path: "/adagest/admin",
    name: "AdminHomePage",
    component: () => import("../ViewsBack/HomePageAdmin.vue"),
  },
  {
    // path: "*",
    path: "/adagest/admin/partners",
    name: "AdminManagePartners",
    component: () => import("../ViewsBack/ManagePartners.vue"),
  },
];

const router = createRouter({
  base: "/adagest",
  history: createWebHistory(),
  routes,
});
export default router;
