<template>
  <div class="min-h-screen bg-white flex font-sans text-slate-900">
    <!-- ЛЕВАЯ ЧАСТЬ: Контент (Видна только на десктопах) -->
    <div
      class="hidden lg:flex lg:w-1/2 bg-[#F8FAFC] relative overflow-hidden items-center justify-center p-12 border-r border-slate-100"
    >
      <!-- Декоративный паттерн как на лендинге -->
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-40"
      ></div>

      <div class="max-w-lg" data-aos="fade-right">
        <a
          href="/"
          class="inline-flex items-center gap-2 text-blue-600 font-bold mb-12 hover:gap-3 transition-all"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Вернуться на сайт
        </a>

        <h2 class="text-5xl font-black leading-tight mb-8">
          Управляйте записью <br />
          и доходом через <br />
          <span class="text-blue-600">Telegram</span>.
        </h2>

        <div class="space-y-8">
          <div v-for="(item, i) in promo" :key="i" class="flex gap-4">
            <div
              class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-xl border border-slate-100"
            >
              {{ item.icon }}
            </div>
            <div>
              <h4 class="font-bold text-lg">{{ item.title }}</h4>
              <p class="text-slate-500">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ПРАВАЯ ЧАСТЬ: Форма -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white">
      <div class="w-full max-w-md" data-aos="fade-up">
        <!-- Мобильное лого -->
        <div class="lg:hidden flex justify-center mb-8">
          <div
            class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        <h1 class="text-3xl font-black mb-2 tracking-tight text-center lg:text-left">
          {{ isLogin ? 'Вход в КУБ' : 'Создать аккаунт в КУБ' }}
        </h1>

        <p class="text-slate-500 mb-10 text-center lg:text-left font-medium">
          {{
            isLogin
              ? 'Введите данные, чтобы продолжить работу.'
              : 'Создайте аккаунт и подключите своего Telegram-бота.'
          }}
        </p>

        <!-- Переключатель (Minimalist) -->
        <div class="inline-flex bg-slate-100 p-1 rounded-xl mb-10 w-full">
          <button
            @click="isLogin = true"
            :class="isLogin ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'"
            class="flex-1 py-2.5 rounded-lg text-sm font-bold transition-all"
          >
            Вход
          </button>
          <button
            @click="isLogin = false"
            :class="!isLogin ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'"
            class="flex-1 py-2.5 rounded-lg text-sm font-bold transition-all"
          >
            Регистрация
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div v-if="!isLogin" class="space-y-1.5">
            <label class="text-xs font-black uppercase tracking-widest text-slate-400 ml-1"
              >Имя</label
            >
            <input
              type="text"
              placeholder="Иван"
              class="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white transition-all outline-none font-medium"
            />
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-black uppercase tracking-widest text-slate-400 ml-1"
              >E-mail</label
            >
            <input
              type="email"
              placeholder="your@email.com"
              class="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white transition-all outline-none font-medium"
            />
          </div>

          <div class="space-y-1.5">
            <div class="flex justify-between px-1">
              <label class="text-xs font-black uppercase tracking-widest text-slate-400"
                >Пароль</label
              >
              <a
                v-if="isLogin"
                href="#"
                class="text-[10px] font-black text-blue-600 uppercase hover:underline"
                >Забыли?</a
              >
            </div>
            <input
              type="password"
              placeholder="••••••••"
              class="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white transition-all outline-none font-medium"
            />
          </div>

          <button
            @click="goToDashboard"
            class="w-full bg-slate-900 text-white py-5 rounded-xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 mt-4"
          >
            {{ isLogin ? 'Войти в панель' : 'Создать аккаунт' }}
          </button>
          <p class="text-xs text-slate-400 text-center mt-6">
            Подключение бота занимает 3–5 минут.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router/index.ts'

const isLogin = ref(true)

const goToDashboard = () => {
  router.push('/dashboard/')
}

const promo = [
  {
    icon: '🤖',
    title: 'Бот работает за вас',
    desc: 'Принимает записи и отвечает клиентам 24/7.',
  },
  {
    icon: '📅',
    title: 'Всё в одном месте',
    desc: 'Расписание, клиенты и доход — в одной панели.',
  },
  {
    icon: '🔔',
    title: 'Меньше неявок',
    desc: 'Автоматические напоминания клиентам.',
  },
]

const handleSubmit = () => router.push('/dashboard')
</script>
