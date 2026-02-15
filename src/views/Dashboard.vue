<template>
  <div class="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900">
    <!-- 1. SIDEBAR -->
    <aside class="w-72 bg-white border-r border-slate-100 flex flex-col hidden lg:flex">
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
        <a
          v-for="item in menu"
          :key="item.name"
          href="#"
          :class="
            item.active
              ? 'bg-blue-50 text-blue-600'
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
          "
          class="flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all group"
        >
          <span class="text-xl group-hover:scale-110 transition-transform">{{ item.icon }}</span>
          {{ item.name }}
        </a>
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

    <!-- 2. MAIN CONTENT -->
    <main class="flex-1 flex flex-col min-w-0">
      <!-- HEADER -->
      <header
        class="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30"
      >
        <h1 class="text-xl font-black">Мои боты</h1>

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

      <!-- DASHBOARD BODY -->
      <div class="p-8 lg:p-12 overflow-y-auto">
        <!-- Stats Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all"
          >
            <p class="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
              {{ stat.label }}
            </p>
            <div class="flex items-end justify-between">
              <h3 class="text-4xl font-black text-slate-900">{{ stat.value }}</h3>
              <span
                :class="stat.trendUp ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50'"
                class="px-3 py-1 rounded-full text-xs font-bold italic"
              >
                {{ stat.trendUp ? '↑' : '↓' }} {{ stat.trend }}
              </span>
            </div>
          </div>
        </div>

        <!-- Bots Grid Header -->
        <div
          class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <h2 class="text-2xl font-black mb-1">Активные проекты</h2>
            <p class="text-slate-400 font-medium">У вас запущено 3 из 5 доступных ботов</p>
          </div>
          <button
            class="bg-blue-600 text-white px-8 py-4 rounded-[1.5rem] font-black hover:bg-blue-700 shadow-xl shadow-blue-600/20 active:scale-95 transition-all flex items-center gap-3"
          >
            <span>+</span> Создать нового бота
          </button>
        </div>

        <!-- Bots List -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div
            v-for="bot in bots"
            :key="bot.name"
            class="group bg-white border border-slate-100 p-8 rounded-[3rem] hover:border-blue-600/30 transition-all relative overflow-hidden"
          >
            <div class="flex gap-6 items-start">
              <div
                :class="bot.color"
                class="w-20 h-20 rounded-[2rem] flex items-center justify-center text-3xl shadow-inner"
              >
                {{ bot.icon }}
              </div>
              <div class="flex-1">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-xl font-black">{{ bot.name }}</h4>
                  <span
                    class="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-[10px] font-black uppercase tracking-widest"
                    >Active</span
                  >
                </div>
                <p class="text-slate-500 text-sm mb-6 leading-relaxed">{{ bot.desc }}</p>

                <div
                  class="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest"
                >
                  <div class="flex items-center gap-2">
                    👥 <span class="text-slate-900">{{ bot.users }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    💬 <span class="text-slate-900">{{ bot.msgs }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-8 border-t border-slate-50 flex gap-3">
              <button
                class="flex-1 py-3.5 bg-slate-50 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all"
              >
                Конструктор
              </button>
              <button
                class="px-5 py-3.5 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors"
              >
                ⚙️
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const menu = [
  { name: 'Дашборд', icon: '🏠', active: true },
  { name: 'Конструктор', icon: '🧩', active: false },
  { name: 'Аналитика', icon: '📊', active: false },
  { name: 'Рассылки', icon: '✉️', active: false },
  { name: 'Интеграции', icon: '🔌', active: false },
  { name: 'Настройки', icon: '⚙️', active: false },
]

const stats = [
  { label: 'Всего юзеров', value: '12,402', trend: '12%', trendUp: true },
  { label: 'Диалогов за 24ч', value: '841', trend: '4%', trendUp: false },
  { label: 'Конверсия', value: '28.4%', trend: '2%', trendUp: true },
]

const bots = [
  {
    name: 'Coffee Shop Bot',
    desc: 'Прием заказов и программа лояльности для сети кофейн в Москве.',
    icon: '☕',
    color: 'bg-orange-50',
    users: '2.4k',
    msgs: '15.2k',
  },
  {
    name: 'Support AI Helper',
    desc: 'Автоматическая поддержка клиентов с использованием ChatGPT-4.',
    icon: '🤖',
    color: 'bg-purple-50',
    users: '840',
    msgs: '4.1k',
  },
]
</script>

<style scoped>
/* Плавный скролл для контента */
main {
  scrollbar-width: thin;
  scrollbar-color: #e2e8f0 transparent;
}
</style>
