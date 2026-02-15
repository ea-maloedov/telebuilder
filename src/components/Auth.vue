<template>
  <div
    class="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-sans relative overflow-hidden"
  >
    <!-- Декоративные элементы фона (в стиле лендинга) -->
    <div
      class="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 blur-[100px] rounded-full -z-10"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/50 blur-[100px] rounded-full -z-10"
    ></div>

    <!-- Вернуться на главную -->
    <a
      href="/"
      class="absolute top-10 left-10 flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors group"
    >
      <svg
        class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      На главную
    </a>

    <div class="w-full max-w-[480px]" data-aos="zoom-in">
      <!-- Логотип -->
      <div class="flex flex-col items-center mb-10">
        <div
          class="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-blue-500/30 mb-4"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h2 class="text-3xl font-black text-slate-900 tracking-tight">
          {{ isLogin ? 'С возвращением' : 'Создать аккаунт' }}
        </h2>
        <p class="text-slate-500 mt-2 font-medium">
          {{
            isLogin ? 'Войдите в панель управления ботами' : 'Начните автоматизацию своего бизнеса'
          }}
        </p>
      </div>

      <!-- Основная карточка -->
      <div
        class="bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] p-10 relative"
      >
        <!-- Переключатель вкладок (Flat Style) -->
        <div class="flex bg-slate-50 p-1.5 rounded-2xl mb-8">
          <button
            @click="isLogin = true"
            :class="isLogin ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'"
            class="flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300"
          >
            Вход
          </button>
          <button
            @click="isLogin = false"
            :class="!isLogin ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'"
            class="flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300"
          >
            Регистрация
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Поле Имя (только для регистрации) -->
          <div v-if="!isLogin" class="space-y-2 group">
            <label class="text-xs font-black uppercase tracking-widest text-slate-400 ml-1"
              >Как вас зовут?</label
            >
            <div class="relative">
              <input
                type="text"
                placeholder="Иван Иванов"
                class="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium placeholder:text-slate-300"
              />
            </div>
          </div>

          <!-- Поле Email -->
          <div class="space-y-2">
            <label class="text-xs font-black uppercase tracking-widest text-slate-400 ml-1"
              >E-mail адрес</label
            >
            <input
              type="email"
              placeholder="name@company.com"
              class="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium placeholder:text-slate-300"
            />
          </div>

          <!-- Поле Пароль -->
          <div class="space-y-2">
            <div class="flex justify-between items-center px-1">
              <label class="text-xs font-black uppercase tracking-widest text-slate-400"
                >Пароль</label
              >
              <a
                v-if="isLogin"
                href="#"
                class="text-[10px] font-black uppercase text-blue-600 hover:underline"
                >Забыли?</a
              >
            </div>
            <input
              type="password"
              placeholder="••••••••"
              class="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium placeholder:text-slate-300"
            />
          </div>

          <!-- Кнопка действия -->
          <button
            class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            {{ isLogin ? 'Войти в систему' : 'Создать аккаунт' }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </form>

        <!-- Разделитель -->
        <div class="relative my-10">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-slate-100"></div>
          </div>
          <div class="relative flex justify-center text-xs uppercase font-bold">
            <span class="bg-white px-4 text-slate-400">Или через</span>
          </div>
        </div>

        <!-- Соцсети -->
        <div class="grid grid-cols-2 gap-4">
          <button
            class="flex items-center justify-center gap-3 py-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors font-bold text-sm text-slate-700"
          >
            <img src="https://www.svgrepo.com" class="w-5 h-5" /> Google
          </button>
          <button
            class="flex items-center justify-center gap-3 py-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors font-bold text-sm text-slate-700"
          >
            <img src="https://www.svgrepo.com" class="w-5 h-5" /> Telegram
          </button>
        </div>
      </div>

      <!-- Нижний текст -->
      <p class="text-center mt-8 text-slate-400 text-sm font-medium">
        Продолжая, вы соглашаетесь с
        <a href="#" class="text-slate-900 underline underline-offset-4 hover:text-blue-600"
          >условиями использования</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLogin = ref(true)

const handleSubmit = () => {
  // Имитация загрузки
  console.log('Form submitted')
}
</script>

<style scoped>
/* Анимация переключения форм */
.form-enter-active,
.form-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.form-enter-from,
.form-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
