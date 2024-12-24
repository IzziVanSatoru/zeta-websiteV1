<template>
  <div class="dashboard">
    <div class="card">
      <h3>Total Visitors</h3>
      <p>{{ totalVisitors }}</p>
    </div>
    <div class="card">
      <h3>Active Users</h3>
      <p>{{ activeUsers }}</p>
    </div>
    <div class="card">
      <h3>New Subscriptions</h3>
      <p>{{ newSubscriptions }}</p>
    </div>

    <!-- Bagian Top 1 - 80 -->
    <div class="ranking">
      <h3>Top 1 - 6 donator Vestia zeta</h3>
      <ul>
        <li v-for="(user, index) in topUsers" :key="index" class="ranking-item">
          {{ index + 1 }}. {{ user.name }} - {{ user.points }} Points
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const totalVisitors = ref(1234);
const activeUsers = ref(567);
const newSubscriptions = ref(89);

// Daftar peringkat top 1-80 (data dummy)
const topUsers = ref([
  { name: 'Ijong', points: 15000 },
  { name: 'Mamat', points: 4800 },
  { name: 'Rick', points: 4600 },
  { name: 'Reza', points: 4500 },
  { name: 'Agus metal', points: 4400 },
  { name: 'Akira', points: 4300 },
  { name: 'Bang al', points: 1300 },
  // Tambahkan lebih banyak pengguna hingga 80
]);

// GSAP Animations
onMounted(() => {
  // Animasi untuk Cards
  gsap.from('.card', {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Animasi untuk Ranking
  gsap.from('.ranking-item', {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.1,
    ease: 'power4.out'
  });
});
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 2rem;
  transform-style: preserve-3d;
}

.card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: perspective(500px);
}

.card:hover {
  transform: translateY(-15px) rotateX(10deg);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
}

h3 {
  font-size: 1.8rem;
  color: #676767; /* Gaya ala Jepang */
  font-family: 'Poppins', sans-serif;
}

p {
  font-size: 2.5rem;
  color: #333;
  margin-top: 1rem;
  font-family: 'Roboto', sans-serif;
}

/* Styling untuk Ranking */
.ranking {
  margin-top: 2rem;
  text-align: left;
  background: linear-gradient(135deg, #00c4ff, #676767);
  padding: 1rem;
  border-radius: 10px;
}

.ranking h3 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.ranking-item {
  font-size: 1.2rem;
  color: #fff;
  margin: 0.5rem 0;
  transition: transform 0.3s ease, color 0.3s ease;
  font-family: 'Roboto', sans-serif;
}

.ranking-item:hover {
  transform: translateX(15px);
  color: #676767;
  cursor: pointer;
}

/* Animated Button for Hover */
button {
  background-color: #00c4ff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  margin-top: 2rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

button:hover {
  background-color: #ff6f61;
  transform: scale(1.1);
  transition: all 0.3s ease;
}
</style>
