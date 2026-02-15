<template>
  <div class="space-y-8">
    <!-- HEADER -->
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Бизнес</h2>
      <p class="text-sm text-slate-500 mt-1">Настройка услуг, графика и правил записи</p>
    </div>

    <!-- TABS -->
    <div class="flex gap-2 bg-slate-100 p-1 rounded-2xl w-fit">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        :class="[
          'px-4 py-2 text-sm rounded-xl font-medium transition',
          activeTab === tab.key
            ? 'bg-white shadow text-slate-900'
            : 'text-slate-500 hover:text-slate-900',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- TAB CONTENT -->
    <div v-if="activeTab === 'services'">
      <ServicesTab />
    </div>

    <div v-if="activeTab === 'schedule'">
      <ScheduleTab />
    </div>


    <div v-if="activeTab === 'rules'">
      <RulesTab />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ServicesTab from './ServicesTab.vue'
import ScheduleTab from './ScheduleTab.vue'
import RulesTab from './RulesTab.vue'

const activeTab = ref('services')

const tabs = [
  { key: 'services', label: 'Услуги' },
  { key: 'schedule', label: 'Расписание' },
  { key: 'rules', label: 'Правила записи' },
]
</script>
