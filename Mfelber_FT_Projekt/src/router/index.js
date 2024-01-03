import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import GamesView from '../views/GamesView.vue';
import Cart from '../components/Cart.vue';
import Orders from '../components/Orders.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/game/:slug',
      name: 'game',
      component: GamesView,
      props: true,
      
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ],
});


export default router
