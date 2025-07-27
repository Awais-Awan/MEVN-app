<template>
  <div class="page-container">
    <!-- Logo at top-left -->
    <div class="logo">PayPoint</div>

    <!-- Up arrow to go to Login -->
    <div class="arrow" @click="goToLogin">
      <i class="fas fa-arrow-up"></i>
    </div>

    <!-- Centered welcome message -->
    <div class="welcome">
      <h1>Welcome to the E-Commerce App!</h1>
      <p>Explore our products and enjoy shopping 🛍️</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goToLogin() {
  // Add slide-up animation class
  document.querySelector('.arrow').classList.add('slide-up');

  // Redirect after animation (e.g., 500ms)
  setTimeout(() => {
    router.push('/signin');
  }, 500);
}
</script>

<style scoped>
/* Full page center setup */
.page-container {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
  font-family: sans-serif;
}

/* Logo top-left */
.logo {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
}

/* Arrow icon */
.arrow {
  font-size: 2rem;
  cursor: pointer;
  margin-bottom: 1rem;
  color: #007bff;
  transition: transform 0.5s ease;
}

/* Slide-up animation */
.arrow.slide-up {
  transform: translateY(-100px);
  opacity: 0;
}

/* Welcome text */
.welcome {
  text-align: center;
  padding: 1rem;
}
</style>
