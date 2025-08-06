<template>
  <div class="fixed inset-0 flex flex-col items-center justify-center bg-orange-400">
    <div class="absolute top-4 left-4 font-bold text-xl text-gray-800">PayPoint</div>
    <form @submit.prevent="handleSignIn" class="bg-gray-800 p-8 rounded shadow-md w-[400px]">
      <h2 class="text-2xl font-bold mb-6 text-center text-orange-400">Sign In</h2>
      <p v-if="message" class="text-center text-red-500 mb-6">{{ message }}</p>
      <input v-model="form.email" type="email" placeholder="Email" class="input" required>
      <input v-model="form.password" type="password" placeholder="Password" class="input" required>
      <button type="submit" class="btn">Log In!</button>
      <a class="navigation text-orange-400 hover:text-orange-300 block mt-2" @click="goToSignup()">Register?</a>
    </form>
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
     @apply w-full mb-4 px-4 py-2 rounded outline-none border-2 focus:border-orange-400 focus:ring-1 focus:ring-orange-400;
}

.btn{
    @apply w-full bg-orange-400 hover:bg-orange-300 text-gray-800 font-bold py-2 px-4 rounded;
}



.navigation{
  cursor: pointer;
}
</style>