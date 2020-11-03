import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SingUp.vue'
import SignIn from "@/views/SignIn";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'MainLayout'},
    component: Home
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    meta: {layout: 'MainLayout'},
    component: SignUp
  },
  {
    path: '/sign-in',
    name: 'SignIng',
    meta: {layout: 'MainLayout'},
    component: SignIn
  },
]

const router = new VueRouter({
  routes
})

export default router
