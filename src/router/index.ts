import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Импорт компонентов (предполагаем стандартную структуру src/views)
const HomeView = () => import('../views/Home.vue')
const AuthView = () => import('../views/Auth.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'КУБ - Конструктор Управления Бизнесом',
      requiresAuth: false,
    },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthView,
    meta: {
      title: 'Вход в систему | КУБ',
      requiresAuth: false,
    },
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardLayout.vue'), // Оболочка с сайдбаром
    children: [
      { path: '', name: 'Overview', component: () => import('../views/dash/Overview.vue') },
      { path: 'builder', name: 'Builder', component: () => import('../views/dash/Builder.vue') },
      {
        path: 'analytics',
        name: 'Analytics',
        component: () => import('../views/dash/Analytics.vue'),
      },
      {
        path: 'broadcast',
        name: 'Broadcast',
        component: () => import('../views/dash/Broadcast.vue'),
      },
      { path: 'settings', name: 'Settings', component: () => import('../views/dash/Settings.vue') },
      { path: 'bookings', name: 'Bookings', component: () => import('../views/dash/Bookings.vue') },
      { path: 'clients', name: 'Clients', component: () => import('../views/dash/Clients.vue') },
      { path: 'finance', name: 'Finances', component: () => import('../views/dash/Finance.vue') },
      { path: 'bot', name: 'Bot', component: () => import('../views/dash/Bot.vue') },
      {
        path: 'business',
        name: 'Business',
        component: () => import('../views/dash/business/Business.vue'),
      },
    ],
  },
  // Редирект на главную для несуществующих страниц
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  // ЗАМЕНИТЕ process.env.BASE_URL на import.meta.env.BASE_URL
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  },
})

// Глобальный хук для смены заголовков страниц
router.beforeEach((to, from, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = title
  }
  next()
})

export default router
