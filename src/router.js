import { createRouter, createWebHistory } from "vue-router";
import SplashScreen from "./components/SplashScreen.vue";
import Dashboard from "./components/Dashboard.vue";
import ModePage from "./components/ModePage.vue"; // Új komponens importálása

const routes = [
  { path: "/", component: SplashScreen },
  { path: "/dashboard", component: Dashboard },
  { 
    path: "/mode", // Minden üzemmód erre az oldalra irányít
    name: "ModePage",
    component: ModePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;