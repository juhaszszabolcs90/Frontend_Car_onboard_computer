<template>
  <router-view></router-view>  <!-- Ide kerülnek a komponens tartalmai -->
</template>

<script>
import { defineComponent } from 'vue';
import router from './router';  // A router importálása

export default defineComponent({
  name: 'App',
  router  // A router hozzáadása a Vue alkalmazáshoz
});
</script>

<style>
/* Alap háttér beállítás */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #333;
  color: white;
}
</style>
