<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 flex">
    <!-- ================= SIDEBAR DESKTOP ================= -->
    <aside class="hidden lg:flex w-72 flex-col bg-white border-r border-slate-200 fixed inset-y-0">
      <!-- Logo -->
      <div class="h-20 flex items-center px-8 border-b border-slate-100">
        <span class="text-xl font-black tracking-tight">
          КУБ<span class="text-blue-600">.</span>
        </span>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-1">
        <router-link
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          v-slot="{ isExactActive }"
        >
          <div
            :class="[
              'group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200',
              isExactActive
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
            ]"
          >
            <component
              :is="item.icon"
              class="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
            />
            {{ item.name }}
          </div>
        </router-link>
      </nav>

      <!-- Plan block -->
      <div class="p-6 border-t border-slate-100">
        <div class="bg-slate-900 text-white rounded-2xl p-6">
          <p class="text-xs uppercase tracking-widest text-blue-400 font-bold mb-1">
            Текущий тариф
          </p>
          <p class="text-lg font-black mb-1">Бизнес</p>
          <p class="text-xs opacity-70 mb-4">До 3 ботов · авто-напоминания</p>
          <button
            class="w-full bg-white text-slate-900 py-2 rounded-xl text-xs font-bold hover:bg-blue-50 transition"
          >
            Управление тарифом
          </button>
        </div>
      </div>
    </aside>

    <!-- ================= MAIN AREA ================= -->
    <div class="flex-1 flex flex-col lg:ml-72 min-w-0">
      <!-- Header -->
      <header
        class="sticky top-0 z-40 h-16 backdrop-blur-md bg-white/70 border-b border-slate-200/60"
      >
        <div class="h-full px-6 lg:px-10 flex items-center justify-between">
          <!-- LEFT -->
          <div class="flex items-center gap-4">
            <!-- Mobile menu -->
            <button
              class="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
              @click="mobileOpen = true"
            >
              <Menu class="w-5 h-5 text-slate-700" />
            </button>

            <h1 class="text-base lg:text-lg font-semibold tracking-tight text-slate-900">
              {{ pageTitle }}
            </h1>
          </div>

          <!-- RIGHT -->
          <div class="flex items-center gap-3">
            <!-- Search -->
            <div class="relative hidden md:block">
              <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Поиск..."
                class="pl-9 pr-3 py-1.5 w-56 text-sm bg-transparent border border-transparent focus:border-slate-300 focus:bg-white/50 rounded-lg outline-none transition"
              />
            </div>

            <!-- Quick action -->
            <!--            <Button size="sm" class="hidden sm:inline-flex gap-2 rounded-lg font-medium">-->
            <!--              <Plus class="w-4 h-4" />-->
            <!--              Новая-->
            <!--            </Button>-->

            <!-- Notifications -->
            <button
              class="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Bell class="w-4 h-4 text-slate-700" />
              <span class="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>

            <!-- Avatar -->
            <img src="https://i.pravatar.cc/100" class="w-9 h-9 rounded-xl object-cover" />
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-6 lg:p-10">
        <router-view v-slot="{ Component }">
          <transition name="page-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>

    <!-- ================= MOBILE SIDEBAR ================= -->
    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 bg-black/30 z-40 lg:hidden"
        @click="mobileOpen = false"
      ></div>
    </transition>

    <transition name="slide">
      <aside v-if="mobileOpen" class="fixed inset-y-0 left-0 w-72 bg-white z-50 p-6 lg:hidden">
        <div class="flex justify-between items-center mb-8">
          <span class="text-xl font-black"> КУБ<span class="text-blue-600">.</span> </span>
          <button @click="mobileOpen = false">✕</button>
        </div>

        <nav class="space-y-2">
          <router-link
            v-for="item in menu"
            :key="item.name"
            :to="item.path"
            @click="mobileOpen = false"
          >
            <div
              class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <component :is="item.icon" class="w-4 h-4" />
              {{ item.name }}
            </div>
          </router-link>
        </nav>
      </aside>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Wallet,
  Bot,
  Send,
  Settings,
  Bell,
  Search,
  Plus,
  Menu,
  Briefcase,
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
const mobileOpen = ref(false)
const route = useRoute()

const menu = [
  { name: 'Обзор', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Бизнес', icon: Briefcase, path: '/dashboard/business' },
  { name: 'Записи', icon: CalendarDays, path: '/dashboard/bookings' },
  { name: 'Клиенты', icon: Users, path: '/dashboard/clients' },
  { name: 'Доход', icon: Wallet, path: '/dashboard/finance' },
  { name: 'Бот', icon: Bot, path: '/dashboard/bot' },
  { name: 'Рассылки', icon: Send, path: '/dashboard/broadcast' },
  { name: 'Настройки', icon: Settings, path: '/dashboard/settings' },
]

const pageTitle = computed(() => {
  const map = {
    '/dashboard': 'Обзор бизнеса',
    '/dashboard/business': 'Бизнес',
    '/dashboard/bookings': 'Записи',
    '/dashboard/clients': 'Клиенты',
    '/dashboard/finance': 'Доход и финансы',
    '/dashboard/bot': 'Настройки бота',
    '/dashboard/broadcast': 'Рассылки',
    '/dashboard/settings': 'Настройки',
  }
  return map[route.path] || 'Панель управления'
})
</script>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.2s ease;
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
