<script setup>
// Import ikonok
import checkEngineImage from "@/assets/check-engine-sign.png";
import ecoImage from "@/assets/eco-sign.png";
import sportImage from "@/assets/spinning-wheel.png";
import settingsIcon from "@/assets/settings-icon.png";

// Aktuális idő frissítése
import { ref, onMounted } from "vue";

const currentTime = ref({ hours: "00", minutes: "00", seconds: "00" });

const updateTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  currentTime.value = { hours, minutes, seconds };
};
onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000); // Frissítés percenként
});

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
</script>

<template>
  <div id="app">
    <!-- Fejléc: Aktuális idő -->
    <header class="header">
          <!-- Idő kijelzése -->
    <div class="current-time">
        <span class="hours">{{ currentTime.hours }}</span>:
        <span class="minutes">{{ currentTime.minutes }}</span>:
        <span class="seconds">{{ currentTime.seconds }}</span>
      </div>
    </header>

    <!-- Dashboard tartalom -->
    <main class="main-content">
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
          />
          <img
            v-else-if="mode === 'eco'"
            :src="ecoImage"
            alt="Eco"
            class="icon"
          />
          <img
            v-else-if="mode === 'sport'"
            :src="sportImage"
            alt="Sport"
            class="icon"
          />
          <img :src="settingsIcon" alt="Settings" class="settings-icon" />
          {{ mode }}
        </button>
      </div>
    </main>

    <!-- Alsó tálca -->
    <footer class="footer">
      <button class="footer-button">🏠 <span>Főoldal</span></button>
      <button class="footer-button">↩️ <span>Vissza</span></button>
      <button class="footer-button">⚙️ <span>Beállítások</span></button>
    </footer>
  </div>
</template>

<style scoped>
/* App konténer */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Fejléc */
.header {
  background: #1c1c1c;
  color: white;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #444;
}

/* Idő kijelzése */
.current-time {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}

.current-time .hours,
.current-time .minutes {
  font-size: 28px;
}

.current-time .seconds {
  font-size: 20px;
  opacity: 0.7; /* Halványabb szín a másodperceknek */
}

/* Tartalom */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Dashboard és gombok közelebb egymáshoz */
  background: linear-gradient(to bottom, #0a0a2a, #0d0d2a 50%, #292929 50%);
  padding-top: 130px;
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
  transform: scale(1.1);
}

.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
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

/* Alsó tálca */
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #292929;
  padding: 10px 0;
  border-top: 1px solid #444;
}

.footer-button {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;
}

.footer-button:hover {
  transform: scale(1.2);
  color: #007bff;
}
</style>
