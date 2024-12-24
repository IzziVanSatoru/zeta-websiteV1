<template>
    <button class="vituber-btn" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script setup lang="ts">
  const handleClick = () => {
    console.log("Button clicked!");
    // Anda bisa menambahkan fungsi lain yang ingin dijalankan saat tombol diklik
  };
  </script>
  
  <style scoped>
  .vituber-btn {
    background-color: #00c4ff;
    color: white;
    font-size: 1.2rem;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .vituber-btn:hover {
    background-color: #009bbf;
    transform: scale(1.05); /* Effect untuk sedikit membesar saat hover */
  }
  
  .vituber-btn:active {
    background-color: #008299;
    transform: scale(0.98); /* Effect sedikit mengecil saat tombol ditekan */
  }
  </style>
  