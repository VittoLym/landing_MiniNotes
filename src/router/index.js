import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyAboutUsVueView from '@/views/MyAboutUsView.vue'
import MyContactView from '@/views/MyContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: () => MyAboutUsVueView
    },
    {
      path: '/support',
      name: 'Support',
      component: () => MyContactView
    }
  ]
})

export default router
