<template>
  <div class="space-y-10">
    <!-- HEADER -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Рассылки</h2>
        <p class="text-sm text-slate-500 mt-1">Управление маркетинговыми кампаниями</p>
      </div>

      <Button class="rounded-xl gap-2">
        <Send class="w-4 h-4" />
        Запустить кампанию
      </Button>
    </div>

    <!-- CREATE SECTION -->
    <div class="grid lg:grid-cols-3 gap-6">
      <!-- LEFT -->
      <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
        <h3 class="font-semibold">Новая кампания</h3>

        <!-- TITLE -->
        <div class="space-y-2">
          <label class="text-sm font-medium">Название</label>
          <input v-model="title" placeholder="Весенняя акция" class="input" />
        </div>

        <!-- MESSAGE -->
        <div class="space-y-2">
          <label class="text-sm font-medium">Сообщение</label>
          <textarea
            v-model="message"
            rows="5"
            placeholder="Введите текст сообщения..."
            class="input resize-none"
          />
        </div>

        <!-- AUDIENCE -->
        <div class="space-y-2">
          <label class="text-sm font-medium">Сегмент</label>
          <select v-model="audience" class="input">
            <option value="all">Все клиенты</option>
            <option value="active">Активные (30 дней)</option>
            <option value="inactive">Неактивные</option>
          </select>
        </div>

        <!-- SCHEDULE -->
        <div class="space-y-3">
          <label class="text-sm font-medium">Тип отправки</label>

          <div class="flex gap-2">
            <button @click="scheduleType = 'now'" :class="scheduleBtn('now')">
              Отправить сейчас
            </button>

            <button @click="scheduleType = 'later'" :class="scheduleBtn('later')">
              Запланировать
            </button>
          </div>

          <input
            v-if="scheduleType === 'later'"
            type="datetime-local"
            v-model="scheduleDate"
            class="input"
          />
        </div>

        <!-- FOOTER -->
        <div class="flex items-center justify-between pt-4 border-t border-slate-100">
          <div class="text-xs text-slate-500 flex items-center gap-2">
            <Users class="w-4 h-4" />
            Охват: {{ estimatedCount }} клиентов
          </div>

          <Button class="rounded-xl gap-2">
            <Send class="w-4 h-4" />
            Подтвердить
          </Button>
        </div>
      </div>

      <!-- RIGHT PREVIEW -->
      <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h3 class="font-semibold flex items-center gap-2">
          <Eye class="w-4 h-4 text-slate-500" />
          Предпросмотр
        </h3>

        <div class="bg-slate-50 rounded-xl p-4 text-sm whitespace-pre-line min-h-[150px]">
          {{ message || 'Здесь будет отображаться сообщение' }}
        </div>
      </div>
    </div>

    <!-- HISTORY -->
    <div class="space-y-6">
      <div class="flex items-center gap-2">
        <History class="w-4 h-4 text-slate-500" />
        <h3 class="font-semibold">История кампаний</h3>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="item in history"
          :key="item.id"
          class="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 hover:shadow-sm transition"
        >
          <div class="flex items-center justify-between">
            <p class="font-medium text-sm">{{ item.title }}</p>
            <span :class="statusClass(item.status)" class="badge">
              {{ item.status }}
            </span>
          </div>

          <p class="text-xs text-slate-500">{{ item.date }} · {{ item.recipients }} получателей</p>

          <div v-if="item.status === 'Отправлено'" class="space-y-1">
            <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div class="h-full bg-green-500" :style="{ width: item.progress + '%' }"></div>
            </div>
            <p class="text-xs text-slate-400">Доставлено {{ item.progress }}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Send, Users, Eye, History } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const title = ref('')
const message = ref('')
const audience = ref('all')
const scheduleType = ref('now')
const scheduleDate = ref('')

const estimatedCount = computed(() => {
  if (audience.value === 'all') return 1240
  if (audience.value === 'active') return 640
  return 600
})

const history = ref([
  {
    id: 1,
    title: 'Новогодняя акция',
    date: '01.01.2026',
    recipients: 1100,
    status: 'Отправлено',
    progress: 100,
  },
  {
    id: 2,
    title: 'Скидка 15%',
    date: '12.02.2026',
    recipients: 850,
    status: 'Запланировано',
    progress: 0,
  },
])

const statusClass = (status) => {
  if (status === 'Отправлено') return 'bg-green-100 text-green-700 badge'
  if (status === 'Запланировано') return 'bg-blue-100 text-blue-700 badge'
  return 'bg-slate-100 text-slate-600 badge'
}

const scheduleBtn = (type) => {
  return [
    'px-4 py-2 text-sm rounded-xl transition font-medium',
    scheduleType.value === type
      ? 'bg-slate-900 text-white'
      : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
  ]
}
</script>

<style scoped>

</style>
