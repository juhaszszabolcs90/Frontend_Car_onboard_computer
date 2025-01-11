import { createRouter, createWebHistory } from "vue-router";
import LoadingScreen from "./components/LoadingScreen.vue";
import Dashboard from "./components/Dashboard.vue";
import ModePage from "./components/ModePage.vue"; // Új komponens importálása

const routes = [
  { path: "/Frontend_Car_onboard_computer", component: LoadingScreen },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
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