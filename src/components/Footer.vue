<template>
    <footer>
      <p>&copy; 2024 Vituber. All Rights Reserved.</p>
      <div class="social-links">
        <a href="#" target="_blank" aria-label="Instagram"><img src="https://images.seeklogo.com/logo-png/28/1/instagram-logo-png_seeklogo-286192.png?v=1958568829033766336" alt="Instagram" /></a>
        <a href="#" target="_blank" aria-label="Twitter"><img src="https://img.freepik.com/free-vector/twitter-new-logo-x-icon-design_1017-45424.jpg?t=st=1734948696~exp=1734952296~hmac=00afcd8bf9b68cd85868389ef4022057149ca06b3ef7d5158ab41fd0c001fed0&w=740" alt="Twitter" /></a>
        <a href="#" target="_blank" aria-label="Youtube"><img src="https://www.svgrepo.com/show/13671/youtube.svg" alt="Youtube" /></a>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  // Tidak ada skrip khusus untuk footer
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    padding: 2rem;
    background-color: #222;
    color: white;
    font-size: 1rem;
  }
  
  footer .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  footer .social-links a img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
  }
  
  footer .social-links a:hover img {
    transform: scale(1.2); /* Hover effect to enlarge icons */
  }
  </style>
  