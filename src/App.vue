<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main>
    <h1>Autó fedélzeti számítógép</h1>
    <div class="modes-container">
      <button
        v-for="mode in modes"
        :key="mode"
        class="mode-button"
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
          alt="Spinning wheel"
          class="icon"
        />
        {{ mode }}
      </button>

      <!-- Csak akkor jelenjen meg a "+" gomb, ha kevesebb mint 3 üzemmód van -->
      <button
        v-if="canAddMore"
        class="add-button"
        @click="addMode"
      >
        +
      </button>
    </div>
  </main>
</template>

<script>
import checkEngineImage from './assets/check-engine-sign.png'; // A kép importálása
import ecoImage from './assets/eco-sign.png'; // A kép importálása
import sportImage from './assets/spinning-wheel.png'; // A kép importálása

export default {
  name: 'App',
  data() {
    return {
      modes: ["normal"], // Kezdő üzemmód
      availableModes: ["eco", "sport"], // Hozzáadható üzemmódok
    };
  },
  computed: {
    // Számított tulajdonság, hogy ellenőrizze, lehet-e még több módot hozzáadni
    canAddMore() {
      return this.modes.length < 3;
    },
  },
  methods: {
    // Új mód hozzáadása
    addMode() {
      const nextMode = this.availableModes.shift(); // Következő elérhető mód
      if (nextMode) {
        this.modes = [...this.modes, nextMode];
      }
    },
  },
};
</script>

<style scoped>
/* A fő konténer középre igazítása és méretezése */
.modes-container {
  display: flex; /* Gombok egymás mellé helyezése */
  gap: 40px; /* Gombok közötti távolság */
  justify-content: center; /* Gombok középre igazítása */
  width: 80%; /* Konténer szélessége a képernyő 70%-a */
  margin: 0 auto; /* Középre helyezés */
  padding: 20px 0; /* Felső-alsó térköz */
}

/* Gombok nagyobb mérettel */
.mode-button, .add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto; /* Automatikusan osztják el a helyet */
  height: 100px; /* Nagyobb magasság */
  max-width: 240px; /* Maximális szélesség */
  border: 2px solid #ccc; /* Vastagabb keret */
  border-radius: 10px; /* Lekerekített sarkok */
  background-color: #ffffff; /* Fehér háttérszín */
  font-size: 18px; /* Nagyobb szövegméret */
  font-weight: bold; /* Félkövér szöveg */
  color: #333; /* Sötétebb szöveg */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s; /* Hover effektek */
}

/* Hover effektus */
.mode-button:hover, .add-button:hover {
  background-color: #f0f0f0; /* Halvány szürke háttér */
  border-color: #007BFF; /* Kék keret */
  transform: scale(1.15); /* Enyhe nagyítás */
}

/* Ikon mérete */
.icon {
  width: 80px; /* Nagyobb ikon szélesség */
  height: 80px; /* Nagyobb ikon magasság */
  margin-right: 20px; /* Távolság az ikon és a szöveg között */
}

/* Cím megemelése */
h1 {
  margin-bottom: 30px; /* Nagyobb távolság a konténer előtt */
  font-size: 28px; /* Nagyobb szövegméret */
  text-align: center; /* Középre igazított szöveg */
  color: #ffffff; /* Fehér szín */
}

/* Háttér szín a body elemhez (opcionális) */
body {
  background-color: #333333; /* Sötétszürke háttér */
  color: #ffffff; /* Fehér szöveg */
}
</style>
