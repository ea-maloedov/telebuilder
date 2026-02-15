<template>
  <div
    class="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700"
  >
    <!-- 1. NAVIGATION -->
    <nav
      :class="{
        'py-4 shadow-sm bg-white/80 backdrop-blur-md': scrolled,
        'py-6 bg-transparent': !scrolled,
      }"
      class="fixed w-full z-[100] transition-all duration-300 border-b border-slate-100"
    >
      <div class="container mx-auto px-6 flex justify-between items-center">
        <div class="flex items-center gap-2 group cursor-pointer">
          <div
            class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span class="text-xl font-bold tracking-tight text-slate-800"
            >TeleBuild<span class="text-blue-600">.</span></span
          >
        </div>

        <div class="hidden lg:flex items-center gap-10">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >{{ link.name }}</a
          >
        </div>

        <div class="flex items-center gap-4">
          <button class="hidden sm:block text-sm font-bold text-slate-700 hover:text-blue-600 px-4">
            Вход
          </button>
          <button
            class="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all active:scale-95"
          >
            Создать бота
          </button>
        </div>
      </div>
    </nav>

    <!-- 2. HERO SECTION -->
    <header class="relative pt-48 pb-32 overflow-hidden">
      <!-- Фон с легким паттерном -->
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"
      ></div>

      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2" data-aos="fade-right">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Конструктор нового поколения
            </div>
            <h1
              class="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter"
            >
              Ваш бизнес в <br />
              <span class="text-blue-600">Telegram</span> за считанные минуты
            </h1>
            <p class="text-xl text-slate-500 max-w-xl mb-10 leading-relaxed font-medium">
              Интуитивно понятный визуальный редактор, который превращает сложные алгоритмы в
              простые цепочки сообщений. Без единой строчки кода.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex -space-x-3 mb-4 sm:mb-0 mr-6">
                <img
                  v-for="i in 4"
                  :key="i"
                  :src="`https://i.pravatar.cc{i}`"
                  class="w-12 h-12 rounded-full border-4 border-white object-cover"
                />
                <div
                  class="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500"
                >
                  +2k
                </div>
              </div>
              <p class="w-full sm:w-auto text-sm text-slate-500 self-center">
                Доверяют более 2,400+ предпринимателей
              </p>
            </div>
          </div>

          <div class="lg:w-1/2 relative" data-aos="fade-left">
            <!-- Декоративное окно приложения -->
            <div
              class="relative bg-white rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-slate-200 p-4"
            >
              <div
                class="rounded-2xl overflow-hidden bg-slate-50 aspect-[4/3] flex items-center justify-center border border-slate-100"
              >
                <!-- Схематичный UI конструктора -->
                <div class="grid grid-cols-3 gap-4 p-8 w-full h-full">
                  <div
                    v-for="n in 6"
                    :key="n"
                    class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-2"
                  >
                    <div class="w-8 h-2 bg-blue-100 rounded-full"></div>
                    <div class="w-full h-2 bg-slate-100 rounded-full"></div>
                    <div class="w-2/3 h-2 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
              </div>
              <!-- Floating elements -->
              <div
                class="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce"
              >
                🚀 <span class="ml-2 font-bold">Опубликовано!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 3. FEATURES (9 элементов) -->
    <section id="features" class="py-32 bg-white">
      <div class="container mx-auto px-6 text-center mb-20">
        <h2 class="text-4xl font-black mb-4">Почему выбирают нас?</h2>
        <div class="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      <div class="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div
          v-for="(feat, idx) in features"
          :key="idx"
          class="p-10 rounded-[2.5rem] border border-slate-100 bg-[#FBFDFF] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group"
        >
          <div
            class="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform"
          >
            {{ feat.icon }}
          </div>
          <h3 class="text-xl font-bold mb-4 text-slate-800">{{ feat.title }}</h3>
          <p class="text-slate-500 leading-relaxed">{{ feat.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 4. HOW IT WORKS (Шаги) -->
    <section class="py-32 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-20 items-center">
          <div class="lg:w-1/2">
            <h2 class="text-5xl font-black mb-12">
              Три шага до <br />
              первого клиента
            </h2>
            <div class="space-y-12">
              <div v-for="(step, i) in steps" :key="i" class="flex gap-6">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg shadow-blue-600/30"
                >
                  {{ i + 1 }}
                </div>
                <div>
                  <h4 class="text-2xl font-bold mb-2">{{ step.title }}</h4>
                  <p class="text-slate-500 text-lg leading-relaxed">{{ step.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 bg-blue-600 rounded-[3rem] p-12 text-white">
            <h3 class="text-3xl font-bold mb-8 italic">
              "Мы увеличили продажи в 3 раза за первый месяц работы бота"
            </h3>
            <div class="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc"
                class="w-16 h-16 rounded-full grayscale border-2 border-white/20"
              />
              <div>
                <p class="font-bold">Александр Воронин</p>
                <p class="text-blue-200 text-sm">CEO CoffeeShop CRM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. PRICING -->
    <section id="pricing" class="py-32 bg-white">
      <div class="container mx-auto px-6 text-center mb-20">
        <h2 class="text-5xl font-black mb-6 tracking-tight">Честные тарифы</h2>
        <p class="text-slate-500 text-xl max-w-2xl mx-auto font-medium">
          Никаких скрытых платежей. Платите только за то, что реально используете.
        </p>
      </div>
      <div class="container mx-auto px-6 grid md:grid-cols-3 gap-8 max-w-6xl">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="
            plan.popular
              ? 'border-blue-600 ring-4 ring-blue-50 shadow-2xl scale-105 z-10'
              : 'border-slate-100'
          "
          class="relative bg-white border p-10 rounded-[3rem] transition-transform hover:translate-y-[-10px] duration-500"
        >
          <div
            v-if="plan.popular"
            class="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest"
          >
            Популярный
          </div>
          <h4 class="text-2xl font-black mb-2">{{ plan.name }}</h4>
          <div class="mb-8">
            <span class="text-5xl font-black text-slate-900">{{ plan.price }}</span>
            <span class="text-slate-400 font-bold ml-2">/мес</span>
          </div>
          <ul class="space-y-5 mb-10">
            <li
              v-for="opt in plan.features"
              :key="opt"
              class="flex items-center gap-3 text-slate-600 font-medium"
            >
              <svg
                class="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {{ opt }}
            </li>
          </ul>
          <button
            :class="
              plan.popular
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30'
                : 'bg-slate-100 text-slate-800'
            "
            class="w-full py-4 rounded-2xl font-black transition-all active:scale-95"
          >
            Выбрать {{ plan.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- 6. FAQ (Accordion) -->
    <section class="py-32 bg-[#FBFDFF] border-t border-slate-100">
      <div class="container mx-auto px-6 max-w-3xl">
        <h2 class="text-4xl font-black text-center mb-16">Часто задаваемые вопросы</h2>
        <div class="space-y-4">
          <div
            v-for="(q, i) in faqs"
            :key="i"
            class="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm"
          >
            <button
              @click="toggleFaq(i)"
              class="w-full px-8 py-6 text-left flex justify-between items-center group"
            >
              <span class="font-bold text-lg group-hover:text-blue-600 transition-colors">{{
                q.question
              }}</span>
              <span
                class="text-2xl transition-transform duration-300"
                :class="{ 'rotate-45': activeFaq === i }"
                >+</span
              >
            </button>
            <div v-show="activeFaq === i" class="px-8 pb-6 text-slate-500 leading-relaxed">
              {{ q.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. CTA -->
    <section class="py-20 px-6">
      <div
        class="container mx-auto max-w-6xl bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"
        ></div>
        <h2 class="text-4xl md:text-6xl font-black mb-8 relative">
          Готовы автоматизировать <br />
          свой успех?
        </h2>
        <p class="text-slate-400 text-xl mb-12 max-w-xl mx-auto">
          Создайте своего первого бота сегодня и получите 7 дней премиум-доступа в подарок.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <input
            type="email"
            placeholder="Ваш e-mail"
            class="px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80 transition-all"
          />
          <button
            class="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-blue-50 transition-colors"
          >
            Начать сейчас
          </button>
        </div>
      </div>
    </section>

    <!-- 8. FOOTER -->
    <footer class="pt-32 pb-12 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div class="col-span-2">
            <div class="text-2xl font-black mb-8">
              TeleBuild<span class="text-blue-600">.</span>
            </div>
            <p class="text-slate-400 max-w-xs mb-8">
              Делаем создание ботов таким же простым, как написание сообщения другу.
            </p>
            <div class="flex gap-4">
              <div
                v-for="s in 4"
                :key="s"
                class="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center cursor-pointer hover:text-blue-600 hover:border-blue-600 transition-all"
              >
                #
              </div>
            </div>
          </div>
          <div v-for="c in footerCols" :key="c.title">
            <h5 class="font-black uppercase text-xs tracking-[0.2em] mb-8 text-slate-400">
              {{ c.title }}
            </h5>
            <ul class="space-y-4">
              <li v-for="l in c.links" :key="l">
                <a
                  href="#"
                  class="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >{{ l }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-medium uppercase tracking-widest"
        >
          <p>© 2024 TeleBuild AI. Все права защищены.</p>
          <div class="flex gap-8">
            <a href="#" class="hover:text-blue-600">Политика</a>
            <a href="#" class="hover:text-blue-600">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const scrolled = ref(false)
const activeFaq = ref(null)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  AOS.init({ duration: 1200, once: true, offset: 100 })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'Возможности', href: '#features' },
  { name: 'Кейсы', href: '#' },
  { name: 'Тарифы', href: '#pricing' },
  { name: 'Документация', href: '#' },
]

const features = [
  {
    icon: '🧩',
    title: 'Визуальный Builder',
    desc: 'Забудьте о коде. Перетаскивайте блоки, соединяйте их и создавайте сценарии любой сложности в интуитивном редакторе.',
  },
  {
    icon: '🤖',
    title: 'AI Ассистент',
    desc: 'Интегрируйте ChatGPT за 30 секунд. Ваш бот будет не просто отвечать по скрипту, а реально понимать клиентов.',
  },
  {
    icon: '💳',
    title: 'Платежи 2.0',
    desc: 'Принимайте оплату прямо внутри Telegram через Stripe, ЮKassa или крипто-кошельки с автоматической выдачей товара.',
  },
  {
    icon: '📊',
    title: 'Live Аналитика',
    desc: 'Следите за воронкой продаж, активностью пользователей и CTR каждой кнопки в реальном времени в личном кабинете.',
  },
  {
    icon: '⚡',
    title: 'Мгновенный деплой',
    desc: 'Внесли изменения? Они обновятся у всех пользователей бота мгновенно без перезагрузок и ожидания.',
  },
  {
    icon: '🔌',
    title: '200+ Интеграций',
    desc: 'Связывайте бота с Google Sheets, Notion, Bitrix24 и вашей CRM через мощный API или Webhooks.',
  },
  {
    icon: '💬',
    title: 'Рассылки Smart',
    desc: 'Сегментируйте аудиторию по тегам и делайте персонализированные рассылки, которые не попадают в спам.',
  },
  {
    icon: '🛡️',
    title: 'Безопасность',
    desc: 'Ваши данные и токены ботов хранятся в зашифрованном виде на защищенных серверах уровня Tier-3.',
  },
  {
    icon: '🌍',
    title: 'Мультиязычность',
    desc: 'Создавайте ботов, которые автоматически определяют язык пользователя и говорят с ним на его языке.',
  },
]

const steps = [
  {
    title: 'Подключите API Token',
    desc: 'Получите токен у @BotFather и вставьте его в нашу панель. Это займет ровно 30 секунд.',
  },
  {
    title: 'Соберите сценарий',
    desc: 'Используйте готовые шаблоны для магазинов, опросов или техподдержки или создайте свой с нуля.',
  },
  {
    title: 'Запустите и масштабируйте',
    desc: 'Нажмите кнопку "Опубликовать". Анализируйте поведение юзеров и улучшайте бота "на лету".',
  },
]

const plans = [
  {
    name: 'Старт',
    price: '$0',
    features: ['1 активный бот', '100 пользователей', 'Визуальный редактор', 'Базовая статистика'],
    popular: false,
  },
  {
    name: 'Бизнес',
    price: '$49',
    features: [
      '5 активных ботов',
      'Безлимит сообщений',
      'AI Интеграции',
      'Индивидуальный брендинг',
      'API доступ',
    ],
    popular: true,
  },
  {
    name: 'Pro',
    price: '$129',
    features: [
      '20 ботов',
      'Whitelabel решение',
      'Приоритетная поддержка',
      'Выделенный сервер',
      'Обучение команды',
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: 'Нужны ли мне навыки программирования?',
    answer:
      'Абсолютно нет! Наш сервис создан специально для владельцев бизнеса и маркетологов. Если вы умеете пользоваться мышкой, вы сможете собрать бота.',
  },
  {
    question: 'Могу ли я подключить свою CRM?',
    answer:
      'Да, мы поддерживаем прямые интеграции с популярными CRM, а также имеем открытый API для кастомных решений.',
  },
  {
    question: 'Есть ли бесплатный период?',
    answer:
      'Мы предлагаем полностью бесплатный тариф "Старт", который не ограничен по времени, чтобы вы могли протестировать функционал.',
  },
]

const footerCols = [
  { title: 'Продукт', links: ['Конструктор', 'Примеры', 'Шаблоны', 'Обновления'] },
  { title: 'Обучение', links: ['База знаний', 'Видео-курсы', 'Вебинары', 'Сообщество'] },
  { title: 'Сервис', links: ['Статус', 'API', 'Поддержка', 'Безопасность'] },
]
</script>

<style>
/* Кастомные анимации и шрифты */
@import url('https://fonts.googleapis.com');

html {
  scroll-behavior: smooth;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

body {
  overflow-x: hidden;
}

/* Плавная анимация появления карточек */
.aos-init {
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1) !important;
}

/* Эффект при наведении на кнопки */
button {
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
}
</style>
