import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../pages/Signup.vue'
import Signin from '../pages/Login.vue'
import welcome from '../pages/welcome.vue'
import home from '../pages/home.vue'

const routes = [
  { path: '/', component: welcome, meta:{guestOnly : true} },
  { path: '/signup', component: Signup, meta: {guestOnly : true} },
  { path: '/signin', component: Signin, meta: {guestOnly : true} },
  {path: '/home', component: home, meta: {requiresAuth : true}},
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem("token");

  if (!token && to.meta.requiresAuth){
    next("/signin");
  }
  else if (token && to.meta.guestOnly){
    next("/home");
  }
  else{
    next();
  }
});

export default router
