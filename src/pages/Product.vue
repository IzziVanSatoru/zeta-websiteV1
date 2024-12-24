<template>
  <div class="product">
    <h1>Produk Vestia Zeta</h1>
    <div class="product-list">
      <div 
        class="product-item"
        v-for="item in products"
        :key="item.id"
        :class="{'clicked': clickedProductId === item.id}"
        ref="productItems"
      >
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <span class="price">{{ formatCurrency(item.price) }}</span>
        <button @click="addToFavorites(item)">Tambah ke Favorit</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const products = ref<any[]>([]);
const clickedProductId = ref<number | null>(null);

// Ambil data dari file JSON
onMounted(async () => {
  try {
    const response = await fetch('/src/json/product.json'); // Pastikan path sesuai
    const data = await response.json();
    products.value = data;
    animateProducts(); // Animasi setelah data dimuat
    animateProductList(); // Animasi untuk seluruh list produk
  } catch (error) {
    console.error('Error loading products:', error);
  }
});

// Fungsi untuk format harga menjadi mata uang
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
};

const addToFavorites = (item: any) => {
  alert(`${item.name} telah ditambahkan ke favorit Anda!`);
};

const onProductClick = (item: any) => {
  clickedProductId.value = item.id;
};

// GSAP animations for product items
const animateProducts = () => {
  const productItems = document.querySelectorAll('.product-item');
  gsap.from(productItems, {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1.5,
    ease: 'power4.out',
  });
};

// GSAP animation for the entire product list
const animateProductList = () => {
  gsap.from('.product-list', {
    opacity: 0,
    x: -200,
    duration: 1.5,
    ease: 'power4.out',
  });
};
</script>

<style scoped>
.product {
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #757676;
}

.product-list {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.product-item {
  width: 200px;
  text-align: center;
  background-color: #f4f4f4;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.product-item h3 {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #333;
}

.product-item p {
  font-size: 1rem;
  color: #666;
}

.product-item button {
  background-color: #a8aaaa;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
}

.product-item button:hover {
  background-color: #252525;
}

/* Hover effect for 3D appearance */
.product-item:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  background-color: #eaf2f7;
}

/* Click effect for 3D transformation */
.product-item.clicked {
  transform: rotateY(180deg) scale(1.1);
  box-shadow: 0 30px 40px rgba(0, 0, 0, 0.3);
}
</style>
