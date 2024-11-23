    <script setup>
  import { ref, onMounted } from "vue";
  
  // Aktuális idő frissítése
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
    setInterval(updateTime, 1000); // Frissítés másodpercenként
  });
  </script>

<template>
  <div id="layout">
    <!-- Fejléc: Aktuális idő -->
    <header class="header">
      <div class="current-time">
        <span class="hours">{{ currentTime.hours }}</span>:
        <span class="minutes">{{ currentTime.minutes }}</span>:
        <span class="seconds">{{ currentTime.seconds }}</span>
      </div>
    </header>

    <!-- Tartalom (oldalak) -->
    <main>
      <slot></slot> <!-- Itt jelenik meg az oldal tartalma -->
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
  /* Layout stílusok */
  #layout {
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
    opacity: 0.7;
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
  