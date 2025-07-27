import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../pages/Signup.vue'
import Signin from '../pages/Login.vue'
import welcome from '../pages/welcome.vue'

const routes = [
  { path: '/', component: welcome },
  { path: '/signup', component: Signup },
  { path: '/signin', component: Signin },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
