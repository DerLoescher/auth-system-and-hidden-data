import { createWebHistory, createRouter } from "vue-router";
import AuthorizationPage from "../src/components/AuthorizationPage";
import AnalyticsPage from "../src/components/AnalyticsPage";

const routes = [
  { path: "/", redirect: "/auth" },
  {
    path: "/auth",
    component: AuthorizationPage,
  },
  { path: "/analytics", component: AnalyticsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
