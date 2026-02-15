<template>
  <div class="space-y-8">
    <!-- HEADER -->
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Рассылки</h2>
      <p class="text-sm text-slate-500 mt-1">Массовая отправка сообщений клиентам</p>
    </div>

    <!-- CREATE BROADCAST -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
      <div class="flex items-center gap-2">
        <Send class="w-4 h-4 text-slate-500" />
        <h3 class="font-semibold">Новая рассылка</h3>
      </div>

      <!-- Title -->
      <div class="space-y-2">
        <label class="text-sm font-medium">Название кампании</label>
        <input
          v-model="title"
          placeholder="Например: Скидка 20% на март"
          class="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition"
        />
      </div>

      <!-- Message -->
      <div class="space-y-2">
        <label class="text-sm font-medium">Текст сообщения</label>
        <textarea
          v-model="message"
          rows="4"
          placeholder="Введите текст рассылки..."
          class="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition resize-none"
        />
      </div>

      <!-- Audience -->
      <div class="space-y-2">
        <label class="text-sm font-medium">Аудитория</label>
        <select
          v-model="audience"
          class="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition"
        >
          <option value="all">Все клиенты</option>
          <option value="active">Активные (30 дней)</option>
          <option value="inactive">Неактивные</option>
        </select>
      </div>

      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-2 text-xs text-slate-500">
          <Users class="w-4 h-4" />
          Охват: {{ estimatedCount }} получателей
        </div>

        <Button class="rounded-xl gap-2">
          <Send class="w-4 h-4" />
          Отправить
        </Button>
      </div>
    </div>

    <!-- PREVIEW -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
      <div class="flex items-center gap-2">
        <Eye class="w-4 h-4 text-slate-500" />
        <h3 class="font-semibold">Предпросмотр</h3>
      </div>

      <div class="bg-slate-50 rounded-xl p-4 text-sm whitespace-pre-line">
        {{ message || 'Здесь будет отображаться текст сообщения' }}
      </div>
    </div>

    <!-- HISTORY -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
      <div class="flex items-center gap-2">
        <History class="w-4 h-4 text-slate-500" />
        <h3 class="font-semibold">История рассылок</h3>
      </div>

      <div
        v-for="item in history"
        :key="item.id"
        class="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition"
      >
        <div>
          <p class="text-sm font-medium">{{ item.title }}</p>
          <p class="text-xs text-slate-500">{{ item.date }} · {{ item.recipients }} получателей</p>
        </div>

        <span
          :class="statusClass(item.status)"
          class="px-3 py-1 rounded-full text-xs font-semibold"
        >
          {{ item.status }}
        </span>
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

const estimatedCount = computed(() => {
  if (audience.value === 'all') return 1240
  if (audience.value === 'active') return 640
  if (audience.value === 'inactive') return 600
})

const history = ref([
  {
    id: 1,
    title: 'Новогодняя акция',
    date: '01.01.2026',
    recipients: 1100,
    status: 'Отправлено',
  },
  {
    id: 2,
    title: 'Скидка 15%',
    date: '12.02.2026',
    recipients: 850,
    status: 'Запланировано',
  },
])

const statusClass = (status) => {
  if (status === 'Отправлено') return 'bg-green-100 text-green-700'
  if (status === 'Запланировано') return 'bg-blue-100 text-blue-700'
  return 'bg-slate-100 text-slate-600'
}
</script>
