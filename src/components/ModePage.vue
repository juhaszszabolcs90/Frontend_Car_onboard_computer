<script setup>
import { useRoute } from "vue-router";
import Layout from "./Layout.vue";

const route = useRoute();
</script>

<template>
    <Layout>
  <div class="mode-page">
    <h1>Üzemmód beállítás</h1>
    <div class="content">
      <p>Itt konfigurálhatod az üzemmódhoz tartozó beállításokat!</p>
      <button class="action-button">🎵 Spotify</button>
      <button class="action-button">🗺️ Navigation</button>
      <button class="action-button">⚙️ Settings</button>
    </div>
  </div>
</Layout>
</template>

<style scoped>
.mode-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #292929;
  color: white;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #007bff;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.action-button {
  padding: 10px 20px;
  font-size: 1.2em;
  color: white;
  background: #1c1c1c;
  border: 2px solid #444;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.action-button:hover {
  background: #007bff;
  color: white;
  transform: scale(1.1);
}
</style>
