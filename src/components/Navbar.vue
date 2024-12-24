<template>
  <div class="navbar">
    <h1> vestia zeta </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/" @click="playSound" class="nav-item">Home</router-link>
        </li>
        <li>
          <router-link to="/about" @click="playSound" class="nav-item">About</router-link>
        </li>
        <li>
          <router-link to="/contact" @click="playSound" class="nav-item">Contact</router-link>
        </li>
        <li>
          <router-link to="/favorit" @click="playSound" class="nav-item">Favorit</router-link>
        </li>
        <li>
          <router-link to="/product" @click="playSound" class="nav-item">Product</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";

// Suara klik
const audio = new Audio('/src/assets/sound/jangan_dong.mp3');
audio.preload = 'auto';

const playSound = (event: Event) => {
  event.preventDefault(); 

  audio.play().then(() => {
    const target = event.target as HTMLAnchorElement;
    setTimeout(() => {
      window.location.href = target.href;
    }, audio.duration * 1000);
  }).catch((error) => {
    console.error("Error playing sound:", error);
    const target = event.target as HTMLAnchorElement;
    window.location.href = target.href;
  });
};

// GSAP animasi untuk navbar
onMounted(() => {
  gsap.fromTo(
    ".nav-item",
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
  );

  gsap.to(".nav-item", {
    scale: 1.1,
    duration: 0.5,
    yoyo: true,
    ease: "power3.out",
    repeat: -1,
    repeatDelay: 3,
  });
});
</script>

<style scoped>
.navbar {
  padding: 1rem;
  background: linear-gradient(90deg, #2e2e2e, #121212); /* Abu-abu gelap futuristik */
  text-align: center;
  border-bottom: 4px solid #4f4f4f; /* Abu-abu lebih terang untuk pembatas */
}

h1 {
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 0;
}

nav ul li {
  display: inline-block;
}

.nav-item {
  text-decoration: none;
  color: #d4d4d4; /* Abu-abu terang untuk teks */
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05); /* Transparansi futuristik */
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  transform: scale(1.1);
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
}

.nav-item:active {
  transform: scale(0.95);
  background: rgba(255, 255, 255, 0.2);
}
</style>
