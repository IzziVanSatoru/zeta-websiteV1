<template>
  <div class="home">
    <h1 ref="title">Welcome to vestia zeta id</h1>
    <p ref="description"></p>
    <button ref="button" @click="navigateToProduct">Browse Products</button>

    <!-- Tambahkan komponen Dashboard -->
    <Dashboard />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';
import Dashboard from '../components/Dashboard.vue';  // Import komponen Dashboard

// Router
const router = useRouter();

// Refs untuk elemen
const title = ref<HTMLHeadingElement | null>(null);
const description = ref<HTMLParagraphElement | null>(null);
const button = ref<HTMLButtonElement | null>(null);

// Teks efek mengetik
const descriptionText = "Your go-to platform for amazing content and community interaction!";

// Fungsi mengetik
const typingEffect = (element: HTMLElement, text: string, speed: number) => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
};

// Animasi GSAP saat halaman dimuat
onMounted(() => {
  if (title.value) {
    gsap.fromTo(
      title.value,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }

  if (description.value) {
    gsap.fromTo(
      description.value,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );
    typingEffect(description.value, descriptionText, 50);
  }

  if (button.value) {
    gsap.fromTo(
      button.value,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)", delay: 1 }
    );
  }
});

// Navigasi ke halaman produk
const navigateToProduct = () => {
  router.push('/product');
};
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #7a7c7c;
}

p {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #333;
  white-space: pre-wrap; /* Agar efek mengetik terlihat sesuai */
  font-family: 'Courier New', Courier, monospace; /* Gaya font ala mesin ketik */
}

button {
  background-color: #676767;
  color: rgb(194, 191, 191);
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  margin-top: 2rem;
  cursor: pointer;
}

button:hover {
  background-color: #3c3d3e;
}
</style>
