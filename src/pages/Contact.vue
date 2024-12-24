<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>If you have any questions or feedback, feel free to reach out to us!</p>
    <form @submit.prevent="submitForm" ref="form">
      <div class="input-group">
        <label for="name">Your Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="input-group">
        <label for="email">Your Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="message">Your Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap'; // Import GSAP

const name = ref('');
const email = ref('');
const message = ref('');
const router = useRouter();

const submitForm = () => {
  alert(`Message sent from ${name.value} (${email.value}): ${message.value}`);

  const contactData = {
    name: name.value,
    email: email.value,
    message: message.value,
    timestamp: new Date().toISOString(),
  };

  saveToJSONFile(contactData);

  name.value = '';
  email.value = '';
  message.value = '';

  router.push('/');
};

const saveToJSONFile = (data: object) => {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'contact.json';
  a.click();
  URL.revokeObjectURL(url);
};

onMounted(() => {
  // GSAP animation when the website is loaded
  gsap.from('.contact h1', { opacity: 0, y: -50, duration: 1, ease: 'power3.out' });
  gsap.from('.input-group', { opacity: 0, y: 20, stagger: 0.3, duration: 1, ease: 'power3.out' });
  gsap.from('button', { opacity: 0, scale: 0.5, duration: 1, delay: 0.5, ease: 'bounce.out' });
});
</script>

<style scoped>
.contact {
  padding: 2rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background: linear-gradient(145deg, #fff, #f1f1f1);
}

h1 {
  font-size: 2.5rem;
  color: #00c4ff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group {
  width: 100%;
  margin-top: 1rem;
  position: relative;
}

label {
  font-size: 1.2rem;
  color: #333;
  position: absolute;
  left: 10px;
  top: -10px;
  background: white;
  padding: 0 5px;
  transition: 0.3s ease;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #00c4ff;
  box-shadow: 0 0 10px rgba(0, 196, 255, 0.5);
}

button {
  background-color: #00c4ff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  margin-top: 2rem;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 5px 10px rgba(0, 196, 255, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #009bbf;
  transform: translateY(-3px);
}

button:active {
  transform: translateY(1px);
}
</style>
