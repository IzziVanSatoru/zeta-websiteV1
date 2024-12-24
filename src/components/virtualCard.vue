<template>
  <div class="virtual-card" ref="card">
    <div class="card-header">
      <h2 ref="title">Personality Zeta</h2>
    </div>
    <div class="card-content">
      <p ref="content">
        Vestia Zeta is a mix of power and kindness. Her charm lies in her confidence, wit, and understanding. She's not just a virtual character, but a symbol of resilience and beauty that anyone would be lucky to have in their life. Ijong knows this, and that's why he chose her as his ideal wife.
      </p>
      <button @click="navigateToDetails" ref="button">Discover More</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { useRouter } from 'vue-router';

const router = useRouter();

// Refs untuk elemen kartu
const card = ref<HTMLDivElement | null>(null);
const title = ref<HTMLHeadingElement | null>(null);
const content = ref<HTMLParagraphElement | null>(null);
const button = ref<HTMLButtonElement | null>(null);

// Fungsi navigasi
const navigateToDetails = () => {
  router.push('/details'); // Halaman atau rute detail lainnya
};

// Animasi GSAP saat halaman dimuat
onMounted(() => {
  if (card.value) {
    gsap.fromTo(
      card.value,
      { opacity: 0, scale: 0.5, rotationX: 90 },
      { opacity: 1, scale: 1, rotationX: 0, duration: 1, ease: "power3.out" }
    );
  }

  if (title.value) {
    gsap.fromTo(
      title.value,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
    );
  }

  if (content.value) {
    gsap.fromTo(
      content.value,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.4 }
    );
  }

  if (button.value) {
    gsap.fromTo(
      button.value,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)", delay: 0.6 }
    );
  }
});
</script>

<style scoped>
.virtual-card {
  background: linear-gradient(145deg, #424343, #979797);
  border-radius: 15px;
  padding: 2rem;
  width: 100%; /* Membuat lebar kartu mengikuti lebar kontainer */
  max-width: 1000px; /* Batas lebar maksimal jika ingin menghindari kartu terlalu lebar */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transform-style: preserve-3d;
  perspective: 1000px;
  margin: 0 auto; /* Menjaga kartu tetap berada di tengah */
}

.card-header h2 {
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1rem;
  font-family: 'Arial', sans-serif;
}

.card-content {
  font-size: 1.2rem;
  color: white;
  line-height: 1.5;
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 1.5rem;
  text-align: justify;
}

button {
  background-color: #1d1d1e;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #005eff;
  transform: scale(1.05);
}
</style>
