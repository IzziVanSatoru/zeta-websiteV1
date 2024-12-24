<template>
  <div class="avatar-container">
    <div class="avatar-card" ref="avatarCard">
      <div class="avatar">
        <img src="https://i.pinimg.com/736x/81/4d/2c/814d2ccf513abce384bface631ab281c.jpg" alt="Avatar Image" />
      </div>
      <div class="avatar-info">
        <h2 class="avatar-name">Vestia Zeta</h2>
        <p class="avatar-role">Agent</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const avatarCard = ref<HTMLElement | null>(null)

onMounted(() => {
  // Animasi GSAP 4D untuk smooth effect
  gsap.fromTo(
    avatarCard.value,
    {
      opacity: 0,
      scale: 0.5,
      x: -200,
      y: 200,
      rotationY: 90,
    },
    {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotationY: 0,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.1,
    }
  )
})
</script>

<style scoped>
.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  perspective: 1500px; /* Menambahkan perspektif untuk efek 3D */
}

.avatar-card {
  position: relative;
  width: 350px;
  height: 500px;
  background: linear-gradient(145deg, #636363, #bcbcbc);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
  transform-style: preserve-3d;
}

.avatar-card:hover {
  transform: perspective(1000px) rotateY(15deg);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3), 0px 10px 15px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.avatar img {
  max-width: 85%;
  max-height: 85%;
  object-fit: cover;
  border-radius: 50%;
}

.avatar-info {
  text-align: center;
  padding: 15px;
  background: #f8f9fa;
  border-top: 2px solid #ff6f61;
}

.avatar-name {
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.avatar-role {
  font-size: 1.2rem;
  color: #777;
  text-transform: uppercase;
}

@keyframes hoverEffect {
  0% {
    transform: scale(1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
}

.avatar-card:hover {
  animation: hoverEffect 0.4s ease-in-out;
}
</style>
