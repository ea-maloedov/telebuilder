<template>
  <div class="space-y-8">
    <!-- HEADER -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Доход и финансы</h2>
        <p class="text-sm text-slate-500 mt-1">Аналитика выручки и история операций</p>
      </div>

      <select
        v-model="period"
        class="px-4 py-2 text-sm bg-white border border-slate-200 rounded-xl outline-none focus:border-slate-400 transition"
      >
        <option value="7">7 дней</option>
        <option value="30">30 дней</option>
        <option value="90">90 дней</option>
      </select>
    </div>

    <!-- KPI CARDS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <div class="kpi-card">
        <p class="kpi-label">Общая выручка</p>
        <p class="kpi-value">{{ totalRevenue }} ₽</p>
        <p class="kpi-sub text-green-600">+12% к прошлому периоду</p>
      </div>

      <div class="kpi-card">
        <p class="kpi-label">Средний чек</p>
        <p class="kpi-value">{{ avgCheck }} ₽</p>
        <p class="kpi-sub text-slate-500">На основе {{ transactions.length }} операций</p>
      </div>

      <div class="kpi-card">
        <p class="kpi-label">Количество оплат</p>
        <p class="kpi-value">{{ transactions.length }}</p>
        <p class="kpi-sub text-slate-500">За выбранный период</p>
      </div>

      <div class="kpi-card">
        <p class="kpi-label">Отмены</p>
        <p class="kpi-value">{{ cancelledCount }}</p>
        <p class="kpi-sub text-red-600">Потеряно {{ cancelledAmount }} ₽</p>
      </div>
    </div>

    <!-- SIMPLE CHART (bar imitation) -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6">
      <h3 class="text-sm font-semibold mb-6 text-slate-700">Динамика выручки</h3>

      <div class="flex items-end gap-4 h-40">
        <div
          v-for="(value, index) in chartData"
          :key="index"
          class="flex-1 flex flex-col items-center gap-2 group"
        >
          <div
            class="w-full bg-slate-900/80 rounded-xl transition-all duration-300 group-hover:bg-slate-900"
            :style="{ height: value + '%' }"
          ></div>
          <span class="text-xs text-slate-400">{{ index + 1 }}</span>
        </div>
      </div>
    </div>

    <!-- TRANSACTIONS TABLE -->
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
          <tr>
            <th class="text-left px-6 py-4">Клиент</th>
            <th class="text-left px-6 py-4 hidden md:table-cell">Дата</th>
            <th class="text-left px-6 py-4">Сумма</th>
            <th class="text-left px-6 py-4">Статус</th>
            <th class="text-right px-6 py-4"></th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="tx in transactions"
            :key="tx.id"
            class="border-t border-slate-100 hover:bg-slate-50 transition-colors"
          >
            <td class="px-6 py-4 font-medium">
              {{ tx.client }}
            </td>

            <td class="px-6 py-4 text-slate-600 hidden md:table-cell">
              {{ tx.date }}
            </td>

            <td class="px-6 py-4 font-semibold">{{ tx.amount }} ₽</td>

            <td class="px-6 py-4">
              <span
                :class="statusClasses(tx.status)"
                class="px-3 py-1 rounded-full text-xs font-semibold"
              >
                {{ statusLabel(tx.status) }}
              </span>
            </td>

            <td class="px-6 py-4 text-right">
              <button class="p-2 rounded-lg hover:bg-slate-100 transition">
                <MoreHorizontal class="w-4 h-4 text-slate-600" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { MoreHorizontal } from 'lucide-vue-next'

const period = ref('30')

const transactions = ref([
  { id: 1, client: 'Анна Петрова', date: '12 марта', amount: 4500, status: 'paid' },
  { id: 2, client: 'Иван Сидоров', date: '14 марта', amount: 3200, status: 'paid' },
  { id: 3, client: 'Мария Иванова', date: '15 марта', amount: 5000, status: 'cancelled' },
])

const totalRevenue = computed(() =>
  transactions.value.filter((t) => t.status === 'paid').reduce((sum, t) => sum + t.amount, 0),
)

const avgCheck = computed(() =>
  totalRevenue.value ? Math.round(totalRevenue.value / transactions.value.length) : 0,
)

const cancelledCount = computed(
  () => transactions.value.filter((t) => t.status === 'cancelled').length,
)

const cancelledAmount = computed(() =>
  transactions.value.filter((t) => t.status === 'cancelled').reduce((sum, t) => sum + t.amount, 0),
)

const chartData = [40, 60, 35, 80, 55, 70, 50]

const statusClasses = (status) => {
  return {
    paid: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
  }[status]
}

const statusLabel = (status) => {
  return {
    paid: 'Оплачено',
    cancelled: 'Отменено',
  }[status]
}
</script>
