import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '../views/SplashScreen.vue';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "splashscreen",
      component: SplashScreen,
    },
    {
      path: '/home',
      name: "home",
      component: Home,
    }
  ]
})

export default router
