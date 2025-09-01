import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../pages/Signup.vue'
import Signin from '../pages/Login.vue'
import welcome from '../pages/welcome.vue'
import tasks from '../pages/tasks.vue'

const routes = [
  { path: '/', component: welcome, meta:{guestOnly : true} },
  { path: '/signup', component: Signup, meta: {guestOnly : true} },
  { path: '/signin', component: Signin, meta: {guestOnly : true} },
  {path: '/tasks', component: tasks, meta: {requiresAuth : true}},
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
    next("/tasks");
  }
  else{
    next();
  }
});

export default router
