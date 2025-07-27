<template>
  <div class="relative h-screen flex flex-col items-center justify-center bg-orange-400 font-sans">
    <!-- Logo at top-left -->
    <div class="absolute top-4 left-4 font-bold text-xl text-gray-800">PayPoint</div>

    <!-- Up arrow to go to Login -->
    <div
      :class="['text-3xl cursor-pointer mb-4 text-blue-600 transition-all duration-500 ease-in-out', { 'translate-y-[-100px] opacity-0': slideUp }]"
      @click="goToLogin"
    >
      <i class="fas fa-arrow-up"></i>
    </div>

    <!-- Centered welcome message -->
    <div class="text-center px-4">
      <h1 class="text-3xl font-bold text-white mb-2">Welcome to the E-Commerce App!</h1>
      <p class="text-white text-lg">Explore our products and enjoy shopping 🛍️</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const slideUp = ref(false);

function goToLogin() {
  slideUp.value = true;
  setTimeout(() => {
    router.push('/signin');
  }, 500);
}
</script>
