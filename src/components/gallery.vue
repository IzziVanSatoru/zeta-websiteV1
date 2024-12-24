<template>
    <div class="gallery">
      <h1 class="gallery-title">Gallery</h1>
      <div class="photo-cards">
        <div 
          class="photo-card" 
          v-for="(photo, index) in photos" 
          :key="index" 
          :style="getCardStyle(index)" 
          ref="photoCard"
        >
          <img :src="photo.src" :alt="photo.alt" class="photo-img" />
          <div class="overlay">
            <h3 class="photo-title">{{ photo.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import gsap from 'gsap';
  
  const photos = ref([
    { src: 'https://i.pinimg.com/736x/e6/82/29/e68229d0a6af4070f0ec8e2fdbbda6ac.jpg', alt: 'Photo 1', title: 'my istri' },
    { src: 'https://i.pinimg.com/736x/14/5e/44/145e44f5bf0c3870f5a7017e622fe309.jpg', alt: 'Photo 2', title: 'my istri' },
    { src: 'https://i.pinimg.com/736x/de/04/68/de0468df483825c8af81d13c4ae2e5a0.jpg', alt: 'Photo 3', title: 'my istri' },
    { src: 'https://i.pinimg.com/736x/79/83/29/798329bd6e7d1be7ac988ac4bb41dcbd.jpg', alt: 'Photo 4', title: 'my istri' },
  ]);
  
  const photoCard = ref<HTMLDivElement | null>(null);
  
  // Fungsi untuk memberikan efek animasi berdasarkan index kartu
  const getCardStyle = (index: number) => {
    return {
      transform: `rotate(${index * 10}deg)`,
      transition: 'transform 0.3s ease',
    };
  };
  
  // GSAP animasi saat halaman dimuat
  onMounted(() => {
    const cardElements = document.querySelectorAll('.photo-card');
    gsap.fromTo(
      cardElements,
      { opacity: 0, scale: 0.8, y: 100, rotationX: 45 },
      { opacity: 1, scale: 1, y: 0, rotationX: 0, duration: 1.5, stagger: 0.2, ease: 'power3.out' }
    );
  });
  </script>
  
  <style scoped>
  .gallery {
    padding: 3rem;
    text-align: center;
    background: #1f1f1f;
  }
  
  .gallery-title {
    font-size: 3rem;
    color: white;
    margin-bottom: 2rem;
    font-family: 'Arial', sans-serif;
  }
  
  .photo-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    justify-items: center;
  }
  
  .photo-card {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
    transform-style: preserve-3d;
    perspective: 1500px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  
  .photo-card:hover {
    transform: scale(1.05) rotateY(10deg);
  }
  
  .photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
    border-radius: 15px;
  }
  
  .photo-card:hover .overlay {
    opacity: 1;
  }
  
  .photo-title {
    font-size: 1.5rem;
    color: white;
    font-family: 'Courier New', Courier, monospace;
  }
  </style>
  