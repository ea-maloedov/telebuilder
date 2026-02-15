<template>
  <div class="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900">
    <!-- 1. SIDEBAR -->
    <aside
      class="w-72 bg-white border-r border-slate-100 flex flex-col hidden lg:flex fixed h-full"
    >
      <div class="p-8 flex items-center gap-3">
        <div
          class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <span class="text-xl font-black tracking-tight"
          >TeleBuild<span class="text-blue-600">.</span></span
        >
      </div>

      <nav class="flex-1 px-4 space-y-2 mt-4">
        <router-link
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          v-slot="{ isActive, isExactActive }"
        >
          <div
            :class="
              /* Используем isExactActive для точного совпадения,
         либо isActive для дочерних страниц */
              (item.path === '/dashboard' ? isExactActive : isActive)
                ? 'bg-blue-50 text-blue-600'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            "
            class="flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all group cursor-pointer"
          >
            <span class="text-xl group-hover:scale-110 transition-transform">{{ item.icon }}</span>
            {{ item.name }}
          </div>
        </router-link>
      </nav>

      <div class="p-6 border-t border-slate-50">
        <div class="bg-slate-900 rounded-[2rem] p-6 text-white relative overflow-hidden">
          <div class="relative z-10">
            <p class="text-xs font-bold opacity-60 uppercase tracking-widest mb-1 text-blue-400">
              Тариф Pro
            </p>
            <p class="text-sm font-bold mb-4">Осталось 12 дней</p>
            <button
              class="w-full bg-white text-slate-900 py-2.5 rounded-xl text-xs font-black hover:bg-blue-50 transition-colors"
            >
              Продлить
            </button>
          </div>
          <div
            class="absolute -right-4 -bottom-4 w-20 h-20 bg-blue-600/20 rounded-full blur-2xl"
          ></div>
        </div>
      </div>
    </aside>

    <!-- 2. MAIN CONTENT AREA -->
    <main class="flex-1 flex flex-col min-w-0 lg:ml-72">
      <!-- HEADER -->
      <header
        class="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30"
      >
        <h1 class="text-xl font-black">
          {{ $route.name === 'Overview' ? 'Мои боты' : $route.name }}
        </h1>

        <div class="flex items-center gap-6">
          <div class="relative hidden sm:block">
            <input
              type="text"
              placeholder="Поиск ботов..."
              class="pl-11 pr-4 py-2.5 bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 border-2 rounded-xl text-sm outline-none transition-all w-64"
            />
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          </div>
          <button
            class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors relative"
          >
            🔔
            <span
              class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"
            ></span>
          </button>
          <div class="flex items-center gap-3 pl-6 border-l border-slate-100">
            <div class="text-right hidden sm:block">
              <p class="text-xs font-black text-slate-900 leading-none mb-1">Александр В.</p>
              <p class="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                ID: 45092
              </p>
            </div>
            <img
              src="https://i.pravatar.cc"
              class="w-10 h-10 rounded-2xl object-cover ring-2 ring-slate-100"
            />
          </div>
        </div>
      </header>

      <!-- DINAMIC CONTENT -->
      <div class="p-8 lg:p-12">
        <router-view v-slot="{ Component }">
          <transition name="page-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
const menu = [
  { name: 'Дашборд', icon: '🏠', path: '/dashboard' },
  { name: 'Конструктор', icon: '🧩', path: '/dashboard/builder' },
  { name: 'Аналитика', icon: '📊', path: '/dashboard/analytics' },
  { name: 'Рассылки', icon: '✉️', path: '/dashboard/broadcast' },
  { name: 'Настройки', icon: '⚙️', path: '/dashboard/settings' },
]
</script>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.25s ease;
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
