<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-100">
    <form @submit.prevent="handleSignIn" class="bg-white p-8 rounded shadow-md w-[400px]">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
      <input v-model="form.email" type="email" placeholder="Email" class="input" required>
      <input v-model="form.password" type="password" placeholder="Password" class="input" required>
      <button type="submit" class="btn">Log In!</button>
      <a class="navigation" @click="goToSignup()">Register?</a>
    </form>
    <p v-if="message" class="text-center text-red-500 mt-4">{{ message }}</p>
  </div>
</template>


<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

const form = reactive({
    email : '',
    password : '',

})

const message = ref("");

async function handleSignIn(){
  try{
    const response = await axios.post("http://localhost:5000/api/signin",form)
    message.value = response.data.message

  }catch(error){
    if(error.response){
      message.value = error.response.data.message
    }else{
      message.value = "SignIn Failed!"
    }

  }
}


function goToSignup() {
  setTimeout(() => {
    router.push("/signup");
  }, 500);
}

</script>


<style scoped>

.input{
    @apply w-full mb-4 px-4 py-2 border rounded;
}

.btn{
    @apply w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded;
}



.navigation{
  cursor: pointer;
}
</style>