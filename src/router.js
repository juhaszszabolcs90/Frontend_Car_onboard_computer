import { createRouter, createWebHistory } from "vue-router";
import SplashScreen from "./components/SplashScreen.vue";
import Dashboard from "./components/Dashboard.vue";

const routes = [
  { path: "/", component: SplashScreen },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;