<template>
  <div class="space-y-8">
    <!-- HEADER -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Записи</h2>
        <p class="text-sm text-slate-500 mt-1">Календарь записей клиентов</p>
      </div>

      <div class="flex gap-3">
        <div class="flex bg-slate-100 p-1 rounded-xl">
          <button @click="changeView('timeGridWeek')" :class="viewButtonClass('timeGridWeek')">
            Неделя
          </button>

          <button @click="changeView('dayGridMonth')" :class="viewButtonClass('dayGridMonth')">
            Месяц
          </button>
        </div>

        <Button class="gap-2 rounded-xl">
          <Plus class="w-4 h-4" />
          Новая запись
        </Button>
      </div>
    </div>

    <!-- CALENDAR -->
    <div class="bg-white rounded-2xl border border-slate-200 p-4">
      <FullCalendar ref="calendarRef" :options="calendarOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Plus } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const calendarRef = ref(null)
const currentView = ref('timeGridWeek')

const changeView = (view) => {
  currentView.value = view
  const calendarApi = calendarRef.value.getApi()
  calendarApi.changeView(view)
}

const viewButtonClass = (view) => {
  return [
    'px-4 py-2 text-sm rounded-lg font-medium transition',
    currentView.value === view
      ? 'bg-white shadow text-slate-900'
      : 'text-slate-500 hover:text-slate-900',
  ]
}

const calendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  height: 'auto',
  editable: true,
  selectable: true,
  nowIndicator: true,
  slotMinTime: '08:00:00',
  slotMaxTime: '22:00:00',
  locale: 'ru',
  headerToolbar: false,
  allDaySlot: false,

  events: [
    {
      id: '1',
      title: 'Стрижка — Анна',
      start: '2026-03-16T14:00:00',
      end: '2026-03-16T15:00:00',
    },
    {
      id: '2',
      title: 'Окрашивание — Мария',
      start: '2026-03-17T12:30:00',
      end: '2026-03-17T14:00:00',
    },
  ],

  eventDrop(info) {
    console.log('Перенесено:', info.event.start)
  },

  eventResize(info) {
    console.log('Изменена длительность:', info.event.end)
  },

  dateClick(info) {
    console.log('Создать запись на:', info.dateStr)
  },
}
</script>

<style>
.fc {
  --fc-border-color: #e2e8f0;
  --fc-today-bg-color: #f8fafc;
  --fc-event-bg-color: #0f172a;
  --fc-event-border-color: #0f172a;
  --fc-event-text-color: white;
}

.fc .fc-timegrid-slot {
  height: 3rem;
}

.fc .fc-timegrid-now-indicator-line {
  border-color: #ef4444;
}
</style>
