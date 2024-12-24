<template>
  <div id="app">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Main Content Area -->
    <main>
      <!-- Route View -->
      <router-view />
    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Import Navbar and Footer components
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
/* Basic Styling for Layout */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1; /* Push Footer to the Bottom */
  padding: 1rem;
  background-color: #f9f9f9;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #ccc;
}
</style>
