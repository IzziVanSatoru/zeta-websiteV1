<template>
  <div class="favorit">
    <h1>Your Favorite Items</h1>
    <p>Here are the items you've marked as your favorites.</p>
    <div class="favorites-list">
      <div class="favorite-item" v-for="item in favorites" :key="item.id" @mouseover="hoverEffect" @mouseleave="resetEffect">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const favorites = ref<any[]>([]);

// Fungsi untuk mengambil data dari JSON
const fetchFavorites = async () => {
  try {
    const response = await fetch('/src/json/favorit.json');
    const data = await response.json();
    favorites.value = data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
  }
};

// Ambil data ketika komponen dimuat
onMounted(() => {
  fetchFavorites();

  // GSAP Animasi saat halaman dimuat untuk elemen favorit
  gsap.from('.favorit h1', {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: 'power4.out',
  });

  gsap.from('.favorit p', {
    opacity: 0,
    y: 20,
    duration: 1.5,
    delay: 0.5,
    ease: 'power4.out',
  });

  gsap.from('.favorite-item', {
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    y: 50,
    ease: 'power4.out',
    delay: 1, // Menambahkan penundaan untuk efek yang lebih keren
  });

  // GSAP untuk animasi keseluruhan halaman (secara keseluruhan)
  gsap.from('.favorit', {
    opacity: 0,
    duration: 2,
    y: 100,
    ease: 'power4.out',
  });
});

// Efek hover 4D pada kartu
const hoverEffect = (event: MouseEvent) => {
  gsap.to(event.target, {
    scale: 1.1,
    rotationY: 10,
    rotationX: 10,
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
    ease: 'power2.out',
    duration: 0.4
  });
};

// Reset efek saat mouse keluar
const resetEffect = (event: MouseEvent) => {
  gsap.to(event.target, {
    scale: 1,
    rotationY: 0,
    rotationX: 0,
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    ease: 'power2.out',
    duration: 0.4
  });
};
</script>

<style scoped>
.favorit {
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #404242;
  font-family: 'Roboto', sans-serif;
}

p {
  font-size: 1.2rem;
  color: #444;
  margin-top: 1rem;
}

.favorites-list {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}

.favorite-item {
  width: 220px;
  text-align: center;
  background-color: #f4f4f4;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  will-change: transform, box-shadow;
  cursor: pointer;
}

.favorite-item h3 {
  margin-top: 1rem;
  font-size: 1.3rem;
  color: #333;
  font-weight: 600;
}

.favorite-item p {
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
}

.favorite-item:hover {
  transform: translateY(-10px) scale(1.05);
}

.favorite-item img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
