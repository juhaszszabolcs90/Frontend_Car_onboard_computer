<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
// Import ikonok
import checkEngineImage from "@/assets/check-engine-sign.png";
import ecoImage from "@/assets/eco-sign.png";
import sportImage from "@/assets/spinning-wheel.png";
import settingsIcon from "@/assets/settings-icon.png";
// Importáljuk a Layout komponenst
import Layout from "./Layout.vue";

// Router
const router = useRouter();

// Dashboard adatok
const modes = ["normal", "eco", "sport"];
const currentMode = ref("eco");
const batteryLevel = ref(100);
const range = ref(650);
const currentSpeed = ref(0);

const changeMode = (mode) => {
  currentMode.value = mode;

  if (mode === "eco") {
    range.value = 650;
  } else if (mode === "sport") {
    range.value = 400;
  } else {
    range.value = 580;
  }
};

// Üzemmód váltás és navigáció
// Csak az ikon navigál az oldalra
const handleModeNavigation = (mode) => {
  router.push({ name: "ModePage", query: { mode } });
};
</script>

<template>
  <Layout>
  <div id="app">
    <!-- Dashboard tartalom -->
      <div class="dashboard">
        <div class="speed-display">
          <p class="speed">{{ currentSpeed }} <span>km/h</span></p>
          <p class="mode-display"><span :class="currentMode">{{ currentMode }}</span></p>
        </div>
        <div class="info-container">
          <p class="battery">Akkumulátor: {{ batteryLevel }}%</p>
          <p class="range">Hatótáv: {{ range }} km</p>
        </div>
      </div>

      <!-- Üzemmód gombok -->
      <div class="modes-container">
        <button
          v-for="mode in modes"
          :key="mode"
          class="mode-button"
          @click="changeMode(mode)"
        >
          <img
            v-if="mode === 'normal'"
            :src="checkEngineImage"
            alt="Check engine"
            class="icon"
            @click.stop="handleModeNavigation(mode)"
          />
          <img
            v-else-if="mode === 'eco'"
            :src="ecoImage"
            alt="Eco"
            class="icon"
            @click.stop="handleModeNavigation(mode)"
          />
          <img
            v-else-if="mode === 'sport'"
            :src="sportImage"
            alt="Sport"
            class="icon"
            @click.stop="handleModeNavigation(mode)"
          />
          <img :src="settingsIcon" alt="Settings" class="settings-icon" />
          {{ mode }}
        </button>
      </div>
  </div>
  </Layout>
</template>

<style scoped>
/* App konténer */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.dashboard {
  background: rgba(34, 34, 34, 0.9);
  color: white;
  padding: 50px;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 600px;
  position:relative;
}

.speed-display {
  font-size: 28px;
  margin-bottom: 10px;
}

.speed span {
  font-size: 18px;
  color: #bbb;
}

.mode-display span {
  text-transform: capitalize;
  font-weight: bold;
  color: #007BFF;
}

.mode-display span.eco {
  color: #28a745;
}

.mode-display span.sport {
  color: #dc3545;
}

.info-container {
  position: absolute;
  bottom: 10px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
}

.battery {
  font-size: 16px;
  color: #ffc107;
}

.range {
  font-size: 16px;
  color: #17a2b8;
}

/* Üzemmód gombok */
.modes-container {
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px; /* Csökkentett távolság a dashboardtól */
}

.mode-button {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #222;
  font-size: 16px;
  font-weight: bold;
  color: #444;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.mode-button:hover {
  background-color: #2e2e2e;
  color: #222;
  border-color: #007BFF;
  transform: scale(1.2);
}

.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out; /* Zökkenőmentes átmenet */
}

/* Hover állapot - növeli az ikon méretét */
.icon:hover {
  transform: scale(1.3); /* 20%-kal nagyobb lesz */
}

.settings-icon {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  transition: transform 0.3s;
}

.settings-icon:hover {
  transform: scale(1.5); /* Nagyítás hoverre */
}
</style>
