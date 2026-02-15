<template>
  <div class="space-y-6">
    <h3 class="font-semibold">Рабочие дни</h3>

    <div
      v-for="day in schedule"
      :key="day.name"
      class="bg-white border border-slate-200 rounded-2xl p-5 flex justify-between items-center"
    >
      <div>
        <p class="font-medium">{{ day.name }}</p>
        <p class="text-xs text-slate-500">
          {{ day.enabled ? day.from + ' – ' + day.to : 'Выходной' }}
        </p>
      </div>

      <Switch v-model="day.enabled" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@/components/ui/switch'

const schedule = ref([
  { name: 'Понедельник', enabled: true, from: '10:00', to: '18:00' },
  { name: 'Вторник', enabled: true, from: '10:00', to: '18:00' },
  { name: 'Среда', enabled: false },
  { name: 'Четверг', enabled: true, from: '10:00', to: '18:00' },
  { name: 'Пятница', enabled: true, from: '10:00', to: '18:00' },
])
</script>
