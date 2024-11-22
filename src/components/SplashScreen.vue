<template>
  <div class="splash-screen">
    <h1>Hello Mr</h1>
    <div class="car-container">
      <img src="@/assets/BYD_SEAL.png" alt="BYD Seal" class="car-image" />
    </div>
    <div class="spinner-container">
      <div class="spinner"></div>
      <h1>Betöltés...</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplashScreen',
  mounted() {
    // 4 másodperc múlva átirányítjuk a főoldalra (Dashboard)
    setTimeout(() => {
      this.$router.push('/dashboard');
    }, 4500); // 4500 ms = 4.5 másodperc
  }
};
</script>

<style scoped>
.splash-screen {
  /* background-color: #000; */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  text-align: center;
}

.car-container {
  margin-bottom: 20px; /* Térköz az autó és a spinner között */
}

.car-image {
  width: 500px; /* Autó szélesség beállítása */
  height: auto; /* Az autó magassága arányosan változik */
}

.spinner-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 8px solid #f3f3f3; /* Halvány szürke */
  border-top: 8px solid #3498db; /* Kék szín a pörgő résznek */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite; /* Animáció */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

h1 {
  margin-top: 20px;
  font-size: 24px;
}
</style>
