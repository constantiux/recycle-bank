import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router';
import Home from '@/views/Home.vue';
//import { useSession } from '@/stores/session'
//import { computed } from 'vue'
import { authGuard } from '@auth0/auth0-vue';

const routes = [
  {
    name: 'Login',
    path: '/',
    component: () => import('@/views/Login.vue'),
  },
  {
    name: 'IAMSmart',
    path: '/iams',
    component: () => import('@/views/IAMSmart.vue'),
  },
  {
    name: 'Logout',
    path: '/logout',
    component: () => import('@/views/Logout.vue'),
  },
  {
    name: 'Home',
    path: '/home',
    component: Home,
    //beforeEnter: authGuard,
  },
  {
    name: 'Marketplace',
    path: '/market',
    component: () => import('@/views/MarketPlace.vue'),
    //beforeEnter: authGuard,
  },
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('@/views/Profile.vue'),
    //beforeEnter: authGuard,
  },
  {
    name: 'Deposit',
    path: '/deposit',
    component: () => import('@/views/Deposit.vue'),
    //beforeEnter: authGuard,
  },
  {
    name: 'Transfer',
    path: '/transfer',
    component: () => import('@/views/Transfer.vue'),
    //beforeEnter: authGuard,
  },
  {
    name: 'WithDraw',
    path: '/withdraw',
    component: () => import('@/views/Withdraw.vue'),
    //beforeEnter: authGuard,
  },
  {
    name: 'ChangePoint',
    path: '/change-point',
    component: () => import('@/views/ChangePoint.vue'),
    //beforeEnter: authGuard,
  },
  {
    name: 'Notifications',
    path: '/notifications',
    component: () => import('@/views/Notifications.vue'),
    //beforeEnter: authGuard,
  },
  {
    name: 'Carts',
    path: '/carts',
    component: () => import('@/views/Carts.vue'),
    //beforeEnter: authGuard,
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  //history: createMemoryHistory(),
  routes,
});

/*Nav guard
const session = useSession()
const isAuthenticated = computed(() => session.login)

router.beforeEach((to, next) => {
	console.log(isAuthenticated.value)
}) */

export default router;
