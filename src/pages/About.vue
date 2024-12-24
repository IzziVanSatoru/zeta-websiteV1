<template>
  <div class="about">
    <h1>About Us</h1>
    <p>Welcome to Vituber, your favorite platform for amazing experiences.</p>
    <!-- Tambahkan komponen Avatar -->
    <Avatar />
    <!-- Tambahkan komponen VirtualCard -->
    <virtualCard />
    <!-- Tambahkan komponen Gallery -->
    <Gallery />
  </div>
</template>

<script setup lang="ts">
import Avatar from '../components/Avatar.vue';
import virtualCard from '../components/virtualCard.vue';
import Gallery from '../components/gallery.vue';
</script>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #bbbfc0;
}

p {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #555;
}
</style>
