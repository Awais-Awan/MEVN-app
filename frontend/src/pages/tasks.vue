<template>
    <div>Hello G Sunao!</div>
    <button class="btn" @click="Logout()">Logout</button>
</template>


<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function Logout(){
    localStorage.removeItem("token");
    router.push("/")
    
}

</script>


<style scoped>

.btn{
    @apply w-full bg-orange-400 hover:bg-orange-300 text-gray-800 font-bold py-2 px-4 rounded;
}

</style>