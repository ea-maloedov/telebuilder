<template>
  <div
    class="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden"
  >
    <!-- NAVBAR -->
    <nav
      :class="{ 'shadow-sm bg-white/80 backdrop-blur-md': scrolled, 'bg-transparent': !scrolled }"
      class="fixed w-full z-[100] transition-all duration-300 border-b border-slate-100 h-20 flex items-center"
    >
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
        <div class="flex items-center gap-3 group cursor-pointer" @click="scrollToTop">
          <div
            class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform"
          >
            <span class="font-black text-lg">К</span>
          </div>
          <span class="text-2xl font-black tracking-tighter text-slate-900 uppercase">
            Куб<span class="text-blue-600">.</span>
          </span>
        </div>

        <div class="hidden lg:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-[10px] font-black text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-[0.2em]"
            >{{ link.name }}</a
          >
        </div>

        <div class="flex items-center gap-4">
          <button
            @click="router.push('/auth')"
            class="hidden sm:block text-xs font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 px-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Вход
          </button>
          <button
            @click="router.push('/auth')"
            class="bg-blue-600 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-2xl text-xs sm:text-base font-black uppercase tracking-widest hover:bg-slate-900 shadow-xl shadow-blue-500/20 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Создать бота
          </button>
        </div>
      </div>
    </nav>

    <!-- HERO -->
    <header class="relative pt-48 pb-32 overflow-hidden">
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"
      ></div>
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-3/5" data-aos="fade-right">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-100"
            >
              Telegram-бот для мастеров и самозанятых
            </div>
            <h1
              class="text-3xl sm:text-4xl lg:text-[80px] font-black text-slate-900 leading-tight lg:leading-[0.9] mb-10 tracking-tighter"
            >
              Запись клиентов и учет дохода прямо в<span class="text-blue-600"> Telegram</span>
            </h1>
            <p class="text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
              Подключите своего Telegram-бота и начните принимать записи, обрабатывать клиентов
              24/7, бот напомнит о визитах и поможет считать прибыль. Без CRM. Без Excel.
            </p>
            <div class="flex flex-wrap gap-6 items-center">
              <button
                @click="router.push('/auth')"
                class="bg-blue-600 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-3xl font-black text-base sm:text-lg hover:bg-blue-700 shadow-2xl shadow-blue-500/30 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Создать бота бесплатно
              </button>
            </div>
          </div>

          <div class="lg:w-2/5 relative" data-aos="fade-left">
            <div
              class="relative bg-white rounded-[3rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.08)] border border-slate-200 p-5 rotate-3 hover:rotate-0 transition-transform duration-700"
            >
              <div
                class="bg-slate-50 rounded-[2rem] aspect-square p-8 border border-slate-100 flex flex-col gap-6"
              >
                <div class="w-1/2 h-4 bg-slate-200 rounded-full animate-pulse"></div>
                <div class="grid grid-cols-2 gap-4">
                  <div
                    class="h-32 bg-white border border-slate-100 rounded-3xl p-4 shadow-sm flex flex-col justify-end"
                  >
                    <div class="w-8 h-8 bg-blue-100 rounded-lg mb-2"></div>
                    <div class="w-full h-2 bg-slate-100 rounded-full"></div>
                  </div>
                  <div
                    class="h-32 bg-slate-900 rounded-3xl p-4 shadow-sm flex flex-col justify-end"
                  >
                    <div class="w-full h-2 bg-white/20 rounded-full"></div>
                  </div>
                </div>
                <div
                  class="w-full h-12 bg-blue-600 rounded-2xl mt-auto shadow-lg shadow-blue-500/20"
                ></div>
              </div>
              <div
                class="absolute -left-10 top-1/3 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 animate-bounce"
              >
                <p class="text-[10px] font-black text-slate-400 uppercase mb-1">Новая запись</p>
                <p class="font-bold text-sm">Стрижка: 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- PROBLEMS -->
    <section class="py-32 bg-[#F8FAFC]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-24" data-aos="fade-up">
          <h2 class="text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            Малый бизнес <span class="text-red-500">тонет</span> в хаосе
          </h2>
          <p class="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
            Пока вы работаете — процессы разваливаются.
          </p>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="(p, i) in problems"
            :key="i"
            class="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
          >
            <div class="text-4xl mb-6">{{ p.icon }}</div>
            <h4 class="text-lg font-black mb-4 uppercase tracking-tight">{{ p.title }}</h4>
            <p class="text-slate-500 text-sm font-medium leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!--    &lt;!&ndash; STATS &ndash;&gt;-->
    <!--    <section class="py-24 bg-white border-y border-slate-100">-->
    <!--      <div class="max-w-7xl mx-auto px-6">-->
    <!--        <div class="grid grid-cols-2 lg:grid-cols-4 gap-12">-->
    <!--          <div-->
    <!--            v-for="(s, i) in stats"-->
    <!--            :key="i"-->
    <!--            class="text-center"-->
    <!--            data-aos="fade-up"-->
    <!--            :data-aos-delay="i * 100"-->
    <!--          >-->
    <!--            <h3 class="text-5xl font-black mb-2 tracking-tighter text-slate-900">{{ s.value }}</h3>-->
    <!--            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">-->
    <!--              {{ s.label }}-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

    <section class="py-32 bg-white border-y border-slate-100">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-20" data-aos="fade-up">
          <h2 class="text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            Что вы получите <span class="text-blue-600">через 10 минут</span>
          </h2>
          <p class="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
            Подключаете бота — и начинаете работать системно.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-10">
          <div
            class="p-10 bg-[#F8FAFC] rounded-[3rem] border border-slate-100"
            data-aos="fade-right"
          >
            <h4 class="text-xl font-black mb-4">🤖 Готовый Telegram-бот</h4>
            <p class="text-slate-500 font-medium leading-relaxed">
              Клиенты записываются сами, без бесконечных переписок.
            </p>
          </div>

          <div
            class="p-10 bg-[#F8FAFC] rounded-[3rem] border border-slate-100"
            data-aos="fade-left"
          >
            <h4 class="text-xl font-black mb-4">📅 Ваше расписание в цифре</h4>
            <p class="text-slate-500 font-medium leading-relaxed">
              Все записи аккуратно собраны в одном календаре.
            </p>
          </div>

          <div
            class="p-10 bg-[#F8FAFC] rounded-[3rem] border border-slate-100"
            data-aos="fade-right"
          >
            <h4 class="text-xl font-black mb-4">🔔 Авто-напоминания</h4>
            <p class="text-slate-500 font-medium leading-relaxed">
              Бот сам напоминает клиентам о визите.
            </p>
          </div>

          <div
            class="p-10 bg-[#F8FAFC] rounded-[3rem] border border-slate-100"
            data-aos="fade-left"
          >
            <h4 class="text-xl font-black mb-4">💰 Понимание дохода</h4>
            <p class="text-slate-500 font-medium leading-relaxed">
              Вы видите, сколько реально зарабатываете.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="features" class="py-32">
      <div class="max-w-7xl mx-auto px-6">
        <!-- TITLE -->
        <div class="text-center mb-24" data-aos="fade-up">
          <h2
            class="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-tight"
          >
            Всё, что нужно <br />
            <span class="text-blue-600">для системной работы</span>
          </h2>
          <p class="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
            Без сложных CRM. Без лишних настроек. Только то, что реально помогает мастеру.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="(f, i) in features"
            :key="i"
            class="p-10 rounded-[3rem] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
          >
            <div
              class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500"
            >
              {{ f.icon }}
            </div>
            <h4 class="text-lg font-black mb-4 uppercase tracking-tight">{{ f.title }}</h4>
            <p class="text-slate-500 text-sm leading-relaxed font-medium">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- STEPS -->
    <section
      id="steps"
      class="py-32 bg-slate-900 rounded-[4rem] mx-6 text-white overflow-hidden relative"
    >
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-24" data-aos="fade-up">
          <h2 class="text-5xl font-black mb-4 tracking-tighter">Миг — и вы в сети</h2>
          <p class="text-slate-400 font-medium">Три простых шага к полной автоматизации</p>
        </div>
        <div class="grid lg:grid-cols-3 gap-16 relative">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="relative group"
            data-aos="fade-left"
            :data-aos-delay="i * 200"
          >
            <div
              class="text-[120px] font-black text-white/5 absolute -top-16 -left-4 leading-none group-hover:text-blue-600/10 transition-colors"
            >
              0{{ i + 1 }}
            </div>
            <div class="relative pt-8">
              <h4 class="text-2xl font-black mb-4 uppercase tracking-tight">{{ step.title }}</h4>
              <p class="text-slate-400 leading-relaxed font-medium">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute -right-20 bottom-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"
      ></div>
    </section>

    <!-- PRICING -->
    <section id="pricing" class="py-32">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-20" data-aos="fade-up">
          <h2 class="text-5xl font-black mb-4 tracking-tighter text-slate-900 italic">
            Честная цена
          </h2>
          <p class="text-slate-400 font-medium">Бесплатный старт. Растите вместе с нами.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(p, i) in plans"
            :key="i"
            class="p-10 rounded-[3rem] border border-slate-100 bg-white hover:border-blue-600/30 transition-all flex flex-col"
            data-aos="zoom-in"
            :data-aos-delay="i * 100"
          >
            <div class="flex justify-between items-center mb-6">
              <h4 class="text-lg font-black uppercase tracking-widest">{{ p.name }}</h4>
              <span
                v-if="p.active"
                class="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-lg uppercase tracking-widest"
                >Топ</span
              >
            </div>
            <div class="text-5xl font-black mb-10 tracking-tighter">
              {{ p.price }}<span class="text-sm font-medium text-slate-400 ml-1"> / мес</span>
            </div>
            <ul class="space-y-4 mb-12 flex-1">
              <li v-for="o in p.opts" :key="o" class="text-sm font-bold text-slate-500 flex gap-3">
                <span class="text-blue-600">✔</span> {{ o }}
              </li>
            </ul>
            <button
              :class="
                p.active
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20'
                  : 'bg-slate-50 text-slate-900'
              "
              class="w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95"
            >
              Начать сейчас
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="questions" class="py-32 bg-white">
      <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-4xl font-black text-center mb-16 tracking-tight" data-aos="fade-up">
          Вопросы и ответы
        </h2>
        <div class="space-y-4">
          <div
            v-for="(f, i) in faqs"
            :key="i"
            class="bg-slate-50 rounded-3xl overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="i * 50"
          >
            <button
              @click="toggleFaq(i)"
              class="w-full px-8 py-6 text-left flex justify-between items-center font-bold text-lg group"
            >
              {{ f.q }}
              <span
                class="text-2xl transition-transform duration-300"
                :class="{ 'rotate-45 text-blue-600': activeFaq === i }"
                >+</span
              >
            </button>
            <div
              v-show="activeFaq === i"
              class="px-8 pb-6 text-slate-500 font-medium leading-relaxed"
            >
              {{ f.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="pt-32 pb-16 bg-[#F8FAFC]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24 text-left">
          <div class="col-span-2">
            <div class="flex items-center gap-3 mb-8">
              <div
                class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black shadow-lg"
              >
                К
              </div>
              <span class="text-2xl font-black tracking-tighter uppercase"
                >Куб<span class="text-blue-600">.</span></span
              >
            </div>
            <p class="text-slate-400 font-medium text-sm leading-relaxed max-w-xs mb-8">
              Сервис для автоматизации записи клиентов в Telegram.
            </p>
          </div>
          <div v-for="c in footerCols" :key="c.title">
            <h5 class="font-black uppercase text-[10px] tracking-[0.2em] mb-10 text-slate-300">
              {{ c.title }}
            </h5>
            <ul class="space-y-4">
              <li v-for="l in c.links" :key="l">
                <a
                  href="#"
                  class="text-slate-800 hover:text-blue-600 font-bold text-sm transition-colors"
                  >{{ l }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">
            © 2026 КУБ.РФ — Сделано с любовью
          </p>
          <div class="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#" class="hover:text-slate-900 transition-colors">Политика</a>
            <a href="#" class="hover:text-slate-900 transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = useRouter()
const scrolled = ref(false)
const activeFaq = ref(null)

const toggleFaq = (i) => (activeFaq.value === i ? (activeFaq.value = null) : (activeFaq.value = i))
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

let onScroll
onMounted(() => {
  onScroll = () => (scrolled.value = window.scrollY > 20)
  window.addEventListener('scroll', onScroll)
  AOS.init({ duration: 1000, once: true, offset: 50 })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const navLinks = [
  { name: 'Возможности', href: '#features' },
  { name: 'Как это работает', href: '#steps' },
  { name: 'Цены', href: '#pricing' },
  { name: 'Вопросы', href: '#questions' },
]

const problems = [
  {
    icon: '📒',
    title: 'Записи в блокноте',
    desc: 'Клиенты пишут в личку, в WhatsApp и в Telegram. История теряется.',
  },
  {
    icon: '❌',
    title: 'Неявки без предупреждения',
    desc: 'Вы напоминаете вручную или теряете деньги из-за пропущенных визитов.',
  },
  {
    icon: '📊',
    title: 'Доход “на глаз”',
    desc: 'Вы работаете каждый день, но не видите чистую прибыль.',
  },
]

const stats = [
  { label: 'Ботов создано', value: '312' },
  { label: 'Активных мастеров', value: '187' },
]

const features = [
  {
    icon: '🤖',
    title: 'Бот для записи 24/7',
    desc: 'Клиенты сами выбирают свободное время и записываются без вашего участия.',
  },
  {
    icon: '📅',
    title: 'Календарь без накладок',
    desc: 'Все записи в одном месте. Никаких двойных броней.',
  },
  {
    icon: '🔔',
    title: 'Авто-напоминания',
    desc: 'Бот напоминает клиенту о визите автоматически.',
  },
  {
    icon: '💰',
    title: 'Учёт доходов',
    desc: 'Фиксируйте оплаты и смотрите реальную прибыль.',
  },
  {
    icon: '📢',
    title: 'Размещение в каталоге КУБа',
    desc: 'Ваш профиль появляется в общем Telegram-каталоге мастеров.',
  },
  {
    icon: '⚙️',
    title: 'Настройка без кода',
    desc: 'Подключение занимает несколько минут. Никакого программирования.',
  },
]

const steps = [
  {
    title: 'Создаёте бота',
    desc: 'Получаете токен у @BotFather и подключаете его в КУБ.',
  },
  {
    title: 'Добавляете услуги',
    desc: 'Указываете цены, длительность и рабочие часы.',
  },
  {
    title: 'Принимаете записи',
    desc: 'Отправляете ссылку клиентам и начинаете работать через бота.',
  },
]

const plans = [
  {
    name: 'Старт',
    price: '0 ₽',
    opts: ['1 Telegram-бот', 'Календарь записей', 'До 12 клиентов в месяц'],
    active: false,
  },
  {
    name: 'Бизнес',
    price: '1 490 ₽',
    opts: [
      '1 Telegram-бот',
      'Авто-напоминания',
      'Рассылки клиентам',
      'До 500 клиентов в месяц',
      'Размещение в каталоге',
    ],
    active: true,
  },
  {
    name: 'Профи',
    price: '4 990 ₽',
    opts: [
      '1 Telegram-бот',
      'Безлимит клиентов',
      'Доступ для сотрудников',
      'Аналитика дохода',
      'Приоритетная поддержка',
    ],
    active: false,
  },
]

const faqs = [
  {
    q: 'Нужно ли уметь программировать?',
    a: 'Нет. Вы подключаете токен и настраиваете услуги через простой интерфейс.',
  },
  {
    q: 'КУБ приводит клиентов?',
    a: 'Мы размещаем мастеров в общем Telegram-каталоге. Это дополнительный источник видимости, но основной поток клиентов вы приводите сами.',
  },
  {
    q: 'Подходит ли это не только для бьюти?',
    a: 'Да. КУБ подходит для любых услуг по записи: репетиторы, мастера, тренеры, консультанты.',
  },
  {
    q: 'Можно ли отменить подписку?',
    a: 'Да. Вы можете отключить платный тариф в любой момент.',
  },
]

const footerCols = [
  { title: 'Сервис', links: ['Конструктор', 'Шаблоны', 'Возможности', 'Цены'] },
  { title: 'Ресурсы', links: ['Документация', 'API', 'Блог', 'Поддержка'] },
  { title: 'Проект', links: ['О нас', 'Медиа-канал', 'Партнерам', 'Контакты'] },
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f8fafc;
}
::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #cbd5e1;
}
</style>
