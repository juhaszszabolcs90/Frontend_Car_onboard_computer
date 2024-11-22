<script setup>
// Import ikonok
import checkEngineImage from "@/assets/check-engine-sign.png";
import ecoImage from "@/assets/eco-sign.png";
import sportImage from "@/assets/spinning-wheel.png";
import settingsIcon from "@/assets/settings-icon.png";
</script>

<template>
  <main>
    <!-- Központi kijelző -->
    <div class="dashboard">
      <div class="speed-display">
        <p class="speed">{{ currentSpeed }} <span>km/h</span></p>
        <p class="mode-display">Üzemmód: <span :class="currentMode">{{ currentMode }}</span></p>
      </div>
      <div class="info-container">
        <p class="battery">Akkumulátor: {{ batteryLevel }}%</p>
        <p class="range">Hatótáv: {{ range }} km</p>
      </div>
    </div>

    <!-- Üzemmódok kiválasztása -->
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
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      modes: ["normal", "eco", "sport"],
      currentMode: "eco",
      batteryLevel: 100,
      range: 650,
      currentSpeed: 0,
    };
  },
  methods: {
    changeMode(mode) {
      this.currentMode = mode;

      if (mode === "eco") {
        this.range = 650;
      } else if (mode === "sport") {
        this.range = 400;
      } else {
        this.range = 580;
      }
    },
  },
};
</script>

<style scoped>
.dashboard {
  background: #222;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
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
  bottom: 7px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
}

.battery {
  font-size: 16px;
  color: #ffc107;
  text-align: left;
}

.range {
  font-size: 16px;
  color: #17a2b8;
  text-align: right;
}

.modes-container {
  display: flex;
  gap: 60px;
  justify-content: center;
}

.mode-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 120px;
  height: 120px;
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
  background-color: #444;
  border-color: #007BFF;
  transform: scale(1.1);
}

.icon {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.settings-icon {
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: 5px;
  right: 2px;
}
</style>
