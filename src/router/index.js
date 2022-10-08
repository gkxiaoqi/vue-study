import { createRouter, createWebHashHistory } from "vue-router";
import { commonRoutes } from "./common";

const routes = [...commonRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
