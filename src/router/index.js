import { createRouter, createWebHistory } from 'vue-router'
import ProiectFinal from '../views/ProiectFinal.vue'
import Home from '../page/Home.vue'
import ContactUs from '../page/ContactUs.vue';

const routes = [
  { path: "/", name: 'ProiectFinal', component: ProiectFinal },
  { path: "/home", name: 'Home', component: Home },
  { path: "/contact-us", name: 'ContactUs', component: ContactUs },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
