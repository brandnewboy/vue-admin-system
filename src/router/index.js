import { createRouter, createWebHashHistory } from "vue-router";

const publicRules = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRules
});

export default router;
