import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import Product from '../pages/Product.vue';
import Favorit from '../pages/Favorit.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/product', name: 'Product', component: Product },
  { path: '/favorit', name: 'Favorit', component: Favorit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
