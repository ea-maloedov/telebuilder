<template>
  <div class="h-full flex flex-col bg-slate-50">
    <!-- HEADER -->
    <div class="bg-white border-b border-slate-200 px-8 py-5">
      <div class="flex items-center justify-between">
        <!-- NAVIGATION -->
        <div class="flex items-center gap-4">
          <button class="nav-btn" @click="prev">‹</button>

          <div>
            <h2 class="text-xl font-semibold leading-tight">
              {{ periodLabel }}
            </h2>
            <p class="text-sm text-slate-500">
              {{ selectedDayLabel }}
            </p>
          </div>

          <button class="nav-btn" @click="next">›</button>

          <button class="today-btn" @click="goToday">Сегодня</button>
        </div>

        <!-- VIEW SWITCH -->
        <div class="flex items-center gap-2 bg-slate-100 p-1 rounded-2xl">
          <button :class="viewBtn('timeGridDay')" @click="changeView('timeGridDay')">День</button>
          <button :class="viewBtn('timeGridWeek')" @click="changeView('timeGridWeek')">
            Неделя
          </button>
          <button :class="viewBtn('dayGridMonth')" @click="changeView('dayGridMonth')">
            Месяц
          </button>
        </div>

        <!-- METRICS -->
        <div class="flex items-center gap-8 text-sm">
          <div>
            <div class="metric-value">{{ dayRevenue }} ₽</div>
            <div class="metric-label">Выручка</div>
          </div>

          <div>
            <div class="metric-value">{{ dayCount }}</div>
            <div class="metric-label">Записей</div>
          </div>

          <Button class="rounded-xl"> + Новая запись </Button>
        </div>
      </div>
    </div>

    <!-- CALENDAR -->
    <div class="flex-1 px-8 py-6">
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm h-full p-4">
        <FullCalendar ref="calendarRef" :options="calendarOptions" />
      </div>
    </div>

    <!-- DRAWER -->
    <Transition name="slide-up">
      <div
        v-if="selectedEvent"
        class="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-6 shadow-2xl"
      >
        <div class="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold">
              {{ selectedEvent.extendedProps.client }}
            </h3>
            <p class="text-sm text-slate-500 mt-1">
              {{ selectedEvent.extendedProps.service }}
            </p>
            <p class="text-sm mt-2">
              {{ formatTime(selectedEvent.start) }} —
              {{ formatTime(selectedEvent.end) }}
            </p>
          </div>

          <div class="flex gap-3">
            <Button variant="outline" class="rounded-xl"> Редактировать </Button>
            <Button variant="destructive" class="rounded-xl"> Отменить </Button>
            <Button variant="ghost" class="rounded-xl" @click="selectedEvent = null">
              Закрыть
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ruLocale from '@fullcalendar/core/locales/ru'
import { Button } from '@/components/ui/button'

/* ---------------- STATE ---------------- */

const calendarRef = ref(null)
const selectedEvent = ref(null)
const selectedDate = ref(new Date())
const currentView = ref('timeGridWeek')
const currentRange = ref(null)

/* ---------------- EVENTS ---------------- */

const events = ref([
  // ПОНЕДЕЛЬНИК
  {
    id: '1',
    start: '2026-03-16T09:00:00',
    end: '2026-03-16T10:00:00',
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
    extendedProps: {
      client: 'Анна Петрова',
      service: 'Стрижка',
      price: 1500,
    },
  },
  {
    id: '2',
    start: '2026-03-16T11:00:00',
    end: '2026-03-16T12:30:00',
    backgroundColor: '#ec4899',
    borderColor: '#ec4899',
    extendedProps: {
      client: 'Мария Иванова',
      service: 'Окрашивание',
      price: 3500,
    },
  },
  {
    id: '3',
    start: '2026-03-16T14:00:00',
    end: '2026-03-16T15:00:00',
    backgroundColor: '#10b981',
    borderColor: '#10b981',
    extendedProps: {
      client: 'Елена Смирнова',
      service: 'Маникюр',
      price: 2000,
    },
  },
  {
    id: '4',
    start: '2026-03-16T16:00:00',
    end: '2026-03-16T17:00:00',
    backgroundColor: '#f59e0b',
    borderColor: '#f59e0b',
    extendedProps: {
      client: 'Ольга Кузнецова',
      service: 'Укладка',
      price: 1800,
    },
  },

  // ВТОРНИК
  {
    id: '5',
    start: '2026-03-17T10:00:00',
    end: '2026-03-17T11:00:00',
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
    extendedProps: {
      client: 'Ирина Васильева',
      service: 'Стрижка',
      price: 1500,
    },
  },
  {
    id: '6',
    start: '2026-03-17T12:00:00',
    end: '2026-03-17T13:30:00',
    backgroundColor: '#ec4899',
    borderColor: '#ec4899',
    extendedProps: {
      client: 'Наталья Попова',
      service: 'Окрашивание',
      price: 3200,
    },
  },
  {
    id: '7',
    start: '2026-03-17T15:00:00',
    end: '2026-03-17T16:30:00',
    backgroundColor: '#10b981',
    borderColor: '#10b981',
    extendedProps: {
      client: 'Татьяна Морозова',
      service: 'Педикюр',
      price: 2300,
    },
  },

  // СРЕДА
  {
    id: '8',
    start: '2026-03-18T09:30:00',
    end: '2026-03-18T10:30:00',
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
    extendedProps: {
      client: 'Юлия Соколова',
      service: 'Стрижка',
      price: 1500,
    },
  },
  {
    id: '9',
    start: '2026-03-18T11:00:00',
    end: '2026-03-18T12:00:00',
    backgroundColor: '#f43f5e',
    borderColor: '#f43f5e',
    extendedProps: {
      client: 'Светлана Волкова',
      service: 'Окрашивание',
      price: 3800,
    },
  },
  {
    id: '10',
    start: '2026-03-18T13:00:00',
    end: '2026-03-18T14:00:00',
    backgroundColor: '#8b5cf6',
    borderColor: '#8b5cf6',
    extendedProps: {
      client: 'Алина Лебедева',
      service: 'Маникюр',
      price: 2100,
    },
  },
  {
    id: '11',
    start: '2026-03-18T16:00:00',
    end: '2026-03-18T17:00:00',
    backgroundColor: '#0ea5e9',
    borderColor: '#0ea5e9',
    extendedProps: {
      client: 'Дарья Новикова',
      service: 'Брови',
      price: 1200,
    },
  },

  // ПЯТНИЦА (перегруженный день)
  {
    id: '12',
    start: '2026-03-20T09:00:00',
    end: '2026-03-20T10:00:00',
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
    extendedProps: {
      client: 'Марина Крылова',
      service: 'Стрижка',
      price: 1500,
    },
  },
  {
    id: '13',
    start: '2026-03-20T10:00:00',
    end: '2026-03-20T11:00:00',
    backgroundColor: '#ec4899',
    borderColor: '#ec4899',
    extendedProps: {
      client: 'Виктория Орлова',
      service: 'Окрашивание',
      price: 3400,
    },
  },
  {
    id: '14',
    start: '2026-03-20T11:30:00',
    end: '2026-03-20T12:30:00',
    backgroundColor: '#10b981',
    borderColor: '#10b981',
    extendedProps: {
      client: 'Ксения Романова',
      service: 'Маникюр',
      price: 2000,
    },
  },
  {
    id: '15',
    start: '2026-03-20T13:00:00',
    end: '2026-03-20T14:00:00',
    backgroundColor: '#f59e0b',
    borderColor: '#f59e0b',
    extendedProps: {
      client: 'Екатерина Белова',
      service: 'Укладка',
      price: 1700,
    },
  },
  {
    id: '16',
    start: '2026-03-20T15:00:00',
    end: '2026-03-20T16:30:00',
    backgroundColor: '#8b5cf6',
    borderColor: '#8b5cf6',
    extendedProps: {
      client: 'Полина Фёдорова',
      service: 'Окрашивание',
      price: 3600,
    },
  },
])

/* ---------------- CALENDAR ---------------- */

const calendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: currentView.value,
  locale: 'ru',
  locales: [ruLocale],
  headerToolbar: false,
  height: '100%',
  editable: true,
  selectable: true,
  nowIndicator: true,
  allDaySlot: false,
  slotMinTime: '08:00:00',
  slotMaxTime: '22:00:00',
  slotDuration: '00:30:00',
  dayMaxEvents: 3,
  fixedWeekCount: false,
  showNonCurrentDates: false,
  events: () => events.value,

  datesSet(info) {
    currentRange.value = info
  },

  dateClick(info) {
    selectedDate.value = info.date

    // если клик в month — перейти в день
    if (currentView.value === 'dayGridMonth') {
      changeView('timeGridDay')
      setTimeout(() => {
        calendarRef.value.getApi().gotoDate(info.date)
      }, 50)
    }
  },

  eventClick(info) {
    selectedEvent.value = info.event
    selectedDate.value = info.event.start
  },

  eventContent(arg) {
    if (currentView.value === 'dayGridMonth') {
      return {
        html: `<div class="text-xs truncate font-medium">
          ${arg.event.extendedProps.client}
        </div>`,
      }
    }

    return {
      html: `
        <div class="font-medium text-sm">
          ${arg.event.extendedProps.client}
        </div>
        <div class="text-xs opacity-80">
          ${arg.event.extendedProps.service}
        </div>
      `,
    }
  },
}

/* ---------------- NAVIGATION ---------------- */

const changeView = (view) => {
  currentView.value = view
  calendarRef.value.getApi().changeView(view)
}

const prev = () => calendarRef.value.getApi().prev()
const next = () => calendarRef.value.getApi().next()
const goToday = () => calendarRef.value.getApi().today()

/* ---------------- COMPUTED ---------------- */

const periodLabel = computed(() => {
  if (!currentRange.value) return ''

  const start = currentRange.value.start
  const end = new Date(currentRange.value.end - 1)

  return `${start.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
  — ${end.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}`
})

const selectedDayLabel = computed(() =>
  selectedDate.value.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }),
)

const dayRevenue = computed(() => {
  const day = selectedDate.value.toDateString()
  return events.value
    .filter((e) => new Date(e.start).toDateString() === day)
    .reduce((sum, e) => sum + e.extendedProps.price, 0)
})

const dayCount = computed(
  () =>
    events.value.filter(
      (e) => new Date(e.start).toDateString() === selectedDate.value.toDateString(),
    ).length,
)

const viewBtn = (view) => [
  'px-4 py-2 rounded-xl text-sm transition',
  currentView.value === view ? 'bg-slate-900 text-white' : 'hover:bg-slate-200',
]

const formatTime = (date) =>
  new Date(date).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  })
</script>

<style>
.fc {
  --fc-border-color: #e2e8f0;
  --fc-today-bg-color: #f8fafc;
}

.fc .fc-timegrid-slot {
  height: 4rem;
}

.fc .fc-event {
  border-radius: 14px;
  padding: 8px;
  border: none;
  font-size: 13px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  background-color: var(--fc-event-bg-color) !important;
}

.fc .fc-daygrid-day:hover {
  background: #f8fafc;
}

.fc .fc-timegrid-now-indicator-line {
  border-width: 2px;
  border-color: #ef4444;
}

.nav-btn {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #f1f5f9;
  font-size: 20px;
}

.today-btn {
  padding: 6px 14px;
  border-radius: 12px;
  background: #f1f5f9;
  font-size: 14px;
}

.metric-value {
  font-weight: 600;
  font-size: 16px;
}

.metric-label {
  font-size: 12px;
  color: #64748b;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
