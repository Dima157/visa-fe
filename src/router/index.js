import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SingUp.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
